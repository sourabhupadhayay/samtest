import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { AuthModuleService } from "src/app/pages/auth-module/auth-module.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { CommonService } from "../../../providers/common.service";

@Component({
  selector: "app-athlete",
  templateUrl: "./athlete.page.html",
  styleUrls: ["./athlete.page.scss"],
})
export class AthletePage implements OnInit {
  athleteData: any | null = null;
  selectedIndex: string = "profile";
  scheduleData: any[] = [];
  eventFilter: "past" | "upcoming" | "All" = "All";
  nameInitials: string;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private constantService: ConstantService,

    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getAthleteData();
  }

  getAppearanceData() {
    if (this.selectedIndex == "appearances") {
      this.getAthleteAppearances();
    }
  }

  getAthleteData() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.coreService.presentLoader(this.constantService.WAIT);
          let request: Request = {
            path: "auth/users/currentUser?userId=" + params.get("id"),
          };
          return this.apiService.get(request);
        })
      )
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.athleteData = response.data;
          this.nameInitials = this.commonService.getInitials(
            this.athleteData.fullName
          );
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }
  getAthleteAppearances() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let request: Request = {
            path: "core/event/getEvents",
            data: {
              filter: {
                athleteIds: [params.get("id")],
                eventStatuses: ["APPROVED"],
                creatorPersonas: ["ATHLETE", "USER", "ADMIN"],
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

          if (this.eventFilter == "past") {
            request.data.filter.eventState = "PAST";
          } else if (this.eventFilter == "upcoming") {
            request.data.filter.eventState = "UPCOMING";
          }

          this.coreService.presentLoader(this.constantService.WAIT);
          return this.apiService.post(request);
        })
      )
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.scheduleData = response.data.content;
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }

  async getAmountOpened(event: any) {
    let number = await event.target.getOpenAmount();
    //convert negative to positive number
    number = Math.abs(number);
    if (number > 150) {
      this.router.navigate(["/bid-payment/" + this.athleteData.id]);
    }
  }
}
