import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
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
export class FanWaitlistPage implements OnInit, OnDestroy {
  @Input() eventId: null | string = null;
  @Input() connectedFans: any[] = [];
  @Input() calledFans: any[] = [];
  @Input() pendingCallFans: any[] = [];
  userData;
  eventData;
  currentPosition: number = 0;
  maxBid: number;
  nameInitials: string;
  eventTime;
  userIndex: number = 0;
  interval;
  sponsorList: any;
  connectedFanDetails = null;

  slideOpts: any = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    // loop: true,
    autoplay: {
      delay: 2000,
    },
  };

  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private router: Router,
    private constantService: ConstantService,
    public commonService: CommonService,
    private cd: ChangeDetectorRef,
    private constant: ConstantService
  ) {}

  ngOnInit() {
    this.getUserData();
    this.getEventDetails();
    this.getSponsor();
  }

  ngDoCheck() {
    if (this.connectedFans.length !== 0) {
      this.calculateUserPosition();
    }
  }

  getSponsor() {
    let request: Request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          roles: ["SPONSOR"],
        },
        page: {
          pageLimit: 1,
          pageNumber: 0,
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME",
        },
      },
      isAuth: false,
    };

    this.apiService.post(request).subscribe((response: Response) => {
      if (response.status.code == this.constant.STATUS_OK) {
        this.sponsorList = response.data;
        console.log("sponsors ", this.sponsorList);
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  calculateUserPosition() {
    //pending fans
    for (let index = 0; index < this.pendingCallFans.length; index++) {
      if (this.pendingCallFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.currentPosition = index + 1;

        this.connectedFanDetails = this.pendingCallFans[index];
      }
    }
    //completedFans
    for (let index = 0; index < this.calledFans.length; index++) {
      if (this.calledFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.connectedFanDetails = this.calledFans[index];
      }
    }
  }

  getEventDetails() {
    let request: Request = {
      path: "core/event/details/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventData = response.data;
        this.calculateTime();

        this.cd.detectChanges();
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

  calculateTime() {
    this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    this.interval = setInterval(() => {
      this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    }, 60000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
