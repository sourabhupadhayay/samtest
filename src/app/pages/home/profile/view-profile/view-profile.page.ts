import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { Preferences } from '@capacitor/preferences';
import { Subscription } from "rxjs";
import { CommonService } from "src/app/providers/common.service";
import { PushNotificationPage } from "src/app/pages/push-notification/push-notification.page";
import { PopoverController } from '@ionic/angular';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.page.html",
  styleUrls: ["./view-profile.page.scss"],
})
export class ViewProfilePage implements OnInit {
  currentUserRole: "fan" | "athlete";

  userData: any | null = null;
  nameInitials: string;
  profileSubscription: Subscription;
  badgeCount :number = 0;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    public commonService: CommonService,
    public popoverController: PopoverController,
    private badge: Badge,
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.isProfileUpdated();
    // this.getCurrentUserDetails();
    this.getUserDataFromStorage();
    this.getNotificationCount();
  }

  isProfileUpdated() {
    this.profileSubscription = this.commonService.$profileSubject.subscribe(
      () => {
        this.getCurrentUserDetails();
      }
    );
  }

  ionViewDidLeave() {
    this.profileSubscription.unsubscribe();
  }

  async getUserDataFromStorage() {
    const { value } = await Preferences.get({ key: "userDetails" });
    let loggedInUserData = JSON.parse(value);
    this.currentUserRole = this.commonService.getUserType(
      loggedInUserData.roles
    );
    this.userData = loggedInUserData;
    this.nameInitials = this.commonService.getInitials(this.userData.fullName);
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.userData = response.data;
          this.nameInitials = this.commonService.getInitials(
            this.userData.fullName
          );
          Preferences.set({
            key: "userDetails",
            value: JSON.stringify(response.data),
          });
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
    });
  }

  async presentChangePasswordModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ChangePasswordComponent,
      cssClass: "client-filter-modal",
    });

    modal.present();
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

  deleteAccount() {
    let request: Request = {
      path: "auth/users/manage/delete/" + this.userData.id,
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        Preferences.remove({ key: "userDetails" }).then(() => {
          localStorage.removeItem("authDetail");
          this.router.navigate(["/auth/login"]);
        });
        this.modalCtrl.dismiss();
        // this.router.navigate(["/auth/login"]);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  logout() {
    let request: Request = {
      path: "auth/users/logout",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.modalCtrl.dismiss();
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        Preferences.remove({ key: "userDetails" }).then(() => {
          localStorage.removeItem("authDetail");
          localStorage.removeItem("authDetails");
          this.badge.clear();
          location.reload()
          this.router.navigate(["/auth/login"]);
        });
        
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
}
