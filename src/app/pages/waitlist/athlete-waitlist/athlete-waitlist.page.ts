import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/providers/common.service";

@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit {
  @Input() eventId: string;
  @Input() connectedFans: any[] = [];

  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    console.log(this.connectedFans);
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
