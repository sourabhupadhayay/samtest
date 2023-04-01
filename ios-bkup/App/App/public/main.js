(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ 55826);




const routes = [{
  path: "",
  redirectTo: "bubble-screen",
  pathMatch: "full"
}, {
  path: "bubble-screen",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bubble-screen_bubble-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bubble-screen/bubble-screen.module */ 28910)).then(m => m.BubbleScreenPageModule)
}, {
  path: "auth",
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth-module/auth-module.module */ 13060)).then(m => m.AuthModuleModule)
}, {
  path: "home",
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomeModule)
}, {
  path: "tabs",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tabs_payment_payment_component_ts-src_app_pipes_pipes_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 5557)).then(m => m.TabsPageModule)
}, {
  path: "profile",
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: "athlete",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_push-notification_push-notification_page_ts-src_app_pages_schedule_canc-8b4b97"), __webpack_require__.e("src_app_pages_profile-view_athlete_athlete_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-view/athlete/athlete.module */ 55144)).then(m => m.AthletePageModule)
  }, {
    path: "fan",
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile-view_fan_fan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-view/fan/fan.module */ 72978)).then(m => m.fanPageModule)
  }]
}, {
  path: "welcome-screen",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome-screen_welcome-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome-screen/welcome-screen.module */ 60342)).then(m => m.WelcomeScreenPageModule)
}, {
  path: "invoice",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice_invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice/invoice.module */ 21259)).then(m => m.InvoicePageModule)
}, {
  path: "bid-payment",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tabs_payment_payment_component_ts-src_app_pipes_pipes_module_ts"), __webpack_require__.e("src_app_pages_profile-view_bid-payment_bid-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile-view/bid-payment/bid-payment.module */ 6813)).then(m => m.BidPaymentPageModule)
}, {
  path: "waitlist",
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_waitlist_waitlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/waitlist/waitlist.module */ 74945)).then(m => m.WaitlistPageModule)
}, {
  path: "bubble-screen-list",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bubble-screen-list_bubble-screen-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bubble-screen-list/bubble-screen-list.module */ 53140)).then(m => m.BubbleScreenListPageModule)
}, {
  path: 'push-notification',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_push-notification_push-notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/push-notification/push-notification.module */ 9759)).then(m => m.PushNotificationPageModule)
}, {
  path: 'help-section',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_help-section_help-section_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help-section/help-section.module */ 56537)).then(m => m.HelpSectionPageModule)
}, {
  path: 'new-appereance-booking',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_new-appereance-booking_new-appereance-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/new-appereance-booking/new-appereance-booking.module */ 91367)).then(m => m.NewAppereanceBookingPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/facebook-login */ 4655);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/core.service */ 53003);
/* harmony import */ var _providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/data.service */ 93142);
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/network.service */ 31005);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _providers_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/common.service */ 33507);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @stomp/stompjs */ 48183);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sockjs-client */ 14166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuration */ 78345);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);
/* harmony import */ var _providers_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/authentication.service */ 48290);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/badge/ngx */ 72720);
/* harmony import */ var capacitor_callkit_voip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! capacitor-callkit-voip */ 15629);
/* harmony import */ var capacitor_fullscreen_notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! capacitor-fullscreen-notification */ 65426);


























//import { Flipper } from "@capacitor-community/flipper";

