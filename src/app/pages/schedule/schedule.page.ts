import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { IonContent, IonModal } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { ModalController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { PushNotificationPage } from "../push-notification/push-notification.page";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

export type eventState = "APPROVED" | "PENDING" | "PAST";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.page.html",
  styleUrls: ["./schedule.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  userData: any | null = null;
  userRole: userRole;
  nameInitials: string = "";
  eventState: eventState = "APPROVED";
  eventFilter: string = "All";
  userId: String;
  scheduleData: any[] = [];
  isClassAdded: boolean = false;
  pageNumber: number = 0;
  totalElements: number = 0;
  isScrollDisabled: boolean = false;
  athleteEarnings: number = 0;
  private navigateSubscription: Subscription;
  badgeCount :number = 0;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    public commonService: CommonService,
    private cd: ChangeDetectorRef,
    public modalCtrl: ModalController,
    public popoverController: PopoverController,
    private router: Router,
    private core: CoreService
  ) {
    
  }

  ionViewWillEnter() {
    //this.getAthleteEarnings();
    this.getUserDataFromStorage();
    this.athleteScheduleRequest();
    this.fanScheduleRequest();
    this.pageNumber = 0;
  }
  ionViewDidEnter() {
    this.addClassOnScroll();
    this.athleteScheduleRequest();
    this.fanScheduleRequest();
    this.getNotificationCount()
  }

  ngOnInit() {
    this.navigateSubscription = this.commonService.$navigateSubject.subscribe(
      () => {
        this.pageNumber = 0;
        this.athleteScheduleRequest();
        this.getUserDataFromStorage();
        this.fanScheduleRequest();
        this.commonService.getAthleteEarnings()
      }
    );

    this.athleteScheduleRequest();
   // this.getAthleteEarnings();
    this.fanScheduleRequest();
    this.getNotificationCount()
  }
  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

  getNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
      this.apiService.get(request).subscribe((response: any) => {
        this.badgeCount = response.data.unreadCount;
        console.log("c ",this.badgeCount)
        return this.badgeCount;
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PushNotificationPage,
      cssClass: "notification-pop",
      event: ev,
      translucent: false,
      side: "bottom",
      alignment: "start",
      size: "auto",
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
  addClassOnScroll() {
    this.content.ionScroll.subscribe((data) => {
      if (data.detail.scrollTop > 50) {
        this.isClassAdded = true;
        this.cd.detectChanges();
      } else if (data.detail.scrollTop < 50) {
        this.isClassAdded = false;
        this.cd.detectChanges();
      }
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      event.target.complete();
        // Any calls to load data go here
        console.log("schedule data");
        event.target.complete();
        this.getNotificationCount();
        this.resetAndGetMoreData();
        this.getScheduleDetails()
        this.athleteScheduleRequest();
        this.getAthleteEarnings();
          this.fanScheduleRequest();
    }, 2000);
  };  
  async getUserDataFromStorage() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    let userData = await this.coreService.getUserDataFromStorage();
    this.nameInitials = this.commonService.getInitials(userData.fullName);
    this.userData = userData;
    this.userId = userData.id;
    this.getScheduleDetails();
  }
  getScheduleDetails() {
    let request: Request;

    if (this.userRole == "athlete") {
      request = this.athleteScheduleRequest();
    } else {
      request = this.fanScheduleRequest();
    }
    if (!request) {
      return;
    }
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.pageNumber == 0) {
          this.scheduleData = response.data.content;
        } else {
          response.data.content.forEach((element) => {
            this.scheduleData.push(element);
          });
        }
        this.totalElements = response.data.totalElements;
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  athleteScheduleRequest(): Request {
    let request: Request = {
      path: "core/event/getEvents",
      data: {
        filter: {
          athleteIds: [this.userId],
          eventState: "UPCOMING",
          eventStatuses: ["APPROVED"],
          selfCreated: false,
        },
        page: {
          pageLimit: 10,
          pageNumber: this.pageNumber,
        },
        sort: {
          orderBy: "ASC",
          sortBy: "START_DATE",
        },
      },
      isAuth: true,
    };

    //event state filter
    if (this.eventState == "PAST") {
      request.data.filter.eventStatuses = ["APPROVED"];
      delete request.data.filter.selfCreated;
      request.data.filter.eventState = "PAST";
      request.data.sort.orderBy = "DESC";
    } else if (this.eventState == "PENDING") {
      request.data.filter.eventStatuses = ["PENDING"];
      delete request.data.filter.selfCreated;
      request.data.filter.eventState = "UPCOMING";
    } else if (this.eventFilter == "sponsored") {
      request.data.filter.creatorPersonas = ["ADMIN"];
    }
    //event filter
    if (this.eventFilter == "fan") {
      request.data.filter.creatorPersonas = ["USER"];
    } else if (this.eventFilter == "me") {
      request.data.filter.selfCreated = true;
      request.data.filter.creatorPersonas = ["ATHLETE"];
    } else if (this.eventFilter == "sponsored") {
      request.data.filter.creatorPersonas = ["ADMIN"];
    }
    return request;
  }

  fanScheduleRequest(): Request {
    let request: Request = {
      path: "core/event/getEvents",
      data: {
        filter: {
          creatorPersonas: ["USER", "ATHLETE", "ADMIN"],
          eventState: "UPCOMING",
          eventStatuses: ["APPROVED"],
          selfCreated: true,
        },
        page: {
          pageLimit: 10,
          pageNumber: this.pageNumber,
        },
        sort: {
          orderBy: "ASC",
          sortBy: "START_DATE",
        },
      },
      isAuth: true,
    };
    //event state filter
    if (this.eventState == "PAST") {
      request.data.filter.eventStatuses = ["APPROVED"];
      request.data.filter.eventState = "PAST";
      request.data.sort.orderBy = "DESC";
    } else if (this.eventState == "PENDING") {
      request.data.filter.creatorPersonas = ["USER"];
      request.data.filter.eventStatuses = ["PENDING"];
      request.data.filter.eventState = "UPCOMING";
    }
    if (this.eventState !== "PENDING") {
      //event creator  filter
      if (this.eventFilter == "athlete") {
        request.data.filter.creatorPersonas = ["ATHLETE"];
        request.data.filter.eventStatuses = ["APPROVED"];
      } else if (this.eventFilter == "me") {
        request.data.filter.selfCreated = true;
        request.data.filter.creatorPersonas = ["USER"];
      } else if (this.eventFilter == "sponsored") {
        request.data.filter.eventStatuses = ["APPROVED"];
        request.data.filter.creatorPersonas = ["ADMIN"];
      }
    }
    return request;
  }

  resetAndGetMoreData() {
    this.totalElements = 0;
    this.pageNumber = 0;
    this.isScrollDisabled = false;
    this.scheduleData = [];
    this.getScheduleDetails();
  }

  loadMoreEvents(event) {
    this.pageNumber++;
    this.getScheduleDetails();
    event.target.complete();

    if (this.totalElements <= this.scheduleData.length) {
      this.isScrollDisabled = true;
    }
  }

  listHeading(): string {
    switch (this.eventState) {
      case "APPROVED":
        return "SCHEDULE";
      case "PAST":
        return "COMPLETED ";
      case "PENDING":
        return "REQUEST";
    }
    // if (this.userRole == "athlete") {

    // } else {
    //   switch (this.eventState) {
    //     case "APPROVED":
    //       return "SCHEDULE";
    //     case "PAST":
    //       return "COMPLETED ";
    //     case "PENDING":
    //       return "REQUEST";
    //   }
    // }
  }

  redirectToInvoice() {
    if (this.userRole == "athlete") {
      this.router.navigate(["/invoice"]);
    } else {
      return;
    }
  }

  async getAthleteEarnings() {
    let userRole: userRole = await this.core.getUserRoleFromStorage();
    if (userRole == "athlete") {
      let request: any = {
        path: "core/event/athlete/cash",
        isAuth: true,
      };
      this.apiService.get(request).subscribe((response: any) => {
        if (response.status.code === this.constantService.STATUS_OK) {
          this.athleteEarnings = response?.data?.totalEarning;
          console.log("athleteEarnings",this.athleteEarnings);
          
          this.commonService.athleteEarning = this.athleteEarnings;
        }
      });
    } else {
      return;
    }
  }
}
