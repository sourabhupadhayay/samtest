(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_waitlist_waitlist_module_ts"],{

/***/ 85341:
/*!***************************************************************!*\
  !*** ./src/app/directives/models/safe-execution.decorator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeExecution": () => (/* binding */ SafeExecution)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable prefer-reflect */
/* eslint-disable func-names */
/*
 *  Safe execution decorator to execure code safely with out breaking runtime exeuction and termination
 * throw null when it doesnt execute safely in try braces - Anukool
 */
function SafeExecution() {
  return (_target, _propertyKey, descriptor) => {};
  return function (_target, _propertyKey, descriptor) {
    const oldFunc = descriptor.value;
    descriptor.value = function () {
      try {
        // eslint-disable-next-line prefer-rest-params
        const result = oldFunc.apply(this, arguments);
        if (result) {
          return result instanceof Promise ? Promise.resolve(result) : result;
        }
      } catch (error) {}
    };
    return descriptor;
  };
}

/***/ }),

/***/ 32746:
/*!***********************************************************************!*\
  !*** ./src/app/pages/schedule/dismissmodal/dismissmodal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DismissmodalComponent": () => (/* binding */ DismissmodalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dismissmodal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dismissmodal.component.html?ngResource */ 30136);
/* harmony import */ var _dismissmodal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dismissmodal.component.scss?ngResource */ 54254);
/* harmony import */ var _dismissmodal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dismissmodal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let DismissmodalComponent = class DismissmodalComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
  }
  ngOnInit() {}
};
DismissmodalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}];
DismissmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-dismissmodal",
  template: _dismissmodal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dismissmodal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DismissmodalComponent);


/***/ }),

/***/ 38586:
/*!**************************************************************************!*\
  !*** ./src/app/pages/waitlist/athlete-waitlist/athlete-waitlist.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AthleteWaitlistPage": () => (/* binding */ AthleteWaitlistPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _athlete_waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./athlete-waitlist.page.html?ngResource */ 13007);
/* harmony import */ var _athlete_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./athlete-waitlist.page.scss?ngResource */ 17100);
/* harmony import */ var _athlete_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_athlete_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_providers_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/authentication.service */ 48290);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_schedule_dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/schedule/dismissmodal/dismissmodal.component */ 32746);













let AthleteWaitlistPage = class AthleteWaitlistPage {
  constructor(router, commonService, apiService, coreService, constant, authenticationService, navController, cd, modalCtrl, constantService) {
    this.router = router;
    this.commonService = commonService;
    this.apiService = apiService;
    this.coreService = coreService;
    this.constant = constant;
    this.authenticationService = authenticationService;
    this.navController = navController;
    this.cd = cd;
    this.modalCtrl = modalCtrl;
    this.constantService = constantService;
    this.connectedFans = [];
    this.pendingCallFans = [];
    this.calledFans = [];
    this.fanImagesList = [];
    this.slideOpts = {
      slidesPerView: 3,
      initialSlide: 1,
      speed: 400,
      // loop: true,
      autoplay: {
        delay: 2000
      }
    };
    this.currentIndex = 0;
    console.log("constructor call");
    this.ensureVideoPlays();
  }
  ngOnInit() {
    this.getSponsor();
    this.getUserDataFromStorage();
    this.getEventDetails();
    this.ensureVideoPlays();
    this.navigateSubscription = this.commonService.$navigateSubject.subscribe(() => {
      this.ensureVideoPlays();
      let audio = document.getElementById("muteSound");
      audio.muted = false;
    });
  }
  ionDidViewEnter() {
    this.ensureVideoPlays();
    let audio = document.getElementById("muteSound");
    audio.muted = false;
    console.log("ion did view");
    // this.eventEnd();
  }

  ionViewDidLeave() {
    this.soundOnOff();
    clearInterval(this.interval);
  }
  ensureVideoPlays() {
    const video = document.querySelector("video");
    if (!video) return;
    const promise = video.play();
    if (promise !== undefined) {
      promise.then(() => {
        // Autoplay started
      }).catch(error => {
        // Autoplay was prevented.
        video.muted = true;
        video.play();
      });
    }
  }
  soundOnOff() {
    let audio = document.getElementById("muteSound");
    audio.muted = true;
  }
  getEventDetails() {
    let request = {
      path: "core/event/details/" + this.eventId,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventData = response.data;
        this.creatorPersona = response.data.creatorPersona;
        // this.calculateTime();
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  getSponsor() {
    let request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          roles: ["SPONSOR"]
        },
        page: {
          pageLimit: 1,
          pageNumber: 0
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME"
        }
      },
      isAuth: false
    };
    this.apiService.post(request).subscribe(response => {
      if (response.status.code == this.constant.STATUS_OK) {
        this.athleteList = response.data;
        this.athleteList.forEach((element, index) => {
          this.athleteList[index]["nameInitials"] = this.commonService.getInitials(element.fullName);
        });
      } else {
        this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
      }
    });
  }
  ngDoCheck() {
    let fansList = [];
    if (this.connectedFans.length <= 3) {
      this.connectedFans.forEach(data => {
        fansList.push(data);
      });
    } else {
      for (let index = 0; index < 4; index++) {
        fansList.push(this.connectedFans[index]);
      }
    }
    this.fanImagesList = fansList;
  }
  getInitials(name) {
    return this.commonService.getInitials(name);
  }
  getUserDataFromStorage() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userRole = yield _this.coreService.getUserRoleFromStorage();
      let userData = yield _this.coreService.getUserDataFromStorage();
      _this.nameInitials = _this.commonService.getInitials(userData.fullName);
      _this.userData = userData;
      _this.userId = userData.id;
    })();
  }
  callFan(fan) {
    console.log("call fan");
    this.soundOnOff();
    this.commonService.callingFanDetail = fan;
    this.router.navigate(["/waitlist/call/" + fan.id], {
      queryParams: {
        isBidEvent: true
      }
    });
  }
  eventEnd() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_pages_schedule_dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_8__.DismissmodalComponent,
        cssClass: "small-modal"
      });
      modal.present();
      let request = {
        path: `core/event/complete/` + _this2.eventId,
        isAuth: true
      };
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (!data) {
        return;
      }
      _this2.apiService.get(request).subscribe(response => {
        if (response["status"]["code"] === "OK") {
          _this2.coreService.showToastMessage(response["status"]["description"], _this2.coreService.TOAST_SUCCESS);
          _this2.routeBackToSchedule();
        } else {
          _this2.coreService.showToastMessage(response["status"]["description"], _this2.coreService.TOAST_ERROR);
        }
      });
    })();
  }
  // routeBackToSchedule() {
  //   console.log("calledfdgrfgfgdfgd");
  //   this.cd.detectChanges();
  //  this.router.navigate(["/tabs/schedule"]);
  //   this.cd.detectChanges();
  //   // this.router.navigate(["/tabs/schedule"]);
  // }
  routeBackToSchedule() {
    //this.navController.navigateBack(["/tabs/schedule"]);
    // this.ngZone.run(() => {
    //   this.router.navigate(["tabs/schedule"]);
    // });
    this.navController.navigateBack(["/tabs/schedule"]);
    this.commonService.$navigateSubject.next();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  checkEnd() {
    if (this.player.nativeElement.currentTime === this.player.nativeElement.duration) {
      this.playNext();
    }
  }
  playNext() {
    this.currentIndex++;
    if (this.currentIndex === this.commonService.publicInfo?.videoUrls.length) {
      this.currentIndex = 0;
    }
    this.player.nativeElement.src = this.commonService.publicInfo?.videoUrls[this.currentIndex];
    this.player.nativeElement.play();
  }
};
AthleteWaitlistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}, {
  type: src_app_providers_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}];
AthleteWaitlistPage.propDecorators = {
  eventId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  connectedFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  pendingCallFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  calledFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }],
  player: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["player"]
  }]
};
AthleteWaitlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "athlete-waitlist",
  template: _athlete_waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_athlete_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AthleteWaitlistPage);

// compare_bid(a, b) {
//   if (a.bid > b.bid) {
//     return -1;
//   }
//   if (a.bid < b.bid) {
//     return 1;
//   }
//   return 0;
// }

/***/ }),

/***/ 83686:
/*!*******************************************************!*\
  !*** ./src/app/pages/waitlist/call/call.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallComponent": () => (/* binding */ CallComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _call_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call.component.html?ngResource */ 78168);
/* harmony import */ var _call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call.component.scss?ngResource */ 60135);
/* harmony import */ var _call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/keep-awake */ 1347);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stomp/stompjs */ 48183);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sockjs-client */ 14166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/configuration */ 78345);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var _directives_models_safe_execution_decorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/models/safe-execution.decorator */ 85341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);

















