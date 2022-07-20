import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import {
  CoreService,
  UserRole,
  userRole,
} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.page.html",
  styleUrls: ["./schedule.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulePage implements OnInit {
  userData: any | null = null;
  userRole: userRole;
  nameInitials: string;
  eventState: string = "APPROVED";
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
    this.userRole = await this.coreService.getUserDataFromStorage();
    let userData = await this.coreService.getUserData();
    this.userId = userData.id;

    this.getCurrentUserDetails();
    this.getScheduleDetails();
  }

  getScheduleDetails() {
    let request: Request;

    if (this.userRole == "athlete") {
      request = this.athleteScheduleRequest();
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
    }

    //event filter
    if (this.eventFilter == "fan") {
      request.data.filter.creatorPersonas = ["USER"];
    } else if (this.eventFilter == "me") {
      request.data.filter.selfCreated = true;
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
    return request;
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };

    this.apiService.get(request).subscribe((response: Response) => {
      if (response.status.code === this.constantService.STATUS_OK) {
        this.userData = response.data;
        this.nameInitials = this.commonService.getInitials(
          this.userData.fullName
        );
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
}
