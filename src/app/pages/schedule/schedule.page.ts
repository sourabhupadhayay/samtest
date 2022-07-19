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
    let request: Request = {
      path: "core/event/getEvents",
      data: {
        filter: {
          athleteIds: [this.userId],
          eventState: "UPCOMING",
          eventStatuses: [this.eventState],
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

    if (this.eventState == "PENDING") {
      delete request.data.filter.eventState;
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
