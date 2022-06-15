import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public modalCtrl: ModalController,public routerOutLet: IonRouterOutlet) { }

  ngOnInit() {
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

}
