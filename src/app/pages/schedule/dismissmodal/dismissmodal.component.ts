import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-dismissmodal",
  templateUrl: "./dismissmodal.component.html",
  styleUrls: ["./dismissmodal.component.scss"],
})
export class DismissmodalComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}
