import { Component, OnInit } from "@angular/core";
// import { Socket } from "ngx-socket-io";
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
  connectedFans: any[] = [];
  socket: any;
  constructor(private coreService: CoreService) {}
  ngOnInit() {
    this.getUserDataAndRole();
    // this.getConnectedFans();
    this.testSocket();
  }

  testSocket() {

      // var ws = new SockJS("https://dev-apis.bubbleapp.com/core/greeting");
      // console.log(ws);

      // let socket = new WebSocket("ws://localhost:6104/greeting");
      this.socket = Stomp.over(()=> new SockJS(configuration.BASE_URL+"core/greeting"));
      console.log(this.socket);
      this.socket.reconnect_delay = 5000;
      //this.socket.deactivate();
      //this.socket.activate();
      let that = this;
      this.socket.connect({}, function (frame)
      {
        that.socket.subscribe("/errors", function (message) {
          alert("Error " + message.body);
        });
        that.send();
        that.socket.subscribe("/topic/testDeal", function (message) {
          console.log("foram",message.body)
      });
        }, function (error) {
        console.log("STOMP error " + error);
      });
  }

    send(){
      let data = JSON.stringify({
        'eventId': "62f636b6b9481025b65ebe31"
      })
      console.log(data);

      console.log("cds",this.socket)
      this.socket.send("/app/syncTestDeal", {}, data);
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
