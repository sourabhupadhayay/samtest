import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AppereanceBookingComponent } from "./appereance-booking/appereance-booking.component";
import { PaymentComponent } from "./payment/payment.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  userData: any | null = null;
  nameInitials: string;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    public commonService: CommonService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getCurrentUserDetails();
  }

  async presentChangePasswordModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: AppereanceBookingComponent,
      cssClass: "client-filter-modal",
    });

    modal.present();
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
        this.commonService.$profileSubject.next(response.data);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
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
}
