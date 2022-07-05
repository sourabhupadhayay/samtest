import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import { App } from "@capacitor/app";

import { Platform } from "@ionic/angular";
import { CoreService } from "./providers/core.service";
import { DataService, Request } from "./providers/data.service";
import { NetworkService } from "./providers/network.service";
import { SplashScreen } from "@capacitor/splash-screen";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  isShowingSplashScreen = false;

  constructor(
    private apiservice: DataService,
    private _networkService: NetworkService,
    private platform: Platform,
    private core: CoreService,

    private _location: Location
  ) {
    this.initializeApp();
    this.backButton();
    this.hideSplashScreen();
  }

  ngOnInit(): void {}

  initializeApp(): void {
    this.platform.ready().then((): void => {
      this._networkEventsListener();
      this.initFacebook();
    });
  }

  hideSplashScreen() {
    this.platform.ready().then(async () => {
      SplashScreen.hide({
        fadeOutDuration: 1000,
      });
      setTimeout(() => {
        this.isShowingSplashScreen = false;
      }, 5000);
    });
  }

  //integrate facebook login
  private async initFacebook() {
    await FacebookLogin.initialize({ appId: "439680364461644" });
  }

  private _networkEventsListener(): void {
    this._networkService
      .networkListener()
      .subscribe((networkStatus: boolean): void => {
        const { msg, type }: { msg: string; type: string } = this._statsUpdate(
          networkStatus
        );

        this.core.showToastMessage(msg, type);
      });
  }
  private _statsUpdate(networkStatus: boolean): { msg: string; type: string } {
    const msg: string = networkStatus
        ? "Internet Status: ONLINE"
        : "Internet Status: OFFLINE",
      type: string = networkStatus
        ? this.core.TOAST_SUCCESS
        : this.core.TOAST_ERROR;

    return { msg, type };
  }

  backButton() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this._location.isCurrentPathEqualTo("/bubble-screen")) {
        // Show Exit Alert!
        App.exitApp();
      } else {
        this._location.back();
      }
    });
  }
}
