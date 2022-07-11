import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-appereance-booking",
  templateUrl: "./appereance-booking.component.html",
  styleUrls: ["./appereance-booking.component.scss"],
})
export class AppereanceBookingComponent implements OnInit {
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}
}
