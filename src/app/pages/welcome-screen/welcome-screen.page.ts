import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { Preferences } from '@capacitor/preferences';
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
    await Preferences.set({ key: "first_time", value: "no" });
    this.router.navigate(["/"], { replaceUrl: true });
  }
}
