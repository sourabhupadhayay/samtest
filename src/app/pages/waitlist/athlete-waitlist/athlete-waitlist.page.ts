import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  ChangeDetectorRef,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { NavController } from "@ionic/angular";
import { Subscription } from "rxjs";
@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit, DoCheck, OnDestroy {
  @Input() eventId: string;
  @Input() connectedFans: any[] = [];
  @Input() pendingCallFans: any[] = [];
  @Input() calledFans: any[] = [];
  
  fanImagesList: any[] = [];
  athleteList: any;
  sponsorList: any;
  slideOpts: any = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    // loop: true,
    autoplay: {
      delay: 2000,
    },
  };
  interval;
  nameInitials: any;
  userData: any;
  userId: any;
  userRole: any;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    private constantService: ConstantService,
    public authenticationService: AuthenticationService,
    private navController: NavController,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    console.log(this.connectedFans);
    this.getSponsor();
    this.getUserDataFromStorage();
  }
  ionDidViewEnter() {
    console.log("pending", this.pendingCallFans, this.connectedFans);
    // this.eventEnd();
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
        this.athleteList = response.data;
        this.athleteList.forEach((element, index) => {
          this.athleteList[index][
            "nameInitials"
          ] = this.commonService.getInitials(element.fullName);
        });
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
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

  async getUserDataFromStorage() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    let userData = await this.coreService.getUserDataFromStorage();
    this.nameInitials = this.commonService.getInitials(userData.fullName);
    this.userData = userData;
    this.userId = userData.id;
  }

  callFan(fan: any) {
    console.log("fann", fan);
    this.commonService.callingFanDetail = fan;
    this.router.navigate(["waitlist/call/" + fan.id], {
      queryParams: {
        isBidEvent: true,
      },
    });
  }
  eventEnd() {
    let request: any = {
      path: `core/event/complete/` + this.eventId,
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      if (response["status"]["code"] === "OK") {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_SUCCESS
        );

        this.routeBackToSchedule();
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  // routeBackToSchedule() {
  //   console.log("calledfdgrfgfgdfgd");
  //   this.cd.detectChanges();
  //  this.router.navigate(["/tabs/schedule"]);
  //   this.cd.detectChanges();
  //   // this.router.navigate(["/tabs/schedule"]);
  // }
  routeBackToSchedule() {
    //this.navController.navigateBack(["/tabs/schedule"]);
    // this.ngZone.run(() => {
    //   this.router.navigate(["tabs/schedule"]);
    // });
    this.navController.navigateBack(["/tabs/schedule"]);
    this.commonService.$navigateSubject.next();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
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