let CallComponent = class CallComponent {
  constructor(apiService, coreService, router, route, cd, constantService, commonService, navController) {
    this.apiService = apiService;
    this.coreService = coreService;
    this.router = router;
    this.route = route;
    this.cd = cd;
    this.constantService = constantService;
    this.commonService = commonService;
    this.navController = navController;
    this.isAudioMuted = false;
    this.isVideoOn = true;
    this.sessionId = "";
    this.streams = [];
    this.userDetail = [];
    this.predefinedTime = 60;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.keepDeviceAwake();
      _this.callDisconnectSocket();
      let request = {
        path: "core/configuration/publicInfo",
        isAuth: true
      };
      _this.apiService.get(request).subscribe(response => {
        _this.apiKey = response.data.videoApiKey;
      });
      _this.apiKey = _this.commonService.publicInfo.videoApiKey;
      console.log("api key", _this.apiKey);
      let users = localStorage.getItem("authDetails");
      _this.userDetail = JSON.parse(users);
      console.log("user detail", _this.userDetail.profileUrl);
      _this.nameInitials = _this.commonService.getInitials(_this.userDetail.fullName);
      _this.callAutoCutTimer();
    })();
  }
  ngAfterViewInit() {
    this.getUserDataAndRole();
    console.log("c-afterview ", this.commonService.callingAthleteDetails);
  }
  getQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (!params.isBidEvent) {
        this.router.navigate(["tabs/home"]);
      }
      console.log("param ", params);
      if (params.isBidEvent === "true") {
        this.isBiddingEvent = true;
        this.connectCall(true);
      } else {
        this.isBiddingEvent = false;
        this.connectCall(false);
      }
    });
  }
  getUserDataAndRole() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.userRole = yield _this2.coreService.getUserRoleFromStorage();
      _this2.userData = yield _this2.coreService.getUserDataFromStorage();
      _this2.getQueryParams();
      // this.connectCall();
    })();
  }

  keepDeviceAwake() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_6__.KeepAwake.keepAwake();
    })();
  }
  allowDeviceToSleep() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_6__.KeepAwake.allowSleep();
    })();
  }
  getVideoSessionAndToken(path, isOneToOneCall = false) {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(params => {
      this.id = params.get("id");
      let request = {
        path: path + params.get("id"),
        isAuth: true
      };
      if (isOneToOneCall) {
        if (this.userRole == "athlete") {
          console.log(isOneToOneCall, this.userRole);
          request.path = `core/video/call/now/${this.id}?receiveCall=false`;
        } else {
          request.path = `core/video/call/now/${this.id}?receiveCall=true`;
        }
      }
      return this.apiService.get(request);
    })).subscribe(response => {
      if (response.status.code === this.constantService.STATUS_OK) {
        this.sessionId = response.data.sessionId;
        this.token = response.data.token;
        this.timeLeft = response.data.remainingTime;
        this.remainTime = response.data.remainingTime;
        this.bidId = response.data.bidId;
        if (this.sessionId) {
          this.getSession();
        }
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
        this.router.navigate(["tabs/schedule"]);
      }
    });
  }
  connectCall(isBiddingEvent) {
    console.log("isBiddingEvent ", isBiddingEvent);
    if (isBiddingEvent) {
      console.log("1");
      if (this.userRole == "athlete") {
        console.log("2");
        this.getVideoSessionAndToken("core/video/call/");
      } else {
        console.log("3");
        this.getVideoSessionAndToken("core/video/receive/");
      }
    } else {
      console.log("4");
      this.getVideoSessionAndToken(`core/video/call/now/`, true);
    }
  }
  getSession() {
    this.session = OT.initSession(this.apiKey, this.sessionId);
    this.session.connect(this.token, error => {
      if (error) {
        console.log(error);
        // this.session.connect(this.token, (error) => {});
      } else {
        this.createPublisher();
        this.session.publish(this.publisher, error => {});
      }
    });
    let element = this.fanElement?.nativeElement;
    this.session.on("streamCreated", event => {
      this.stopAutoCutTimer();
      this.startTimer();
      this.subscribe = this.session.subscribe(event.stream, element, {
        width: "100%",
        height: "100%",
        insertMode: "replace"
      });
      // this.session.signal({ type: "String", data: "heyyyy" }, (err) => {
      //   console.log("heyyyyy", err.message, err.name);
      // });
    });

    this.session.once("streamDestroyed", event => {
      event.preventDefault();
      var subscribers = this.session.getSubscribersForStream(event.stream);
      this.session.disconnect();
      console.log("Reson" + event.reason);
      this.stopTimer();
      this.router.navigate(["/tabs/home"]);
    });
    //
  }

  _streamOff() {
    // if ((<any>this.session).listenerCount("streamCreated") == 1) {
    this.session.off("streamCreated");
    this.session.off("streamDestroyed");
    this.session.off("sessionConnected");
    // }
  }

  createPublisher() {
    this.publisher = OT.initPublisher(this.athleteElement.nativeElement, {
      width: "100%",
      height: "100%",
      insertMode: "replace",
      name: this.userData.fullName
    });
    this.publisher.off("streamDestroyed", event => {
      console.log("Stream stopped. Reason: " + event.reason);
      clearInterval(this.intId);
    });
  }
  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  toggleMuteButton() {
    this.isAudioMuted = !this.isAudioMuted;
    this.publisher.publishAudio(!this.isAudioMuted);
  }
  toggleVideoButton() {
    this.isVideoOn = !this.isVideoOn;
    this.publisher.publishVideo(this.isVideoOn);
  }
  switchCameraSource() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.publisher.cycleVideo();
    })();
  }
  disconnectCall() {
    console.log("athlete disconnect call ", this.bidId, this.timeLeft);
    let request = {
      path: "core/video/updateCall/" + this.bidId,
      data: {
        remainingTime: this.timeLeft
      },
      isAuth: true
    };
    this.apiService.post(request).subscribe(response => {
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.intId) {
          clearInterval(this.intId);
        }
        this.intId = undefined;
        this._streamOff();
        this._cleanUp();
        clearInterval(this.interval);
        this.predefinedTime = 60;
        if (this.isBiddingEvent) {
          this.commonService.$navigateSubject.next();
          this.navController.navigateBack(["/waitlist/event/" + response.data.eventId]);
          //this.router.navigate(["/waitlist/event/" + response.data.eventId]);
          // this.router.navigate([]);
        } else {
          this.router.navigate(["tabs/schedule"]);
        }
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
        this.router.navigate(["tabs/schedule"]);
      }
      return;
    });
  }
  callAutoCutTimer() {
    this.interval = setInterval(() => {
      if (this.predefinedTime > 0) {
        this.predefinedTime--;
        console.log("auto-cut timer ", this.predefinedTime);
        if (this.predefinedTime == 0) {
          this.stopAutoCutTimer();
          this.disconnectCall();
          this.session.disconnect();
        }
      }
    }, 1000);
  }
  stopAutoCutTimer() {
    clearInterval(this.interval);
    this.predefinedTime = 60;
  }
  startTimer() {
    console.log("start timer", this.timeLeft);
    this.intId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft > 60) {
        this.color = "#55CD89";
      }
      if (this.timeLeft < 60) {
        this.color = "#FFA439";
      }
      if (this.timeLeft < 20) {
        this.color = " #F64444";
      }
      //console.log("timerr", this.timeLeft);
      if (this.timeLeft == 0) {
        if (this.userRole == "athlete") {
          console.log("interval time left", this.timeLeft);
          this.disconnectCall();
          clearInterval(this.intId);
        }
      }
      this.cd.detectChanges();
    }, 1000);
  }
  secondsToHms(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var mDisplay = m > 0 ? m + (m == 1 ? "" : "  ") : "0";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "0";
    if (s < 10) {
      sDisplay = "0" + sDisplay;
    }
    if (m < 10) {
      mDisplay = "0" + mDisplay;
    }
    return `${mDisplay}: ${sDisplay}s`;
  }
  stopTimer() {
    clearInterval(this.intId);
  }
  callDisconnectSocket() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userRole = yield _this4.coreService.getUserRoleFromStorage();
      let userDetails = yield _this4.coreService.getUserDataFromStorage();
      console.log("athlete disconnect socket called ", userRole, userDetails);
      _this4.socket = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_12__.Stomp.over(() => new sockjs_client__WEBPACK_IMPORTED_MODULE_7__(src_app_configuration__WEBPACK_IMPORTED_MODULE_8__.configuration.BASE_URL + "core/greeting"));
      _this4.socket.reconnect_delay = 5000;
      _this4.socket.connect({}, frame => {
        _this4.socket.subscribe("/errors", message => {
          alert("Error " + message.body);
        });
        _this4.sendCutVideo(userDetails["id"]);
        _this4.socket.subscribe("/topic/cancelCall", message => {
          let responseData = JSON.parse(message.body).content;
          let msg = JSON.parse(responseData);
          // this.commonService.callingAthleteDetails=JSON.parse(responseData);
          if (userDetails.id == msg.athleteId) {
            if (_this4.isBiddingEvent) {
              _this4.router.navigate(["/waitlist/event/" + msg.eventId]);
            } else {
              _this4.router.navigate(["tabs/schedule"]);
            }
            if (msg.disconnectedByPersonRole == "USER" && userRole == "athlete" && msg.bidState !== "COMPLETED") {
              _this4.session.disconnect();
              _this4.commonService.$navigateSubject.next();
              _this4.coreService.showToastMessage("Fan is busy. Please connect after sometime", _this4.coreService.TOAST_ERROR);
            }
          } else {}
        });
      }, function (error) {
        console.log("STOMP error " + error);
      });
    })();
  }
  sendCutVideo(id) {
    let data = JSON.stringify({
      userId: id
    });
    this.socket.send("/app/cancelVideo", {}, data);
  }
  _cleanUp() {
    /*
     * This.streams.forEach((str: Stream) => {
     * 	str = null;
     * });
     */
    Promise.resolve(this._sessionCleanUp()).then(() => Promise.resolve(this.hardRefresh())).then(() => {
      // this.distroyer$?.next();
      // this.distroyer$?.complete();
    });
    /*
     * This.subscriber = null;
     * this.publisher = null;
     * this.session = null; as any)
     */
  }

  _sessionCleanUp() {
    console.log("clean up call");
    this.streams = [];
    this.stopTimer();
    // @advice Only 1 event dose things automatically.... don't add to munch disconnect stuff it breaks the code..
    this.session.disconnect();
    setTimeout(() => {
      this.publisher = undefined;
      this.subscribe = undefined;
    }, 2000);
    // this.updateViews();
  }

  hardRefresh() {
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // await this._navCtrl.navigateRoot("/home");
  // Window.location.reload();

  ngOnDestroy() {
    this.stopTimer();
    this._cleanUp();
    this.allowDeviceToSleep();
    this.session.disconnect();
    this.sessionId = "";
    this.apiKey = "";
    clearInterval(this.interval);
  }
  ionViewDidLeave() {
    console.log("leave csll");
    this.session.disconnect();
    this._streamOff();
    this._cleanUp();
    clearInterval(this.intId);
    clearInterval(this.interval);
    this.cd.detectChanges();
    this.sessionId = "";
  }
};
CallComponent.ctorParameters = () => [{
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController
}];
CallComponent.propDecorators = {
  athleteElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["athleteContainer"]
  }],
  fanElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["fanContainer"]
  }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_directives_models_safe_execution_decorator__WEBPACK_IMPORTED_MODULE_10__.SafeExecution)()], CallComponent.prototype, "_cleanUp", null);
CallComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-call",
  template: _call_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CallComponent);


/***/ }),

/***/ 74435:
/*!******************************************************************!*\
  !*** ./src/app/pages/waitlist/fan-waitlist/fan-waitlist.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FanWaitlistPage": () => (/* binding */ FanWaitlistPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fan_waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan-waitlist.page.html?ngResource */ 35746);
/* harmony import */ var _fan_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fan-waitlist.page.scss?ngResource */ 73416);
/* harmony import */ var _fan_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fan_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);









// import { Socket } from "ngx-socket-io";


let FanWaitlistPage = class FanWaitlistPage {
  constructor(coreService, apiService, router, constantService, commonService, cd, constant, navController) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.router = router;
    this.constantService = constantService;
    this.commonService = commonService;
    this.cd = cd;
    this.constant = constant;
    this.navController = navController;
    this.eventId = null;
    this.connectedFans = [];
    this.calledFans = [];
    this.pendingCallFans = [];
    this.currentPosition = 0;
    this.userIndex = 0;
    this.connectedFanDetails = null;
    this.slideOpts = {
      slidesPerView: 3,
      initialSlide: 1,
      speed: 400,
      // loop: true,
      autoplay: {
        delay: 2000
      }
    };
    this.currentIndex = 0;
  }
  ngOnInit() {
    // this.video();
    this.commonService.getPublicInfo();
    this.getEventDetails();
    this.getUserData();
    this.getSponsor();
    this.ensureVideoPlays();
  }
  ensureVideoPlays() {
    const video = document.querySelector("video");
    if (!video) return;
    const promise = video.play();
    if (promise !== undefined) {
      promise.then(() => {
        // Autoplay started
      }).catch(error => {
        // Autoplay was prevented.
        video.muted = true;
        video.play();
      });
    }
  }
  ngDoCheck() {
    if (this.connectedFans.length !== 0) {
      this.calculateUserPosition();
    }
  }
  ionViewWillEnter() {
    this.video();
  }
  getSponsor() {
    let request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          roles: ["SPONSOR"]
        },
        page: {
          pageLimit: 1,
          pageNumber: 0
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME"
        }
      },
      isAuth: false
    };
    this.apiService.post(request).subscribe(response => {
      if (response.status.code == this.constant.STATUS_OK) {
        this.coreService.dismissLoader();
        this.sponsorList = response.data;
      } else {
        this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
      }
    });
  }
  video() {
    this.eventVideoData = this.commonService.publicInfo?.videoUrls;
    this.coreService.dismissLoader();
    for (let i = 0; i < this.eventVideoData.length; i++) {
      this.urls = Math.floor(Math.random() * this.eventVideoData.length);
      this.videourl = this.eventVideoData[this.urls];
      this.cd.detectChanges();
      return;
    }
  }
  checkEnd() {
    if (this.player.nativeElement.currentTime === this.player.nativeElement.duration) {
      this.playNext();
    }
  }
  playNext() {
    this.currentIndex++;
    if (this.currentIndex === this.commonService.publicInfo?.videoUrls.length) {
      this.currentIndex = 0;
    }
    this.player.nativeElement.src = this.commonService.publicInfo?.videoUrls[this.currentIndex];
    this.player.nativeElement.play();
  }
  calculateUserPosition() {
    //pending fans
    const bid = this.pendingCallFans.map(object => {
      return object.totalAmount;
    });
    this.highestBid = Math.max(...bid);
    for (let index = 0; index < this.pendingCallFans.length; index++) {
      if (this.pendingCallFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.currentPosition = index;
        // console.log("index ", this.userIndex, this.currentPosition);
        this.connectedFanDetails = this.pendingCallFans[index];
      }
    }
    //completedFans
    for (let index = 0; index < this.calledFans.length; index++) {
      if (this.calledFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.connectedFanDetails = this.calledFans[index];
      }
    }
  }
  getEventDetails() {
    let request = {
      path: "core/event/details/" + this.eventId,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventData = response.data;
        this.creatorPersona = response.data.creatorPersona;
        this.calculateTime();
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  getUserData() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userData = yield _this.coreService.getUserDataFromStorage();
      _this.nameInitials = _this.commonService.getInitials(_this.userData.fullName);
    })();
  }
  updateBid() {
    // this.router.navigate(["bid-payment/" + this.eventId]);
    this.navController.navigateBack(["bid-payment/" + this.eventId]);
  }
  compare_bid(a, b) {
    if (a.bid > b.bid) {
      return -1;
    }
    if (a.bid < b.bid) {
      return 1;
    }
    return 0;
  }
  calculateTime() {
    this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    this.interval = setInterval(() => {
      this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    }, 60000);
  }
  soundOnOff() {
    let audio = document.getElementById("muteSound");
    audio.muted = true;
  }
  ionViewDidLeave() {
    this.soundOnOff();
    clearInterval(this.interval);
  }
  routeBackToSchedule() {
    // console.log("called");
    this.navController.navigateBack(["/tabs/schedule"]);
    this.commonService.$navigateSubject.next();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
};
FanWaitlistPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}];
FanWaitlistPage.propDecorators = {
  eventId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  connectedFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  calledFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  pendingCallFans: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  player: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['player']
  }]
};
FanWaitlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "fan-waitlist",
  template: _fan_waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_fan_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FanWaitlistPage);


