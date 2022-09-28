import { Location } from "@angular/common";
import { Component, NgZone, OnInit } from "@angular/core";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import { App, URLOpenListener, URLOpenListenerEvent } from "@capacitor/app";

import { Platform } from "@ionic/angular";
import { CoreService } from "./providers/core.service";
import { DataService, Request } from "./providers/data.service";
import { NetworkService } from "./providers/network.service";
import { SplashScreen } from "@capacitor/splash-screen";
import { Storage } from "@capacitor/storage";
import { Router } from "@angular/router";
import { CommonService } from "./providers/common.service";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "./configuration";
import { ConstantService } from "src/app/providers/constant.service";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  isShowingSplashScreen = false;
  connectedFans: any[] = [];
  socket: any;
  constructor(
    private apiservice: DataService,
    private _networkService: NetworkService,
    private platform: Platform,
    private core: CoreService,
    private router: Router,
    private _location: Location,
    private commonService: CommonService,
    private zone: NgZone,
    private constantService: ConstantService
  ) {
    this.initializeApp();
    this.backButton();
    this.hideSplashScreen();
    this.getPublicInfo();
    this.deepLinking();
  }

  ngOnInit(): void {
    this.callingAthlete();
  }

  initializeApp(): void {
    this.platform.ready().then((): void => {
      this._networkEventsListener();
      this.initFacebook();
      this.isUserLoggedInFirstTime();
      // this.registerNotification();
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
    await FacebookLogin.initialize({ appId: "2063922043815263" });
  }

  //get common public info
  getPublicInfo() {
    this.commonService.getPublicInfo();
  }

  deepLinking() {
    App.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const domain = "dev.bubbleapp.com";
        const pathArray = event.url.split(domain);

        const appPath = pathArray.pop();
        if (appPath) {
          this.router.navigateByUrl(appPath);
        }
      });
    });
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

  isUserLoggedInFirstTime() {
    Storage.get({ key: "first_time" }).then(({ value }) => {
      if (!value) {
        this.router.navigate(["/welcome-screen"]);
      }
    });
  }

  registerNotification() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      alert("Push registration success, token: " + token.value);
      console.log(token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        alert("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }

  callingAthlete() {
    this.socket = Stomp.over(
      () => new SockJS(configuration.BASE_URL + "core/greeting")
    );

    this.socket.reconnect_delay = 5000;

    let that = this;

    this.socket.connect(
      {},
      function (frame) {
        that.socket.subscribe("/errors", function (message) {
          alert("Error " + message.body);
        });

        that.socket.subscribe("/topic/video/sendToCall", function (message) {
          console.log(message);
          let data = JSON.parse(message.body);

          console.log(data);
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }
}
