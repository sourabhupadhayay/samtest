import { Location } from "@angular/common";
import { Component, NgZone, OnInit, OnDestroy } from "@angular/core";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import { App, URLOpenListener, URLOpenListenerEvent } from "@capacitor/app";

import { Platform } from "@ionic/angular";
import { CoreService, userRole, UserRole } from "./providers/core.service";
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
import { AuthenticationService } from "./providers/authentication.service";
import { Subscription } from "rxjs";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  isShowingSplashScreen = false;
  connectedFans: any[] = [];
  socket: any;
  private socketSubscription: Subscription;
  constructor(
    private apiservice: DataService,
    private _networkService: NetworkService,
    private platform: Platform,
    private core: CoreService,
    private router: Router,
    private _location: Location,
    private commonService: CommonService,
    private zone: NgZone,
    private constantService: ConstantService,
    private authService: AuthenticationService,
    private navController: NavController
  ) {
    this.initializeApp();
    this.backButton();
    this.hideSplashScreen();
    this.getPublicInfo();
    this.deepLinking();
  }

  ngOnInit(): void {
    this.socketInit();
    this.callingAthlete();
  }

  private socketInit() {
    this.socketSubscription = this.commonService.$socketSubject.subscribe(
      () => {
        this.callingAthlete();
      }
    );
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
    this.commonService.getAuthPublicInfo();
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
    // Some issue with our setup and push will not work
    // PushNotifications.addListener("registrationError", (error: any) => {
    //   alert("Error on registration: " + JSON.stringify(error));
    // });

    if (!this.authService.data.isLoggedIn) {
      return;
    }

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

  async callingAthlete() {
    if (!this.authService.data.isLoggedIn) {
      return;
    }

    let userRole: userRole = await this.core.getUserRoleFromStorage();
    let userDetails = await this.core.getUserDataFromStorage();

    if (userRole == "athlete") {
      return;
    }

    this.socket = Stomp.over(
      () => new SockJS(configuration.BASE_URL + "core/greeting")
    );
    this.socket.reconnect_delay = 5000;
    this.socket.connect(
      {},
      (frame) => {
        this.socket.subscribe("/errors", (message) => {
          alert("Error " + message.body);
        });
        this.send(userDetails["id"]);
        this.socket.subscribe("/topic/receiveCall", (message) => {
          let responseData = JSON.parse(message.body).content;
          this.commonService.callingAthleteDetails = JSON.parse(responseData);

          if (
            userDetails.id !== this.commonService.callingAthleteDetails.userId
          ) {
            return;
          }
          if (
            this.commonService.callingAthleteDetails.creatorPersona !== "USER"
          ) {
            // {
            //   this.router.navigate([
            //     "/waitlist/incoming-call/" +
            //       this.commonService.callingAthleteDetails.id,
            //   ]);
            // } else {
            //   this.router.navigate([
            //     "/waitlist/incoming-call/" +
            //       this.commonService.callingAthleteDetails.eventId,
            //   ]);
            // }
            this.navController.navigateBack([
              "/waitlist/incoming-call/" +
                this.commonService.callingAthleteDetails.id,
            ]);
          } else {
            this.navController.navigateBack([
              "/waitlist/incoming-call/" +
                this.commonService.callingAthleteDetails.eventId,
            ]);
          }
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }
  send(id) {
    let data = JSON.stringify({
      userId: id,
    });
    this.socket.send("/app/videoBid", {}, data);
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}
