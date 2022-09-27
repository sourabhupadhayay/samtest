import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
} from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/providers/common.service";

@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit, DoCheck {
  @Input() eventId: string;
  @Input() connectedFans: any[] = [];
  fanImagesList: any[] = [];
  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    console.log(this.connectedFans);
  }

  ngDoCheck() {
    let fansList = [];

    if (this.connectedFans.length <= 3) {
      this.connectedFans.forEach((data) => {
        fansList.push(data);
      });
    } else {
      for (let index = 0; index < 4; index++) {
        fansList.push(this.connectedFans[index]);
      }
    }

    this.fanImagesList = fansList;
  }

  getInitials(name: string): String {
    return this.commonService.getInitials(name);
  }

  // compare_bid(a, b) {
  //   if (a.bid > b.bid) {
  //     return -1;
  //   }
  //   if (a.bid < b.bid) {
  //     return 1;
  //   }
  //   return 0;
  // }
}
