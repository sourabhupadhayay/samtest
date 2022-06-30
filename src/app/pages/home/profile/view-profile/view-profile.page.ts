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
  currentUserRole: "fan" | "athlete";
  loggedInUserData: any | null = null;
  userData: any | null = null;
  nameInitials: string;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getCurrentUserDetails();
    this.getUserDataFromStorage();
  }

  async getUserDataFromStorage() {
    const { value } = await Storage.get({ key: "userDetails" });
    this.loggedInUserData = JSON.parse(value);
    this.currentUserRole = this.getUserType(this.loggedInUserData.roles);
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

  getInitials(fullName: String) {
    let splitName = fullName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    if (lastName) {
      this.nameInitials = firstName[0] + lastName[0];
    } else {
      this.nameInitials = firstName[0];
    }
  }

  getUserType(userRole: string[]): "athlete" | "fan" {
    let isAthlete = userRole.some((role) => role === "ATHLETE");
    if (isAthlete) {
      return "athlete";
    } else {
      return "fan";
    }
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
        this.getInitials(this.userData.fullName);
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

  deleteAccount() {
    let request: Request = {
      path: "auth/users/manage/delete/" + this.userData.id,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.logout();
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