/***/ }),

/***/ 96807:
/*!*************************************************************************!*\
  !*** ./src/app/pages/waitlist/incoming-call/incoming-call.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingCallComponent": () => (/* binding */ IncomingCallComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _incoming_call_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incoming-call.component.html?ngResource */ 8470);
/* harmony import */ var _incoming_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incoming-call.component.scss?ngResource */ 68799);
/* harmony import */ var _incoming_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_incoming_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configuration */ 78345);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @stomp/stompjs */ 48183);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sockjs-client */ 14166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor-community/native-audio */ 62087);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);















let IncomingCallComponent = class IncomingCallComponent {
  constructor(router, commonService, route, apiService, constantService, coreService, core, platform) {
    this.router = router;
    this.commonService = commonService;
    this.route = route;
    this.apiService = apiService;
    this.constantService = constantService;
    this.coreService = coreService;
    this.core = core;
    this.platform = platform;
  }
  getBidIdFromRoute() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log("param ", this.id);
    });
    this.route.queryParams.subscribe(params => {
      this.bidId = params.bidId;
      console.log("bid id ", this.bidId);
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.commonData = yield _this.commonService.callingAthleteDetails;
      if (!_this.commonData) {
        _this.commonData = localStorage.getItem('voip-data');
      }
      if (!_this.commonService.callingAthleteDetails) {
        // this.router.navigate(["/tabs/home"]);
      }
      _this.getInitials();
      _this.getBidIdFromRoute();
      _this.callDisconnectSocket();
      _this.loadAndPlayRingtone();
    })();
  }
  ionViewDidEnter() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.commonData = yield _this2.commonService.callingAthleteDetails;
      _this2.loadAndPlayRingtone();
      _this2.getInitials();
      _this2.getBidIdFromRoute();
      _this2.callDisconnectSocket();
      _this2.loadAndPlayRingtone();
    })();
  }
  ionViewWillEnter() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.commonData = yield _this3.commonService.callingAthleteDetails;
    })();
  }
  loadAndPlayRingtone() {
    console.log("working", this.platform.is);
    let audioConfig = {
      assetId: "discord",
      assetPath: "assets/sounds/Discord.mp3",
      audioChannelNum: 1,
      volume: 1.0,
      isUrl: false
    };
    console.log("platform", this.platform.is("android"), "ios", this.platform.is("ios"));
    if (this.platform.is("android") || this.platform.is("ios")) {
      console.log("if discord");
      // NativeAudio.stop(audioConfig)
      audioConfig.assetPath = "public/assets/sounds/Discord.mp3";
    } else {
      console.log("else discord");
      audioConfig.assetPath = "Discord.mp3";
    }
    _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.preload(audioConfig).then(value => {
      _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.play({
        assetId: "discord",
        time: 0
      });
      _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.loop({
        assetId: "discord"
      });
    });
  }
  getInitials() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.nameInitials = yield _this4.commonService.getInitials(_this4.commonData.athleteName);
    })();
  }
  joinCall() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("joinCall ", _this5.commonData);
      yield _this5.router.navigate(["/waitlist/call/" + _this5.id], {
        queryParams: {
          isBidEvent: _this5.commonData.creatorPersona == "USER" ? false : true
        }
      });
    })();
  }
  disconnectCall() {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("fan diconnect called", _this6.commonData);
      let leftTime = yield _this6.commonData.remainingTime;
      console.log("remaining time ", _this6.commonData.remainingTime);
      if (_this6.bidId != undefined) {
        _this6.id = _this6.bidId;
      }
      console.log("api ", _this6.id);
      let request = {
        path: "core/video/updateCall/" + _this6.commonData.id,
        data: {
          remainingTime: leftTime
        },
        isAuth: true
      };
      _this6.apiService.post(request).subscribe(response => {
        _this6.coreService.dismissLoader();
      });
      _this6.router.navigate(["/tabs/schedule"]);
    })();
  }
  callDisconnectSocket() {
    var _this7 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("fan disconnect socket called");
      let userRole = yield _this7.core.getUserRoleFromStorage();
      let userDetails = yield _this7.core.getUserDataFromStorage();
      _this7.socket = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_10__.Stomp.over(() => new sockjs_client__WEBPACK_IMPORTED_MODULE_8__(src_app_configuration__WEBPACK_IMPORTED_MODULE_3__.configuration.BASE_URL + "core/greeting"));
      _this7.socket.reconnect_delay = 5000;
      _this7.socket.connect({}, frame => {
        _this7.socket.subscribe("/errors", message => {
          alert("Error " + message.body);
        });
        _this7.sendCutVideo(userDetails["id"]);
        _this7.socket.subscribe("/topic/cancelCall", message => {
          let responseData = JSON.parse(message.body).content;
          let msg = JSON.parse(responseData);
          let value = localStorage.getItem("authDetails");
          _this7.userDetails = JSON.parse(value);
          //this.commonService.callingAthleteDetails = JSON.parse(responseData);
          if (_this7.userDetails.id == msg.userId) {
            _this7.router.navigate(["/tabs/schedule"]);
            if (msg.disconnectedByPersonRole == "ATHLETE" && userRole == "fan" && msg.bidState !== "COMPLETED") {
              _this7.core.showToastMessage("Athlete is busy. He/She will connect after sometime", _this7.core.TOAST_ERROR);
            }
          } else {
            console.log("no");
          }
        });
      }, function (error) {
        console.log("STOMP error " + error);
      });
    })();
  }
  sendCutVideo(id) {
    let data = JSON.stringify({
      userId: id
    });
    console.log("fan send cut video ", data);
    this.socket.send("/app/cancelVideo", {}, data);
  }
  ionViewWillLeave() {
    _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.stop({
      assetId: "discord"
    });
    _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.unload({
      assetId: "discord"
    });
  }
  ngOnDestroy() {
    _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.stop({
      assetId: "discord"
    });
    _capacitor_community_native_audio__WEBPACK_IMPORTED_MODULE_9__.NativeAudio.unload({
      assetId: "discord"
    });
  }
};
IncomingCallComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}];
IncomingCallComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-incoming-call",
  template: _incoming_call_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_incoming_call_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], IncomingCallComponent);


/***/ }),

/***/ 21646:
/*!***********************************************************!*\
  !*** ./src/app/pages/waitlist/waitlist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitlistPageRoutingModule": () => (/* binding */ WaitlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call/call.component */ 83686);
/* harmony import */ var _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incoming-call/incoming-call.component */ 96807);
/* harmony import */ var _waitlist_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waitlist.page */ 42018);






const routes = [{
  path: "event/:id",
  component: _waitlist_page__WEBPACK_IMPORTED_MODULE_2__.WaitlistPage
}, {
  path: "incoming-call/:id",
  component: _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_1__.IncomingCallComponent
},
//  {
//   path: "call/:id",
//   component: CallComponent,
// },
{
  path: "call/:id",
  component: _call_call_component__WEBPACK_IMPORTED_MODULE_0__.CallComponent
}];
let WaitlistPageRoutingModule = class WaitlistPageRoutingModule {};
WaitlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], WaitlistPageRoutingModule);


/***/ }),

/***/ 74945:
/*!***************************************************!*\
  !*** ./src/app/pages/waitlist/waitlist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitlistPageModule": () => (/* binding */ WaitlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _waitlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waitlist-routing.module */ 21646);
/* harmony import */ var _fan_waitlist_fan_waitlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan-waitlist/fan-waitlist.page */ 74435);
/* harmony import */ var _athlete_waitlist_athlete_waitlist_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./athlete-waitlist/athlete-waitlist.page */ 38586);
/* harmony import */ var _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incoming-call/incoming-call.component */ 96807);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _waitlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waitlist.page */ 42018);
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call/call.component */ 83686);












let WaitlistPageModule = class WaitlistPageModule {};
WaitlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_waitlist_page__WEBPACK_IMPORTED_MODULE_5__.WaitlistPage, _fan_waitlist_fan_waitlist_page__WEBPACK_IMPORTED_MODULE_1__.FanWaitlistPage, _athlete_waitlist_athlete_waitlist_page__WEBPACK_IMPORTED_MODULE_2__.AthleteWaitlistPage, _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_3__.IncomingCallComponent, _call_call_component__WEBPACK_IMPORTED_MODULE_6__.CallComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _waitlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitlistPageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule]
})], WaitlistPageModule);


/***/ }),

/***/ 42018:
/*!*************************************************!*\
  !*** ./src/app/pages/waitlist/waitlist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitlistPage": () => (/* binding */ WaitlistPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitlist.page.html?ngResource */ 13675);
/* harmony import */ var _waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waitlist.page.scss?ngResource */ 77573);
/* harmony import */ var _waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stomp/stompjs */ 48183);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sockjs-client */ 14166);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration */ 78345);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);











let WaitlistPage = class WaitlistPage {
  constructor(coreService, route, constantService, router) {
    this.coreService = coreService;
    this.route = route;
    this.constantService = constantService;
    this.router = router;
    this.connectedFans = [];
    this.pendingCallFans = [];
    this.calledFans = [];
  }
  ngOnInit() {
    this.getUserDataAndRole();
    this.getEventIdFromParam();
    this.getConnectedFans();
  }
  ionDidViewEnter() {
    this.getConnectedFans();
  }
  getConnectedFans() {
    this.socket = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_7__.Stomp.over(() => new sockjs_client__WEBPACK_IMPORTED_MODULE_4__(_configuration__WEBPACK_IMPORTED_MODULE_5__.configuration.BASE_URL + "core/greeting"));
    this.socket.reconnect_delay = 5000;
    this.socket.connect({}, frame => {
      this.socket.subscribe("/errors", message => {
        alert("Error " + message.body);
      });
      this.send();
      this.socket.subscribe("/topic/bidList", message => {
        let data = JSON.parse(message.body);
        let contentData = JSON.parse(data.content);
        if (contentData.eventId !== this.eventId) {
          return;
        }
        this.pendingCallFans.forEach((e, index) => {
          if (contentData.bidState != e.bidState && contentData.userId == e.userId) {
            this.pendingCallFans.splice(index, 1);
            this.connectedFans.push(contentData);
            this.connectedFans = this.connectedFans.filter(e => {
              e.bidState != "COMPLETED";
              return;
            });
          }
        });
        if (contentData.bidState == "PENDING") {
          this.filterAndSortPendingFans(contentData);
        } else if (contentData.bidState !== "PENDING" && contentData.bidState !== "COMPLETED") {
          this.filterAndSortCompletedFans(contentData);
        }
        if (contentData.bidState !== "COMPLETED") {
          this.connectedFans.push(contentData);
          this.connectedFans = this.getUniqueListBy(this.connectedFans, "userId");
        }
        // that.connectedFans.sort((a, b) => {
        //   return b.totalAmount - a.totalAmount;
        // });
      });
    }, function (error) {
      console.log("STOMP error " + error);
    });
  }
  getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }
  filterAndSortPendingFans(fanData) {
    this.pendingCallFans.push(fanData);
    console.log("pending", this.pendingCallFans);
    this.pendingCallFans = this.getUniqueListBy(this.pendingCallFans, "userId");
    this.pendingCallFans.sort((a, b) => {
      return b.totalAmount - a.totalAmount;
    });
  }
  filterAndSortCompletedFans(fanData) {
    this.calledFans.push(fanData);
    this.calledFans = this.getUniqueListBy(this.calledFans, "userId");
  }
  send() {
    let data = JSON.stringify({
      eventId: this.eventId
    });
    this.socket.send("/app/syncBidList", {}, data);
  }
  getEventIdFromParam() {
    this.route.params.subscribe(param => {
      this.eventId = param.id;
    });
  }
  getUserDataAndRole() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userRole = yield _this.coreService.getUserRoleFromStorage();
      _this.userData = yield _this.coreService.getUserDataFromStorage();
    })();
  }
};
WaitlistPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_6__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}];
WaitlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-waitlist",
  template: _waitlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_waitlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WaitlistPage);


/***/ }),

/***/ 24443:
/*!************************************************************!*\
  !*** ./src/app/pipes/humanReadable/human-readable.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HumanReadablePipe": () => (/* binding */ HumanReadablePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let HumanReadablePipe = class HumanReadablePipe {
  transform(value, ...args) {
    return null;
  }
};
HumanReadablePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'humanReadable'
})], HumanReadablePipe);


