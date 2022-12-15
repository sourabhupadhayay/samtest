import { Component, OnInit } from '@angular/core';
import { IonModal, ModalController } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss'],
})
export class TermsOfServiceComponent implements OnInit {

  constructor(public modalCtrl: ModalController,public commonService: CommonService,) { }

  ngOnInit() {}
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
}
