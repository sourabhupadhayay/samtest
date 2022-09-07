import { Component, OnInit } from "@angular/core";
// import { Socket } from "ngx-socket-io";
import { CoreService, userRole } from "src/app/providers/core.service";
import { Stomp } from "@stomp/stompjs";

import * as SockJS from "sockjs-client";

@Component({
  selector: "app-waitlist",
  templateUrl: "./waitlist.page.html",
  styleUrls: ["./waitlist.page.scss"],
})
export class WaitlistPage implements OnInit {
  userRole: userRole;
  userData: any;
  connectedFans: any[] = [];
  socket: any;
  constructor(private coreService: CoreService) {}
  ngOnInit() {
    this.getUserDataAndRole();
    // this.getConnectedFans();
    this.testSocket();
  }

  testSocket() {
    this.socket = Stomp.over(
      () => new SockJS("wss://dev-apis.bubbleapp.com/core/greeting")
    );
    this.socket.reconnect_delay = 5000;
    // this.socket.deactivate();
    // this.socket.activate();
    let that = this;

    this.socket.connect(
      {},
      function (frame) {
        console.log("fff");
        let data = JSON.stringify({
          eventId: "62f636b6b9481025b65ebe31",
        });
        if (this.socket) this.socket.send("/topic/testDeal", {}, data);
        that.socket.subscribe("/errors", function (message) {
          alert("Error " + message.body);
        });
        that.socket.subscribe("/topic/testDeal", function (message) {
          console.log(message);
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();

    // this.socket.emit("connect-event", this.userData);
    // this.socket.emit("connect-event", this.userData);
  }

  // getConnectedFans() {
  //   this.socket.fromEvent("fans").subscribe((response) => {
  //     this.connectedFans = response as [];
  //   });
  // }
}
