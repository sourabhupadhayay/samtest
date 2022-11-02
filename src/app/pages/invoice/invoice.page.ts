import { Component, OnInit } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";
import { PopoverController } from '@ionic/angular';
import { PushNotificationPage } from "../push-notification/push-notification.page";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.page.html",
  styleUrls: ["./invoice.page.scss"],
})
export class InvoicePage implements OnInit {
  constructor(public modalCtrl: ModalController, public popoverController: PopoverController) {}

  ngOnInit() {}

  onClickCancel() {
    this.modalCtrl.dismiss();
  }

  async presentTermsAndServices() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: TermsOfServiceComponent,
      cssClass: "tandc-modal-new",
    });
    modal.present();
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
