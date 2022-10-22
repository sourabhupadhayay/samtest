import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { Storage } from "@capacitor/storage";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/providers/common.service";
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
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.isProfileUpdated();
    // this.getCurrentUserDetails();
    this.getUserDataFromStorage();
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
    const { value } = await Storage.get({ key: "userDetails" });
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
          Storage.set({
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
        Storage.remove({ key: "userDetails" }).then(() => {
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
        Storage.remove({ key: "userDetails" }).then(() => {
          localStorage.removeItem("authDetail");
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