/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humanReadable/human-readable.pipe */ 24443);
/* harmony import */ var _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.pipe */ 10133);





let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__.HumanReadablePipe, _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePipe],
  exports: [_humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__.HumanReadablePipe, _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
})], PipesModule);


/***/ }),

/***/ 10133:
/*!***********************************************!*\
  !*** ./src/app/pipes/profile/profile.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePipe": () => (/* binding */ ProfilePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configuration */ 78345);



let ProfilePipe = class ProfilePipe {
  transform(value, ...args) {
    if (!value) {
      return;
    }
    const slug = value.split("//");
    if (slug[0] !== "https:") {
      return _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration.BASE_URL + "auth/file/view?fileKey=" + encodeURIComponent(value);
    } else {
      return value;
    }
  }
};
ProfilePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: "profile"
})], ProfilePipe);


/***/ }),

/***/ 22414:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/keep-awake/dist/esm/definitions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1347:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor-community/keep-awake/dist/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeepAwake": () => (/* binding */ KeepAwake)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 22414);

const KeepAwake = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('KeepAwake', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_keep-awake_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9544)).then(m => new m.KeepAwakeWeb())
});



/***/ }),

/***/ 55466:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/native-audio/dist/esm/definitions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 62087:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/native-audio/dist/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeAudio": () => (/* binding */ NativeAudio)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 55466);

const NativeAudio = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('NativeAudio', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_native-audio_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 37800)).then(m => new m.NativeAudioWeb())
});



/***/ }),