let AppComponent = class AppComponent {
  constructor(apiservice, _networkService, platform, core, router, _location, commonService, zone, constantService, authService, navController, badge, coreService, apiService) {
    this.apiservice = apiservice;
    this._networkService = _networkService;
    this.platform = platform;
    this.core = core;
    this.router = router;
    this._location = _location;
    this.commonService = commonService;
    this.zone = zone;
    this.constantService = constantService;
    this.authService = authService;
    this.navController = navController;
    this.badge = badge;
    this.coreService = coreService;
    this.apiService = apiService;
    this.isShowingSplashScreen = false;
    this.connectedFans = [];
    this.badgeCount = 0;
    this.data = {};
    this.accepted = false;
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
  getfullscreenNotification() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield capacitor_fullscreen_notification__WEBPACK_IMPORTED_MODULE_18__.FullScreenNotification.addListener("launch", data => {
        let dataObject = JSON.stringify(data);
        let parseDataObject = JSON.parse(data.fullScreenId);
        _this.voipResponse = JSON.parse(data.fullScreenId);
        localStorage.setItem("voip-data", parseDataObject);
        let dataObject1 = data;
        let bidId = parseDataObject.id;
        let isBidEvent = parseDataObject.bidEventCheck;
        let buttonClicked = JSON.stringify(data.actionId);
        let eventId = parseDataObject.eventId;
        console.log("objj ", dataObject);
        console.log("bidId/event/ EventId ", bidId, isBidEvent, eventId);
        console.log("has actionId ", dataObject1.hasOwnProperty("actionId"));
        if (!_this.commonService.callingAthleteDetails || _this.commonService.callingAthleteDetails == null) {
          _this.commonService.callingAthleteDetails = _this.voipResponse;
        }
        console.log("common 1 ", _this.commonService.callingAthleteDetails);
        if (dataObject1.hasOwnProperty("actionId")) {
          //check screen locked/onlocked
          console.log("screen is open");
          //this.accepted = buttonClicked === '"accept"' ? true : false;
          if (buttonClicked === '"accept"') {
            //check call accept/reject
            _this.accepted = true;
          } else {
            _this.accepted = false;
          }
          if (_this.accepted) {
            console.log("accept");
            console.log("/waitlist/call/" + bidId);
            if (isBidEvent) {
              _this.navController.navigateBack(["/waitlist/call/" + bidId], {
                queryParams: {
                  isBidEvent: isBidEvent
                }
              });
            } else {
              _this.navController.navigateBack(["/waitlist/call/" + eventId], {
                queryParams: {
                  isBidEvent: isBidEvent
                }
              });
            }
            capacitor_fullscreen_notification__WEBPACK_IMPORTED_MODULE_18__.FullScreenNotification.cancelNotification();
          } else {
            console.log("reject");
            _this.cancelFullscreenNotification();
          }
        } else {
          console.log("screen is locked");
          console.log("/waitlist/incoming-call/" + bidId);
          if (isBidEvent) {
            _this.navController.navigateBack(["/waitlist/incoming-call/" + bidId]);
          } else {
            _this.navController.navigateBack(["/waitlist/incoming-call/" + eventId]);
          }
        }
      });
    })();
  }
  RemoveInvertedComma(id) {
    let updatedId = id.slice(1, -1);
  }
  cancelFullscreenNotification() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.disconnectCall();
      yield capacitor_fullscreen_notification__WEBPACK_IMPORTED_MODULE_18__.FullScreenNotification.cancelNotification();
    })();
  }
  disconnectCall() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let leftTime = yield _this3.voipResponse.remainingTime;
      let request = {
        path: "core/video/updateCall/" + _this3.voipResponse.id,
        data: {
          remainingTime: leftTime
        },
        isAuth: true
      };
      _this3.apiService.post(request).subscribe(response => {
        _this3.coreService.dismissLoader();
      });
      _this3.router.navigate(["/tabs/schedule"]);
    })();
  }
  ngOnInit() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.redirectToAppPlayStore();
      // await this.getBadgeNotificationCount();
      // await this.getBadgeStatus(0);
      yield _this4.commonService.getAthleteEarnings();
      _this4.socketInit();
      _this4.callingAthlete();
      const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.interval)(60000);
      _this4.socketSubscription = source.subscribe(val => _this4.onlineStatus());
      _this4.commonService.privacy();
      _this4.commonService.termcondition();
      if (_this4.platform.is("ios")) {
        yield _this4.registerVoipNotification();
      } else {
        _this4.getfullscreenNotification();
      }
      // this.applePayPayment();
    })();
  }
  // redirectToAppPlayStore() {
  //   if (
  //     Capacitor.getPlatform() == "web" &&
  //     this.platform.platforms().includes("mobileweb") &&
  //     !this.platform.platforms().includes("desktop") &&
  //     this.platform.is("android")
  //   ) {
  //     console.log("in android chrome");
  //     document.getElementById("playstore").click();
  //   }
  //   if (
  //     Capacitor.getPlatform() == "web" &&
  //     this.platform.platforms().includes("mobileweb") &&
  //     !this.platform.platforms().includes("desktop") &&
  //     this.platform.is("ios")
  //   ) {
  //     console.log("in ios chrome");
  //     document.getElementById("ios").click();
  //   }
  // }
  // applePayPayment() {
  //   ApplePay.initiatePayment({
  //     merchantIdentifier: "com.bubble.bubbleapp",
  //     countryCode: "+91",
  //     currencyCode: "INR",
  //     supportedCountries: ["IN"],
  //     supportedNetworks: [
  //       "amex",
  //       "chinaUnionPay",
  //       "cartesBancaires",
  //       "discover",
  //       "eftpos",
  //       "electron",
  //       "idCredit",
  //       "interac",
  //       "JCB",
  //       "maestro",
  //       "masterCard",
  //       "privateLabel",
  //       "quicPay",
  //       "suica",
  //       "visa",
  //       "vPay",
  //     ],
  //     summaryItems: [],
  //     requiredShippingContactFields: ["emailAddress"],
  //     requiredBillingContactFields: ["emailAddress"],
  //     merchantCapabilities: [
  //       "capability3DS",
  //       "capabilityCredit",
  //       "capabilityDebit",
  //       "capabilityEMV",
  //     ],
  //     billingContact: { emailAddress: "" },
  //     shippingContact: { emailAddress: "" },
  //   });
  // }
  getBadgeStatus(unreadCount) {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let count = yield _this5.badge.set(unreadCount);
      console.log("badge count ", count);
    })();
  }
  getBadgeNotificationCount() {
    let request = {
      path: "notification/notification/check/v2",
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe(response => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.badgeCount = response?.data?.unreadCount;
          console.log("count ", this.badgeCount);
          this.getBadgeStatus(this.badgeCount);
        } else {
          this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
        }
      });
    });
  }
  onlineStatus() {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userDetails = yield _this6.core.getUserDataFromStorage();
      if (userDetails) {
        _this6.commonService.athleteOnlineOfflineStatus();
      } else {
        return;
      }
    })();
  }
  socketInit() {
    this.socketSubscription = this.commonService.$socketSubject.subscribe(() => {
      this.callingAthlete();
    });
  }
  initializeApp() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_9__.Preferences.get({
      key: "first_time"
    }).then(({
      value
    }) => {
      console.log("initial", value);
    });
    this.platform.ready().then(() => {
      this._networkEventsListener();
      this.initFacebook();
      this.isUserLoggedInFirstTime();
    });
  }
  hideSplashScreen() {
    var _this7 = this;
    this.platform.ready().then( /*#__PURE__*/(0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_8__.SplashScreen.hide({
        fadeOutDuration: 1000
      });
      setTimeout(() => {
        _this7.isShowingSplashScreen = false;
      }, 3000);
      //splash time is reduced to 3 sec from 5 sec
    }));
  }
  //integrate facebook login
  initFacebook() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_3__.FacebookLogin.initialize({
        appId: "676274650710402"
      });
    })();
  }
  //get common public info
  getPublicInfo() {
    var _this8 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.commonService.getPublicInfo();
      //this.userDetails = await this.core.getUserDataFromStorage();
    })();
  }

  deepLinking() {
    _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.addListener("appUrlOpen", event => {
      this.zone.run(() => {
        let domain = "";
        if (_configuration__WEBPACK_IMPORTED_MODULE_12__.configuration.state == "production") {
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
  _networkEventsListener() {
    this._networkService.networkListener().subscribe(networkStatus => {
      const {
        msg,
        type
      } = this._statsUpdate(networkStatus);
      this.core.showToastMessage(msg, type);
    });
  }
  _statsUpdate(networkStatus) {
    const msg = networkStatus ? "Internet Status: ONLINE" : "Internet Status: OFFLINE",
      type = networkStatus ? this.core.TOAST_SUCCESS : this.core.TOAST_ERROR;
    return {
      msg,
      type
    };
  }
  backButton() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this._location.isCurrentPathEqualTo("/bubble-screen")) {
        // Show Exit Alert!
        _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
      } else {
        this._location.back();
      }
    });
  }
  isUserLoggedInFirstTime() {
    _capacitor_preferences__WEBPACK_IMPORTED_MODULE_9__.Preferences.get({
      key: "first_time"
    }).then(({
      value
    }) => {
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
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_14__.PushNotifications.addListener("pushNotificationReceived", notification => {
      console.log("recevied push notifi");
      // alert("Push received: " + JSON.stringify(notification));
    });
    // Method called when tapping on a notification
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_14__.PushNotifications.addListener("pushNotificationActionPerformed", notification => {
      // alert("Push action performed: " + JSON.stringify(notification));
    });
  }
  callingAthlete() {
    var _this9 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this9.authService.data.isLoggedIn) {
        return;
      }
      let userRole = yield _this9.core.getUserRoleFromStorage();
      if (userRole == "athlete") {
        return;
      } else {
        _this9.socket = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_20__.Stomp.over(() => new sockjs_client__WEBPACK_IMPORTED_MODULE_11__(_configuration__WEBPACK_IMPORTED_MODULE_12__.configuration.BASE_URL + "core/greeting"));
        _this9.socket.reconnect_delay = 5000;
        _this9.socket.connect({}, frame => {
          _this9.socket.subscribe("/errors", message => {
            console.log("error", message.body);
            alert("Error " + message.body);
          });
          _this9.userDetails = localStorage.getItem("authDetails");
          let value = localStorage.getItem("authDetails");
          _this9.userDetails = JSON.parse(value);
          _this9.send(_this9.userDetails["id"]);
          _this9.socket.subscribe("/topic/receiveCall", message => {
            let responseData = JSON.parse(message.body).content;
            let value = localStorage.getItem("authDetails");
            _this9.userDetails = JSON.parse(value);
            let id = JSON.parse(responseData);
            if (_this9.userDetails.id != id.userId) {
              return;
            } else {
              if ((_this9.platform.is("desktop") || _this9.platform.is("mobileweb")) && !_this9.platform.is("ios")) {
                _this9.commonService.callingAthleteDetails = JSON.parse(responseData);
                if (_this9.commonService.callingAthleteDetails.creatorPersona !== "USER") {
                  _this9.navController.navigateBack(["/waitlist/incoming-call/" + _this9.commonService.callingAthleteDetails.id]);
                } else {
                  _this9.navController.navigateBack(["/waitlist/incoming-call/" + _this9.commonService.callingAthleteDetails.eventId], {
                    queryParams: {
                      bidId: _this9.commonService.callingAthleteDetails.id
                    }
                  });
                }
              }
            }
          });
        }, function (error) {
          console.log("STOMP error " + error);
          return;
        });
      }
    })();
  }
  send(id) {
    let data = JSON.stringify({
      userId: id
    });
    this.socket.send("/app/videoBid", {}, data);
  }
  registerVoipNotification() {
    var _this10 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // register token
      capacitor_callkit_voip__WEBPACK_IMPORTED_MODULE_17__.CallKitVoip.addListener("registration", ({
        token
      }) => {
        _this10.commonService.voipToken = token;
        localStorage.setItem("voipToken", token);
      });
      // start call
      capacitor_callkit_voip__WEBPACK_IMPORTED_MODULE_17__.CallKitVoip.addListener("callAnswered", obj => {
        //here obj.id= bidId
        console.log(obj.id, "bidid", obj);
        _this10.commonService.VideoCallAnswer = true;
        _this10.data = obj.connectionId;
        if (obj.creatorPersona != "USER") {
          _this10.router.navigate(["/waitlist/call/" + obj.id], {
            queryParams: {
              isBidEvent: obj.creatorPersona == "USER" ? false : true
            }
          });
        } else {
          _this10.router.navigate(["/waitlist/call/" + obj.eventId], {
            queryParams: {
              isBidEvent: obj.creatorPersona == "USER" ? false : true
            }
          });
        }
      });
      // end call
      capacitor_callkit_voip__WEBPACK_IMPORTED_MODULE_17__.CallKitVoip.addListener("endCall", obj => {
        console.log(JSON.stringify(obj), `Call has been REJECTED from `);
        let request = {
          path: "core/video/updateCall/" + obj.id,
          data: {
            remainingTime: obj.remainingTime
          },
          isAuth: true
        };
        _this10.apiService.post(request).subscribe(response => {
          _this10.coreService.dismissLoader();
        });
        _this10.router.navigate(["/tabs/schedule"]);
      });
      // init plugin, start registration of VOIP notifications
      yield capacitor_callkit_voip__WEBPACK_IMPORTED_MODULE_17__.CallKitVoip.register(); // can be used with `.then()`
      console.log("Push notification has been registered");
    })();
  }
  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
  }
};
AppComponent.ctorParameters = () => [{
  type: _providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: _providers_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform
}, {
  type: _providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_23__.Location
}, {
  type: _providers_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.NgZone
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_13__.ConstantService
}, {
  type: _providers_authentication_service__WEBPACK_IMPORTED_MODULE_15__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.NavController
}, {
  type: _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_16__.Badge
}, {
  type: _providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: _providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: "app-root",
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _pages_auth_module_auth_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-module/auth-module.module */ 13060);
/* harmony import */ var _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptor/error.interceptor */ 12796);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.module */ 57994);
/* harmony import */ var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/badge/ngx */ 72720);
/* harmony import */ var _awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/native-audio/ngx */ 4206);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 91348);




















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _pages_auth_module_auth_module_module__WEBPACK_IMPORTED_MODULE_2__.AuthModuleModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _pages_home_home_module__WEBPACK_IMPORTED_MODULE_4__.HomeModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_16__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebase), _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_17__.AngularFireMessagingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register("combined-sw.js", {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production
  })],
  providers: [_awesome_cordova_plugins_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeAudio, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
    multi: true
  }, _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_5__.Badge, _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__.SignInWithApple],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 78345:
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration),
/* harmony export */   "configuration": () => (/* binding */ configuration)
/* harmony export */ });
class Configuration {
  constructor(state) {
    this.state = state;
    this.BASE_URL = "";
    this.AUTH_KEY = "authDetail";
    //VIDEO_URL = "https://dev-video-apis.bubbleapp.com/video/";
    this.VIDEO_URL = "http://192.168.0.24:8084/";
    if (this.state == "staging") {
      this.BASE_URL = "https://dev-apis.bubbleapp.com/";
    } else if (this.state == "qa") {
      this.BASE_URL = "https://qa-apis.riskrelease.com/";
    } else if (this.state == "production") {
      this.BASE_URL = "https://prod-apis.bubbleapp.com/";
    } else if (this.state == "preprod") {
      //this.BASE_URL = "https://prod-apis.riskrelease.com/";
      this.BASE_URL = "https://preprod-apis.riskrelease.com/";
    } else {
      this.BASE_URL = "https://demo-apis.riskrelease.com/";
    }
  }
}
const configuration = new Configuration("staging");

/***/ }),

/***/ 55826:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _providers_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/authentication.service */ 48290);




let AuthGuard = class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(["/auth/login"], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
};
AuthGuard.ctorParameters = () => [{
  type: _providers_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
}];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], AuthGuard);


/***/ }),

/***/ 22456:
/*!********************************************!*\
  !*** ./src/app/helpers/emailValidation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMAIL_PATTERN": () => (/* binding */ EMAIL_PATTERN)
/* harmony export */ });
const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9._]{2,9}$/;

/***/ }),

/***/ 12796:
/*!**************************************************!*\
  !*** ./src/app/interceptor/error.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _providers_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/core.service */ 53003);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 85191);







