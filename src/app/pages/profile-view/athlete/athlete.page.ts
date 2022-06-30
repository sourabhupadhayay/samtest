import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { AuthModuleService } from "src/app/pages/auth-module/auth-module.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-athlete",
  templateUrl: "./athlete.page.html",
  styleUrls: ["./athlete.page.scss"],
})
export class AthletePage implements OnInit {
  athleteData: any | null = null;
  selectedindex:any;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private constantService: ConstantService,
    private commonService: AuthModuleService
  ) {
    this.selectedindex = "profile";
  }

  ngOnInit() {
    this.getUserIdFromParams();
  }

  getUserIdFromParams() {
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
  }
}