/***/ 54254:
/*!************************************************************************************!*\
  !*** ./src/app/pages/schedule/dismissmodal/dismissmodal.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/dismissmodal/dismissmodal.component.scss"],"names":[],"mappings":"AACE;EACE,cAAA;AAAJ;AAEE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAAJ;AAEI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAAN;AAGI;EACE,aAAA;AADN;AAIE;EACE,6BAAA;AAFJ;AAGI;EACE,eAAA;EACA,kBAAA;AADN;AAEM;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;AAAR;AAKE;EACE,2BAAA;AAHJ;AAII;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAFN;AAGM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AADR;AAEQ;EACE,WAAA;EACA,YAAA;AAAV;AAEQ;EACE,YAAA;AAAV","sourcesContent":[".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 17100:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/waitlist/athlete-waitlist/athlete-waitlist.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --box-shadow: 0px -6px 7px #2d94c9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .video-box {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  min-width: 100%;\n}\nion-content .main-screen .video-box video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content .main-screen .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 40px 0 5px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background: transparent;\n  min-height: 200px;\n  max-height: 290px;\n}\nion-content .main-screen .top-card .title-part {\n  position: relative;\n  z-index: 9;\n}\nion-content .main-screen .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  background: rgba(var(--black-bg-rgb), 0.4);\n  border-radius: 50px;\n  position: absolute;\n  left: 15px;\n  z-index: 9;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .main-screen .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen .top-card .profile-img {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nion-content .main-screen .top-card .profile-img img {\n  width: 100%;\n  height: auto;\n}\nion-content .main-screen .top-card .overlay-blue {\n  background: rgba(var(--theme-one-bg-rgb), 0.4);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\nion-content .main-screen .slider-part {\n  padding: 40px 0px 10px;\n  background: transparent;\n  position: relative;\n  z-index: 9;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide .img-box {\n  width: 80px;\n  height: 80px;\n  border-radius: 80px;\n  padding: 15px;\n  border: 3px solid var(--theme-one-clr);\n  background: var(--white-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide .img-box img {\n  width: 80px;\n  height: 80px;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide h5 {\n  margin: 5px 0;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\nion-content .main-screen .wait-part {\n  border-radius: 35px 35px 0 0;\n  min-height: 230px;\n  background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -9px 15px #0071ae;\n  padding: 0 0px;\n  position: relative;\n  z-index: 999;\n  margin-top: -45px;\n  max-height: calc(100vh - 255px);\n  min-height: calc(100vh - 255px);\n  overflow: auto;\n}\nion-content .main-screen .wait-part .head {\n  padding: 15px 15px 0;\n  border-radius: 35px 35px 0 0;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background: var(--theme-one-bg);\n}\nion-content .main-screen .wait-part .head .bids-available ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-avatar {\n  background: #1b4b64;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 36px;\n  width: 36px;\n  border-radius: 36px;\n  margin-right: -20px;\n  position: relative;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-avatar:last-of-type {\n  margin-right: 10px !important;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-label {\n  font-weight: 700;\n  color: var(--white-clr);\n  font-weight: 1.5rem;\n}\nion-content .main-screen .wait-part .head p {\n  margin: 10px 0 0 0;\n  color: var(--white-clr);\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 20px;\n}\nion-content .main-screen .wait-part .content-part {\n  text-align: center;\n  padding: 15px 15px 50px;\n}\nion-content .main-screen .wait-part .content-part .bid-list {\n  padding: 10px 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 5px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: transparent;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-avatar {\n  margin: 0 10px 0 0;\n  margin: 0 10px 0 0;\n  height: 42px;\n  width: 42px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-avatar img {\n  height: 42px;\n  width: 42px;\n  border-radius: 42px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-label h5 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--theme-one-clr);\n  margin: 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-label p {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--black-clr);\n  margin: 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item img.video {\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n  margin: 0;\n  display: none;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box.top-call ion-item img.video {\n  display: block;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box:last-child {\n  margin-bottom: 10px;\n}\n\nion-footer {\n  background: var(--theme-one-bg);\n  position: fixed;\n  bottom: 0;\n}\nion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--theme-one-bg);\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --background: var(--red-bg);\n  --background-focused: var(--red-bg);\n  --background-hover: var(--red-bg);\n  --background-activated: var(--red-bg);\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  color: var(--white-clr);\n}\nion-footer ion-toolbar ion-button i {\n  color: var(--white-clr);\n  text-transform: capitalize;\n  font-style: normal;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-left: 5px;\n}\nion-footer ion-toolbar ion-button img {\n  width: 25px;\n}\nion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n.initials__span-small {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/waitlist/athlete-waitlist/athlete-waitlist.page.scss"],"names":[],"mappings":"AAAA;EAEE,kCAAA;EACA,kBAAA;AAAF;AACE;EACE,aAAA;EACA,iBAAA;EACA,YAAA;AACJ;AAAI;EACE,eAAA;EACA,MAAA;EACA,YAAA;EACA,eAAA;AAEN;AADM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAGR;AAAI;EACE,SAAA;EACA,UAAA;EACA,4BAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,MAAA;EACA,WAAA;EACA,uBAAA;EAGA,iBAAA;EACA,iBAAA;AAAN;AACM;EACE,kBAAA;EACA,UAAA;AACR;AAAQ;EACE,qBAAA;EACA,yBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAEV;AAAU;EACE,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AAEZ;AAAU;EACE,SAAA;EACA,UAAA;AAEZ;AADY;EACE,SAAA;EACA,UAAA;EACA,kBAAA;AAGd;AAFc;EACE,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;AAIhB;AAAU;EACE,SAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AAEZ;AADY;EACE,WAAA;AAGd;AADY;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,yBAAA;AAGd;AAEM;EACE,kBAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAAR;AACQ;EACE,WAAA;EACA,YAAA;AACV;AAEM;EACE,8CAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;AAAR;AAII;EAAa,sBAAA;EAAwB,uBAAA;EAAyB,kBAAA;EAAoB,UAAA;AAEtF;AAEY;EAAS,WAAA;EAAa,YAAA;EAAc,mBAAA;EAAqB,aAAA;EAAe,sCAAA;EAAwC,2BAAA;EAA6B,aAAA;EAAe,uBAAA;EAAyB,mBAAA;AASjM;AARc;EAAI,WAAA;EAAa,YAAA;AAY/B;AAVY;EAAG,aAAA;EAAe,kBAAA;EAAoB,uBAAA;EAAyB,gBAAA;AAgB3E;AAXI;EACE,4BAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EAWA,+EAAA;EAKA,mHAAA;EAEA,iCAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EAGA,+BAAA;EACA,+BAAA;EACA,cAAA;AAFN;AAGM;EACE,oBAAA;EACA,4BAAA;EACA,gBAAA;EACA,MAAA;EACA,WAAA;EACA,+BAAA;AADR;AAGU;EACE,oBAAA;EACA,wBAAA;EACA,yBAAA;AADZ;AAEY;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;AAAd;AACc;EACE,6BAAA;AAChB;AAEY;EACE,gBAAA;EACA,uBAAA;EACA,mBAAA;AAAd;AAIQ;EACE,kBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAFV;AAKM;EACE,kBAAA;EACA,uBAAA;AAHR;AAIQ;EACE,eAAA;AAFV;AAGU;EACE,0CAAA;EACA,kBAAA;EACA,uCAAA;EACA,mBAAA;AADZ;AAEY;EACE,qBAAA;EACA,yBAAA;EACA,yBAAA;AAAd;AACc;EACE,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AAChB;AAAgB;EACE,YAAA;EACA,WAAA;EACA,mBAAA;AAElB;AAEgB;EACE,eAAA;EACA,gBAAA;EACA,2BAAA;EACA,SAAA;AAAlB;AAEgB;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;AAAlB;AAGc;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;AADhB;AAMgB;EACE,cAAA;AAJlB;AAQY;EACE,mBAAA;AANd;;AAeA;EACE,+BAAA;EACA,eAAA;EACA,SAAA;AAZF;AAaE;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,iCAAA;EACA,kBAAA;AAXJ;AAYI;EACE,2BAAA;EACA,mCAAA;EACA,iCAAA;EACA,qCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;EACA,uBAAA;AAVN;AAWK;EACC,uBAAA;EACA,0BAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AATN;AAWM;EACE,WAAA;AATR;AAWM;EACE,YAAA;AATR;;AAeA;EACE,kBAAA;AAZF;AAaE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;AAXJ;AAaE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;AAXJ","sourcesContent":["ion-content {\n  --box-shadow: 0px -6px 7px #2d94c9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .video-box {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  min-width: 100%;\n}\nion-content .main-screen .video-box video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content .main-screen .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 40px 0 5px;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background: transparent;\n  min-height: 200px;\n  max-height: 290px;\n}\nion-content .main-screen .top-card .title-part {\n  position: relative;\n  z-index: 9;\n}\nion-content .main-screen .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  background: rgba(var(--black-bg-rgb), 0.4);\n  border-radius: 50px;\n  position: absolute;\n  left: 15px;\n  z-index: 9;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .main-screen .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen .top-card .profile-img {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nion-content .main-screen .top-card .profile-img img {\n  width: 100%;\n  height: auto;\n}\nion-content .main-screen .top-card .overlay-blue {\n  background: rgba(var(--theme-one-bg-rgb), 0.4);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\nion-content .main-screen .slider-part {\n  padding: 40px 0px 10px;\n  background: transparent;\n  position: relative;\n  z-index: 9;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide .img-box {\n  width: 80px;\n  height: 80px;\n  border-radius: 80px;\n  padding: 15px;\n  border: 3px solid var(--theme-one-clr);\n  background: var(--white-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide .img-box img {\n  width: 80px;\n  height: 80px;\n}\nion-content .main-screen .slider-part ion-slides ion-slide .slide h5 {\n  margin: 5px 0;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\nion-content .main-screen .wait-part {\n  border-radius: 35px 35px 0 0;\n  min-height: 230px;\n  background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  background: -moz-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -9px 15px #0071ae;\n  padding: 0 0px;\n  position: relative;\n  z-index: 999;\n  margin-top: -45px;\n  max-height: calc(100vh - 255px);\n  min-height: calc(100vh - 255px);\n  overflow: auto;\n}\nion-content .main-screen .wait-part .head {\n  padding: 15px 15px 0;\n  border-radius: 35px 35px 0 0;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background: var(--theme-one-bg);\n}\nion-content .main-screen .wait-part .head .bids-available ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-avatar {\n  background: #1b4b64;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 36px;\n  width: 36px;\n  border-radius: 36px;\n  margin-right: -20px;\n  position: relative;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-avatar:last-of-type {\n  margin-right: 10px !important;\n}\nion-content .main-screen .wait-part .head .bids-available ion-item ion-label {\n  font-weight: 700;\n  color: var(--white-clr);\n  font-weight: 1.5rem;\n}\nion-content .main-screen .wait-part .head p {\n  margin: 10px 0 0 0;\n  color: var(--white-clr);\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 20px;\n}\nion-content .main-screen .wait-part .content-part {\n  text-align: center;\n  padding: 15px 15px 50px;\n}\nion-content .main-screen .wait-part .content-part .bid-list {\n  padding: 10px 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 5px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: transparent;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-avatar {\n  margin: 0 10px 0 0;\n  margin: 0 10px 0 0;\n  height: 42px;\n  width: 42px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-avatar img {\n  height: 42px;\n  width: 42px;\n  border-radius: 42px;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-label h5 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--theme-one-clr);\n  margin: 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item ion-label p {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--black-clr);\n  margin: 0;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box ion-item img.video {\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n  margin: 0;\n  display: none;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box.top-call ion-item img.video {\n  display: block;\n}\nion-content .main-screen .wait-part .content-part .bid-list .bg-white-box:last-child {\n  margin-bottom: 10px;\n}\n\nion-footer {\n  background: var(--theme-one-bg);\n  position: fixed;\n  bottom: 0;\n}\nion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--theme-one-bg);\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --background: var(--red-bg);\n  --background-focused: var(--red-bg);\n  --background-hover: var(--red-bg);\n  --background-activated: var(--red-bg);\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  color: var(--white-clr);\n}\nion-footer ion-toolbar ion-button i {\n  color: var(--white-clr);\n  text-transform: capitalize;\n  font-style: normal;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-left: 5px;\n}\nion-footer ion-toolbar ion-button img {\n  width: 25px;\n}\nion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n.initials__span-small {\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60135:
/*!********************************************************************!*\
  !*** ./src/app/pages/waitlist/call/call.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  position: relative;\n  --background: url('background-new.png') no-repeat\n    center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: fixed;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: rgba(var(--black-clr-rgb), 0.42);\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content ion-header ion-toolbar span.time {\n  background: var(--green-clr);\n  color: var(--white-clr);\n  padding: 2px 7px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  position: absolute;\n  right: 15px;\n}\nion-content .caller-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n}\nion-content .caller-img img,\nion-content .caller-img video {\n  height: 100%;\n  width: 100%;\n}\nion-content .caller-img .caller-info {\n  position: relative;\n  z-index: -1;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  display: inline-block;\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n}\nion-content .caller-img .caller-info .img-part {\n  height: 90px;\n  width: 90px;\n  border-radius: 90px;\n}\nion-content .caller-img .caller-info .img-part img {\n  width: 100%;\n  height: 100%;\n  border-radius: 90px;\n}\nion-content .caller-img .caller-info .img-part span {\n  height: 100%;\n  width: 100%;\n  border-radius: 90px;\n  background: #1b4b64;\n  color: var(--white-clr);\n  font-weight: 600;\n  font-size: 1rem;\n  text-transform: uppercase;\n  display: inline-block;\n  line-height: 90px;\n  text-align: center;\n}\nion-content .caller-img .caller-info .name-part {\n  text-align: center;\n}\nion-content .caller-img .caller-info .name-part p {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  margin: 0;\n  display: inline-block;\n}\nion-content .caller-img .caller-info .name-part .calling-text {\n  display: block;\n  color: white;\n  margin-left: 15px;\n}\nion-content .video-box {\n  position: absolute;\n  top: 105px;\n  right: 15px;\n  z-index: 7;\n  width: 110px;\n  height: 150px;\n  border-radius: 10px;\n}\nion-content .video-box img,\nion-content .video-box video {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\nion-content .call-buttons {\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  z-index: 5;\n}\nion-content .call-buttons ion-button {\n  cursor: pointer;\n  --ripple-color: transparent;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 90px;\n  width: 72px;\n  box-shadow: none;\n  border-radius: 50%;\n  --border-radius: 0;\n  margin: 10px 8px;\n  text-transform: capitalize;\n}\nion-content .call-buttons ion-button .btn-data span {\n  height: 58px;\n  width: 58px;\n  border-radius: 58px;\n  background: rgba(var(--black-bg-rgb), 0.42);\n  border: 2px solid rgba(var(--white-clr-rgb), 0.42);\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\nion-content .call-buttons ion-button .btn-data span img {\n  width: 30px;\n  height: 30px;\n}\nion-content .call-buttons ion-button .btn-data p {\n  margin: 10px 0 0;\n  padding: 0;\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\n.end-call span {\n  background-color: var(--busy) !important;\n}\n\n.mute-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  z-index: 9;\n}\n.mute-icon img {\n  width: 50px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/waitlist/call/call.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA;UAAA;EAEA,sBAAA;AACF;AAAE;EACE,eAAA;EACA,MAAA;EACA,WAAA;AAEJ;AADI;EACE,8CAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;AAGN;AAFM;EACE,eAAA;AAIR;AAFM;EACE,4BAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;AAIR;AAME;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA,EAAA,iBAAA;EAGA,wEAAA;EACA,mHAAA;AAJJ;AAMI;;EAEE,YAAA;EACA,WAAA;AAJN;AAMI;EAAa,kBAAA;EAAoB,WAAA;EAAa,kBAAA;EAAoB,kBAAA;EAAoB,OAAA;EAAS,MAAA;EAAQ,SAAA;EAAW,QAAA;EAAU,YAAA;EAAc,qBAAA;EAAuB,YAAA;EAAc,WAAA;EAAa,aAAA;EAAe,uBAAA;EAAyB,mBAAA;EAAqB,iBAAA;AAY7P;AAXQ;EACE,YAAA;EAAc,WAAA;EAAa,mBAAA;AAerC;AAdU;EAAI,WAAA;EAAa,YAAA;EAAc,mBAAA;AAmBzC;AAlBU;EAAK,YAAA;EAAc,WAAA;EAAa,mBAAA;EAAqB,mBAAA;EAAqB,uBAAA;EAAyB,gBAAA;EAAkB,eAAA;EAAiB,yBAAA;EAA2B,qBAAA;EAAuB,iBAAA;EAAmB,kBAAA;AA+BrN;AA7BQ;EAAW,kBAAA;AAgCnB;AA/BU;EAAE,0BAAA;EAA4B,gBAAA;EAAkB,mBAAA;EAAqB,uBAAA;EAAyB,SAAA;EAAW,qBAAA;AAuCnH;AAtCU;EACE,cAAA;EACA,YAAA;EACA,iBAAA;AAwCZ;AAjCE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;AAmCJ;AAlCI;;EAEE,WAAA;EACA,YAAA;EACA,mBAAA;AAoCN;AA9BE;EACE,eAAA;EACA,YAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;AAgCJ;AA/BI;EACE,eAAA;EACA,2BAAA;EACA,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,0BAAA;AAiCN;AA/BQ;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,2CAAA;EACA,kDAAA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAiCV;AAhCU;EACE,WAAA;EACA,YAAA;AAkCZ;AA/BQ;EACE,gBAAA;EACA,UAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AAiCV;;AA1BE;EACE,wCAAA;AA6BJ;;AA1BA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AA6BF;AA5BE;EACE,WAAA;AA8BJ","sourcesContent":["ion-content {\n  position: relative;\n  --background: url(../../../../assets/images/background-new.png) no-repeat\n    center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: fixed;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: rgba(var(--black-clr-rgb), 0.42);\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content ion-header ion-toolbar span.time {\n  background: var(--green-clr);\n  color: var(--white-clr);\n  padding: 2px 7px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  position: absolute;\n  right: 15px;\n}\nion-content .caller-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n}\nion-content .caller-img img,\nion-content .caller-img video {\n  height: 100%;\n  width: 100%;\n}\nion-content .caller-img .caller-info {\n  position: relative;\n  z-index: -1;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  display: inline-block;\n  height: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n}\nion-content .caller-img .caller-info .img-part {\n  height: 90px;\n  width: 90px;\n  border-radius: 90px;\n}\nion-content .caller-img .caller-info .img-part img {\n  width: 100%;\n  height: 100%;\n  border-radius: 90px;\n}\nion-content .caller-img .caller-info .img-part span {\n  height: 100%;\n  width: 100%;\n  border-radius: 90px;\n  background: #1b4b64;\n  color: var(--white-clr);\n  font-weight: 600;\n  font-size: 1rem;\n  text-transform: uppercase;\n  display: inline-block;\n  line-height: 90px;\n  text-align: center;\n}\nion-content .caller-img .caller-info .name-part {\n  text-align: center;\n}\nion-content .caller-img .caller-info .name-part p {\n  text-transform: capitalize;\n  font-weight: 700;\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  margin: 0;\n  display: inline-block;\n}\nion-content .caller-img .caller-info .name-part .calling-text {\n  display: block;\n  color: white;\n  margin-left: 15px;\n}\nion-content .video-box {\n  position: absolute;\n  top: 105px;\n  right: 15px;\n  z-index: 7;\n  width: 110px;\n  height: 150px;\n  border-radius: 10px;\n}\nion-content .video-box img,\nion-content .video-box video {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n}\nion-content .call-buttons {\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  z-index: 5;\n}\nion-content .call-buttons ion-button {\n  cursor: pointer;\n  --ripple-color: transparent;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 90px;\n  width: 72px;\n  box-shadow: none;\n  border-radius: 50%;\n  --border-radius: 0;\n  margin: 10px 8px;\n  text-transform: capitalize;\n}\nion-content .call-buttons ion-button .btn-data span {\n  height: 58px;\n  width: 58px;\n  border-radius: 58px;\n  background: rgba(var(--black-bg-rgb), 0.42);\n  border: 2px solid rgba(var(--white-clr-rgb), 0.42);\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\nion-content .call-buttons ion-button .btn-data span img {\n  width: 30px;\n  height: 30px;\n}\nion-content .call-buttons ion-button .btn-data p {\n  margin: 10px 0 0;\n  padding: 0;\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\n.end-call span {\n  background-color: var(--busy) !important;\n}\n\n.mute-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  z-index: 9;\n}\n.mute-icon img {\n  width: 50px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73416:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/waitlist/fan-waitlist/fan-waitlist.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --box-shadow: 0px -6px 7px #2d94c9;\n  position: relative;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 20px 0 5px;\n  width: 100%;\n  position: fixed;\n  top: 3px;\n  z-index: 9999;\n  background: transparent;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  background: rgba(var(--black-bg-rgb), 0.4);\n  border-radius: 50px;\n  position: absolute;\n  left: 15px;\n  z-index: 9;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex-flow: column;\n  justify-content: end;\n}\nion-content .main-screen .video-box {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  min-width: 100%;\n}\nion-content .main-screen .video-box video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content .main-screen .bottom-part {\n  text-align: center;\n}\nion-content .main-screen .bottom-part .live-green {\n  background: rgba(var(--green-bg-rgb), 0.4);\n  display: inline-block;\n  position: relative;\n  z-index: 99;\n  width: auto;\n  margin: 0 auto;\n  margin-bottom: 6px;\n  padding: 5px 10px;\n  border-radius: 35px;\n}\nion-content .main-screen .bottom-part .live-green p {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  line-height: 26px;\n}\nion-content .main-screen .bottom-part .live-green p span {\n  font-weight: 700;\n  text-transform: uppercase;\n  background: var(--green-bg);\n  padding: 6px 15px;\n  border-radius: 50px;\n}\nion-content .main-screen .bottom-part .sponsor-add-part {\n  padding: 10px 15px;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data {\n  position: relative;\n  z-index: 9;\n  background: var(--white-bg);\n  border-radius: 20px 6px 26px 40px;\n  padding-left: 75px;\n  min-height: 57px;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .sponsor-logo-part {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 70px;\n  width: 70px;\n  border-radius: 70px;\n  border: 2px solid var(--theme-one-clr);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 11px;\n  background: var(--white-bg);\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .sponsor-logo-part img {\n  width: 100%;\n  height: auto;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part {\n  text-align: left;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part h4 {\n  color: #43262E;\n  font-weight: 800;\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 1.25rem;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part p {\n  color: #691C32;\n  font-weight: 800;\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 0.75rem;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part p span {\n  color: #F26D21;\n}\nion-content .main-screen .bottom-part .slider-part {\n  padding: 5px 0px 5px;\n  background: var(--theme-one-bg);\n  position: relative;\n  z-index: 9;\n  background: transparent;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide .img-box {\n  width: 80px;\n  height: 80px;\n  border-radius: 80px;\n  padding: 15px;\n  border: 3px solid var(--theme-one-clr);\n  background: var(--white-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide .img-box img {\n  width: 80px;\n  height: 80px;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide h5 {\n  margin: 5px 0;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\nion-content .main-screen .bottom-part .wait-part {\n  border-radius: 35px 35px 0 0;\n  min-height: 190px;\n  background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -9px 15px #0071ae;\n  padding: 0 0px;\n  position: relative;\n  z-index: 99;\n}\nion-content .main-screen .bottom-part .wait-part .head {\n  background: rgba(var(--white-bg-rgb), 0.11);\n  padding: 15px 10px;\n  border-radius: 35px 35px 0 0;\n  text-align: center;\n}\nion-content .main-screen .bottom-part .wait-part .head h5 {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1.125rem;\n}\nion-content .main-screen .bottom-part .wait-part .head p {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 20px;\n}\nion-content .main-screen .bottom-part .wait-part .head-red {\n  background: #d85757;\n  padding: 15px 10px;\n  border-radius: 35px 35px 0 0;\n  text-align: center;\n  margin-top: 3px;\n}\nion-content .main-screen .bottom-part .wait-part .head-red p {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 20px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part {\n  text-align: center;\n  padding: 7px 15px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0 0 5px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part p span {\n  font-weight: 700;\n}\nion-content .main-screen .bottom-part .wait-part .content-part h4 {\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 400;\n  margin: 0 0 10px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part h4 span {\n  font-weight: 700;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit {\n  padding: 9px 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 5px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: transparent;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-avatar {\n  margin: 0 10px 0 0;\n  margin: 0 10px 0 0;\n  height: 42px;\n  width: 42px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-avatar img {\n  height: 42px;\n  width: 42px;\n  border-radius: 42px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-label h5 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--theme-one-clr);\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-label p {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--black-clr);\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item img.edit {\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid {\n  text-align: center;\n  padding: 5px 15px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0 10px;\n  display: inline-block;\n  flex: 1;\n  word-break: normal;\n  white-space: nowrap;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text .line {\n  width: 100%;\n  height: 2px;\n  background: var(--theme-one-bg);\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box {\n  display: inline-block;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box ion-item {\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: auto;\n  margin: 0 auto;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box ion-item img.edit {\n  display: none;\n}\nion-content .overlay-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  height: 100%;\n  background: rgba(var(--theme-one-bg-rgb), 0.4);\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  margin-right: 5px;\n  width: 34px;\n  height: 34px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/waitlist/fan-waitlist/fan-waitlist.page.scss"],"names":[],"mappings":"AAAA;EAEE,kCAAA;EACA,kBAAA;AAAF;AACE;EACE,SAAA;EACA,UAAA;EACA,4BAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,QAAA;EACA,aAAA;EACA,uBAAA;AACJ;AACM;EACE,qBAAA;EACA,yBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AACR;AACQ;EACE,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AACV;AACQ;EACE,SAAA;EACA,UAAA;AACV;AAAU;EACE,SAAA;EACA,UAAA;EACA,kBAAA;AAEZ;AADY;EACE,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;AAGd;AACQ;EACE,SAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AACV;AAAU;EACE,WAAA;AAEZ;AAAU;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,yBAAA;AAEZ;AAKE;EACE,kBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;AAHJ;AAII;EACE,eAAA;EACA,MAAA;EACA,YAAA;EACA,eAAA;AAFN;AAGM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AADR;AAII;EACE,kBAAA;AAFN;AAGM;EACE,0CAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AADR;AAEQ;EACE,kBAAA;EACA,uBAAA;EACA,SAAA;EACA,iBAAA;AAAV;AACU;EACE,gBAAA;EACA,yBAAA;EACA,2BAAA;EACA,iBAAA;EACA,mBAAA;AACZ;AAGM;EAAkB,kBAAA;AAAxB;AACQ;EAAc,kBAAA;EAAoB,UAAA;EAAY,2BAAA;EAA6B,iCAAA;EAAmC,kBAAA;EAAoB,gBAAA;EAAkB,aAAA;EAAe,mBAAA;AAS3K;AARU;EAAmB,kBAAA;EAAoB,OAAA;EAAS,SAAA;EAAW,YAAA;EAAc,WAAA;EAAa,mBAAA;EAAqB,sCAAA;EAAwC,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EAAyB,aAAA;EAAe,2BAAA;AAsBzO;AArBY;EAAI,WAAA;EAAa,YAAA;AAyB7B;AAvBU;EAAW,gBAAA;AA0BrB;AAzBY;EAAG,cAAA;EAAgB,gBAAA;EAAkB,SAAA;EAAW,yBAAA;EAA2B,kBAAA;AAgCvF;AA/BY;EAAE,cAAA;EAAgB,gBAAA;EAAkB,SAAA;EAAW,yBAAA;EAA2B,oBAAA;AAsCtF;AArCc;EAAK,cAAA;AAwCnB;AAnCM;EAAa,oBAAA;EAAsB,+BAAA;EAAiC,kBAAA;EAAoB,UAAA;EAAY,uBAAA;AA0C1G;AAtCc;EAAS,WAAA;EAAa,YAAA;EAAc,mBAAA;EAAqB,aAAA;EAAe,sCAAA;EAAwC,2BAAA;EAA6B,aAAA;EAAe,uBAAA;EAAyB,mBAAA;AAiDnM;AAhDgB;EAAI,WAAA;EAAa,YAAA;AAoDjC;AAlDc;EAAG,aAAA;EAAe,kBAAA;EAAoB,uBAAA;EAAyB,gBAAA;AAwD7E;AAnDM;EACE,4BAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EAWA,+EAAA;EAKA,mHAAA;EAEA,iCAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;AAwCR;AAvCQ;EACE,2CAAA;EACA,kBAAA;EACA,4BAAA;EACA,kBAAA;AAyCV;AAxCU;EACE,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AA0CZ;AAxCU;EACE,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AA0CZ;AAvCQ;EACE,mBAAA;EACA,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;AAyCV;AAxCU;EACE,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AA0CZ;AAvCQ;EACE,kBAAA;EACA,iBAAA;AAyCV;AAxCU;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;AA0CZ;AAzCY;EACE,gBAAA;AA2Cd;AAxCU;EACE,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,gBAAA;AA0CZ;AAzCY;EACE,gBAAA;AA2Cd;AAxCU;EACE,cAAA;AA0CZ;AAzCY;EACE,0CAAA;EACA,kBAAA;EACA,uCAAA;AA2Cd;AA1Cc;EACE,qBAAA;EACA,yBAAA;EACA,yBAAA;AA4ChB;AA3CgB;EACE,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;AA6ClB;AA5CkB;EACE,YAAA;EACA,WAAA;EACA,mBAAA;AA8CpB;AA1CkB;EACE,eAAA;EACA,gBAAA;EACA,2BAAA;EACA,SAAA;AA4CpB;AA1CkB;EACE,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;AA4CpB;AAzCgB;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,SAAA;AA2ClB;AAxCc;EACE,kBAAA;EACA,iBAAA;AA0ChB;AAzCgB;EACE,SAAA;EACA,aAAA;EACA,mBAAA;AA2ClB;AA1CkB;EACE,2BAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,OAAA;EACA,kBAAA;EACA,mBAAA;AA4CpB;AA1CkB;EACE,WAAA;EACA,WAAA;EACA,+BAAA;AA4CpB;AAtCc;EACE,qBAAA;AAwChB;AAvCgB;EACE,uBAAA;EAAA,kBAAA;EACA,eAAA;EACA,cAAA;AAyClB;AAxCkB;EACE,aAAA;AA0CpB;AAhCE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,8CAAA;AAkCJ;;AA/BA;EACE,kBAAA;AAkCF;AAjCE;EACE,iBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;AAmCJ","sourcesContent":["ion-content {\n  --box-shadow: 0px -6px 7px #2d94c9;\n  position: relative;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 20px 0 5px;\n  width: 100%;\n  position: fixed;\n  top: 3px;\n  z-index: 9999;\n  background: transparent;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n  background: rgba(var(--black-bg-rgb), 0.4);\n  border-radius: 50px;\n  position: absolute;\n  left: 15px;\n  z-index: 9;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex-flow: column;\n  justify-content: end;\n}\nion-content .main-screen .video-box {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  min-width: 100%;\n}\nion-content .main-screen .video-box video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content .main-screen .bottom-part {\n  text-align: center;\n}\nion-content .main-screen .bottom-part .live-green {\n  background: rgba(var(--green-bg-rgb), 0.4);\n  display: inline-block;\n  position: relative;\n  z-index: 99;\n  width: auto;\n  margin: 0 auto;\n  margin-bottom: 6px;\n  padding: 5px 10px;\n  border-radius: 35px;\n}\nion-content .main-screen .bottom-part .live-green p {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  line-height: 26px;\n}\nion-content .main-screen .bottom-part .live-green p span {\n  font-weight: 700;\n  text-transform: uppercase;\n  background: var(--green-bg);\n  padding: 6px 15px;\n  border-radius: 50px;\n}\nion-content .main-screen .bottom-part .sponsor-add-part {\n  padding: 10px 15px;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data {\n  position: relative;\n  z-index: 9;\n  background: var(--white-bg);\n  border-radius: 20px 6px 26px 40px;\n  padding-left: 75px;\n  min-height: 57px;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .sponsor-logo-part {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 70px;\n  width: 70px;\n  border-radius: 70px;\n  border: 2px solid var(--theme-one-clr);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 11px;\n  background: var(--white-bg);\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .sponsor-logo-part img {\n  width: 100%;\n  height: auto;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part {\n  text-align: left;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part h4 {\n  color: #43262E;\n  font-weight: 800;\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 1.25rem;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part p {\n  color: #691C32;\n  font-weight: 800;\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 0.75rem;\n}\nion-content .main-screen .bottom-part .sponsor-add-part .sponsor-data .text-part p span {\n  color: #F26D21;\n}\nion-content .main-screen .bottom-part .slider-part {\n  padding: 5px 0px 5px;\n  background: var(--theme-one-bg);\n  position: relative;\n  z-index: 9;\n  background: transparent;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide .img-box {\n  width: 80px;\n  height: 80px;\n  border-radius: 80px;\n  padding: 15px;\n  border: 3px solid var(--theme-one-clr);\n  background: var(--white-bg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide .img-box img {\n  width: 80px;\n  height: 80px;\n}\nion-content .main-screen .bottom-part .slider-part ion-slides ion-slide .slide h5 {\n  margin: 5px 0;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 500;\n}\nion-content .main-screen .bottom-part .wait-part {\n  border-radius: 35px 35px 0 0;\n  min-height: 190px;\n  background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  background: -moz-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -9px 15px #0071ae;\n  padding: 0 0px;\n  position: relative;\n  z-index: 99;\n}\nion-content .main-screen .bottom-part .wait-part .head {\n  background: rgba(var(--white-bg-rgb), 0.11);\n  padding: 15px 10px;\n  border-radius: 35px 35px 0 0;\n  text-align: center;\n}\nion-content .main-screen .bottom-part .wait-part .head h5 {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1.125rem;\n}\nion-content .main-screen .bottom-part .wait-part .head p {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 20px;\n}\nion-content .main-screen .bottom-part .wait-part .head-red {\n  background: #d85757;\n  padding: 15px 10px;\n  border-radius: 35px 35px 0 0;\n  text-align: center;\n  margin-top: 3px;\n}\nion-content .main-screen .bottom-part .wait-part .head-red p {\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 20px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part {\n  text-align: center;\n  padding: 7px 15px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0 0 5px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part p span {\n  font-weight: 700;\n}\nion-content .main-screen .bottom-part .wait-part .content-part h4 {\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 400;\n  margin: 0 0 10px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part h4 span {\n  font-weight: 700;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit {\n  padding: 9px 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 5px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: transparent;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-avatar {\n  margin: 0 10px 0 0;\n  margin: 0 10px 0 0;\n  height: 42px;\n  width: 42px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-avatar img {\n  height: 42px;\n  width: 42px;\n  border-radius: 42px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-label h5 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--theme-one-clr);\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item ion-label p {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--black-clr);\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box ion-item img.edit {\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n  margin: 0;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid {\n  text-align: center;\n  padding: 5px 15px;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text {\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0 10px;\n  display: inline-block;\n  flex: 1;\n  word-break: normal;\n  white-space: nowrap;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit .bg-white-box .increase-your-bid .main-text .line {\n  width: 100%;\n  height: 2px;\n  background: var(--theme-one-bg);\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box {\n  display: inline-block;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box ion-item {\n  width: fit-content;\n  min-width: auto;\n  margin: 0 auto;\n}\nion-content .main-screen .bottom-part .wait-part .content-part .bid-edit.bid-top .bg-white-box ion-item img.edit {\n  display: none;\n}\nion-content .overlay-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  height: 100%;\n  background: rgba(var(--theme-one-bg-rgb), 0.4);\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  margin-right: 5px;\n  width: 34px;\n  height: 34px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68799:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/waitlist/incoming-call/incoming-call.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  position: relative;\n  --background: url('background-new.png') no-repeat\n    center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: fixed;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: rgba(var(--black-clr-rgb), 0.42);\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content ion-header ion-toolbar span.time {\n  background: var(--green-clr);\n  color: var(--white-clr);\n  padding: 2px 7px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  position: absolute;\n  right: 15px;\n}\nion-content .caller-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-flow: column;\n  height: 100%;\n  z-index: 6;\n  position: relative;\n}\nion-content .caller-name h4 {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .caller-name p {\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: var(--white-clr);\n  margin: 10px 0 0;\n}\nion-content .caller-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 3;\n}\nion-content .caller-img img {\n  height: 100%;\n  width: 100%;\n}\nion-content .caller-img img.cover-img {\n  object-fit: cover;\n}\nion-content .overlay-bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  background: rgba(var(--theme-one-bg-rgb), 0.87);\n}\nion-content .call-buttons {\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  z-index: 20;\n}\nion-content .call-buttons ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 68px;\n  width: 68px;\n  box-shadow: none;\n  border-radius: 50%;\n  --border-radius: 50%;\n  margin: 10px 25px;\n}\nion-content .call-buttons ion-button img {\n  height: 68px;\n  width: 68px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/waitlist/incoming-call/incoming-call.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA;UAAA;EAEA,sBAAA;AACF;AAAE;EACE,eAAA;EACA,MAAA;EACA,WAAA;AAEJ;AADI;EACE,8CAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;AAGN;AAFM;EACE,eAAA;AAIR;AAFM;EACE,4BAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;AAIR;AACE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;AACJ;AAAI;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;AAEN;AAAI;EACE,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AAEN;AAEE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;AAAJ;AACI;EACE,YAAA;EACA,WAAA;AACN;AAAM;EAAY,iBAAA;AAGlB;AACE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,+CAAA;AACJ;AAEE;EACE,eAAA;EACA,YAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAAJ;AACI;EACE,eAAA;EACA,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;AACN;AAAM;EACE,YAAA;EACA,WAAA;AAER","sourcesContent":["ion-content {\n  position: relative;\n  --background: url(../../../../assets/images/background-new.png) no-repeat\n    center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: fixed;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: rgba(var(--black-clr-rgb), 0.42);\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content ion-header ion-toolbar span.time {\n  background: var(--green-clr);\n  color: var(--white-clr);\n  padding: 2px 7px;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  position: absolute;\n  right: 15px;\n}\nion-content .caller-name {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-flow: column;\n  height: 100%;\n  z-index: 6;\n  position: relative;\n}\nion-content .caller-name h4 {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .caller-name p {\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: var(--white-clr);\n  margin: 10px 0 0;\n}\nion-content .caller-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 3;\n}\nion-content .caller-img img {\n  height: 100%;\n  width: 100%;\n}\nion-content .caller-img img.cover-img {\n  object-fit: cover;\n}\nion-content .overlay-bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  background: rgba(var(--theme-one-bg-rgb), 0.87);\n}\nion-content .call-buttons {\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  z-index: 20;\n}\nion-content .call-buttons ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 68px;\n  width: 68px;\n  box-shadow: none;\n  border-radius: 50%;\n  --border-radius: 50%;\n  margin: 10px 25px;\n}\nion-content .call-buttons ion-button img {\n  height: 68px;\n  width: 68px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77573:
/*!**************************************************************!*\
  !*** ./src/app/pages/waitlist/waitlist.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30136:
/*!************************************************************************************!*\
  !*** ./src/app/pages/schedule/dismissmodal/dismissmodal.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Cancel Confirmation</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>Are you sure, you want to cancel appearance?</p>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss(false)\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\"modalCtrl.dismiss(true)\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 13007:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/waitlist/athlete-waitlist/athlete-waitlist.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\" [forceOverscroll]=\"false\">\n  <div class=\"main-screen\">\n    <ion-grid class=\"top-card\" >\n      <div class=\"title-part\">\n        <ion-item  lines=\"none\" mode=\"md\">\n          <ion-icon (click)=\"routeBackToSchedule()\" slot=\"start\" name=\"arrow-back-outline\" mode=\"md\"></ion-icon>\n          <ion-label>\n            <ion-grid class=\"logo-head\">\n              <img src=\"assets/images/single-logo.svg\" />\n              <div class=\"nil4all\">\n                <span>#NIL4ALL</span>\n              </div>\n            </ion-grid>\n          </ion-label>\n          <!-- <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n            <img src=\"assets/icon/notification.svg\" />\n            <span></span>\n          </div> -->\n        </ion-item>\n      </div>\n    \n      <div class=\"slider-part\" *ngIf=\"this.creatorPersona == 'ADMIN'\">\n        <ion-slides [options]=\"slideOpts\" autoplay=\"400\" speed=\"3000\">\n          <ion-slide>\n            <div class=\"slide\">\n              <div class=\"img-box\">\n                <img src=\"{{this.eventData.sponsorProfilePicture | profile}}\" />\n              </div>\n              <h5>{{this.eventData?.sponsorName}}</h5>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <!-- <div class=\"profile-img\">\n        <img [src]=\"userData?.profileUrl | profile\"/>\n      </div> -->\n      <div class=\"overlay-blue\"></div>\n      <div class=\"slider-part\" *ngIf=\"this.creatorPersona != 'ADMIN'\">\n        <ion-slides [options]=\"slideOpts\" autoplay=\"400\" speed=\"3000\">\n          <ion-slide *ngFor=\"let athlete of athleteList\">\n            <div class=\"slide\">\n              <div class=\"img-box\">\n                <img src=\"{{athlete.profileUrl | profile}}\" />\n              </div>\n              <h5>{{athlete?.fullName}}</h5>\n            </div>\n          </ion-slide>\n          <!-- <ion-slide>\n              <div class=\"slide\">\n                <img src=\"assets/images/big-chicken.png\" />\n                <h5>Papa John's</h5>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"slide\">\n                <img src=\"assets/images/big-chicken.png\" />\n                <h5>FILA</h5>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"slide\">\n                <img src=\"assets/images/big-chicken.png\" />\n                <h5>FILA</h5>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"slide\">\n                <img src=\"assets/images/big-chicken.png\" />\n                <h5>FILA</h5>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div class=\"slide\">\n                <img src=\"assets/images/big-chicken.png\" />\n                <h5>BIG Chicken</h5>\n              </div>\n            </ion-slide> -->\n        </ion-slides>\n      </div>\n    </ion-grid>\n    <div class=\"video-box\" >\n      <video #player\n      *ngIf=\"this.commonService.publicInfo?.videoUrls\"\n        id=\"muteSound\"\n        height=\"100%\"\n        width=\"100%\"\n      autoplay=\"true\"  \n      webkit-playsinline=\"true\"\n      playsinline=\"true\"\n      src=\"{{this.commonService.publicInfo?.videoUrls[currentIndex] | profile}}\"\n      (ended)=\"checkEnd()\"  >\n   \n    </video>\n    </div>\n    <div class=\"wait-part\">\n      <div class=\"head\">\n        <div class=\"bids-available\">\n          <ion-item lines=\"none\">\n            <ion-avatar\n              *ngFor=\"let fan of fanImagesList;let i =index\"\n              slot=\"start\"\n            >\n              <img\n                *ngIf=\"fan.userProfilePicture !== ''\"\n                [src]=\"fan.userProfilePicture | profile\"\n              />\n              <div *ngIf=\"fan.userProfilePicture == ''\" class=\"initials\">\n                <span class=\"initials__span-small\">\n                  {{getInitials(fan.userName)}}\n                </span>\n              </div>\n            </ion-avatar>\n\n            <ion-label>\n              {{connectedFans?.length}} Bids Available\n            </ion-label>\n          </ion-item>\n        </div>\n        <p>To join the live, please click on the button</p>\n      </div>\n\n      <div class=\"content-part\">\n        <div *ngIf=\"calledFans\" class=\"bid-list\">\n          <!-- add class \"top-call\" in bg-white-box -->\n          <div\n            *ngFor=\"let fan of calledFans;let i =index\"\n            class=\"bg-white-box top-call\"\n          >\n            <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ng-container *ngIf=\"fan.userProfilePicture == ''\">\n                  <div class=\"initials\">\n                    <span class=\"initials__span\">\n                      {{getInitials(fan.userName)}}\n                    </span>\n                  </div>\n                </ng-container>\n                <img\n                  *ngIf=\"fan.userProfilePicture !== ''\"\n                  [src]=\"fan.userProfilePicture |profile\"\n                />\n              </ion-avatar>\n              <ion-label>\n                <h5>{{fan.userName}}</h5>\n                <p *ngIf=\"fan.totalAmount != 0\">${{fan.totalAmount.toFixed()}}</p>\n                <p *ngIf=\"fan.totalAmount==0\">Free</p>\n              </ion-label>\n              <img\n                class=\"video\"\n                (click)=\"callFan(fan)\"\n                slot=\"end\"\n                src=\"assets/icon/video-icon.png\"\n              />\n            </ion-item>\n          </div>\n        </div>\n        <div *ngIf=\"pendingCallFans\" class=\"bid-list\">\n          <!-- add class \"top-call\" in bg-white-box -->\n          <div\n            *ngFor=\"let fan of pendingCallFans;let i =index\"\n            [ngClass]=\"i==0 ? 'top-call':'' \"\n            class=\"bg-white-box\"\n          >\n            <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <ng-container *ngIf=\"fan.userProfilePicture == ''\">\n                  <div class=\"initials\">\n                    <span class=\"initials__span\">\n                      {{getInitials(fan.userName)}}\n                    </span>\n                  </div>\n                </ng-container>\n                <img\n                  *ngIf=\"fan.userProfilePicture !== ''\"\n                  [src]=\"fan.userProfilePicture |profile\"\n                />\n              </ion-avatar>\n              <ion-label>\n                <h5>{{fan.userName}}</h5>\n                <p *ngIf=\"fan.totalAmount != 0\">${{fan.totalAmount.toFixed()}}</p>\n                <p *ngIf=\"fan.totalAmount==0\">Free</p>\n              </ion-label>\n              <img\n                class=\"video\"\n                (click)=\"callFan(fan)\"\n                slot=\"end\"\n                src=\"assets/icon/video-icon.png\"\n              />\n            </ion-item>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"end-event\" (click)=\"eventEnd();\" id=\"end-event\">\n      <!-- <img src=\"assets/images/red-video.png\" /> -->\n      <img src=\"assets/images/cancel-icon.svg\">\n      <i>End Appearance</i>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 78168:
/*!********************************************************************!*\
  !*** ./src/app/pages/waitlist/call/call.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <img src=\"assets/images/single-logo.svg\" />\n      <span class=\"time\" slot=\"end\" [style.background]= \"color\">\n        {{secondsToHms(timeLeft)}}\n      </span>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- <div class=\"caller-name\">\n      <h4>Casey Rodgers</h4>\n      <p>Incoming Video Call</p>\n  </div> -->\n\n  <div class=\"video-box\">\n    <div #athleteContainer class=\"\"></div>\n    <!-- <img *ngIf=\"subscribe?.stream?.hasAudio==false\" src=\"assets/icon/voice-off.svg\" /> -->\n    <!-- <img *ngIf=\"subscribe?.stream.hasAudio==true\" src=\"assets/icon/voice.svg \" /> -->\n  </div>\n\n  <div class=\"caller-img\" >\n    <div #fanContainer class=\"\"></div>\n    <!-- <img src=\"assets/images/video-screen.png\" /> -->\n\n    <!-- <img src=\"assets/images/call-screen-updated.png\" /> -->\n    <div class=\"caller-info\">\n      <div class=\"img-part\" id=\"imgName\" *ngIf=\"userRole != 'athlete'\">\n        <img \n        *ngIf=\"commonService.callingAthleteDetails?.athleteProfilePicture !=='' \"\n        [src]=\"commonService.callingAthleteDetails?.athleteProfilePicture | profile\"\n        alt=\"\" class=\"cover-img\"\n      />\n  \n          <!-- <img *ngIf=\"this.userDetail.profileUrl!=''\" src=\"{{this.userDetail.profileUrl | profile}}\"> -->\n         \n        <span *ngIf=\"commonService.callingAthleteDetails?.athleteProfilePicture==''\">{{this.commonService.getInitials(this.commonService.callingAthleteDetails?.athleteName)}}</span>\n       \n\n      </div>\n      <div class=\"name-part\" *ngIf=\"userRole != 'athlete'\">\n        <p>{{this.commonService.callingAthleteDetails?.athleteName}}</p>\n      </div>\n      <div class=\"img-part\" *ngIf=\"userRole =='athlete'\">\n        <img \n        *ngIf=\"commonService.callingFanDetail?.userProfilePicture !=='' \"\n        [src]=\"commonService.callingFanDetail?.userProfilePicture | profile\"\n        alt=\"\" class=\"cover-img\"\n      />\n          <!-- <img *ngIf=\"this.userDetail.profileUrl!=''\" src=\"{{this.userDetail.profileUrl | profile}}\"> -->\n         \n        <span *ngIf=\"commonService.callingFanDetail?.userProfilePicture==''\">{{this.commonService.getInitials(this.commonService.callingFanDetail?.userName)}}</span>\n      </div>\n      <div class=\"name-part\" *ngIf=\"userRole == 'athlete'\">\n        <p>{{this.commonService.callingFanDetail?.userName}}</p>\n       <span class=\"calling-text\">calling...</span>\n      </div>\n\n    \n    </div>\n    \n  </div>\n\n  <!-- <div class=\"overlay-bg\"></div> -->\n<div class=\"mute-icon\">\n  <img *ngIf=\"subscribe?.stream?.hasAudio==false\" src=\"assets/icon/voice-off.svg\" />\n</div>\n  <div class=\"call-buttons\">\n    <ion-button (click)=\"toggleMuteButton()\">\n      <div class=\"btn-data\">\n        <span>\n          <img *ngIf=\"!isAudioMuted\" src=\"assets/icon/voice.svg\" />\n          <img *ngIf=\"isAudioMuted\" src=\"assets/icon/voice-off.svg\" />\n        </span>\n        <p>{{isAudioMuted ? ' Unmute' : 'Mute' }}</p>\n      </div>\n    </ion-button>\n    <ion-button (click)=\"toggleVideoButton()\">\n      <div class=\"btn-data\">\n        <span>\n          <img *ngIf=\"isVideoOn\" src=\"assets/icon/video-call.svg\" />\n          <img *ngIf=\"!isVideoOn\" src=\"assets/icon/video-call-off.svg\" />\n        </span>\n        <p>{{isVideoOn ? 'video on ' : 'video off' }}</p>\n      </div>\n    </ion-button>\n    <ion-button (click)=\"switchCameraSource()\">\n      <div class=\"btn-data\">\n        <span><img src=\"assets/icon/flip-camara.svg\" /></span>\n        <p>flip</p>\n      </div>\n    </ion-button>\n    <ion-button (click)=\"disconnectCall()\" *ngIf=\"userRole == 'athlete'\">\n      <div class=\"btn-data end-call\">\n        <span><img src=\"assets/icon/end-call.svg\" /></span>\n        <p>End</p>\n      </div>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 35746:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/waitlist/fan-waitlist/fan-waitlist.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\" [forceOverscroll]=\"false\" mode=\"md\">\n  <ion-grid class=\"top-card\" mode=\"md\">\n    <div class=\"title-part\" >\n      <ion-item  lines=\"none\" mode=\"md\">\n        <ion-icon (click)=\"routeBackToSchedule()\" slot=\"start\" name=\"arrow-back-outline\" mode=\"md\"></ion-icon>\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n        <!-- <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span></span>\n        </div> -->\n      </ion-item>\n    </div>\n  </ion-grid>\n  <div class=\"main-screen\">\n   \n    <!-- <button (click)=\"soundOnOff()\" style=\"position: relative; z-index:999\">mute</button> -->\n    <div class=\"video-box\">\n      <video #player\n      *ngIf=\"this.commonService.publicInfo?.videoUrls\"\n        id=\"muteSound\"\n        height=\"100%\"\n        width=\"100%\"\n      autoplay=\"true\"  \n      webkit-playsinline=\"true\"\n      playsinline=\"true\"\n      src=\"{{this.commonService.publicInfo?.videoUrls[currentIndex] | profile}}\"\n      (ended)=\"checkEnd()\"  >\n   \n    </video>\n  \n      <!-- <video\n      *ngIf=\"this.creatorPersona == 'ADMIN'\"\n        id=\"muteSound\"\n        height=\"100%\"\n        width=\"100%\"\n        loop=\"true\"\n        autoplay\n        autoplay=\"autoplay\"\n        webkit-playsinline\n        playsinline\n      >\n        <source src=\"{{this.eventData.sponsorVideoUrl | profile}}\" />\n        <p class=\"warning\">Your browser does not support HTML5 video.</p>\n      </video> -->\n    </div>\n  \n    \n    <div class=\"bottom-part\">\n\n      <div *ngIf=\"this.creatorPersona == 'ADMIN'\" class=\"sponsor-add-part\">\n        <div class=\"sponsor-data\">\n          <div class=\"sponsor-logo-part\" *ngIf=\"this.eventData?.sponsorProfilePicture\">\n            <img src=\"{{this.eventData?.sponsorProfilePicture | profile }}\">\n          </div>\n          <div class=\"text-part\" *ngIf=\"this.eventData?.sponsorName\">\n              <h4>{{this.eventData?.sponsorName}}</h4>\n              <!-- <p>BIG FOOD. <span>BIG FLAVOR.</span> BIG FUN.</p> -->\n              <p>{{this.eventData?.description}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"this.creatorPersona !== 'ADMIN'\" class=\"slider-part\">\n        <ion-slides\n          [options]=\"slideOpts\"\n          autoplay=\"400\"\n          speed=\"3000\"\n          centeredSlides=\"true\"\n        >\n          <ion-slide *ngFor=\"let sponsor of sponsorList\">\n            <div class=\"slide\">\n              <div class=\"img-box\">\n                <img src=\"{{sponsor.profileUrl | profile}}\" />\n              </div>\n              <h5>{{sponsor?.fullName}}</h5>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n      <div class=\"live-green\">\n        <p *ngIf=\"this.eventTime?.minutes\">\n          {{eventData?.athleteName | titlecase}} will be live in just\n          <ng-container *ngIf=\"this.eventTime?.days\">\n            {{this.eventTime?.days }} {{this.eventTime?.title_days}} :\n          </ng-container>\n          <ng-container *ngIf=\"this.eventTime?.hours\">\n            {{this.eventTime?.hours }} {{this.eventTime?.title_hours}} :\n          </ng-container>\n          <!-- {{this.eventTime?.minutes}} {{this.eventTime?.title_min}} -->\n          <ng-container *ngIf=\"this.eventTime?.minutes > 0\">\n            {{this.eventTime?.minutes}} {{this.eventTime?.title_min}}\n          </ng-container>\n          <ng-container *ngIf=\"this.eventTime?.minutes < 0\">\n            few mins\n          </ng-container>\n        </p>\n        <p *ngIf=\"!this.eventTime?.minutes\">\n          {{eventData?.athleteName | titlecase}} is <span>LIVE</span> For Next\n          30 minutes\n        </p>\n      </div>\n\n      <div class=\"wait-part\">\n        <div class=\"head\">\n          <ng-container *ngIf=\"connectedFanDetails?.bidState == 'PENDING'\">\n            <h5 *ngIf=\"currentPosition !== 0\">\n              {{currentPosition}} people in wait list ahead of you\n            </h5>\n            <p *ngIf=\"currentPosition == 0\">\n              You are 1st in the wait list,<br />\n              {{eventData?.athleteName}} will call you soon.\n            </p>\n          </ng-container>\n        </div>\n        <div class=\"head-red\" hidden>\n          <p>Unfortunately, call was not received</p>\n        </div>\n        <div class=\"content-part\">\n          <ng-container *ngIf=\"connectedFanDetails?.bidState == 'PENDING'\">\n            <!-- <p *ngIf=\"currentPosition !== 0\">\n              Your approximate wait time is\n              <span\n                >{{currentPosition *\n                commonService.publicInfo?.defaultDurationOfAthleteEvent}}</span\n              >\n              minutes\n            </p> -->\n            <p>\n              {{eventData?.athleteName}} will call you soon.\n              \n            </p>\n            <p>\n              Top Bid in the waitlist :\n              <!-- <span>${{connectedFanDetails?.totalAmount}}</span> -->\n              <span>${{highestBid}}</span>\n            </p>\n          </ng-container>\n          <ng-container *ngIf=\"connectedFanDetails?.bidState !== 'PENDING'\">\n            <p>\n              Your calling time is\n              <span\n                >{{commonService.secondsToHms(connectedFanDetails?.remainingTime)}}</span\n              >\n\n              wait for a while athlete may connect you again\n            </p>\n          </ng-container>\n          <h4 hidden><span>Casey Rodgers</span> will connect with you soon</h4>\n\n          <div class=\"bid-edit\">\n            <!-- add class \"bid-top\" in bid-edit -->\n            <div class=\"bg-white-box\">\n              <ion-item lines=\"none\">\n                <ion-avatar *ngIf=\"userData?.profileUrl !== ''\" slot=\"start\">\n                  <img [src]=\"userData?.profileUrl | profile\" />\n                </ion-avatar>\n                <ng-container *ngIf=\"userData?.profileUrl == ''\">\n                  <div class=\"initials\">\n                    <span class=\"initials__span\">\n                      {{nameInitials}}\n                    </span>\n                    <span class=\"initials__online online\"></span>\n                  </div>\n                </ng-container>\n                <ion-label>\n                  <h5>{{userData?.fullName}}</h5>\n                  <p *ngIf=\"connectedFanDetails?.totalAmount != 0\">${{connectedFanDetails?.totalAmount}}</p>\n                  <p *ngIf=\"connectedFanDetails?.totalAmount==0\">Free</p>\n                  <!-- <h5>Work in progress</h5> -->\n                </ion-label>\n                <img\n                  (click)=\"updateBid()\"\n                  class=\"edit\"\n                  slot=\"end\"\n                  src=\"assets/icon/edit-green.png\"\n                />\n              </ion-item>\n              <div class=\"increase-your-bid\">\n                <div class=\"main-text\">\n                  <span class=\"line\"></span>\n                  <p>Wanna Bubble Up? Increase your Bid</p>\n                  <span class=\"line\"></span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"overlay-bg\"></div>\n  \n  \n</ion-content>\n";

/***/ }),

