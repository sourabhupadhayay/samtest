import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AppereanceBookingComponent } from "./appereance-booking/appereance-booking.component";
import { PaymentComponent } from "./payment/payment.component";
import { Storage } from "@capacitor/storage";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  userData: any | null = null;
  nameInitials: string;
  createEventRequest: Request;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    public commonService: CommonService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getUserDataFromStorage();
  }

  async getUserDataFromStorage() {
    const { value } = await Storage.get({ key: "userDetails" });
    this.userData = JSON.parse(value);
    this.nameInitials = this.commonService.getInitials(this.userData.fullName);
  }

  async presentAppearanceBookingModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: AppereanceBookingComponent,
      cssClass: "client-filter-modal",
    });

    modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (!data) {
      return;
    }

    this.createEventRequest = data;

    this.presentPaymentModal();
  }

  async presentPaymentModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: PaymentComponent,
      cssClass: "client-filter-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (!data) {
      return;
    }

    this.createEventRequest.data = {
      ...this.createEventRequest.data,
      ...data,
    };

    this.createEventForFan();
  }

  createEventForFan() {
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService
      .post(this.createEventRequest)
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_SUCCESS
          );
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }

  // getCurrentUserDetails() {
  //   let request: Request = {
  //     path: "auth/users/currentUser",
  //     isAuth: true,
  //   };
  //   this.coreService.presentLoader(this.constantService.WAIT);

  //   this.apiService.get(request).subscribe((response: Response) => {
  //     this.coreService.dismissLoader();
  //     if (response.status.code === this.constantService.STATUS_OK) {
  //       this.userData = response.data;
  //       this.nameInitials = this.commonService.getInitials(
  //         this.userData.fullName
  //       );
  //       // this.commonService.$profileSubject.next(response.data);

  //     } else {
  //       this.coreService.showToastMessage(
  //         response.status.description,
  //         this.coreService.TOAST_ERROR
  //       );
  //     }
  //   });
  // }
}
