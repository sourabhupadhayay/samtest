import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
// import { Socket } from "ngx-socket-io";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "fan-waitlist",
  templateUrl: "./fan-waitlist.page.html",
  styleUrls: ["./fan-waitlist.page.scss"],
})
export class FanWaitlistPage implements OnInit {
  @Input() eventId: null | string = null;
  userData;
  currentPosition: number;
  maxBid: number;
  nameInitials: string;
  userBidDetails: null | any = null;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private router: Router,
    private constantService: ConstantService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getUserData();
    this.getMaximumBidForEvent();
    //  this.athleteCallingSubscription();
  }

  // athleteCallingSubscription() {
  //   this.socket.fromEvent("athlete-call").subscribe((fanId) => {
  //     if (fanId == this.userData.id) {
  //       this.router.navigate(["/waitlist/incoming-call"]);
  //     }
  //   });
  // }

  getMaximumBidForEvent() {
    let request: Request = {
      path: "core/event/bid/max/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.maxBid = response.data.maxBid.totalAmount;
        this.userBidDetails = response.data.currentBid;
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  async getUserData() {
    this.userData = await this.coreService.getUserDataFromStorage();
    this.nameInitials = this.commonService.getInitials(this.userData.fullName);
    console.log(this.userData);
  }

  updateBid() {
    this.router.navigate(["bid-payment/" + this.eventId]);
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
