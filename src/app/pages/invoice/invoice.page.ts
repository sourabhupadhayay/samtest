import { Component, OnInit } from '@angular/core';
import { IonModal, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onClickCancel() {
    this.modalCtrl.dismiss();
  }

}
