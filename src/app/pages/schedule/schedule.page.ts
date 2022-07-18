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
  selectedIndex: string = "Upcoming";
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
    let userRole = await this.coreService.getUserDataFromStorage();
    this.userRole = userRole;
    this.getCurrentUserDetails();
  }

  getScheduleDetails() {
    let request: Request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {},
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
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
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
