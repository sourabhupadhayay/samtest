import { Component, OnInit } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.page.html",
  styleUrls: ["./invoice.page.scss"],
})
export class InvoicePage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

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
}
