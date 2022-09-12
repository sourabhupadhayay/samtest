import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { NavParams } from "@ionic/angular";

import { CoreService, userRole } from "src/app/providers/core.service";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "../../configuration";
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
  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getUserDataAndRole();
    this.getEventIdFromParam();
    this.getConnectedFans();
  }

  getConnectedFans() {
    this.socket = Stomp.over(
      () => new SockJS(configuration.BASE_URL + "core/greeting")
    );

    this.socket.reconnect_delay = 5000;

    let that = this;

    this.socket.connect(
      {},
      function (frame) {
        that.socket.subscribe("/errors", function (message) {
          alert("Error " + message.body);
        });
        that.send();
        that.socket.subscribe("/topic/testDeal", function (message) {
          let data = JSON.parse(message.body);
          let contentData = JSON.parse(data.content);
          that.connectedFans.push(contentData);

          that.connectedFans = that.getUniqueListBy(that.connectedFans, "id");
          console.log(that.connectedFans);
          // that.connectedFans.push(contentData);
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

  send() {
    let data = JSON.stringify({
      eventId: this.eventId,
    });

    this.socket.send("/app/syncTestDeal", {}, data);
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
