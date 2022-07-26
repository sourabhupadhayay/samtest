import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-bid-payment',
  templateUrl: './bid-payment.page.html',
  styleUrls: ['./bid-payment.page.scss'],
})
export class BidPaymentPage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  onClickCancel() {
    this.modalCtrl.dismiss(false);
  }

}
