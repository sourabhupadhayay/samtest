import { Component, OnInit } from '@angular/core';
import { IonModal, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss'],
})
export class TermsOfServiceComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
}
