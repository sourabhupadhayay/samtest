import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit {
  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.emit("fan-connect", "kalph");
    this.getConnectedAthletes();
  }

  getConnectedAthletes() {
    this.socket.fromEvent("fans").subscribe((response) => {
      console.log(response);
    });
  }
}
