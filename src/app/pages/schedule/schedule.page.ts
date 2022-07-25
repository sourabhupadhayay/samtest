import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

export type eventState = "APPROVED" | "PENDING" | "PAST";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.page.html",
  styleUrls: ["./schedule.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulePage implements OnInit {
  userData: any | null = null;
  userRole: userRole;
  nameInitials: string = "";
  eventState: eventState = "APPROVED";
  eventFilter: string = "All";
  userId: String;
  scheduleData: any[] = [];
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    public commonService: CommonService,
    private cd: ChangeDetectorRef
  ) {}

  ionViewWillEnter() {
    this.getUserDataFromStorage();
  }

  ngOnInit() {}

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
        this.scheduleData = response.data.content;
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
          pageNumber: 0,
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
      request.data.filter.creatorPersonas = ["ATHLETE", "ADMIN"];
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
          pageNumber: 0,
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
    } else if (this.eventState == "PENDING") {
      request.data.filter.creatorPersonas = ["USER"];
      request.data.filter.eventStatuses = ["PENDING"];
      request.data.filter.eventState = "UPCOMING";
    }
    if (this.eventState !== "PENDING") {
      //event creator  filter
      if (this.eventFilter == "athlete") {
        request.data.filter.creatorPersonas = ["ATHLETE", "ADMIN"];
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

  // getCurrentUserDetails() {
  //   let request: Request = {
  //     path: "auth/users/currentUser",
  //     isAuth: true,
  //   };

  //   this.apiService.get(request).subscribe((response: Response) => {
  //     if (response.status.code === this.constantService.STATUS_OK) {
  //       this.userData = response.data;

  //       this.cd.detectChanges();
  //     } else {
  //       this.coreService.showToastMessage(
  //         response.status.description,
  //         this.coreService.TOAST_ERROR
  //       );
  //     }
  //   });
  // }

  listHeading(): string {
    if (this.userRole == "athlete") {
      return "SCHEDULE";
    } else {
      switch (this.eventState) {
        case "APPROVED":
          return "SCHEDULE";
        case "PAST":
          return "COMPLETED ";
        case "PENDING":
          return "REQUEST";
      }
    }
  }
}
