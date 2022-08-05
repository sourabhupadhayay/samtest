import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-fan-waitlist",
  templateUrl: "./fan-waitlist.page.html",
  styleUrls: ["./fan-waitlist.page.scss"],
})
export class FanWaitlistPage implements OnInit {
  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.emit("fan-connect", "kalph");
  }
}
