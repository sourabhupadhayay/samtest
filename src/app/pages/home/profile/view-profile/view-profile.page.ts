import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { Storage } from "@capacitor/storage";
@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.page.html",
  styleUrls: ["./view-profile.page.scss"],
})
export class ViewProfilePage implements OnInit {
  loggedInUserData: any | null = null;
  userData: any | null = null;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCurrentUserDetails();
    this.getUserDataFromStorage();
  }

  async getUserDataFromStorage() {
    const { value } = await Storage.get({ key: "userDetails" });
    this.loggedInUserData = JSON.parse(value);
    console.log(this.loggedInUserData);
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
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
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  async presentChangePasswordModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ChangePasswordComponent,
      cssClass: "client-filter-modal",
    });

    modal.present();
  }

  logout() {
    let request: Request = {
      path: "auth/users/logout",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        Storage.clear().then(() => {
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
