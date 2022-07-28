import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-cancel-request-modal",
  templateUrl: "./cancel-request-modal.component.html",
  styleUrls: ["./cancel-request-modal.component.scss"],
})
export class CancelRequestModalComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}
