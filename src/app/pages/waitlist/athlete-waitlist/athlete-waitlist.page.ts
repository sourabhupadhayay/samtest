import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit, OnChanges {
  @Input() connectedFans: any[] | null = null;
  constructor(private socket: Socket) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.connectedFans.sort(this.compare_bid);
  }

  callFan(index: number) {
    this.socket.emit("fan-call", this.connectedFans[index].id);
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
