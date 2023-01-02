import { Component, OnInit } from '@angular/core';
import { IonModal, ModalController } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(public modalCtrl: ModalController,  public commonService: CommonService,) { }

  ngOnInit() {
  }
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
}
