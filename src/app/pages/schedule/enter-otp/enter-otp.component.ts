import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-enter-otp",
  templateUrl: "./enter-otp.component.html",
  styleUrls: ["./enter-otp.component.scss"],
})
export class EnterOtpComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}
