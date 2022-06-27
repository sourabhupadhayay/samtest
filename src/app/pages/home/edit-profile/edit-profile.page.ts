import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

}