let ErrorInterceptor = class ErrorInterceptor {
  constructor(coreService, router) {
    this.coreService = coreService;
    this.router = router;
  } // private readonly coreService: coreService
  /***
   * description: http intercepter to handle API errors
   */
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      this.coreService.dismissLoader();
      if (err.status === 401) {
        this.coreService.showToastMessage('You have been logged out from this device', this.coreService.TOAST_ERROR);
        localStorage.clear();
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.clear();
        this.router.navigateByUrl("/auth/login");
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
    }));
  }
};
ErrorInterceptor.ctorParameters = () => [{
  type: _providers_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], ErrorInterceptor);


/***/ }),

/***/ 48601:
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth-module/auth-module-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModuleRoutingModule": () => (/* binding */ AuthModuleRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [{
  path: "auth",
  children: [{
    path: "login",
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 52207)).then(m => m.LoginPageModule)
  }, {
    path: "forgot",
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 37359)).then(m => m.ForgotPasswordPageModule)
  }, {
    path: "verify-otp",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-otp-input_fesm2015_ng-otp-input_js"), __webpack_require__.e("src_app_pages_auth-module_verify-otp_verify-otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-otp/verify-otp.module */ 22159)).then(m => m.VerifyOTPPageModule)
  }, {
    path: "reset-password",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_utility_passwordValidator_ts"), __webpack_require__.e("src_app_pages_auth-module_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 72255)).then(m => m.ResetPasswordPageModule)
  }, {
    path: "signup-details",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_utility_passwordValidator_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth-module_signup-details_signup-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup-details/signup-details.module */ 77168)).then(m => m.SignupDetailsPageModule)
  }, {
    path: "signup",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_auth-module_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 18948)).then(m => m.SignupPageModule)
  }]
}];
let AuthModuleRoutingModule = class AuthModuleRoutingModule {};
AuthModuleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AuthModuleRoutingModule);


/***/ }),

/***/ 13060:
/*!*********************************************************!*\
  !*** ./src/app/pages/auth-module/auth-module.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModuleModule": () => (/* binding */ AuthModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _auth_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-module-routing.module */ 48601);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.module */ 52207);
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.module */ 37359);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







let AuthModuleModule = class AuthModuleModule {};
AuthModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthModuleRoutingModule, _login_login_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageModule, _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordPageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
})], AuthModuleModule);


/***/ }),

/***/ 81000:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth-module/auth-module.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModuleService": () => (/* binding */ AuthModuleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let AuthModuleService = class AuthModuleService {
  constructor() {
    this.signUpData = null;
    this.loginEmail = null;
  }
};
AuthModuleService.ctorParameters = () => [];
AuthModuleService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: "root"
})], AuthModuleService);


/***/ }),

/***/ 488:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/auth-module/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 53736);




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
}];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ForgotPasswordPageRoutingModule);


/***/ }),

/***/ 37359:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/auth-module/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 488);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 53736);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
})], ForgotPasswordPageModule);


/***/ }),

/***/ 53736:
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth-module/forgot-password/forgot-password.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 29344);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 42328);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _auth_module_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-module.service */ 81000);










let ForgotPasswordPage = class ForgotPasswordPage {
  constructor(coreService, apiService, constantService, router, commonService) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.router = router;
    this.commonService = commonService;
    this.emailController = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.isFormSubmitted = false;
  }
  ngOnInit() {}
  saveSignupData() {
    this.commonService.forgotPasswordEmail = this.emailController.value;
  }
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.emailController.invalid) {
      return;
    }
    let request = {
      path: "auth/users/user/password/forget",
      data: {
        email: this.emailController.value
      }
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === "OK") {
        this.saveSignupData();
        this.router.navigate(["auth/verify-otp"], {
          queryParams: {
            mode: "forgot"
          }
        });
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
};
ForgotPasswordPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _auth_module_service__WEBPACK_IMPORTED_MODULE_5__.AuthModuleService
}];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-forgot-password",
  template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForgotPasswordPage);


/***/ }),

/***/ 20844:
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth-module/login/login-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 23144);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 52207:
/*!*********************************************************!*\
  !*** ./src/app/pages/auth-module/login/login.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 20844);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 23144);







let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 23144:
/*!*******************************************************!*\
  !*** ./src/app/pages/auth-module/login/login.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 82585);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 28734);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 15414);
/* harmony import */ var src_app_helpers_emailValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/emailValidation */ 22456);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor-community/facebook-login */ 4655);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);
/* harmony import */ var _auth_module_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth-module.service */ 81000);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 91348);




















let LoginPage = class LoginPage {
  constructor(coreService, apiService, constantService, router, route, commonService, platform, commonAuthData, afMessaging, signInWithApple) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.platform = platform;
    this.commonAuthData = commonAuthData;
    this.afMessaging = afMessaging;
    this.signInWithApple = signInWithApple;
    this.isFormSubmitted = false;
    this.isShowingPassword = false;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern(src_app_helpers_emailValidation__WEBPACK_IMPORTED_MODULE_4__.EMAIL_PATTERN)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required])
    });
    this.generatedToken = null;
    this.FACEBOOK_PERMISSIONS = ["email", "user_birthday", "user_photos", "user_gender"];
    this.isIOSPlatform = false;
    _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.initialize({
      clientId: "573316732862-ihcsn2uu3cvnhq115s1ejvnbv5mko29t.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });
    // this.applesign();
    // this.registerVoipNotification();
  }

  ngOnInit() {
    this.getAuthPublicInfo();
    console.log("p ", this.platform.platforms(), this.platform.is("android"));
    this.checkPlatform();
  }
  checkPlatform() {
    this.isIOSPlatform = !this.platform.is("android") && !this.platform.is("desktop") ? true : false;
  }
  ionViewWillEnter() {
    this.generateNotificationToken();
    // this.registerVoipNotification();
    this.requestPushNotificationsPermission();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/tabs/home";
  }
  getAuthPublicInfo() {
    let request = {
      path: "auth/configuration/publicInfo",
      isAuth: false
    };
    this.apiService.get(request).subscribe(response => {
      this.authPublicInfo = response.data;
    });
  }
  showPasswordToggle() {
    this.isShowingPassword = !this.isShowingPassword;
  }
  onSubmit() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isFormSubmitted = true;
      if (localStorage.getItem("voipToken")) {
        _this.voipToken = localStorage.getItem("voipToken");
      }
      console.log("local", _this.voipToken);
      if (_this.loginForm.invalid) {
        return;
      }
      // this.registerVoipNotification();
      let request = {
        path: "auth/users/login",
        data: {
          ..._this.loginForm.value,
          loginSource: "WEB",
          deviceToken: _this.generatedToken,
          voipDeviceToken: _this.voipToken
        }
      };
      console.log("request login", request, "voip token:", _this.voipToken);
      _this.coreService.presentLoader(_this.constantService.WAIT);
      if (_this.authPublicInfo.twoStepAuthentication) {
        _this.apiService.post(request, false).subscribe(response => {
          _this.coreService.dismissLoader();
          if (response.status.code === _this.constantService.STATUS_OK) {
            console.log("eaning", _this.commonService.voipToken);
            localStorage.setItem("authDetails", JSON.stringify(response.data));
            _capacitor_preferences__WEBPACK_IMPORTED_MODULE_8__.Preferences.set({
              key: "userDetails",
              value: JSON.stringify(response.data)
            }).then(() => {
              _this.commonAuthData.loginEmail = _this.loginForm.controls.email.value;
              _this.router.navigate(["auth/verify-otp"], {
                queryParams: {
                  mode: "login",
                  returnUrl: _this.returnUrl
                }
              });
            });
          } else {
            _this.coreService.showToastMessage(response.status.description, _this.coreService.TOAST_ERROR);
          }
        });
      } else {
        _this.apiService.post(request, false).subscribe(response => {
          _this.coreService.dismissLoader();
          if (response.status.code === _this.constantService.STATUS_OK) {
            _this.commonService.getAthleteEarnings();
            localStorage.setItem("authDetails", JSON.stringify(response.data));
            _capacitor_preferences__WEBPACK_IMPORTED_MODULE_8__.Preferences.set({
              key: "userDetails",
              value: JSON.stringify(response.data)
            }).then(() => {
              _this.commonAuthData.loginEmail = _this.loginForm.controls.email.value;
              _this.router.navigate(["/tabs/home"]);
            });
          } else {
            _this.coreService.showToastMessage(response.status.description, _this.coreService.TOAST_ERROR);
          }
        });
      }
    })();
  }
  socialLogin(data) {
    if (localStorage.getItem("voipToken")) {
      this.voipToken = localStorage.getItem("voipToken");
    }
    let request = {
      path: "auth/users/login",
      data: {
        socialAccessToken: data.socialAccessToken,
        socialLoginType: data.socialLoginType,
        deviceToken: this.generatedToken,
        voipDeviceToken: this.voipToken
      }
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        console.log("social");
        localStorage.setItem("authDetails", JSON.stringify(response.data));
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_8__.Preferences.set({
          key: "userDetails",
          value: JSON.stringify(response.data)
        }).then(() => {
          if (!response.data.birthDate) {
            this.router.navigate(["/home/user/edit-profile"], {
              queryParams: {
                isProfileComplete: false
              }
            });
          } else {
            this.router.navigateByUrl(this.returnUrl);
          }
        });
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  ionViewDidLeave() {
    this.isFormSubmitted = false;
    this.loginForm.reset();
  }
  //google sign in
  googleSignIn() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.coreService.showToastMessage(
      //   "Development under progress",
      //   this.coreService.TOAST_INFO
      // );
      try {
        let user = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.signIn();
        let RequestData = {
          socialAccessToken: user.authentication.accessToken,
          socialLoginType: "GOOGLE"
        };
        _this2.socialLogin(RequestData);
      } catch (e) {}
    })();
  }
  //facebook login
  faceBookSignIn() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.platform.is("desktop")) {
        try {
          let result = yield _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_9__.FacebookLogin.login({
            permissions: _this3.FACEBOOK_PERMISSIONS
          });
          let RequestData = {
            socialAccessToken: result.accessToken.token,
            socialLoginType: "FACEBOOK"
          };
          _this3.socialLogin(RequestData);
        } catch (e) {}
      } else {
        _this3.coreService.showToastMessage("Development under progress", _this3.coreService.TOAST_INFO);
      }
    })();
  }
  generateNotificationToken() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.platform.is("desktop") || _this4.platform.is("mobileweb")) {
        _this4.generatedToken = null;
      }
      let result = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.requestPermissions();
      console.log("result login", result.receive);
      //this.registerVoipNotification();
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.register();
      } else {
        _this4.generatedToken = null;
        // Show some error
      }
      // On success, we should be able to receive notifications
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.addListener("registration", token => {
        _this4.generatedToken = token.value;
        // alert("Push registration success, token: " + token.value);
      });

      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.addListener("registrationError", error => {
        // alert("Error on registration: " + JSON.stringify(error));
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.addListener("pushNotificationReceived", notification => {
        // alert("Push received: " + JSON.stringify(notification));
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_11__.PushNotifications.addListener("pushNotificationActionPerformed", notification => {
        // alert("Push action performed: " + JSON.stringify(notification));
      });
    })();
  }
  requestPushNotificationsPermission() {
    // requesting permission
    this.afMessaging.requestToken // getting tokens
    .subscribe(token => {
      // USER-REQUESTED-TOKEN
      this.generatedToken = token;
      console.log("Permission granted! Save to the server!", token);
    }, error => {
      console.error(error);
    });
  }
  getMessage() {
    this.afMessaging.messages.subscribe(e => {
      console.log(e);
    });
  }
  goBack() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield localStorage.removeItem("authDetail");
      _this5.router.navigate(["/bubble-screen"]);
    })();
  }
  applesign() {
    this.signInWithApple.signin({
      requestedScopes: [_awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_13__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName, _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_13__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail]
    }).then(res => {
      // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
      console.log("apple sign-in", res);
      let RequestData = {
        socialAccessToken: res.identityToken,
        socialLoginType: "APPLE"
      };
      this.socialLogin(RequestData);
    }).catch(error => {
      alert(error.code + " " + error.localizedDescription);
      console.error(error);
    });
  }
};
LoginPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
}, {
  type: _auth_module_service__WEBPACK_IMPORTED_MODULE_12__.AuthModuleService
}, {
  type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_17__.AngularFireMessaging
}, {
  type: _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_13__.SignInWithApple
}];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: "app-login",
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginPage);


