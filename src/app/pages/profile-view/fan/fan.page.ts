import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AuthModuleService } from "../../auth-module/auth-module.service";
import { Platform, PopoverController } from '@ionic/angular';
import { PushNotificationPage } from "../../push-notification/push-notification.page";


@Component({
  selector: "fan-page",
  templateUrl: "./fan.page.html",
  styleUrls: ["./fan.page.scss"],
})
export class fanPage implements OnInit {
  fanData: any | null = null;
  nameInitials: string;
  badgeCount :number = 0;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private constantService: ConstantService,
    private commonService: CommonService,
    public popoverController: PopoverController,
    public platfrom: Platform
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserIdFromParams();
    this.getNotificationCount()
  }
  getUserIdFromParams() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.coreService.presentLoader(this.constantService.WAIT);
          let request: Request = {
            path: "auth/users/currentUser?userId=" + params.get("id"),
            isAuth: true,
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
      cssClass: 'notification-pop',
      event: ev,
      translucent: false,
      side: 'bottom',
      alignment: 'start',
      size:'auto'
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
