import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-approve-request",
  templateUrl: "./approve-request.component.html",
  styleUrls: ["./approve-request.component.scss"],
})
export class ApproveRequestComponent implements OnInit {
  eventType: string = this.navParams.get("eventType");
  creatorName: string = this.navParams.get("createdBy");
  eventName: string = this.navParams.get("eventName");
  constructor(public modalCtrl: ModalController, public navParams: NavParams) {}

  ngOnInit() {}
}