/***/ 8470:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/waitlist/incoming-call/incoming-call.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <img src=\"assets/images/single-logo.svg\" />\n      <!-- <span class=\"time\" slot=\"end\">\n        03 m : 00 s\n      </span> -->\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"caller-name\">\n    <h4>{{this.commonData?.athleteName}}</h4>\n    <p>Incoming Video Call</p>\n  </div>\n\n  <div class=\"caller-img\">\n    <img\n      *ngIf=\"this.commonData?.athleteProfilePicture !==''\"\n      [src]=\"this.commonData?.athleteProfilePicture | profile\"\n      alt=\"\" class=\"cover-img\"\n    />\n    <div\n      *ngIf=\"this.commonData?.athleteProfilePicture  ==''\"\n      class=\"inital\"\n    >\n      <span class=\"initial__span\">\n        {{nameInitials}}\n      </span>\n    </div>\n    <!-- <img src=\"assets/images/bg-img.png\" /> -->\n  </div>\n\n  <div class=\"overlay-bg\"></div>\n\n  <div class=\"call-buttons\">\n    <!-- <ion-button (click)=\"joinCall()\">\n      <img src=\"assets/images/call-green.png\" />\n    </ion-button> -->\n    <ion-button>\n      <img (click)=\"disconnectCall()\" src=\"assets/images/call-red.png\" />\n    </ion-button>\n    <ion-button (click)=\"joinCall()\">\n      <img src=\"assets/images/call-green.png\" />\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 13675:
/*!**************************************************************!*\
  !*** ./src/app/pages/waitlist/waitlist.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" [forceOverscroll]=\"false\">\n  <athlete-waitlist\n    [connectedFans]=\"connectedFans\"\n    [eventId]=\"eventId\"\n    [calledFans]=\"calledFans\"\n    [pendingCallFans]=\"pendingCallFans\"\n    *ngIf=\"userRole == 'athlete'\"\n  ></athlete-waitlist>\n  <fan-waitlist\n    [connectedFans]=\"connectedFans\"\n    [calledFans]=\"calledFans\"\n    [pendingCallFans]=\"pendingCallFans\"\n    [eventId]=\"eventId\"\n    *ngIf=\"userRole == 'fan'\"\n  ></fan-waitlist>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_waitlist_waitlist_module_ts.js.map