/***/ }),

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeRoutingModule": () => (/* binding */ homeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guard/auth.guard */ 55826);




const routes = [{
  path: "home",
  canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: "user/edit-profile",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_profile_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/edit-profile/edit-profile.module */ 61549)).then(m => m.EditProfilePageModule)
  }]
}];
let homeRoutingModule = class homeRoutingModule {};
homeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], homeRoutingModule);


/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);




let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.homeRoutingModule]
})], HomeModule);


/***/ }),

/***/ 48290:
/*!*****************************************************!*\
  !*** ./src/app/providers/authentication.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthData": () => (/* binding */ AuthData),
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configuration */ 78345);



const AUTH = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration.AUTH_KEY;
class AuthData {
  constructor() {
    this.isLoggedIn = false;
  }
}
let AuthenticationService = class AuthenticationService {
  constructor() {
    this.data = new AuthData();
    if (localStorage.getItem(AUTH)) {
      this.data = JSON.parse(localStorage.getItem(AUTH));
    }
  }
  getToken() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH));
    }
    return this.data.token;
  }
  getAuthDetail() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH));
    }
    return this.data;
  }
  setAuth(data) {
    this.data = data;
    localStorage.setItem(AUTH, JSON.stringify(data));
    this.data = JSON.parse(localStorage.getItem(AUTH));
    this.getAuthDetail();
  }
  logout() {
    localStorage.removeItem("authDetail");
    location.reload();
  }
  isAuthenticated() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH));
      return this.data.isLoggedIn;
    } else {
      return false;
    }
  }
  setNewAuthDetail(data) {
    this.data = data;
    localStorage.setItem(AUTH, JSON.stringify(this.data));
    this.getAuthDetail();
    //location.reload();
  }
};

AuthenticationService.ctorParameters = () => [];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
})], AuthenticationService);


/***/ }),

/***/ 33507:
/*!*********************************************!*\
  !*** ./src/app/providers/common.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.service */ 52764);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 48290);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ 93142);








let CommonService = class CommonService {
  constructor(apiService, constantService, authenticationService) {
    this.apiService = apiService;
    this.constantService = constantService;
    this.authenticationService = authenticationService;
    this.$profileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.profileUrl = "";
    this.callingAthleteDetails = null;
    this.callingFanDetail = null;
    this.badgeCount = 0;
    this.athleteEarnings = 0;
    this.VideoCallAnswer = false;
    this.bidAmount = 0;
    this.fanEventType = "VIDEO";
    this.$socketSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.$navigateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    //////////////////////////////////////////// FOR EVENT SUBSCRIPTION ////////////////////////////////////////////
    /**
     * Subscribe to a topic and provide a single handler/observer.........
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    this.channels = {};
  }
  _calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getInitials(fullName) {
    let trimmedName = fullName?.trim();
    let splitName = trimmedName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    if (lastName) {
      return firstName[0] + lastName[0];
    } else {
      return firstName[0];
    }
  }
  formatDate(value) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(value), "MM/dd/yyyy");
  }
  formatDateTime(value) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(value), " MMM dd,yyyy, hh:mm aaaaa'm'");
  }
  formatDateTimeUpdated(value) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(value), " MMM dd,yyyy");
  }
  formatTime(value) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(value), "HH:mm ");
  }
  getUserType(userRole) {
    let isAthlete = userRole.some(role => role === "ATHLETE");
    if (isAthlete) {
      return "athlete";
    } else {
      return "fan";
    }
  }
  getPublicInfo() {
    let request = {
      path: "core/configuration/publicInfo",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.publicInfo = response.data;
    });
  }
  getAthleteEarnings() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // let userRole: userRole = await this.core.getUserRoleFromStorage();
      if (_this.authenticationService.isAuthenticated()) {
        let request = {
          path: "core/event/athlete/cash",
          isAuth: true
        };
        _this.apiService.get(request).subscribe(response => {
          if (response.status.code === _this.constantService.STATUS_OK) {
            _this.athleteEarnings = response?.data?.totalEarning;
            console.log("athleteEarnings", _this.athleteEarnings);
            _this.athleteEarning = _this.athleteEarnings;
          }
        });
      }
    })();
  }
  athleteOnlineOfflineStatus() {
    let request = {
      path: "auth/users/manage/status/change/true",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {});
  }
  removeCommaFromString(value) {
    let converted = parseFloat(value.replace(/,/g, ""));
    return converted;
  }
  convertTimeToMinute(hour, min) {
    return Number(hour) * 60 + Number(min);
  }
  dateFormat(startDate) {
    var countDownDate = new Date(startDate).getTime();
    let days;
    let hours;
    let minutes;
    let seconds;
    let now;
    let timeleft;
    now = new Date().getTime();
    timeleft = countDownDate - now;
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
    seconds = Math.floor(timeleft % (1000 * 60) / 1000);
    let counter;
    if (days >= 1) {
      counter = {
        days: days,
        title_days: "days",
        hours: hours,
        title_hours: "hours",
        minutes: minutes,
        title_min: "mins",
        sec: seconds,
        title_sec: "S"
      };
    } else {
      if (days < 1 && hours < 1) {
        counter = {
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S"
        };
      } else {
        counter = {
          hours: hours,
          title_hours: "hours",
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S"
        };
      }
    }
    return counter;
  }
  secondsToHms(seconds) {
    seconds = Number(seconds);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);
    var mDisplay = m > 0 ? m + (m == 1 ? "" : "  ") : "0";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "0";
    if (s < 10) {
      sDisplay = "0" + sDisplay;
    }
    return `0${mDisplay}: ${sDisplay}s`;
  }
  getBadgeNotificationCount() {
    let request = {
      path: "notification/notification/check/v2",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.badgeCount = response.data.unreadCount;
      console.log("c ", this.badgeCount);
      return this.badgeCount;
    });
  }
  privacy() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let request = {
        path: "auth/configuration/getPrivacyPolicy"
      };
      _this2.apiService.get(request).subscribe(response => {
        _this2.privacypolicy = response.data;
        return _this2.privacypolicy;
      });
    })();
  }
  termcondition() {
    let request = {
      path: "auth/configuration/getTermsAndCondition"
    };
    this.apiService.get(request).subscribe(response => {
      this.termconditions = response.data;
      return this.termconditions;
    });
  }
  subscribe(topic, observer) {
    if (!this.channels[topic]) {
      // You can also use ReplaySubject with one concequence
      this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    return this.channels[topic].subscribe(observer);
  }
  /**
   * Publish some data to the subscribers of the given topic.
   * @param topic The name of the topic to emit data to.
   * @param data data in any format to pass on.
   */
  publish(topic, data) {
    const subject = this.channels[topic];
    if (!subject) {
      // Or you can create a new subject for future subscribers
      return;
    }
    subject.next(data);
  }
  /**
   * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
   * destroy the observable of the topic using this method.
   * @param topic The name of the topic to destroy.
   */
  destroy(topic) {
    const subject = this.channels[topic];
    if (!subject) {
      return;
    }
    subject.complete();
    delete this.channels[topic];
  }
};
CommonService.ctorParameters = () => [{
  type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}, {
  type: _constant_service__WEBPACK_IMPORTED_MODULE_1__.ConstantService
}, {
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
}];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: "root"
})], CommonService);


