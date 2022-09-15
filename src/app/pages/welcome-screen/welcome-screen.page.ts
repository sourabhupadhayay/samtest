import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { Storage } from "@capacitor/storage";
@Component({
  selector: "app-welcome-screen",
  templateUrl: "./welcome-screen.page.html",
  styleUrls: ["./welcome-screen.page.scss"],
})
export class WelcomeScreenPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  async nextSlide() {
    await this.slides.slideNext();
  }

  async skip() {
    await Storage.set({ key: "first_time", value: "no" });
    this.router.navigate(["/"], { replaceUrl: true });
  }
}
