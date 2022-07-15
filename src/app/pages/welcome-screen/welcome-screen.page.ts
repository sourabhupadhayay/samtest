import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-welcome-screen",
  templateUrl: "./welcome-screen.page.html",
  styleUrls: ["./welcome-screen.page.scss"],
})
export class WelcomeScreenPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor() {}

  ngOnInit() {}

  isEnd() {
    console.log("working");
  }
}