/***/ }),

/***/ 52764:
/*!***********************************************!*\
  !*** ./src/app/providers/constant.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstantService": () => (/* binding */ ConstantService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ConstantService = class ConstantService {
  constructor() {
    this.HOST_URL = "";
    //URL constant
    // Validation Message
    this.WAIT = "Please Wait..";
    this.UPLOADING = "Uploading,Please Wait..";
    this.VALID_EMAIL_OR_MOBILE_MSG = "Please enter valid email or phone number";
    this.VALID_EMAIL_MSG = "Please enter valid email id";
    this.VALID_OTP = "Please enter valid OTP";
    this.PASSWORD_NOT_MATCH = "New password does not match with confirm password";
    this.VALID_CONF_PSW = "Please enter valid confirm password";
    this.VALID_FIRST_NAME = "Please enter valid first name";
    this.VALID_LAST_NAME = "Please enter valid last name";
    this.ENTER_EMAIL_ID = "Please enter valid email address";
    this.VALID_PASSWORD_MSG = "Please enter valid password";
    // TOAST TYPE Constants
    this.TOAST_SUCCESS = "TOAST_SUCCESS";
    this.TOAST_ERROR = "TOAST_ERROR";
    this.TOAST_WARNING = "TOAST_WARNING";
    this.TOAST_INFO = "TOAST_INFO";
    this.SPLAHSCREEN_STATUS = "SPLAHSCREEN_STATUS";
    // KEY Constants
    this.LOGIN_STATUS = "LOGIN_STATUS";
    this.ACCESS_TOKEN = "TOKEN";
    this.USER_DATA = "USER_DATA";
    this.USER_TYPE = "USER_TYPE";
    // API status
    this.STATUS_OK = "OK";
    this.STATUS_SUCCESS = "SUCCESS";
    this.STATUS_CREATED = "CREATED";
    this.STATUS_UPDATED = "UPDATED";
    this.STATUS_INVALID = "INVALID";
    this.STATUS_DELETED = "DELETED";
  }
};
ConstantService.ctorParameters = () => [];
ConstantService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: "root"
})], ConstantService);


/***/ }),

/***/ 53003:
/*!*******************************************!*\
  !*** ./src/app/providers/core.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ 33507);
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.service */ 52764);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ 93142);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 85191);









let CoreService = class CoreService {
  constructor(toastCtrl, loadingController, alertController, actionSheetCtrl, commonService, dataService, constant, actionSheetController) {
    this.toastCtrl = toastCtrl;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.actionSheetCtrl = actionSheetCtrl;
    this.commonService = commonService;
    this.dataService = dataService;
    this.constant = constant;
    this.actionSheetController = actionSheetController;
    this.TOAST_SUCCESS = "TOAST_SUCCESS";
    this.TOAST_ERROR = "TOAST_ERROR";
    this.TOAST_WARNING = "TOAST_WARNING";
    this.TOAST_INFO = "TOAST_INFO";
    this.isLoading = false;
    this.allowedTypes = ["jpg", "png", "jpeg"];
  }
  showToast(message) {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toastOpts = yield _this.toastCtrl.create({
          message: message,
          duration: 2000,
          animated: true,
          cssClass: "ion-text-center",
          keyboardClose: true,
          translucent: true,
          header: "Info"
        }),
        toast = _this.toastCtrl.create(toastOpts);
      return (yield toast).present();
    })();
  }
  presentLoader(message) {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("loading ", _this2.isLoading);
      if (!_this2.isLoading) {
        _this2.dismissLoader();
      }
      // Return;
      _this2.isLoading = true;
      if (_this2.isLoading == true) {
        _this2.dismissLoader();
      }
      return _this2.loadingController.create({
        spinner: "crescent",
        translucent: true,
        cssClass: "my-loading-class",
        animated: true,
        keyboardClose: true,
        showBackdrop: true,
        backdropDismiss: false,
        message
      }).then(a => {
        a.present().then(() => {
          if (!_this2.isLoading) {
            a.dismiss();
          }
        });
      });
    })();
  }
  dismissLoader() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
      _this3.loadingController.getTop().then( /*#__PURE__*/function () {
        var _ref = (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
          // console.log("value ",value)
          if (value) {
            return yield _this3.loadingController.dismiss();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      // console.log(topLoader);
      // if (topLoader) {
      //   return await this.loadingController.dismiss();
      // }
    })();
  }

  showToastMessage(message, type) {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
          icon,
          position,
          color
        } = _this4._colorPosition(type),
        toast = yield _this4.toastCtrl.create({
          message: `<ion-icon name="${icon}" position="${position}" ></ion-icon> ${message}`,
          duration: 2500,
          position: "top",
          color,
          cssClass: "toast_msg"
        });
      return toast.present();
    })();
  }
  _colorPosition(type) {
    let color = "",
      icon = "",
      position = "";
    if (type == this.TOAST_ERROR) {
      color = "danger";
      icon = "warning-outline";
    } else if (type == this.TOAST_INFO) {
      color = "tertiary";
      icon = "information-circle-outline";
    } else if (type == this.TOAST_SUCCESS) {
      color = "success";
      icon = "checkmark-outline";
    } else if (type == this.TOAST_WARNING) {
      color = "warning";
      icon = "warning-outline";
    }
    position = "relative";
    return {
      icon,
      position,
      color
    };
  }
  changeProfile() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this5.actionSheetController.create({
        header: "Change profile pic",
        animated: true,
        buttons: [{
          text: "Use Camera",
          icon: "camera-outline",
          handler: () => {
            _this5.selectImage();
          }
        }, {
          text: "Choose from gallery",
          icon: "image-outline",
          handler: () => {
            _this5.getImageFromGallery();
          }
        }, {
          text: "Remove profile picture",
          role: "destructive",
          icon: "trash",
          handler: () => {
            _this5.removeImage();
          }
        }, {
          text: "Cancel",
          icon: "close",
          role: "cancel"
        }]
      });
      console.log("working");
      return yield actionSheet.present();
    })();
  }
  removeImage() {
    this.commonService.profileUrl = "";
  }
  selectImage() {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let image = yield _this6.captureImage();
      let blob = yield fetch(image.webPath).then(r => r.blob());
      let imageSize = _this6.formatBytes(blob.size);
      if (imageSize > _this6.commonService.publicInfo.imageMaxSize) {
        _this6.showToastMessage("please upload image that is under " + _this6.commonService.publicInfo.imageMaxSize + " mb ", _this6.TOAST_WARNING);
        return;
      }
      _this6.uploadImageToServer(blob, image.format);
    })();
  }
  getImageFromGallery() {
    var _this7 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let photosArray = yield _this7.pickImage();
      let image = photosArray.photos[0];
      let imageType = image?.format;
      if (!_this7.allowedTypes.includes(imageType)) {
        _this7.showToastMessage("Only JPG, JPEG or PNG images are allowed.", _this7.TOAST_WARNING);
        return;
      }
      let blob = yield fetch(image.webPath).then(r => r.blob());
      let imageSize = _this7.formatBytes(blob.size);
      if (imageSize > 5) {
        _this7.showToastMessage("please upload image that is under 5 mb ", _this7.TOAST_WARNING);
        return;
      }
      _this7.uploadImageToServer(blob, image.format);
    })();
  }
  b6toBlob(b64Data) {
    let contentType = "";
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }
  uploadImage() {
    return this.presentActionSheet();
  }
  presentActionSheet() {
    var _this8 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this8.actionSheetCtrl.create({
        header: "Select Option",
        buttons: [{
          text: "Gallery",
          handler: () => {
            _this8.pickImage();
          }
        }, {
          text: "Camera",
          handler: () => {
            _this8.captureImage();
          }
        }]
      });
      yield actionSheet.present();
    })();
  }
  captureImage() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      // var imageUrl = image.webPath;
      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
      return image;
    })();
  }
  pickImage() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.pickImages({
        quality: 90,
        limit: 1
      });
      return image;
    })();
  }
  // uploadImageToServer(image) {
  //   this.presentLoader(this.constant.UPLOADING);
  //   //const imageFile = this.b6toBlob(image);
  //   // const params = new FormData();
  //   //params.append("file", imageFile, `${Date.parse(new Date().toDateString())}.jpg`);
  //   //console.log(params);
  //   //let image: string = this.EXAMPLEIMG;
  //   const imageFile: Blob = this.b6toBlob(image);
  //   const params: FormData = new FormData();
  //   params.append("file", imageFile);
  //   console.log(params);
  //   return this.dataService
  //     .imgUpload(this.constant.PROFILE_PICTURE_UPLOAD, params)
  //     .subscribe((response: any) => {
  //       if (response.status.code == this.constant.STATUS_OK) {
  // this.common.profileUrl = response.data;
  //         this.dismissLoader();
  //         this.showToastMessage(
  //           response.status.description,
  //           this.constant.TOAST_SUCCESS
  //         );
  //       } else {
  //         this.dismissLoader();
  //         this.constant.showToastMessage(
  //           response.status.description,
  //           this.constant.TOAST_ERROR
  //         );
  //       }
  //     });
  // }
  uploadImageToServer(imageBlob, imageFormat) {
    if (!imageBlob) {
      return;
    }
    let imageFormData = new FormData();
    imageFormData.append("file", imageBlob, `profile.${imageFormat}`);
    let request = {
      path: "auth/file/upload/profile",
      data: imageFormData,
      isAuth: true
    };
    this.presentLoader(this.constant.WAIT);
    this.dataService.postImage(request).subscribe(response => {
      this.dismissLoader();
      this.commonService.profileUrl = response.data.url;
    });
  }
  formatBytes(bytes, decimals = 2) {
    return bytes / 1024 / 1024; // in MiB
  }

  getUserRoleFromStorage() {
    var _this9 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
        key: "userDetails"
      });
      let userData = JSON.parse(value);
      return _this9.commonService.getUserType(userData.roles);
    })();
  }
  getUserDataFromStorage() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
        key: "userDetails"
      });
      let userData = JSON.parse(value);
      return userData;
    })();
  }
};
CoreService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
}, {
  type: _data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: _constant_service__WEBPACK_IMPORTED_MODULE_3__.ConstantService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}];
CoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: "root"
})], CoreService);


/***/ }),

/***/ 93142:
/*!*******************************************!*\
  !*** ./src/app/providers/data.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45050);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configuration */ 78345);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 48290);
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network.service */ 31005);
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant.service */ 52764);










let DataService = class DataService {
  constructor(http, router, authService, _networkService, constant) {
    this.http = http;
    this.router = router;
    this.authService = authService;
    this._networkService = _networkService;
    this.constant = constant;
    this.BASE_URL = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration.BASE_URL;
    this.response = [];
  }
  get isConnected() {
    return this._networkService.isOnline;
  }
  _isOffline(val) {
    return !val || !this._networkService.isOnline;
  }
  get(request, isTokenTemporary = false) {
    return this.http.get(`${this.BASE_URL + "" + request.path}`, {
      headers: this.getHeader(request.isAuth)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      console.log(err);
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      if (res["token"]) {
        let data = this.authService.getAuthDetail();
        data = {
          ...data,
          token: res["token"],
          isLoggedIn: isTokenTemporary ? false : true
        };
        this.authService.setAuth(data);
      }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  getVideoSession(request) {
    return this.http.get(`${_configuration__WEBPACK_IMPORTED_MODULE_0__.configuration.VIDEO_URL + "" + request.path}`, {
      headers: this.getHeader(request.isAuth)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      console.log(err);
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      // if (res["token"]) {
      //   let data = this.authService.getAuthDetail();
      //   data = {
      //     ...data,
      //     token: res["token"],
      //     isLoggedIn: true,
      //   };
      //   this.authService.setAuth(data);
      // }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  getWithParam(requestUrl, isByPass = false, ...params) {
    return this.http.get(`${requestUrl}/${params}`, {
      headers: this.getHeader(isByPass)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      console.log(err);
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      if (res["token"]) {
        localStorage.setItem(this.constant.ACCESS_TOKEN, res.token);
      }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  // delete(request: Request, isByPass = false): Observable<any> {
  //   console.log(request);
  //   return this.http
  //     .delete(this.BASE_URL + request.path, {
  //       headers: this.getHeader(isByPass),
  //     })
  //     .pipe(
  //       takeWhile((): boolean => this._isOnline()),
  //       catchError((err) => {
  //         return err;
  //       }),
  //       map((res: any) => {
  //         if (res["token"]) {
  //           localStorage.setItem(this.constant.ACCESS_TOKEN, res.token);
  //         }
  //         return res;
  //       })
  //     );
  // }
  post(request, isTokenTemporary = false) {
    return this.http.post(`${this.BASE_URL + "" + request.path}`, request.data, {
      headers: this.getHeader(request.isAuth)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      if (res["token"]) {
        let data = this.authService.getAuthDetail();
        data = {
          ...data,
          token: res["token"],
          isLoggedIn: isTokenTemporary ? false : true
        };
        this.authService.setAuth(data);
      }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  postwithURL(requestUrl, isByPass = false, params) {
    return this.http.post(`${this.BASE_URL + "" + requestUrl}`, params, {
      headers: this.getHeader(isByPass)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      if (res["token"]) {
        let data = this.authService.getAuthDetail();
        data = {
          ...data,
          token: res["token"],
          isLoggedIn: true
        };
        this.authService.setAuth(data);
      }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  downLoadFile(data, type, filename, fileExe) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    let blob = new Blob([data], {
      type: type
    });
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename + fileExe;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  postImage(request) {
    return this.http.post(`${this.BASE_URL + "" + request.path}`, request.data, {
      headers: this.getHeaderImage(request.isAuth)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this._isOnline()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
      return err;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError.bind(this)));
  }
  getHeader(isByPass) {
    const currentTimeZone = new Date().toLocaleTimeString("en-us", {
      timeZoneName: "short"
    }).split(" ")[2];
    const version = "1";
    let token = "";
    if (isByPass) {
      token = this.authService.getToken();
    }
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    header = header.append("timezone", currentTimeZone);
    header = header.append("Api-Version", version);
    if (isByPass) {
      // header = header.append("Authentication", token);
      //if (this.authService.isAuthenticated()) {
      header = header.append("TOKEN", token);
      // }
    }

    return header;
  }
  // postImage(request: Request) {
  //   let headers = new HttpHeaders();
  //   const token = this.authService.getToken();
  //   if (request.isAuth) {
  //     headers = new HttpHeaders({ TOKEN: token });
  //   }
  //   headers.set("Content-Type", "multipart/form-data");
  //   //console.log(token);
  //   return this.http
  //     .post(configuration.BASE_URL + request.path, request.data, {
  //       headers: headers,
  //     })
  //     .pipe(retry(1), catchError(this.handleError.bind(this)));
  // }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  getHeaderImage(isByPass = false) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders();
    const token = this.authService.getToken();
    if (isByPass) {
      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
        TOKEN: token
      });
    }
    headers.set("Content-Type", "multipart/form-data");
    return headers;
  }
  handleError(error) {
    if (error["error"] != undefined) {
      ///this.spinner.hide();
      // this.toastrService.error(error['error']['status']['description']); TODO Implemnet This
    }
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // this.toastrService.error(error['error']['error']);
      // client-side error
      errorMessage = error; //`Error: ${error.error.message}`;
    } else {
      // this.toastrService.error(error['error']['error']);
      // server-side error
      errorMessage = error; //`Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(errorMessage);
  }
  _isOnline() {
    return this._networkService.isOnline;
  }
  _headerInit() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders();
    if (window.localStorage.getItem(this.constant.ACCESS_TOKEN) != null) {
      headers = headers.append("TOKEN", window.localStorage.getItem(this.constant.ACCESS_TOKEN));
    }
    return headers;
  }
};
DataService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService
}, {
  type: _network_service__WEBPACK_IMPORTED_MODULE_2__.NetworkService
}, {
  type: _constant_service__WEBPACK_IMPORTED_MODULE_3__.ConstantService
}];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
  providedIn: "root"
})], DataService);


/***/ }),

/***/ 31005:
/*!**********************************************!*\
  !*** ./src/app/providers/network.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53298);






let NetworkService = class NetworkService {
  constructor() {
    this._didInternetWentOffline = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this._didInternetWentOffline$ = this._didInternetWentOffline.asObservable();
    this._networkInit();
    this.logCurrentNetworkStatus();
  }
  _networkInit() {
    _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener("networkStatusChange", status => {
      this._didInternetWentOffline.next(status.connected);
    });
  }
  logCurrentNetworkStatus() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
      _this._didInternetWentOffline.next(status.connected);
    })();
  }
  networkListener() {
    return this._didInternetWentOffline$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
  }
  get isOnline() {
    return this._didInternetWentOffline.value;
  }
};
NetworkService.ctorParameters = () => [];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: "root"
})], NetworkService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import firebase from "firebase/compat";
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC9bgFndsINhDWlCS3WdjPLzreloXXMb6g",
    authDomain: "bubble-app-55e11.firebaseapp.com",
    projectId: "bubble-app-55e11",
    storageBucket: "bubble-app-55e11.appspot.com",
    messagingSenderId: "573316732862",
    appId: "1:573316732862:web:e8741d02dde5cdd597cbef",
    measurementId: "G-7F31KFLH78"
  }
};
//const messaging = firebase.messaging()
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video-part {\n  margin: 0;\n  padding: 0;\n}\n.video-part video {\n  width: 100%;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;AACF;AAAE;EACE,WAAA;EACA,WAAA;AAEJ","sourcesContent":[".video-part {\n  margin: 0;\n  padding: 0;\n}\n.video-part video {\n  width: 100%;\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42328:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/auth-module/forgot-password/forgot-password.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  color: var(--white-clr);\n  font-size: 1.7rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin-bottom: -115px !important;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  min-height: 126px;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 15px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 25px 0 0px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: rgba(var(--white-bg-rgb), 0.7);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label span.red {\n  color: var(--red-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating .label-floating {\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  transform: translate3d(0, -20px, 0) !important;\n  z-index: 9999;\n  --display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: -17px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  --padding-top: 13px;\n  --padding-bottom: 13px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border {\n  border: 1px solid var(--red-clr) !important;\n  border-radius: 10px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border ion-label {\n  color: var(--red-clr) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\nion-content .main-screen .content-part .forgot-pass {\n  text-align: right;\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .forgot-pass p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.873rem;\n  width: 100%;\n  word-break: break-all;\n  white-space: normal;\n  padding: 0 12px;\n  line-height: 18px;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .auth-back-text {\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-back-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  line-height: 19px;\n}\nion-content .main-screen .content-part .auth-back-text p span {\n  font-weight: 700;\n  font-size: 0.875rem;\n}\nion-content .main-screen .content-part .auth-back-text p ion-icon {\n  font-size: 1rem;\n  color: var(--white-clr);\n  position: absolute;\n  left: 0;\n  top: 2px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.error-border {\n  border: 2px solid red !important;\n  border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/auth-module/forgot-password/forgot-password.page.scss"],"names":[],"mappings":"AACE;EACE,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;AAAJ;AACI;EACE,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;AACN;;AAKA;EACE,qBAAA;EACA,kBAAA;EACA,gCAAA;AAFF;AAGE;EACE,aAAA;EACA,iBAAA;EACA,YAAA;AADJ;AAEI;EACE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,MAAA;EACA,iBAAA;AAAN;AACM;EACE,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;AACR;AACM;EACE,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,wBAAA;EAAA,mBAAA;EACA,UAAA;AACR;AAAQ;EACE,eAAA;EACA,cAAA;AAEV;AACM;EACE,SAAA;EACA,UAAA;AACR;AAAQ;EACE,WAAA;EACA,WAAA;AAEV;AACM;EACE,8CAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;AACR;AAGI;EACE,eAAA;EACA,SAAA;EAGA,mBAAA,EAAA,iBAAA;EAaA,wEAAA;EACA,mHAAA;EAEA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,4BAAA;EACA,6BAAA;EACA,gCAAA;AAdN;AAeM;EACE,kBAAA;EACA,UAAA;AAbR;AAeM;EACE,kBAAA;EACA,sBAAA;EACA,4BAAA;EACA,6BAAA;AAbR;AAkBQ;EACE,eAAA;EACA,WAAA;EAAa,YAAA;AAfvB;AAiBQ;EACE,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;AAfV;AAiBQ;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;AAfV;AAyBM;EACE,eAAA;AAvBR;AAwBQ;EACE,mBAAA;AAtBV;AAuBU;EACE,qBAAA;EACA,yBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,4CAAA;AArBZ;AAsBY;EACE,SAAA;EAEA,mBAAA;EACA,wBAAA;EACA,gBAAA;AArBd;AAsBc;EACE,qBAAA;AApBhB;AAuBY;EAEE,6CAAA;AArBd;AAuBY;EAGE,8CAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,uBAAA;AAtBd;AAwBY;EACE,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;AAtBd;AAwBY;EACE,SAAA;EACA,WAAA;AAtBd;AAwBY;EACE,2CAAA;EACA,mBAAA;AAtBd;AAuBc;EACE,gCAAA;AArBhB;AA0BY;EACE,kBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;AAxBd;AAyBc;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,OAAA;AAvBhB;AA8BM;EACE,iBAAA;EACA,kBAAA;AA5BR;AA6BQ;EACE,uBAAA;EACA,SAAA;EACA,kBAAA;AA3BV;AA+BM;EACE,kBAAA;EACA,kBAAA;AA7BR;AA8BQ;EACE,eAAA;EACA,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EAEA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,0DAAA;EACA,0BAAA;AA7BV;AA8BU;EACE,YAAA;EACA,WAAA;AA5BZ;AA8BU;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;EACA,gBAAA;EACA,wBAAA;EAAA,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,0BAAA;AA5BZ;AA8BU;EACE,UAAA;EACA,oBAAA;AA5BZ;AAoCM;EACE,kBAAA;AAlCR;AAmCQ;EACE,uBAAA;EACA,SAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AAjCV;AAkCU;EACE,gBAAA;EACA,mBAAA;AAhCZ;AAkCU;EACE,eAAA;EACA,uBAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;AAhCZ;AAqCM;EACE,SAAA;EACA,UAAA;AAnCR;AAoCQ;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,4BAAA;EACA,6BAAA;AAlCV;AAoCQ;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mCAAA;EACA,WAAA;AAlCV;AAoCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,0EAAA;AAlCV;AAqCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AAnCV;AAqCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAnCV;AAsCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AApCV;AAsCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AApCV;AAuCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AArCV;AAuCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AArCV;AAwCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAtCV;AAwCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AAtCV;AAyCQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAvCV;AA0CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,0EAAA;AAxCV;AA2CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AAzCV;AA2CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAzCV;AA4CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AA1CV;AA4CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AA1CV;AA6CQ;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AA3CV;AA6CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AA3CV;AA8CQ;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AA5CV;AA8CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AA5CV;AA+CQ;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AA7CV;AAgDQ;EACE;IACE,cAAA;IACA,wBAAA;EA9CV;EAgDQ;IACE,2BAAA;EA9CV;EAgDQ;IACE,cAAA;IACA,6BAAA;EA9CV;AACF;;AAoDA;EACE,gCAAA;EACA,mBAAA;AAjDF","sourcesContent":["ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  color: var(--white-clr);\n  font-size: 1.7rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin-bottom: -115px !important;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  min-height: 126px;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 15px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 25px 0 0px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: rgba(var(--white-bg-rgb), 0.7);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label span.red {\n  color: var(--red-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating .label-floating {\n  -webkit-transform: translate3d(0, 13px, 0) !important;\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  -webkit-transform: translate3d(0, -20px, 0) !important;\n  transform: translate3d(0, -20px, 0) !important;\n  z-index: 9999;\n  --display: inline-block;\n  width: fit-content;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: -17px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  --padding-top: 13px;\n  --padding-bottom: 13px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border {\n  border: 1px solid var(--red-clr) !important;\n  border-radius: 10px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border ion-label {\n  color: var(--red-clr) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\nion-content .main-screen .content-part .forgot-pass {\n  text-align: right;\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .forgot-pass p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  font-size: 0.873rem;\n  width: 100%;\n  word-break: break-all;\n  white-space: normal;\n  padding: 0 12px;\n  line-height: 18px;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .auth-back-text {\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-back-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  line-height: 19px;\n}\nion-content .main-screen .content-part .auth-back-text p span {\n  font-weight: 700;\n  font-size: 0.875rem;\n}\nion-content .main-screen .content-part .auth-back-text p ion-icon {\n  font-size: 1rem;\n  color: var(--white-clr);\n  position: absolute;\n  left: 0;\n  top: 2px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.error-border {\n  border: 2px solid red !important;\n  border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28734:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth-module/login/login.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.94rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  min-height: 160px;\n  top: 0;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 7px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 25px 0 0px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: rgba(var(--white-bg-rgb), 0.7);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label span.red {\n  color: var(--red-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating .label-floating {\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  transform: translate3d(0, -20px, 0) !important;\n  z-index: 9999;\n  --display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: -17px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  --padding-top: 13px;\n  --padding-bottom: 13px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  cursor: pointer;\n  margin: 0;\n  width: 22px;\n  opacity: 0.45;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border {\n  border: 1px solid var(--red-clr) !important;\n  border-radius: 10px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border ion-label {\n  color: var(--red-clr) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\nion-content .main-screen .content-part .forgot-pass {\n  text-align: right;\n  padding: 10px 10px 7px;\n}\nion-content .main-screen .content-part .forgot-pass p {\n  cursor: pointer;\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  display: inline-block;\n  padding: 5px;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 5px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 0.873rem;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .or-login-with {\n  text-align: center;\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .or-login-with .main-text {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .content-part .or-login-with .main-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  padding: 0 10px;\n  display: inline-block;\n  flex: 1;\n  word-break: normal;\n  white-space: nowrap;\n}\nion-content .main-screen .content-part .or-login-with .main-text .line {\n  width: 100%;\n  height: 2px;\n  background: var(--white-clr);\n}\nion-content .main-screen .content-part .social-media {\n  text-align: center;\n  padding: 5px 15px 8px;\n}\nion-content .main-screen .content-part .social-media ion-button {\n  --background: var(--white-clr);\n  --background-focused: var(--white-clr);\n  --background-hover: var(--white-clr);\n  --background-activated: var(--white-clr);\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  box-shadow: none;\n  margin: 5px 10px;\n  --box-shadow: 0 4px 7px #5c5353;\n}\nion-content .main-screen .content-part .social-media ion-button img {\n  max-width: 100%;\n}\nion-content .main-screen .content-part .create-account {\n  outline: none;\n  text-align: center;\n  padding: 5px 15px 15px;\n}\nion-content .main-screen .content-part .create-account p {\n  cursor: pointer;\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 1rem;\n  text-decoration: underline;\n  display: inline-block;\n  font-weight: 600;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/auth-module/login/login.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.94rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  min-height: 160px;\n  top: 0;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 7px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 25px 0 0px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: rgba(var(--white-bg-rgb), 0.7);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-label span.red {\n  color: var(--red-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating .label-floating {\n  -webkit-transform: translate3d(0, 13px, 0) !important;\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .main-screen .content-part .auth-form .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  -webkit-transform: translate3d(0, -20px, 0) !important;\n  transform: translate3d(0, -20px, 0) !important;\n  z-index: 9999;\n  --display: inline-block;\n  width: fit-content;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: -17px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  --padding-top: 13px;\n  --padding-bottom: 13px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  cursor: pointer;\n  margin: 0;\n  width: 22px;\n  opacity: 0.45;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border {\n  border: 1px solid var(--red-clr) !important;\n  border-radius: 10px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item.error-border ion-label {\n  color: var(--red-clr) !important;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\nion-content .main-screen .content-part .auth-form .input-box .error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\nion-content .main-screen .content-part .forgot-pass {\n  text-align: right;\n  padding: 10px 10px 7px;\n}\nion-content .main-screen .content-part .forgot-pass p {\n  cursor: pointer;\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  display: inline-block;\n  padding: 5px;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 5px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 0.873rem;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .or-login-with {\n  text-align: center;\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .or-login-with .main-text {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .content-part .or-login-with .main-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  padding: 0 10px;\n  display: inline-block;\n  flex: 1;\n  word-break: normal;\n  white-space: nowrap;\n}\nion-content .main-screen .content-part .or-login-with .main-text .line {\n  width: 100%;\n  height: 2px;\n  background: var(--white-clr);\n}\nion-content .main-screen .content-part .social-media {\n  text-align: center;\n  padding: 5px 15px 8px;\n}\nion-content .main-screen .content-part .social-media ion-button {\n  --background: var(--white-clr);\n  --background-focused: var(--white-clr);\n  --background-hover: var(--white-clr);\n  --background-activated: var(--white-clr);\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 40px;\n  width: 40px;\n  --border-radius: 50%;\n  box-shadow: none;\n  margin: 5px 10px;\n  --box-shadow: 0 4px 7px #5c5353;\n}\nion-content .main-screen .content-part .social-media ion-button img {\n  max-width: 100%;\n}\nion-content .main-screen .content-part .create-account {\n  outline: none;\n  text-align: center;\n  padding: 5px 15px 15px;\n}\nion-content .main-screen .content-part .create-account p {\n  cursor: pointer;\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 1rem;\n  text-decoration: underline;\n  display: inline-block;\n  font-weight: 600;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <!-- <ion-grid class=\"video-part\" [hidden]=\"!isShowingSplashScreen\">\n    <video height=\"100%\" loop=\"\" width=\"100%\" muted autoplay>\n      <source src=\"assets/video/splash.mp4\" />\n\n      <p class=\"warning\">Your browser does not support HTML5 video.</p>\n    </video>\n  </ion-grid> -->\n  <ion-router-outlet [hidden]=\"isShowingSplashScreen\"></ion-router-outlet>\n  <!-- <a style=\"z-index:999;display: none;\" id=\"playstore\" href=\"https://play.google.com/store/apps/details?id=com.bubble_app_9093.app\"></a>\n  <a style=\"z-index:999;display: none;\" id=\"ios\" href=\"https://apps.apple.com/in/app/bubbleappnil/id1659995286\"></a> -->\n</ion-app>\n";

/***/ }),

