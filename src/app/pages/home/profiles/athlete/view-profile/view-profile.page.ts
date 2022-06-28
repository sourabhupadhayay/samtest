import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.page.html",
  styleUrls: ["./view-profile.page.scss"],
})
export class ViewProfilePage implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
}
