import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { CoreService } from "src/app/providers/core.service";

@Component({
  selector: "fan-waitlist",
  templateUrl: "./fan-waitlist.page.html",
  styleUrls: ["./fan-waitlist.page.scss"],
})
export class FanWaitlistPage implements OnInit {
  @Input() connectedFans: any[] | null = null;
  userData;
  currentPosition: number;
  constructor(private coreService: CoreService) {}

  ngOnInit() {
    this.getUserData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.connectedFans.sort(this.compare_bid);
    this.currentPosition = this.getCurrentPosition();
  }

  async getUserData() {
    this.userData = await this.coreService.getUserDataFromStorage();
  }

  getCurrentPosition(): number {
    for (let i = 0; i < this.connectedFans.length; i++) {
      if (this.userData.id == this.connectedFans[i].id) {
        return i;
      }
    }
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
