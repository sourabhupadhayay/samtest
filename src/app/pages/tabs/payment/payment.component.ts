import { Component, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor(public modalCtrl: ModalController) {}

  onClickCancel() {
    this.modalCtrl.dismiss();
  }
  async cancel() {
    await this.modal.dismiss();
  }

  ngOnInit() {}

  async onSubmit() {
    await this.cancel();
    this.onClickCancel();
  }
}
