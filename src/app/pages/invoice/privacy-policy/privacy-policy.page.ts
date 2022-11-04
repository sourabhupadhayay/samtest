import { Component, OnInit } from '@angular/core';
import { IonModal, ModalController } from "@ionic/angular";
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
}
