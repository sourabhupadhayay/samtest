import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params, Router } from "@angular/router";
import { NavParams } from "@ionic/angular";

import { CoreService, userRole } from "src/app/providers/core.service";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "../../configuration";
import { ConstantService } from "src/app/providers/constant.service";
@Component({
  selector: "app-waitlist",
  templateUrl: "./waitlist.page.html",
  styleUrls: ["./waitlist.page.scss"],
})

export class WaitlistPage implements OnInit {
  userRole: userRole;
  userData: any;
  eventId: string;
  connectedFans: any[] = [];
  socket: any;
  pendingCallFans: any[] = [];
  calledFans: any[] = [];
  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute,
    private constantService: ConstantService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getUserDataAndRole();
    this.getEventIdFromParam();
    this.getConnectedFans();
  }
  ionDidViewEnter(){
    this.getConnectedFans();
  }
  getConnectedFans() {
    this.socket = Stomp.over(
      () => new SockJS(configuration.BASE_URL + "core/greeting")
    );

    this.socket.reconnect_delay = 5000;

    this.socket.connect(
      {},
      (frame) => {
        this.socket.subscribe("/errors", (message) => {
          alert("Error " + message.body);
        });
        this.send();

        this.socket.subscribe("/topic/bidList", (message) => {
          let data = JSON.parse(message.body);
          let contentData = JSON.parse(data.content);
          if (contentData.eventId !== this.eventId) {
            return;
          }
          this.pendingCallFans.forEach((e, index) => {
            if (
              contentData.bidState != e.bidState &&
              contentData.userId == e.userId
            ) {
              this.pendingCallFans.splice(index, 1);
             
              this.connectedFans.push(contentData);
              this.connectedFans=this.connectedFans.filter((e)=> {
                e.bidState!="COMPLETED"
                return} )
           
            }
          });
          if (contentData.bidState == "PENDING") {
            this.filterAndSortPendingFans(contentData);
          } else if (
            contentData.bidState !== "PENDING" &&
            contentData.bidState !== "COMPLETED"
         
             
          ) {
            this.filterAndSortCompletedFans(contentData);
          } 
          if (contentData.bidState !== "COMPLETED") {
            
            this.connectedFans.push(contentData);

            this.connectedFans = this.getUniqueListBy(
              this.connectedFans,
              "userId"
            );
          }

          // that.connectedFans.sort((a, b) => {
          //   return b.totalAmount - a.totalAmount;
          // });
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }

  getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  filterAndSortPendingFans(fanData: any) {
    this.pendingCallFans.push(fanData);
    console.log("pending", this.pendingCallFans);
    this.pendingCallFans = this.getUniqueListBy(this.pendingCallFans, "userId");
    this.pendingCallFans.sort((a, b) => {
      return b.totalAmount - a.totalAmount;
    });
  }
  filterAndSortCompletedFans(fanData: any) {
    this.calledFans.push(fanData);

    this.calledFans = this.getUniqueListBy(this.calledFans, "userId");
  }

  send() {
    let data = JSON.stringify({
      eventId: this.eventId,
    });

    this.socket.send("/app/syncBidList", {}, data);
  }

  getEventIdFromParam() {
    this.route.params.subscribe((param) => {
      this.eventId = param.id;
    });
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();
  }
}
