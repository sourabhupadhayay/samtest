import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "../../../configuration";

@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit {
  @Input() eventId: string;
  connectedFans: any[] = [];
  socket: any;

  constructor(private router: Router) {}

  ngOnInit() {
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
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }

  send() {
    let data = JSON.stringify({
      eventId: this.eventId,
    });

    this.socket.send("/app/syncTestDeal", {}, data);
  }

  compare_bid(a, b) {
    if (a.bid > b.bid) {
      return -1;
    }
    if (a.bid < b.bid) {
      return 1;
    }
    return 0;
  }
}
