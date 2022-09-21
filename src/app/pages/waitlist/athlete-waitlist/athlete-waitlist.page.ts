import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit {
  @Input() eventId: string;
  @Input() connectedFans: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

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
