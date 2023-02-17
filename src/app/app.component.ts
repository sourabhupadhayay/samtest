import { Location } from "@angular/common";
import { Component, NgZone, OnInit, OnDestroy } from "@angular/core";
import { FacebookLogin } from "@capacitor-community/facebook-login";
import { App, URLOpenListener, URLOpenListenerEvent } from "@capacitor/app";

import { Platform } from "@ionic/angular";
import { CoreService, userRole, UserRole } from "./providers/core.service";
import { DataService, Request } from "./providers/data.service";
import { NetworkService } from "./providers/network.service";
import { SplashScreen } from "@capacitor/splash-screen";
import { Preferences } from "@capacitor/preferences";
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
import { Subscription, interval } from "rxjs";
import { NavController } from "@ionic/angular";
import { Badge } from "@awesome-cordova-plugins/badge/ngx";
import { CallData, CallKitVoip } from "capacitor-callkit-voip";
//import { Flipper } from "@capacitor-community/flipper";
import { FullScreenNotification } from "capacitor-fullscreen-notification";
import * as _ from "cypress/types/lodash";
import { ApplePay } from "@fresha/capacitor-plugin-applepay";
import { Capacitor } from "@capacitor/core";

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
  intervalId: number;
  userDetails: any;
  badgeCount: number = 0;
  data = {};
  id: any;
  accepted: boolean = false;
  voipResponse: any;

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
    private navController: NavController,
    private badge: Badge,
    private coreService: CoreService,
    private apiService: DataService
  ) {
    this.initializeApp();
    this.backButton();
    this.hideSplashScreen();
    this.getPublicInfo();
    this.commonService.getAthleteEarnings();
    this.deepLinking();
    if (this.authService.isAuthenticated()) {
      this.getBadgeNotificationCount();
    }
  }

  async getfullscreenNotification() {
    await FullScreenNotification.addListener("launch", (data) => {
      let dataObject: any = JSON.stringify(data);
      let parseDataObject: any = JSON.parse(data.fullScreenId);
      this.voipResponse = JSON.parse(data.fullScreenId);
      localStorage.setItem("voip-data", parseDataObject);
      let dataObject1: any = data;
      let bidId: any = parseDataObject.id;
      let isBidEvent: any = parseDataObject.bidEventCheck;
      let buttonClicked: any = JSON.stringify(data.actionId);
      let eventId: any = parseDataObject.eventId;
      console.log("objj ", dataObject);
      console.log("bidId/event/ EventId ", bidId, isBidEvent, eventId);
      console.log("has actionId ", dataObject1.hasOwnProperty("actionId"));
      if (
        !this.commonService.callingAthleteDetails ||
        this.commonService.callingAthleteDetails == null
      ) {
        this.commonService.callingAthleteDetails = this.voipResponse;
      }
      console.log("common 1 ", this.commonService.callingAthleteDetails);

      if (dataObject1.hasOwnProperty("actionId")) {
        //check screen locked/onlocked
        console.log("screen is open");
        //this.accepted = buttonClicked === '"accept"' ? true : false;
        if (buttonClicked === '"accept"') {
          //check call accept/reject
          this.accepted = true;
        } else {
          this.accepted = false;
        }

        if (this.accepted) {
          console.log("accept");
          console.log("/waitlist/call/" + bidId);

          if (isBidEvent) {
            this.navController.navigateBack(["/waitlist/call/" + bidId], {
              queryParams: {
                isBidEvent: isBidEvent,
              },
            });
          } else {
            this.navController.navigateBack(["/waitlist/call/" + eventId], {
              queryParams: {
                isBidEvent: isBidEvent,
              },
            });
          }
          FullScreenNotification.cancelNotification();
        } else {
          console.log("reject");
          this.cancelFullscreenNotification();
        }
      } else {
        console.log("screen is locked");
        console.log("/waitlist/incoming-call/" + bidId);
        if (isBidEvent) {
          this.navController.navigateBack(["/waitlist/incoming-call/" + bidId]);
        } else {
          this.navController.navigateBack([
            "/waitlist/incoming-call/" + eventId,
          ]);
        }
      }
    });
  }

  RemoveInvertedComma(id: string) {
    let updatedId = id.slice(1, -1);
  }

  async cancelFullscreenNotification() {
    await this.disconnectCall();
    await FullScreenNotification.cancelNotification();
  }

  async disconnectCall() {
    let leftTime = await this.voipResponse.remainingTime;

    let request: Request = {
      path: "core/video/updateCall/" + this.voipResponse.id,
      data: {
        remainingTime: leftTime,
      },
      isAuth: true,
    };
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
    });
    this.router.navigate(["/tabs/schedule"]);
  }

  async ngOnInit() {
    this.redirectToAppPlayStore();
    // await this.getBadgeNotificationCount();
    // await this.getBadgeStatus(0);
    await this.commonService.getAthleteEarnings();
    this.socketInit();
    this.callingAthlete();
    const source = interval(60000);
    this.socketSubscription = source.subscribe((val) => this.onlineStatus());
    this.commonService.privacy();
    this.commonService.termcondition();

    if (this.platform.is("ios")) {
      await this.registerVoipNotification();
    } else {
      this.getfullscreenNotification();
    }
    this.applePayPayment();
  }

  redirectToAppPlayStore() {
    if (
      Capacitor.getPlatform() == "web" &&
      this.platform.platforms().includes("mobileweb") &&
      !this.platform.platforms().includes("desktop") &&
      this.platform.is("android")
    ) {
      console.log("in android chrome");
      document.getElementById("playstore").click();
    }

    if (
      Capacitor.getPlatform() == "web" &&
      this.platform.platforms().includes("mobileweb") &&
      !this.platform.platforms().includes("desktop") &&
      this.platform.is("ios")
    ) {
      console.log("in ios chrome");
      document.getElementById("ios").click();
    }
  }

  applePayPayment() {
    ApplePay.initiatePayment({
      merchantIdentifier: "com.bubble.bubbleapp",
      countryCode: "+91",
      currencyCode: "INR",
      supportedCountries: ["IN"],
      supportedNetworks: [
        "amex",
        "chinaUnionPay",
        "cartesBancaires",
        "discover",
        "eftpos",
        "electron",
        "idCredit",
        "interac",
        "JCB",
        "maestro",
        "masterCard",
        "privateLabel",
        "quicPay",
        "suica",
        "visa",
        "vPay",
      ],
      summaryItems: [],
      requiredShippingContactFields: ["emailAddress"],
      requiredBillingContactFields: ["emailAddress"],
      merchantCapabilities: [
        "capability3DS",
        "capabilityCredit",
        "capabilityDebit",
        "capabilityEMV",
      ],
      billingContact: { emailAddress: "" },
      shippingContact: { emailAddress: "" },
    });
  }

  async getBadgeStatus(unreadCount: number) {
    let count = await this.badge.set(unreadCount);
    console.log("badge count ", count);
  }

  getBadgeNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe((response: any) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.badgeCount = response?.data?.unreadCount;
          console.log("count ", this.badgeCount);
          this.getBadgeStatus(this.badgeCount);
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
    });
  }

  async onlineStatus() {
    let userDetails = await this.core.getUserDataFromStorage();
    if (userDetails) {
      this.commonService.athleteOnlineOfflineStatus();
    } else {
      return;
    }
  }
  private socketInit() {
    this.socketSubscription = this.commonService.$socketSubject.subscribe(
      () => {
        this.callingAthlete();
      }
    );
  }

  initializeApp(): void {
    Preferences.get({ key: "first_time" }).then(({ value }) => {
      console.log("initial", value);
    });
    this.platform.ready().then((): void => {
      this._networkEventsListener();
      this.initFacebook();
      this.isUserLoggedInFirstTime();
    });
  }

  hideSplashScreen() {
    this.platform.ready().then(async () => {
      SplashScreen.hide({
        fadeOutDuration: 1000,
      });
      setTimeout(() => {
        this.isShowingSplashScreen = false;
      }, 3000);
      //splash time is reduced to 3 sec from 5 sec
    });
  }

  //integrate facebook login
  private async initFacebook() {
    await FacebookLogin.initialize({ appId: "676274650710402" });
  }

  //get common public info
  async getPublicInfo() {
    this.commonService.getPublicInfo();
    //this.userDetails = await this.core.getUserDataFromStorage();
  }

  deepLinking() {
    App.addListener("appUrlOpen", (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        let domain = "";
        if (configuration.state == "production") {
          domain = "portal.bubbleapp.com";
        } else {
          domain = "dev.bubbleapp.com";
        }
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
    Preferences.get({ key: "first_time" }).then(({ value }) => {
      console.log("first time", value);

      if (!value && this.authService.data.isLoggedIn == false) {
        this.router.navigate(["/bubble-screen"]);
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
        console.log("recevied push notifi");
        // alert("Push received: " + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        // alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }

  async callingAthlete() {
    if (!this.authService.data.isLoggedIn) {
      return;
    }

    let userRole: userRole = await this.core.getUserRoleFromStorage();
    if (userRole == "athlete") {
      return;
    } else {
      this.socket = Stomp.over(
        () => new SockJS(configuration.BASE_URL + "core/greeting")
      );
      this.socket.reconnect_delay = 5000;
      this.socket.connect(
        {},
        (frame) => {
          this.socket.subscribe("/errors", (message) => {
            console.log("error", message.body);

            alert("Error " + message.body);
          });

          this.userDetails = localStorage.getItem("authDetails");
          let value = localStorage.getItem("authDetails");
          this.userDetails = JSON.parse(value);
          this.send(this.userDetails["id"]);
          this.socket.subscribe("/topic/receiveCall", (message) => {
            let responseData = JSON.parse(message.body).content;

            let value = localStorage.getItem("authDetails");
            this.userDetails = JSON.parse(value);
            let id = JSON.parse(responseData);
            if (this.userDetails.id != id.userId) {
              return;
            } else {
              if (
                (this.platform.is("desktop") ||
                  this.platform.is("mobileweb")) &&
                !this.platform.is("ios")
              ) {
                this.commonService.callingAthleteDetails = JSON.parse(
                  responseData
                );
                if (
                  this.commonService.callingAthleteDetails.creatorPersona !==
                  "USER"
                ) {
                  this.navController.navigateBack([
                    "/waitlist/incoming-call/" +
                      this.commonService.callingAthleteDetails.id,
                  ]);
                } else {
                  this.navController.navigateBack(
                    [
                      "/waitlist/incoming-call/" +
                        this.commonService.callingAthleteDetails.eventId,
                    ],
                    {
                      queryParams: {
                        bidId: this.commonService.callingAthleteDetails.id,
                      },
                    }
                  );
                }
              }
            }
          });
        },
        function (error) {
          console.log("STOMP error " + error);
          return;
        }
      );
    }
  }
  send(id) {
    let data = JSON.stringify({
      userId: id,
    });
    this.socket.send("/app/videoBid", {}, data);
  }
  async registerVoipNotification() {
    // register token
    CallKitVoip.addListener("registration", ({ token }: any) => {
      this.commonService.voipToken = token;
      localStorage.setItem("voipToken", token);
    });

    // start call
    CallKitVoip.addListener("callAnswered", (obj: CallData) => {
      //here obj.id= bidId
      console.log(obj.id, "bidid", obj);

      this.commonService.VideoCallAnswer = true;
      this.data = obj.connectionId;
      if (obj.creatorPersona != "USER") {
        this.router.navigate(["/waitlist/call/" + obj.id], {
          queryParams: {
            isBidEvent: obj.creatorPersona == "USER" ? false : true,
          },
        });
      } else {
        this.router.navigate(["/waitlist/call/" + obj.eventId], {
          queryParams: {
            isBidEvent: obj.creatorPersona == "USER" ? false : true,
          },
        });
      }
    });
  }
  // end call
  //   CallKitVoip.addListener("endCall", (obj: CallData) => {
  //     console.log(JSON.stringify(obj), `Call has been REJECTED from `);
  //     let request: Request = {
  //       path: "core/video/updateCall/" + obj.id,
  //       data: {
  //         remainingTime: obj.remainingTime,
  //       },
  //       isAuth: true,
  //     };
  //     this.apiService.post(request).subscribe((response: Response) => {
  //       this.coreService.dismissLoader();
  //     });
  //     this.router.navigate(["/tabs/schedule"]);
  //   });
  //   // init plugin, start registration of VOIP notifications
  //   await CallKitVoip.register(); // can be used with `.then()`
  //   console.log("Push notification has been registered");
  // }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}