/***/ 29344:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/auth-module/forgot-password/forgot-password.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar mode=\"md\">\n    <ion-icon\n      slot=\"start\"\n      name=\"arrow-back-outline\"\n      routerLink=\"/auth/login\" mode=\"md\"\n    ></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-screen\">\n    <div class=\"top-screen\">\n      <!-- <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon> -->\n      <ion-grid class=\"video-part\">\n        <video\n          height=\"100%\"\n          width=\"100%\"\n          poster=\"assets/video/video-poster.png\"\n          loop=\"\"\n          muted\n          autoplay\n          webkit-playsinline\n          playsinline\n        >\n          <source src=\"assets/video/video.mp4\" />\n          <source src=\"assets/video/video.webm\" />\n          <p class=\"warning\">Your browser does not support HTML5 video.</p>\n        </video>\n      </ion-grid>\n\n      <ion-grid class=\"logo-head\">\n        <img src=\"assets/images/logo.svg\" />\n        <div class=\"nil4all\">\n          <span>#NIL4ALL</span>\n        </div>\n      </ion-grid>\n\n      <ion-grid class=\"overlay-bg\"></ion-grid>\n    </div>\n\n    <ion-grid class=\"content-part\">\n      <div class=\"main-part\">\n        <div class=\"auth-title sticky-top\">\n          <img src=\"assets/images/auth-img.svg\" />\n          <h4>Forgot Password</h4>\n          <p>Please enter your login email address to reset your password.</p>\n        </div>\n\n        <div class=\"auth-form\">\n          <div class=\"input-box\">\n            <ion-item\n              [ngClass]=\"isFormSubmitted && emailController.invalid ? 'error-border':' '\"\n              lines=\"none\"\n              id=\"emailInputContainer\"\n            >\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input\n                lines=\"none\"\n                autocomplete=\"off\"\n                type=\"email\"\n                [formControl]=\"emailController\"\n              ></ion-input>\n              <img\n                class=\"ion-align-self-center op-45\"\n                slot=\"end\"\n                src=\"assets/icon/email.svg\"\n                *ngIf=\"emailController.invalid\"\n              />\n              <img\n                class=\"ion-align-self-center\"\n                slot=\"end\"\n                src=\"assets/icon/right-green.svg\"\n                *ngIf=\" emailController.valid\"\n              />\n            </ion-item>\n            <div\n              *ngIf=\"isFormSubmitted && emailController.errors?.required\"\n              class=\"error-msg\"\n              id=\"emailRequiredError\"\n            >\n              <p>\n                <img src=\"assets/icon/info-red.svg\" /> Email address is required\n              </p>\n            </div>\n            <div\n              *ngIf=\"isFormSubmitted && emailController?.errors?.pattern\"\n              class=\"error-msg\"\n              id=\"emailInvalidError\"\n            >\n              <p>\n                <img src=\"assets/icon/info-red.svg\" /> Email address is invalid\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"auth-btn\">\n          <ion-button (click)=\"onSubmit()\" id=\"submitBtn\">\n            <img src=\"assets/images/button-auth.png\" />\n            <span\n              >Send <br />\n              OTP</span\n            >\n          </ion-button>\n        </div>\n\n        <div class=\"auth-back-text\">\n          <p routerLink=\"/auth/login\">\n            Back to\n            <span>Login</span>\n            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n          </p>\n        </div>\n      </div>\n      <ion-grid class=\"buble-part\">\n        <div class=\"dots-bubble\">\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n        </div>\n      </ion-grid>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 82585:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth-module/login/login.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar mode=\"ios\">\n    <ion-icon \n      slot=\"start\"\n      name=\"arrow-back-outline\"\n      (click)=\"goBack()\" mode=\"md\"\n    ></ion-icon>\n    <!-- <ion-buttons slot=\"start\" mode=\"ios\" style=\"margin-top: 50px;\">\n      <ion-back-button mode=\"ios\" defaultHref=\"/bubble-screen\"></ion-back-button>\n    </ion-buttons> -->\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-screen\">\n    <div class=\"top-screen\">\n      <ion-grid class=\"video-part\">\n        <video\n          height=\"100%\"\n          width=\"100%\"\n          poster=\"assets/video/video-poster.png\"\n          loop=\"\"\n          muted\n          autoplay\n          webkit-playsinline\n          playsinline\n        >\n          <source src=\"assets/video/video.mp4\" />\n          <source src=\"assets/video/video.webm\" />\n          <p class=\"warning\">Your browser does not support HTML5 video.</p>\n        </video>\n      </ion-grid>\n\n      <ion-grid class=\"logo-head\">\n        <img src=\"assets/images/logo.svg\" />\n        <div class=\"nil4all\">\n          <span>#NIL4ALL</span>\n        </div>\n      </ion-grid>\n\n      <ion-grid class=\"overlay-bg\"></ion-grid>\n    </div>\n\n    <ion-grid class=\"content-part\">\n      <div class=\"main-part\">\n        <div class=\"auth-title sticky-top\">\n          <img src=\"assets/images/auth-img.svg\" />\n          <h4>Login</h4>\n          <p>Welcome! Login to your account.</p>\n        </div>\n\n        <form [formGroup]=\"loginForm\" class=\"auth-form\">\n          <div class=\"input-box\">\n            <ion-item\n              id=\"userNameInputContainer\"\n              [ngClass]=\"isFormSubmitted && loginForm.controls.email.invalid ? 'error-border':' '\"\n              lines=\"none\"\n            >\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input\n                formControlName=\"email\"\n                autocomplete=\"on\"\n                type=\"email\"\n              ></ion-input>\n              <img\n                *ngIf=\"loginForm.controls.email.invalid\"\n                class=\"ion-align-self-center\"\n                slot=\"end\"\n                src=\"assets/icon/email.svg\"\n              />\n              <img\n                *ngIf=\" loginForm.controls.email.valid\"\n                class=\"ion-align-self-center\"\n                style=\"opacity: 1;\"\n                slot=\"end\"\n                src=\"assets/icon/right-green.svg\"\n              />\n            </ion-item>\n            <div\n              *ngIf=\"isFormSubmitted && loginForm.controls.email.invalid\"\n              class=\"error-msg\"\n              id=\"userNameError\"\n            >\n              <p>\n                <img src=\"assets/icon/info-red.svg\" /> Email address is required\n              </p>\n            </div>\n          </div>\n\n          <div class=\"input-box\">\n            <ion-item\n              id=\"passwordInputContainer\"\n              [ngClass]=\"isFormSubmitted && loginForm.controls.password.invalid ? 'error-border':' '\"\n              lines=\"none\"\n            >\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                formControlName=\"password\"\n                autocomplete=\"on\"\n                [type]=\" isShowingPassword ? 'text' : 'password'\"\n              ></ion-input>\n              <img\n                *ngIf=\"isShowingPassword\"\n                (click)=\"showPasswordToggle()\"\n                class=\"ion-align-self-center\"\n                slot=\"end\"\n                src=\"assets/icon/show.svg\"\n              />\n              <img\n                *ngIf=\"!isShowingPassword\"\n                (click)=\"showPasswordToggle()\"\n                class=\"ion-align-self-center\"\n                slot=\"end\"\n                src=\"assets/icon/hide.svg\"\n              />\n            </ion-item>\n            <div\n              *ngIf=\"isFormSubmitted && loginForm.controls.password.invalid\"\n              class=\"error-msg\"\n              id=\"passwordError\"\n            >\n              <p><img src=\"assets/icon/info-red.svg\" /> Password is required</p>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"forgot-pass\">\n          <p routerLink=\"/auth/forgot\">Forgot Password?</p>\n        </div>\n\n        <div class=\"auth-btn\">\n          <ion-button id=\"submitBtn\" (click)=\"onSubmit()\">\n            <img src=\"assets/images/button-auth.png\" />\n            <span>Login</span>\n          </ion-button>\n        </div>\n\n        <div routerLink=\"/auth/signup\" class=\"create-account\">\n          <p>Create BubbleApp Account</p>\n        </div>\n\n        <div class=\"or-login-with\">\n          <div class=\"main-text\">\n            <span class=\"line\"></span>\n            <p>Or Login With</p>\n            <span class=\"line\"></span>\n          </div>\n        </div>\n\n        \n\n<!-- commented for ios -->\n\n        <div class=\"social-media\">\n          <ion-button (click)=\"faceBookSignIn()\">\n            <img src=\"assets/images/facebook.svg\" />\n          </ion-button>\n          <ion-button (click)=\"googleSignIn()\">\n            <img src=\"assets/images/google.svg\" />\n          </ion-button>\n          <ion-button *ngIf=\"this.isIOSPlatform\" (click)=\"applesign()\">\n            <img src=\"assets/images/apple.svg\" />\n          </ion-button> \n        </div>\n\n        \n      </div>\n      <ion-grid class=\"buble-part\">\n        <div class=\"dots-bubble\">\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n        </div>\n      </ion-grid>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map