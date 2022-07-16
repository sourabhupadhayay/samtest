import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-terms-conditions",
  templateUrl: "./terms-conditions.component.html",
  styleUrls: ["./terms-conditions.component.scss"],
})
export class TermsConditionsComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  onclick_cancel() {
    this.modalCtrl.dismiss();
  }
}
