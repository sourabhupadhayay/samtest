import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AuthModuleService } from "../../auth-module/auth-module.service";

@Component({
  selector: "fan-page",
  templateUrl: "./fan.page.html",
  styleUrls: ["./fan.page.scss"],
})
export class fanPage implements OnInit {
  fanData: any | null = null;
  nameInitials: string;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private constantService: ConstantService,
    private commonService: CommonService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
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
          this.fanData = response.data;
          this.nameInitials = this.commonService.getInitials(
            this.fanData.fullName
          );
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }
}
