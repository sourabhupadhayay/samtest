(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-view_athlete_athlete_module_ts"],{

/***/ 54981:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athelete-card/athelete-card.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtheleteCardComponent": () => (/* binding */ AtheleteCardComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _athelete_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./athelete-card.component.html?ngResource */ 21435);
/* harmony import */ var _athelete_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./athelete-card.component.scss?ngResource */ 29989);
/* harmony import */ var _athelete_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_athelete_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_pages_schedule_cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component */ 83258);
/* harmony import */ var src_app_pages_schedule_dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/schedule/dismissmodal/dismissmodal.component */ 32746);
/* harmony import */ var src_app_pages_schedule_meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/schedule/meet-otp/meet-otp.component */ 19940);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);














let AtheleteCardComponent = class AtheleteCardComponent {
  constructor(cd, coreService, apiService, constantService, commonService, alertController, modalCtrl, router) {
    this.cd = cd;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.commonService = commonService;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.eventState = "APPROVED";
    this.timer = null;
  }
  ngOnInit() {
    this.dateFormat();
    console.log("user ", this.userRole);
    this.getInitials();
  }
  getInitials() {
    this.nameInitials = this.commonService.getInitials(this.cardData.userName);
    this.athleteNameInitials = this.commonService.getInitials(this.cardData.athleteName);
  }
  getAthleteInitials(fullName) {
    let initials = fullName.split(' ');
    initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
  presentAlert() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: "Coming soon",
        message: "This feature is coming soon stay tuned",
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  canJoinEvent() {
    if (this.timer.hours) {
      return true;
    }
    if (this.timer.days) {
      return true;
    }
    if (this.timer.minutes < 10) {
      return false;
    } else {
      return true;
    }
  }
  joinFanCall(id) {
    this.router.navigate(["waitlist/call/" + id], {
      queryParams: {
        isBidEvent: false
      }
    });
  }
  athleteEvent(id) {
    this.router.navigate(["waitlist/event/" + id]);
  }
  openOtpModel() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let eventData = {
        eventName: _this2.cardData.eventName,
        userRole: _this2.userRole,
        eventId: _this2.cardData.id,
        athleteName: _this2.cardData.athleteName,
        fanName: _this2.cardData.userName
      };
      const modal = yield _this2.modalCtrl.create({
        component: src_app_pages_schedule_meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_5__.MeetOtpComponent,
        componentProps: eventData,
        cssClass: "small-modal"
      });
      modal.present();
    })();
  }
  canAthleteJoinEvent(count) {
    if (count == 0) {
      return true;
    }
  }
  canBidForEvent() {
    if (this.timer.days < 5) {
      return false;
    } else if (!this.timer.days) {
      return false;
    } else {
      return true;
    }
  }
  presentDismissModal() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: src_app_pages_schedule_dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_4__.DismissmodalComponent,
        cssClass: "small-modal"
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (!data) {
        return;
      }
      if (_this3.eventState == "PENDING") {
        _this3.changeEventStatus("CANCELLED");
      } else {
        _this3.presentMessageModal();
      }
    })();
  }
  presentMessageModal() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: src_app_pages_schedule_cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_3__.CancelMessageModalComponent,
        componentProps: {
          eventState: _this4.eventState
        },
        cssClass: "small-modal"
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (!data) {
        return;
      }
      _this4.changeEventStatus("CANCELLED", data);
    })();
  }
  changeEventStatus(eventState, rejectionMessage) {
    let request;
    if (rejectionMessage) {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?eventStatus=${eventState}&reason=${rejectionMessage}&sendMail=false`,
        isAuth: true
      };
    } else {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?eventStatus=${eventState}&sendMail=false`,
        isAuth: true
      };
    }
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        this.changeStatus.emit();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rhours == 0) {
      return rminutes + "m";
    }
    if (rminutes > 1 && rhours > 1) {
      return rhours + "h " + rminutes + "m";
    } else {
      return rhours + "h ";
    }
  }
  dateFormat() {
    var countDownDate = new Date(this.cardData.startDate).getTime();
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
    //initial time
    this.liveTime = days + "days" + " : " + hours + "hours" + " : " + minutes + "mins " + " : " + seconds + "S";
    if (days >= 1) {
      this.counter = {
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
        this.counter = {
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S"
        };
      } else {
        this.counter = {
          hours: hours,
          title_hours: "hours",
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S"
        };
      }
    }
    this.timer = this.counter;
    //refresh time after 60 seconds
    this.interval = setInterval(() => {
      now = new Date().getTime();
      timeleft = countDownDate - now;
      days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
      seconds = Math.floor(timeleft % (1000 * 60) / 1000);
      this.liveTime = days + "days" + " : " + hours + "hours" + " : " + minutes + "mins " + " : " + seconds + "S";
      if (days >= 1) {
        this.counter = {
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
          this.counter = {
            minutes: minutes,
            title_min: "mins",
            sec: seconds,
            title_sec: "S"
          };
        } else {
          this.counter = {
            hours: hours,
            title_hours: "hours",
            minutes: minutes,
            title_min: "mins",
            sec: seconds,
            title_sec: "S"
          };
        }
      }
      this.timer = this.counter;
      this.cd.detectChanges();
    }, 60000);
  }
  cardBorderClass() {
    if (this.userRole == "athlete") {
      return "card-border";
    } else {
      if (this.eventState == "APPROVED") {
        return "card-border";
      }
    }
  }
  invitedText() {
    if (this.cardData.creatorPersona == "ADMIN" || this.cardData.creatorPersona == "ATHLETE") {
      return "Created by";
    } else {
      return "Invited by";
    }
  }
  bidAthleteEvent(id) {
    this.router.navigate(["bid-payment/" + id]);
  }
  // cardBorderClass(): string {
  //   if (this.userRole == "athlete") {
  //     return "card-border";
  //   } else {
  //     if (this.eventState == "APPROVED") {
  //       return "card-border";
  //     }
  //   }
  // }
  ionViewDidLeave() {
    clearInterval(this.interval);
  }
};
AtheleteCardComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_8__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_9__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}];
AtheleteCardComponent.propDecorators = {
  changeStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output
  }],
  cardData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  eventFilter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  eventState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  userRole: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }]
};
AtheleteCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "athlete-card",
  template: _athelete_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  styles: [(_athelete_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AtheleteCardComponent);


/***/ }),

/***/ 87845:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athlete-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AthletePageRoutingModule": () => (/* binding */ AthletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _athlete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./athlete.page */ 49159);




const routes = [{
  path: ":id",
  component: _athlete_page__WEBPACK_IMPORTED_MODULE_0__.AthletePage
}];
let AthletePageRoutingModule = class AthletePageRoutingModule {};
AthletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AthletePageRoutingModule);


/***/ }),

/***/ 55144:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athlete.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AthletePageModule": () => (/* binding */ AthletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _athlete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./athlete-routing.module */ 87845);
/* harmony import */ var _athlete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./athlete.page */ 49159);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _athelete_card_athelete_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./athelete-card/athelete-card.component */ 54981);









let AthletePageModule = class AthletePageModule {};
AthletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _athlete_routing_module__WEBPACK_IMPORTED_MODULE_0__.AthletePageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule],
  declarations: [_athlete_page__WEBPACK_IMPORTED_MODULE_1__.AthletePage, _athelete_card_athelete_card_component__WEBPACK_IMPORTED_MODULE_3__.AtheleteCardComponent]
})], AthletePageModule);


/***/ }),

/***/ 49159:
/*!************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athlete.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AthletePage": () => (/* binding */ AthletePage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _athlete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./athlete.page.html?ngResource */ 64074);
/* harmony import */ var _athlete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./athlete.page.scss?ngResource */ 48217);
/* harmony import */ var _athlete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_athlete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _providers_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/common.service */ 33507);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../push-notification/push-notification.page */ 30493);














let AthletePage = class AthletePage {
  constructor(modalCtrl, coreService, apiService, route, router, constantService, cd, commonService, popoverController, activeRoute) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.apiService = apiService;
    this.route = route;
    this.router = router;
    this.constantService = constantService;
    this.cd = cd;
    this.commonService = commonService;
    this.popoverController = popoverController;
    this.activeRoute = activeRoute;
    this.athleteData = null;
    this.selectedIndex = "appearances";
    this.scheduleData = [];
    this.eventFilter = "All";
    this.latestAthleteEvent = null;
    this.isScrollDisabled = false;
    this.pageNumber = 0;
    this.totalElements = 0;
    this.isClassAdded = false;
    this.eventState = "APPROVED";
    this.badgeCount = 0;
    this.isFromListing = false;
  }
  ngOnInit() {
    this.getUserRole();
    this.getAthleteData();
    this.getAppearanceData();
    this.getNotificationCount();
    this.getQueryParam();
  }
  getQueryParam() {
    this.activeRoute.queryParams.subscribe(params => {
      this.isFromListing = params?.listing == 'true' ? true : false;
    });
  }
  redirectBack() {
    if (this.isFromListing) {
      this.router.navigate(["/bubble-screen-list"]);
    } else {
      this.router.navigate(["/tabs/home"]);
    }
  }
  getUserRole() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userRole = yield _this.coreService.getUserRoleFromStorage();
    })();
  }
  ionViewDidEnter() {
    this.addClassOnScroll();
    this.getAppearanceData();
  }
  addClassOnScroll() {
    this.content.ionScroll.subscribe(data => {
      if (data.detail.scrollTop > 50) {
        this.isClassAdded = true;
        this.cd.detectChanges();
      } else if (data.detail.scrollTop < 50) {
        this.isClassAdded = false;
        this.cd.detectChanges();
      }
    });
  }
  getAppearanceData() {
    if (this.selectedIndex == "appearances") {
      this.getAthleteAppearances();
    }
  }
  getAthleteData() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      this.coreService.presentLoader(this.constantService.WAIT);
      this.athleteId = params.get("id");
      let request = {
        path: "auth/users/currentUser?userId=" + params.get("id"),
        isAuth: true
      };
      return this.apiService.get(request);
    })).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.athleteData = response.data;
        this.nameInitials = this.commonService.getInitials(this.athleteData.fullName);
        this.getLatestAthleteEvent();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  getAthleteAppearances() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      let request = {
        path: "core/event/getEvents",
        data: {
          filter: {
            athleteIds: [params.get("id")],
            eventStatuses: ["APPROVED"],
            creatorPersonas: ["ATHLETE", "USER", "ADMIN"],
            selfCreated: true
          },
          page: {
            pageLimit: 10,
            pageNumber: this.pageNumber
          },
          sort: {
            orderBy: "DESC",
            sortBy: "START_DATE"
          }
        },
        isAuth: true
      };
      if (this.eventFilter == "past") {
        request.data.filter.eventState = "PAST";
      } else if (this.eventFilter == "upcoming") {
        request.data.filter.eventState = "UPCOMING";
      }
      // this.coreService.presentLoader(this.constantService.WAIT);
      return this.apiService.post(request);
    })).subscribe(response => {
      // this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.pageNumber == 0) {
          this.scheduleData = response.data.content;
        } else {
          response.data.content.forEach(element => {
            this.scheduleData.push(element);
          });
        }
        // console.log("data ", this.scheduleData.length);
        this.totalElements = response.data.totalElements;
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  resetAndGetMoreData() {
    this.totalElements = 0;
    this.pageNumber = 0;
    this.isScrollDisabled = false;
    this.scheduleData = [];
    this.getAthleteAppearances();
  }
  loadMoreEvents(event) {
    this.pageNumber++;
    this.getAthleteAppearances();
    event.target.complete();
    if (this.totalElements <= this.scheduleData.length) {
      this.isScrollDisabled = true;
    }
  }
  getLatestAthleteEvent() {
    this.coreService.presentLoader(this.constantService.WAIT);
    let request = {
      path: "core/event/athlete/latest/" + this.athleteId,
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.latestAthleteEvent = response.data;
        this.calculateTime();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  calculateTime() {
    this.eventTime = this.commonService.dateFormat(this.latestAthleteEvent?.startDate);
    this.interval = setInterval(() => {
      this.eventTime = this.commonService.dateFormat(this.latestAthleteEvent?.startDate);
    }, 60000);
  }
  getAmountOpened(event) {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let number = yield event.target.getOpenAmount();
      //convert negative to positive number
      number = Math.abs(number);
      if (number > 150) {
        _this2.router.navigate(["/bid-payment/" + _this2.latestAthleteEvent.id]);
      }
    })();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  getNotificationCount() {
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
  presentPopover(ev) {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this3.popoverController.create({
        component: _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_7__.PushNotificationPage,
        cssClass: 'notification-pop',
        event: ev,
        translucent: false,
        side: 'bottom',
        alignment: 'start',
        size: 'auto'
      });
      yield popover.present();
      const {
        role
      } = yield popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    })();
  }
};
AthletePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__.ConstantService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
}, {
  type: _providers_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}];
AthletePage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent]
  }]
};
AthletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-athlete",
  template: _athlete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_athlete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AthletePage);


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

/***/ 29989:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athelete-card/athelete-card.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-item-sliding {\n  margin: 30px 0;\n  overflow: visible;\n}\nion-item-sliding ion-item-options {\n  flex-flow: column;\n  align-items: flex-end;\n  background: var(--dark-blue);\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option {\n  height: inherit;\n  background: var(--dark-blue);\n  width: 90px;\n  border-bottom: 1px solid rgba(var(--white-clr-rgb), 0.5);\n}\nion-item-sliding ion-item-options ion-item-option button {\n  display: inline-block;\n  text-align: right;\n  width: auto;\n}\nion-item-sliding ion-item-options ion-item-option:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option:first-child {\n  border-top-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option.delete {\n  background: var(--red-bg);\n}\nion-item-sliding ion-item-options ion-item-option.approve {\n  background: var(--green-clr);\n}\nion-item-sliding.item-sliding-active-slide span img {\n  transform: rotate(0deg);\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 12px;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: right;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 17px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 12px;\n  font-weight: 300;\n  margin: 0;\n  white-space: nowrap;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  box-shadow: none;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 12px;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: rgba(var(--black-bg-rgb), 0.25);\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 12px;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 12px;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 2px;\n  font-size: 12px;\n  padding-left: 2px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n.card__cta--blue p {\n  margin: 0;\n}\n.card__cta--blue span {\n  display: inline-block;\n  margin: 0 3px 0 0;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 25px;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb;\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid !important;\n  place-items: center;\n  font-size: 10px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 0.75rem;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 0.75rem;\n  text-align: right;\n  min-height: 7px;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  word-wrap: break-word;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 0.75rem;\n  font-weight: 300;\n  margin: 0;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__date span {\n  height: 17px;\n  width: 17px;\n}\n.card__date span img {\n  height: 17px;\n  width: 17px;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  word-break: break-word;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n}\n.card__cta--green p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--green span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--green span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--blue p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--blue span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--blue span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  /* margin: 0; */\n  /* --padding: 0; */\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 1.5625rem;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb !important;\n}\nion-button.button-disabled p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\nion-button.button-disabled span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\nion-button.button-disabled span img {\n  width: 18px;\n  height: 18px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: var(--white-clr);\n  display: grid !important;\n  place-items: center;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\n.card__sponser {\n  display: flex;\n  gap: 5px;\n  height: 65px;\n  width: 135px;\n  border-radius: 65px;\n  padding: 7px;\n  flex-flow: column;\n}\n.card__sponser img {\n  max-width: 100%;\n  border-radius: 0;\n  width: 50px;\n  margin: auto;\n  margin-right: 0;\n}\n.card__sponser__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__sponser__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n\n.ath-icon {\n  position: relative;\n  padding-left: 30px;\n}\n.ath-icon .icon-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 25px;\n  width: 25px;\n}\n.ath-icon .icon-img img {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n}\n.ath-icon .icon-img span {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: var(--bg-gray);\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  background: #1b4b64;\n}\n.ath-icon p {\n  font-size: 0.75rem;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n}\n.ath-icon p span.featured {\n  display: block;\n  color: var(--text-gray);\n  font-weight: 400;\n  font-size: 0.75rem;\n  text-align: left;\n}\n\n.bubble-text p {\n  position: relative;\n  padding-left: 23px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-one-clr);\n}\n.bubble-text p img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  bottom: 0;\n  margin: auto;\n}\n\n.duration-small {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/profile-view/athlete/athelete-card/athelete-card.component.scss"],"names":[],"mappings":"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","sourcesContent":["ion-item-sliding {\n  margin: 30px 0;\n  overflow: visible;\n}\nion-item-sliding ion-item-options {\n  flex-flow: column;\n  align-items: flex-end;\n  background: var(--dark-blue);\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option {\n  height: inherit;\n  background: var(--dark-blue);\n  width: 90px;\n  border-bottom: 1px solid rgba(var(--white-clr-rgb), 0.5);\n}\nion-item-sliding ion-item-options ion-item-option button {\n  display: inline-block;\n  text-align: right;\n  width: auto;\n}\nion-item-sliding ion-item-options ion-item-option:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option:first-child {\n  border-top-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option.delete {\n  background: var(--red-bg);\n}\nion-item-sliding ion-item-options ion-item-option.approve {\n  background: var(--green-clr);\n}\nion-item-sliding.item-sliding-active-slide span img {\n  transform: rotate(0deg);\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 12px;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  font-size: 12px;\n  text-align: right;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 17px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 12px;\n  font-weight: 300;\n  margin: 0;\n  white-space: nowrap;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  box-shadow: none;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 12px;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: rgba(var(--black-bg-rgb), 0.25);\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 12px;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 12px;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 2px;\n  font-size: 12px;\n  padding-left: 2px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n.card__cta--blue p {\n  margin: 0;\n}\n.card__cta--blue span {\n  display: inline-block;\n  margin: 0 3px 0 0;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 25px;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb;\n  --padding-start: 0.4rem;\n  --padding-end: 0.4rem;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid !important;\n  place-items: center;\n  font-size: 10px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 0.75rem;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 0.75rem;\n  text-align: right;\n  min-height: 7px;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  word-wrap: break-word;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 0.75rem;\n  font-weight: 300;\n  margin: 0;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__date span {\n  height: 17px;\n  width: 17px;\n}\n.card__date span img {\n  height: 17px;\n  width: 17px;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  word-break: break-word;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n}\n.card__cta--green p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--green span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--green span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--blue p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--blue span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--blue span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  /* margin: 0; */\n  /* --padding: 0; */\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 1.5625rem;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb !important;\n}\nion-button.button-disabled p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\nion-button.button-disabled span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\nion-button.button-disabled span img {\n  width: 18px;\n  height: 18px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: var(--white-clr);\n  display: grid !important;\n  place-items: center;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\n.card__sponser {\n  display: flex;\n  gap: 5px;\n  height: 65px;\n  width: 135px;\n  border-radius: 65px;\n  padding: 7px;\n  flex-flow: column;\n}\n.card__sponser img {\n  max-width: 100%;\n  border-radius: 0;\n  width: 50px;\n  margin: auto;\n  margin-right: 0;\n}\n.card__sponser__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__sponser__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n\n.ath-icon {\n  position: relative;\n  padding-left: 30px;\n}\n.ath-icon .icon-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 25px;\n  width: 25px;\n}\n.ath-icon .icon-img img {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n}\n.ath-icon .icon-img span {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: var(--bg-gray);\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  background: #1b4b64;\n}\n.ath-icon p {\n  font-size: 0.75rem;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n}\n.ath-icon p span.featured {\n  display: block;\n  color: var(--text-gray);\n  font-weight: 400;\n  font-size: 0.75rem;\n  text-align: left;\n}\n\n.bubble-text p {\n  position: relative;\n  padding-left: 23px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-one-clr);\n}\n.bubble-text p img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  bottom: 0;\n  margin: auto;\n}\n\n.duration-small {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48217:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athlete.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url('card-bg.png') no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 120px;\n  min-width: 120px;\n  height: auto;\n  margin-right: 15px;\n}\nion-content .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 120px;\n  border: 1px solid var(--white-clr);\n  height: auto;\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  height: 125px;\n}\nion-content .top-card .profile-part ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n}\nion-content .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status {\n  display: flex;\n  background: rgba(var(--green-bg-rgb), 0.2);\n  border-radius: 20px;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin-top: 12px;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status p {\n  color: var(--white-clr);\n  font-weight: 600;\n  font-size: 0.8rem;\n  flex: 1;\n  word-break: break-word;\n  white-space: normal;\n  padding-left: 5px;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status span {\n  background: var(--green-bg);\n  color: var(--white-clr);\n  text-transform: uppercase;\n  padding: 3px 12px;\n  display: inline-block;\n  border-radius: 15px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live {\n  background: rgba(var(--green-bg-rgb), 0.2);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live p {\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live span {\n  background: var(--green-bg);\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline {\n  background: rgba(var(--gray-bg-rgb), 0.2);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline p {\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline span {\n  background: var(--gray-bg);\n  color: var(--white-clr);\n}\nion-content .sticky-div {\n  transition: all 0.3s;\n  position: sticky;\n  top: 194px;\n  z-index: 999;\n  padding: 33px 15px 5px;\n  margin-top: 10px;\n}\nion-content .sticky-div.add-bg {\n  background: var(--theme-one-bg);\n  padding: 42px 15px 40px;\n}\nion-content .sticky-div .tabs-design {\n  border-radius: 50px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 0px 8px #157bb2;\n  left: 0;\n  background: #4fabdc;\n  margin: 5px auto;\n  right: 0;\n  z-index: 9;\n}\nion-content .sticky-div .tabs-design ion-segment {\n  border-radius: 50px;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\nion-content .content-part {\n  padding: 10px 15px 0px;\n  z-index: 999;\n}\nion-content .content-part .profile-tab {\n  position: relative;\n  z-index: 99;\n}\nion-content .content-part .details-part {\n  margin-top: 10px;\n  padding: 10px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  max-height: calc(100vh - 341px);\n  overflow: auto;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .content-part .details-part .details-box {\n  border-bottom: 1px solid var(--white-clr);\n  padding: 5px 0;\n}\nion-content .content-part .details-part .details-box h5 {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block;\n  font-weight: 400;\n}\nion-content .content-part .details-part .details-box h5::after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  height: 1px;\n  width: 60%;\n  background: var(--theme-one-clr);\n  content: \"\";\n}\nion-content .content-part .details-part .details-box p {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\nion-content .content-part .details-part .details-box:last-child {\n  border-bottom: 0;\n}\nion-content .content-part .highest-bid {\n  padding: 5px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 10px;\n}\nion-content .content-part .highest-bid ion-item {\n  --min-height: 35px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .content-part .highest-bid ion-item ion-avatar {\n  --border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  background: var(--theme-one-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-right: 10px;\n}\nion-content .content-part .highest-bid ion-item ion-avatar img {\n  max-width: 100%;\n  width: 23px;\n  height: 23px;\n}\nion-content .content-part .highest-bid ion-item ion-label {\n  margin: 0;\n}\nion-content .content-part .highest-bid ion-item ion-label p {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 400;\n}\nion-content .content-part .highest-bid ion-item ion-label span {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n\nion-footer {\n  --background: #2b9edc;\n}\nion-footer ion-toolbar {\n  --background: #2b9edc;\n  --border-width: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\nion-footer ion-toolbar .footer-part {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  padding: 0 15px;\n}\nion-footer ion-toolbar .footer-part .highest-bid {\n  padding: 5px 0px;\n  background: transparent;\n  border-radius: 8px;\n  box-shadow: none;\n  margin-bottom: 10px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item {\n  --min-height: 35px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-avatar {\n  --border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  background: var(--theme-one-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-right: 10px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-avatar img {\n  max-width: 100%;\n  width: 23px;\n  height: 23px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label {\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label p {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 400;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label p span {\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: block;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-text {\n  margin: 0;\n  color: var(--black-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: block;\n  align-self: center;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe {\n  padding: 5px 10px;\n  background: var(--white-bg);\n  border-radius: 100px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 5px;\n  position: relative;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data {\n  position: relative;\n  z-index: 99;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item-sliding ion-item-option {\n  --background: transparent;\n  background: transparent;\n  width: 0;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  display: none;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 58px;\n  width: 58px;\n  border-radius: 50%;\n  box-shadow: 0 5px 7px #225889;\n  margin-right: 0;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button img {\n  height: 58px;\n  width: 58px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 1rem;\n  word-break: break-word;\n  white-space: normal;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button.ion-focusable {\n  box-shadow: none;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data {\n  position: absolute;\n  right: 0;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 0px 10px;\n  width: 100%;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label {\n  text-align: center;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label img {\n  max-width: 100%;\n  opacity: 0.5;\n  margin: 0 2px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one {\n  margin-top: 1px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one,\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .two,\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .three {\n  animation: mouse-scroll 1s infinite;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one {\n  -webkit-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n  animation-direction: alternate;\n  animation-delay: alternate;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .two {\n  -webkit-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n  -webkit-animation-direction: alternate;\n  animation-delay: 0.2s;\n  animation-direction: alternate;\n  margin-top: -6px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .three {\n  -webkit-animation-delay: 0.3s;\n  -moz-animation-delay: 0.3s;\n  -webkit-animation-direction: alternate;\n  animation-delay: 0.3s;\n  animation-direction: alternate;\n  margin-top: -6px;\n}\n@keyframes mouse-scroll {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  margin: 0;\n  margin-right: 5px;\n  text-align: right;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text p {\n  color: var(--black-clr);\n  font-size: 1.15rem;\n  font-weight: 300;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text span {\n  color: var(--black-clr);\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .bid-submitted {\n  padding: 4px 15px;\n  background: #c8e6f6;\n  border-radius: 100px;\n  box-shadow: 0 0 6px #a5c3d3;\n  margin-bottom: 5px;\n  position: relative;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label h5 {\n  margin: 0 0 3px;\n  font-weight: 300;\n  font-size: 1.25rem;\n  color: var(--black-clr);\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label span {\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: var(--black-clr);\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn {\n  padding: 0;\n  text-align: center;\n  margin: 2px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 58px;\n  width: 58px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button img {\n  height: 58px;\n  width: 58px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.25rem;\n  line-height: 21px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button span img {\n  width: 22px;\n  height: 22px;\n  margin-top: 4px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-footer ion-toolbar .footer-part .wanna-bubble {\n  padding: 5px 15px 15px;\n  text-align: center;\n}\nion-footer ion-toolbar .footer-part .wanna-bubble p {\n  font-size: 0.75rem;\n  color: var(--black-clr);\n  margin: 0;\n  font-weight: 500;\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  position: sticky;\n  top: 296px;\n  z-index: 999;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.scroll-part {\n  max-height: calc(100vh - 341px);\n  overflow: auto;\n}\n\n.inital {\n  position: absolute;\n  top: 0;\n  left: 0px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 1px solid white;\n  margin: 0;\n}\n\n.infinite-scroll-enabled {\n  position: fixed;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/profile-view/athlete/athlete.page.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,qBAAA,EAAA,iBAAA;EACA;;;;;GAAA;EAMA;;;;;GAAA;EAMA,0EAAA;EACA,mHAAA;EAEA,kCAAA;AAAF;AAEE;EACE,mDAAA;EACA,SAAA;EACA,UAAA;EACA,4BAAA;EACA,sBAAA;EACA,6BAAA;EACA,oBAAA;EACA,gBAAA;EACA,MAAA;EACA,aAAA;AAAJ;AAEM;EACE,qBAAA;EACA,yBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAAR;AAEQ;EACE,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;AAAV;AAEQ;EACE,SAAA;EACA,UAAA;AAAV;AACU;EACE,SAAA;EACA,UAAA;EACA,kBAAA;AACZ;AAAY;EACE,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;AAEd;AAEQ;EACE,SAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AAAV;AACU;EACE,WAAA;AACZ;AACU;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,yBAAA;AACZ;AAII;EACE,iBAAA;AAFN;AAGM;EACE,qBAAA;EACA,yBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AADR;AAEQ;EACE,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;AAAV;AACU;EACE,eAAA;EACA,mBAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,aAAA;AACZ;AAEQ;EACE,sBAAA;EACA,mBAAA;AAAV;AACU;EACE,iBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;AACZ;AACU;EACE,aAAA;EACA,0CAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AACZ;AAAY;EACE,uBAAA;EACA,gBAAA;EACA,iBAAA;EACA,OAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,SAAA;AAEd;AAAY;EACE,2BAAA;EACA,uBAAA;EACA,yBAAA;EACA,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AAEd;AAAY;EACE,0CAAA;AAEd;AADc;EACE,uBAAA;AAGhB;AADc;EACE,2BAAA;EACA,uBAAA;AAGhB;AAAY;EACE,yCAAA;AAEd;AADc;EACE,uBAAA;AAGhB;AADc;EACE,0BAAA;EACA,uBAAA;AAGhB;AAME;EAAa,oBAAA;EACX,gBAAA;EACA,UAAA;EACA,YAAA;EAEA,sBAAA;EACA,gBAAA;AAJJ;AAKI;EACE,+BAAA;EACA,uBAAA;AAHN;AAMI;EAEE,mBAAA;EACA,UAAA;EACA,mBAAA;EACA,6BAAA;EAEA,OAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;EACA,UAAA;AANN;AAOM;EACE,mBAAA;AALR;AAMQ;EACE,SAAA;EACA,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AAJV;AAKU;EACE,mBAAA;EACA,gBAAA;AAHZ;AAKU;EACE,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,mCAAA;EACA,4BAAA;AAHZ;AAIY;EACE,gBAAA;AAFd;AAUE;EACE,sBAAA;EAEA,YAAA;AATJ;AAWI;EACE,kBAAA;EACA,WAAA;AATN;AAYI;EACE,gBAAA;EACA,kBAAA;EACA,0CAAA;EACA,kBAAA;EAGA,+BAAA;EACA,cAAA;EACA,uCAAA;EACA,mBAAA;AAZN;AAaM;EACE,yCAAA;EACA,cAAA;AAXR;AAYQ;EACE,SAAA;EACA,UAAA;EACA,2BAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;AAVV;AAWU;EACE,kBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;EACA,WAAA;AATZ;AAYQ;EACE,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AAVV;AAYQ;EACE,gBAAA;AAVV;AAcI;EACE,iBAAA;EACA,0CAAA;EACA,kBAAA;EACA,uCAAA;EACA,mBAAA;AAZN;AAaM;EACE,kBAAA;EACA,oBAAA;EACA,wBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAXR;AAYQ;EACE,oBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AAVV;AAWU;EACE,eAAA;EACA,WAAA;EACA,YAAA;AATZ;AAYQ;EACE,SAAA;AAVV;AAWU;EACE,SAAA;EACA,UAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AATZ;AAWU;EACE,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AATZ;;AAiBA;EACE,qBAAA;AAdF;AAeE;EACE,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;AAbJ;AAcI;EACE,0CAAA;EACA,kBAAA;EACA,uCAAA;EACA,eAAA;AAZN;AAaM;EACE,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAXR;AAYQ;EACE,kBAAA;EACA,oBAAA;EACA,wBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAVV;AAWU;EACE,oBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AATZ;AAUY;EACE,eAAA;EACA,WAAA;EACA,YAAA;AARd;AAWU;EACE,SAAA;AATZ;AAUY;EACE,SAAA;EACA,UAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AARd;AASc;EACE,SAAA;EACA,2BAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;AAPhB;AAWU;EACE,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AATZ;AAcM;EACE,iBAAA;EAEA,2BAAA;EACA,oBAAA;EAEA,2CAAA;EACA,kBAAA;EACA,kBAAA;AAdR;AAeQ;EACE,kBAAA;EACA,WAAA;AAbV;AAeY;EACE,yBAAA;EACA,uBAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;AAbd;AAgBU;EACE,oBAAA;EACA,wBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAdZ;AAeY;EACE,eAAA;EACA,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,6BAAA;EACA,eAAA;AAbd;AAcc;EACE,YAAA;EACA,WAAA;AAZhB;AAcc;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;EACA,gBAAA;EACA,wBAAA;EAAA,mBAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;AAZhB;AAcc;EACE,UAAA;EACA,oBAAA;AAZhB;AAcc;EACE,gBAAA;AAZhB;AAiBQ;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,QAAA;EACA,UAAA;EACA,iBAAA;EACA,WAAA;EACA,SAAA;EACA,YAAA;EACA,wBAAA;EAAA,mBAAA;AAfV;AAgBU;EACE,oBAAA;EACA,wBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AAdZ;AAeY;EACE,kBAAA;AAbd;AAcc;EACE,eAAA;EACA,YAAA;EACA,aAAA;AAZhB;AAcc;EACE,eAAA;AAZhB;AAec;;;EAKE,mCAAA;AAbhB;AAgBc;EACE,6BAAA;EACA,0BAAA;EAGA,8BAAA;EACA,0BAAA;AAfhB;AAkBc;EACE,6BAAA;EACA,0BAAA;EACA,sCAAA;EAEA,qBAAA;EACA,8BAAA;EAEA,gBAAA;AAlBhB;AAqBc;EACE,6BAAA;EACA,0BAAA;EACA,sCAAA;EAEA,qBAAA;EACA,8BAAA;EAEA,gBAAA;AArBhB;AAyDc;EACE;IACE,UAAA;EAtBhB;EAwBc;IACE,YAAA;EAtBhB;EAwBc;IACE,UAAA;EAtBhB;AACF;AA0BY;EACE,kBAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,iBAAA;AAxBd;AAyBc;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAvBhB;AAyBc;EACE,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;AAvBhB;AA6BM;EACE,iBAAA;EACA,mBAAA;EACA,oBAAA;EACA,2BAAA;EACA,kBAAA;EACA,kBAAA;AA3BR;AA4BQ;EACE,oBAAA;EACA,wBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AA1BV;AA2BU;EACE,sBAAA;EACA,mBAAA;EACA,SAAA;AAzBZ;AA0BY;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;AAxBd;AA0BY;EACE,SAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;AAxBd;AA2BU;EACE,UAAA;EACA,kBAAA;EACA,WAAA;AAzBZ;AA0BY;EACE,eAAA;EACA,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EAEA,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EAEA,0DAAA;EACA,0BAAA;AA1Bd;AA2Bc;EACE,YAAA;EACA,WAAA;AAzBhB;AA2Bc;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,qBAAA;EACA,uBAAA;EACA,gBAAA;EACA,wBAAA;EAAA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,iBAAA;AAzBhB;AA0BgB;EACE,WAAA;EACA,YAAA;EACA,eAAA;AAxBlB;AA2Bc;EACE,UAAA;EACA,oBAAA;AAzBhB;AAkCM;EACE,sBAAA;EACA,kBAAA;AAhCR;AAiCQ;EACE,kBAAA;EACA,uBAAA;EACA,SAAA;EACA,gBAAA;AA/BV;;AAsCA;EACE,SAAA;EACA,UAAA;AAnCF;AAoCE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,4BAAA;EACA,6BAAA;AAlCJ;AAoCE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mCAAA;EACA,WAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,0EAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AAlCJ;AAoCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAlCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,0EAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAnCJ;AAqCE;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAnCJ;AAqCE;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AAnCJ;AAqCE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAnCJ;AAsCE;EACE;IACE,cAAA;IACA,wBAAA;EApCJ;EAsCE;IACE,2BAAA;EApCJ;EAsCE;IACE,cAAA;IACA,6BAAA;EApCJ;AACF;;AAwCA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;AArCF;AAsCE;EACE,uBAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;EACA,cAAA;EACA,mBAAA;AApCJ;;AAuCA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;AApCF;AAsCE;EACE,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;AApCJ;;AAuCA;EACE,kBAAA;EACA,qBAAA;EACA,oBAAA;EACA,4CAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AApCF;AAsCI;EACE,uBAAA;AApCN;;AAyCA;EACE,+BAAA;EACA,cAAA;AAtCF;;AAyCA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;AAtCF;;AAwCA;EACE,kBAAA;AArCF;AAsCE;EACE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,uBAAA;EACA,SAAA;AApCJ;;AAuCA;EAAyB,eAAA;AAnCzB","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url(../../../../assets/images/card-bg.png) no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 120px;\n  min-width: 120px;\n  height: auto;\n  margin-right: 15px;\n}\nion-content .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 120px;\n  border: 1px solid var(--white-clr);\n  height: auto;\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  height: 125px;\n}\nion-content .top-card .profile-part ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n}\nion-content .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status {\n  display: flex;\n  background: rgba(var(--green-bg-rgb), 0.2);\n  border-radius: 20px;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin-top: 12px;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status p {\n  color: var(--white-clr);\n  font-weight: 600;\n  font-size: 0.8rem;\n  flex: 1;\n  word-break: break-word;\n  white-space: normal;\n  padding-left: 5px;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status span {\n  background: var(--green-bg);\n  color: var(--white-clr);\n  text-transform: uppercase;\n  padding: 3px 12px;\n  display: inline-block;\n  border-radius: 15px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live {\n  background: rgba(var(--green-bg-rgb), 0.2);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live p {\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.live span {\n  background: var(--green-bg);\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline {\n  background: rgba(var(--gray-bg-rgb), 0.2);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline p {\n  color: var(--white-clr);\n}\nion-content .top-card .profile-part ion-item ion-label .live-status.offline span {\n  background: var(--gray-bg);\n  color: var(--white-clr);\n}\nion-content .sticky-div {\n  transition: all 0.3s;\n  position: sticky;\n  top: 194px;\n  z-index: 999;\n  padding: 33px 15px 5px;\n  margin-top: 10px;\n}\nion-content .sticky-div.add-bg {\n  background: var(--theme-one-bg);\n  padding: 42px 15px 40px;\n}\nion-content .sticky-div .tabs-design {\n  border-radius: 50px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 0px 8px #157bb2;\n  left: 0;\n  background: #4fabdc;\n  margin: 5px auto;\n  right: 0;\n  z-index: 9;\n}\nion-content .sticky-div .tabs-design ion-segment {\n  border-radius: 50px;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\nion-content .sticky-div .tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\nion-content .content-part {\n  padding: 10px 15px 0px;\n  z-index: 999;\n}\nion-content .content-part .profile-tab {\n  position: relative;\n  z-index: 99;\n}\nion-content .content-part .details-part {\n  margin-top: 10px;\n  padding: 10px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  max-height: calc(100vh - 341px);\n  overflow: auto;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .content-part .details-part .details-box {\n  border-bottom: 1px solid var(--white-clr);\n  padding: 5px 0;\n}\nion-content .content-part .details-part .details-box h5 {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block;\n  font-weight: 400;\n}\nion-content .content-part .details-part .details-box h5::after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  height: 1px;\n  width: 60%;\n  background: var(--theme-one-clr);\n  content: \"\";\n}\nion-content .content-part .details-part .details-box p {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\nion-content .content-part .details-part .details-box:last-child {\n  border-bottom: 0;\n}\nion-content .content-part .highest-bid {\n  padding: 5px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 10px;\n}\nion-content .content-part .highest-bid ion-item {\n  --min-height: 35px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .content-part .highest-bid ion-item ion-avatar {\n  --border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  background: var(--theme-one-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-right: 10px;\n}\nion-content .content-part .highest-bid ion-item ion-avatar img {\n  max-width: 100%;\n  width: 23px;\n  height: 23px;\n}\nion-content .content-part .highest-bid ion-item ion-label {\n  margin: 0;\n}\nion-content .content-part .highest-bid ion-item ion-label p {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 400;\n}\nion-content .content-part .highest-bid ion-item ion-label span {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n\nion-footer {\n  --background: #2b9edc;\n}\nion-footer ion-toolbar {\n  --background: #2b9edc;\n  --border-width: 0;\n  padding-left: 0;\n  padding-right: 0;\n}\nion-footer ion-toolbar .footer-part {\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  padding: 0 15px;\n}\nion-footer ion-toolbar .footer-part .highest-bid {\n  padding: 5px 0px;\n  background: transparent;\n  border-radius: 8px;\n  box-shadow: none;\n  margin-bottom: 10px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item {\n  --min-height: 35px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-avatar {\n  --border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  background: var(--theme-one-clr);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  margin-right: 10px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-avatar img {\n  max-width: 100%;\n  width: 23px;\n  height: 23px;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label {\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label p {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 400;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-label p span {\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: block;\n}\nion-footer ion-toolbar .footer-part .highest-bid ion-item ion-text {\n  margin: 0;\n  color: var(--black-clr);\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: block;\n  align-self: center;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe {\n  padding: 5px 10px;\n  background: var(--white-bg);\n  border-radius: 100px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 5px;\n  position: relative;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data {\n  position: relative;\n  z-index: 99;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item-sliding ion-item-option {\n  --background: transparent;\n  background: transparent;\n  width: 0;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  display: none;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 58px;\n  width: 58px;\n  border-radius: 50%;\n  box-shadow: 0 5px 7px #225889;\n  margin-right: 0;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button img {\n  height: 58px;\n  width: 58px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  font-size: 1rem;\n  word-break: break-word;\n  white-space: normal;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .buttons-data ion-item ion-button.ion-focusable {\n  box-shadow: none;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data {\n  position: absolute;\n  right: 0;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 0px 10px;\n  width: 100%;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label {\n  text-align: center;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label img {\n  max-width: 100%;\n  opacity: 0.5;\n  margin: 0 2px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one {\n  margin-top: 1px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one,\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .two,\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .three {\n  -webkit-animation: mouse-scroll 1s infinite;\n  -moz-animation: mouse-scroll 1s infinite;\n  animation: mouse-scroll 1s infinite;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .one {\n  -webkit-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n  animation-delay: alternate;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .two {\n  -webkit-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n  -webkit-animation-direction: alternate;\n  animation-delay: 0.2s;\n  animation-direction: alternate;\n  margin-top: -6px;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-label .three {\n  -webkit-animation-delay: 0.3s;\n  -moz-animation-delay: 0.3s;\n  -webkit-animation-direction: alternate;\n  animation-delay: 0.3s;\n  animation-direction: alternate;\n  margin-top: -6px;\n}\n@-webkit-keyframes mouse-scroll {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes mouse-scroll {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes mouse-scroll {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes mouse-scroll {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  margin: 0;\n  margin-right: 5px;\n  text-align: right;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text p {\n  color: var(--black-clr);\n  font-size: 1.15rem;\n  font-weight: 300;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .buttons-swipe .swipe-data ion-item ion-text span {\n  color: var(--black-clr);\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .bid-submitted {\n  padding: 4px 15px;\n  background: #c8e6f6;\n  border-radius: 100px;\n  box-shadow: 0 0 6px #a5c3d3;\n  margin-bottom: 5px;\n  position: relative;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label h5 {\n  margin: 0 0 3px;\n  font-weight: 300;\n  font-size: 1.25rem;\n  color: var(--black-clr);\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item ion-label span {\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: var(--black-clr);\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn {\n  padding: 0;\n  text-align: center;\n  margin: 2px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 58px;\n  width: 58px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button img {\n  height: 58px;\n  width: 58px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.25rem;\n  line-height: 21px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button span img {\n  width: 22px;\n  height: 22px;\n  margin-top: 4px;\n}\nion-footer ion-toolbar .footer-part .bid-submitted ion-item .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-footer ion-toolbar .footer-part .wanna-bubble {\n  padding: 5px 15px 15px;\n  text-align: center;\n}\nion-footer ion-toolbar .footer-part .wanna-bubble p {\n  font-size: 0.75rem;\n  color: var(--black-clr);\n  margin: 0;\n  font-weight: 500;\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  position: sticky;\n  top: 296px;\n  z-index: 999;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.scroll-part {\n  max-height: calc(100vh - 341px);\n  overflow: auto;\n}\n\n.inital {\n  position: absolute;\n  top: 0;\n  left: 0px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 1px solid white;\n  margin: 0;\n}\n\n.infinite-scroll-enabled {\n  position: fixed;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21435:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athelete-card/athelete-card.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding>\n  <div class=\"container\">\n    <ion-item class=\"card__container\">\n      <div\n        class=\"card\"\n        [ngClass]=\"eventFilter !== 'past' ? 'card-border' : '' \"\n      >\n        <!-- arrow and border css class start  -->\n        <ng-container *ngIf=\"eventFilter !=='past'\">\n          <div class=\"card__slideIcon\">\n            <img src=\"assets/images/blue-notch.png\" alt=\"\" />\n            <span class=\"arrow-move\">\n              <img src=\"assets/icon/arrow-left.svg\" />\n            </span>\n          </div>\n        </ng-container>\n\n        <!-- arrow and border css class end  -->\n        <!-- video and in person event icons start  -->\n        <div *ngIf=\"cardData.eventType !=='IN_PERSON'\" class=\"card__eventType\">\n          <img src=\"../../../../assets/icon/video.svg\" alt=\"\" />\n          <h6>Video</h6>\n        </div>\n        <div\n          *ngIf=\"cardData.eventType =='IN_PERSON'\"\n          class=\"card__eventType inPersonEvent\"\n        >\n          <img src=\"../../../../assets/icon/in-person.svg\" alt=\"\" />\n          <h6>In-person</h6>\n        </div>\n        <!-- video and in person event icons end  -->\n        <!-- event timing countdown start  -->\n\n        <!-- <div *ngIf=\"eventFilter =='upcoming' || eventFilter =='All'\" class=\"\">\n          <h6 *ngIf=\"timer && cardData.pastEvent !=true\" class=\"card__time\">\n            <ng-container *ngIf=\"this.timer.days\">\n              <span>{{this.timer.days }}</span> {{this.timer.title_days}} :\n            </ng-container>\n            <ng-container *ngIf=\"this.timer.hours\">\n              <span>{{this.timer.hours }}</span>\n              {{this.timer?.title_hours}} :\n            </ng-container>\n            <span>{{this.timer.minutes}}</span> {{this.timer?.title_min}}\n          </h6>\n        </div>\n        <div *ngIf=\"eventFilter == 'past' && cardData.pastEvent ==true \" class=\"\">\n          <h6 *ngIf=\"timer\" style=\"margin-top: 15px;\" class=\"card__time\"></h6>\n        </div> -->\n        <div style=\"min-height: 15px;\">\n          <ng-container *ngIf=\"userRole == 'athlete'\">\n            \n            <div *ngIf=\"eventFilter !== 'past'\" class=\"\">\n              <h6 *ngIf=\"timer.minutes > 0\" class=\"card__time\" st>\n                <ng-container *ngIf=\"this.timer.days\">\n                  <span>{{this.timer.days }}</span> {{this.timer.title_days}} :\n                </ng-container>\n                <ng-container *ngIf=\"this.timer.hours\">\n                  <span>{{this.timer.hours }}</span>\n                  {{this.timer?.title_hours}} :\n                </ng-container>\n                <span>{{this.timer.minutes}}</span> {{this.timer?.title_min}}\n              </h6>\n              <h6 *ngIf=\"timer.minutes <=  0\" class=\"card__time\">\n                \n              </h6>\n            </div>\n          \n            <h6\n              *ngIf=\"eventFilter == 'past'\"\n              class=\"card__time disabled-text\"\n            ></h6>\n          </ng-container>\n        </div>\n        <!-- event timing countdown end  -->\n        <div class=\"card__body\">\n          <div class=\"card__details\">\n            <h6 class=\"card__heading\">{{cardData.eventName}}</h6>\n\n            <div class=\"card__date\">\n              <span\n                ><img src=\"../../../../assets/icon/calender-blue.svg\" alt=\"\"\n              /></span>\n              <h6>{{cardData.startDate | date:'MMM dd, YYYY'}}</h6>\n            </div>\n            <div class=\"card__detail\">\n              <span\n                ><img src=\"../../../../assets/icon/clock.svg\" alt=\"\"\n              /></span>\n              <h6>{{cardData.startDate | date:'shortTime'}}</h6>\n              <span><img src=\"../../../../assets/icon/duration-small.svg\" alt=\"\" /></span>\n              <h6>{{timeConvert(cardData.duration)}}</h6>\n            </div>\n            <div class=\"card__detail\">\n              <ng-container *ngIf=\"cardData.eventType !== 'IN_PERSON'\">\n                <ng-container *ngIf=\"cardData.description !== ''\">\n                  <span\n                    ><img src=\"../../../../assets/icon/chat.svg\" alt=\"\"\n                  /></span>\n\n                  <h6>\n                    {{cardData.description }}\n                  </h6>\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"cardData.eventType == 'IN_PERSON'\">\n                <span\n                  ><img class=\"op-65\" src=\"../../../../assets/icon/location.svg\" alt=\"\"\n                /></span>\n                <h6>\n                  {{cardData.eventAddress?.addressLine1}},\n                  {{cardData.eventAddress?.city}},\n                  {{cardData.eventAddress?.state}},\n                  {{cardData.eventAddress?.zipCode}}\n                </h6>\n              </ng-container>\n            </div>\n          </div>\n\n          <div\n          *ngIf=\"!cardData.sponsorProfilePicture\"\n          [ngClass]=\"cardData.pastEvent ? 'card__opp--disabled' :''\"\n          class=\"card__opp\"\n        >\n          <h3>\n            ${{cardData.minBid}}\n          </h3>\n          <h6\n            *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n          >\n            Minimum Bid\n          </h6>\n          <h6 *ngIf=\"cardData.creatorPersona == 'USER'\">\n            Opportunity\n          </h6>\n        </div>\n        <div *ngIf=\"cardData.sponsorProfilePicture\" class=\"card__sponser\">\n          <img [src]=\"cardData.sponsorProfilePicture | profile\" alt=\"\" />\n          <div class=\"ath-icon\">\t\n            <div class=\"icon-img\">\t\n              <img *ngIf=\"cardData?.athleteProfilePicture!== '' || cardData?.athleteProfilePicture \" [src]=\"cardData?.athleteProfilePicture | profile\" alt=\"\">\t\n              <span *ngIf=\"cardData?.athleteProfilePicture == '' || !cardData?.athleteProfilePicture\">{{athleteNameInitials}}</span>\t\n            </div>\t\n            <p *ngIf=\"cardData?.athleteName\">\n              <span class=\"featured\">Featured</span> {{cardData?.athleteName}}</p>\t\n          </div>\n        </div>\n        </div>\n        <!-- <div class=\"card__border\"></div> -->\n\n        <div class=\"card__invite\">\n          <!-- invited and created by name and pic start  -->\n          <!-- <ng-container *ngIf=\"userRole == 'fan'\">\n            <ng-container\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.userProfilePicture !==''\"\n                  [src]=\"cardData.userProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div *ngIf=\"cardData?.userProfilePicture ==''\" class=\"inital\">\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.userName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'\">\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container> -->\n          <!-- <ng-container>\n            <ng-container\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'\">\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.userProfilePicture !==''\"\n                  [src]=\"cardData.userProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div *ngIf=\"cardData?.userProfilePicture ==''\" class=\"inital\">\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.userName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container> -->\n          <!-- invited and created by name and pic end  -->\n\n          <ng-container *ngIf=\"userRole == 'athlete'  && !cardData.sponsorProfilePicture\">\n            <ng-container\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'\">\n              <div class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.userProfilePicture !==''\"\n                  [src]=\"cardData.userProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div *ngIf=\"cardData?.userProfilePicture ==''\" class=\"inital\">\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.userName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n\n          <ng-container *ngIf=\"userRole == 'athlete' && cardData.sponsorProfilePicture\">\n            <div class=\"bubble-text\">\n              <p><img src=\"assets/images/bubble-blue.svg\"> Brought to you by BubbleApp </p>\n          </div>\n          </ng-container>\n          <!-- <ng-container *ngIf=\"cardData.pastEvent !=true\">\n            <ng-container>\n              <ion-button\n                (click)=\"bidAthleteEvent(cardData.id)\"\n                [disabled]=\"canJoinEvent()\"\n                *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'   \"\n                size=\"small\"\n                class=\"card__cta--blue\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/bid-dollar.svg\" alt=\"\"\n                /></span>\n                <p>Bid now</p>\n              </ion-button>\n              <ion-button\n                [disabled]=\"canJoinEvent()\"\n                *ngIf=\"cardData.creatorPersona == 'USER' \"\n                size=\"small\"\n                class=\"card__cta--green\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/join-video.svg\" alt=\"\"\n                /></span>\n                <p>Join now</p>\n              </ion-button>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"eventFilter =='past' && cardData.pastEvent ==true\">\n            <h6 class=\"card__completed\">\n              <img src=\"../../../../assets/icon/check-green.svg\" alt=\"\" />\n            </h6>\n          </ng-container> -->\n      \n         <ng-container *ngIf=\"userRole == 'athlete'\">\n          <ng-container\n            *ngIf=\"eventFilter !== 'past' && eventState !== 'PENDING'\"\n          >\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'    \">\n              <ion-button\n                *ngIf=\"cardData.eventType !== 'IN_PERSON' \"\n                (click)=\"joinFanCall(cardData.id)\"\n                size=\"small\"\n                class=\"card__cta--green\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/join-video.svg\" alt=\"\"\n                /></span>\n                <p>Join Now</p>\n              </ion-button>\n            </ng-container>\n            <ion-button\n              *ngIf=\"cardData.eventType == 'IN_PERSON'\"\n              [disabled]=\"canJoinEvent()\"\n              (click)=\"openOtpModel() \"\n              size=\"small\"\n              class=\"card__cta--green\"\n            >\n              <p class=\"card__cta--password\">****</p>\n            </ion-button>\n            <ng-container\n              *ngIf=\"(cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN') && !this.cardData.pastEvent\"\n            >\n              <div\n                *ngIf=\"cardData.eventType !== 'IN_PERSON'\"\n                class=\"fans-bided-event\"\n              >\n                <p>\n                  <span>{{cardData.count}}</span>\n                  Fans bided on your event\n                </p>\n                <ion-button\n                  [disabled]=\"canAthleteJoinEvent(cardData.count)\"\n                  (click)=\"athleteEvent(cardData.id)\"\n                  ><img src=\"assets/icon/join-video.svg\" /> Go</ion-button\n                >\n              </div>\n            </ng-container>\n          </ng-container>\n          <h6 *ngIf=\"this.cardData.pastEvent\" class=\"card__completed\">\n            COMPLETED\n          </h6>\n        </ng-container>\n        \n        </div>\n      </div>\n    </ion-item>\n  </div>\n\n  <ng-container>\n    <ion-item-options *ngIf=\"eventFilter !=='past'\">\n      <ion-item-option (click)=\"presentAlert()\" color=\"primary\">\n        <img src=\"assets/icon/share-icon.svg\" />\n      </ion-item-option>\n      <ion-item-option (click)=\"presentAlert()\" color=\"primary\">\n        <img src=\"assets/icon/calendar-card.svg\" />\n      </ion-item-option> </ion-item-options\n  ></ng-container>\n</ion-item-sliding>\n";

/***/ }),

/***/ 64074:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile-view/athlete/athlete.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--ion-header>No header </ion-header-->\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\">\n  <ion-grid class=\"top-card\">\n    <div class=\"title-part\">\n      <ion-item lines=\"none\" mode=\"md\">\n        <ion-icon\n          (click)=\"redirectBack()\"\n          slot=\"start\"\n          name=\"arrow-back-outline\"\n          mode=\"md\"\n        ></ion-icon>\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n        <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n    <div class=\"profile-part\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\" *ngIf=\"athleteData?.profileUrl !== '' \">\n          <img [src]=\"athleteData?.profileUrl | profile\" />\n        </ion-avatar>\n        <ion-avatar *ngIf=\"athleteData?.profileUrl == '' \">\n          <div class=\"inital\">\n            <span class=\"initial__span\">\n              {{nameInitials}}\n            </span>\n          </div>\n        </ion-avatar>\n        <ion-label>\n          <h5>{{athleteData?.fullName}}</h5>\n          <!-- <div class=\"live-status live\" *ngIf=\"this.eventTime?.minutes\">\n      \n            <p *ngIf=\"this.eventTime?.minutes\">\n              {{latestAthleteEvent?.athleteName | titlecase}} will be <span >live </span> in\n              just\n              <ng-container *ngIf=\"this.eventTime?.days\">\n                {{this.eventTime?.days }} {{this.eventTime?.title_days}} :\n              </ng-container>\n              <ng-container *ngIf=\"this.eventTime?.hours\">\n                {{this.eventTime?.hours }} {{this.eventTime?.title_hours}} :\n              </ng-container>\n             \n              <ng-container *ngIf=\"this.eventTime?.minutes > 0\">\n                {{this.eventTime?.minutes}} {{this.eventTime?.title_min}}\n              </ng-container>\n              <ng-container *ngIf=\"this.eventTime?.minutes < 0\">\n                few mins\n              </ng-container>\n            </p>\n          </div> -->\n          <div class=\"live-status offline\">\n          <p>\n            <span *ngIf=\"athleteData?.online==false\">\n              Offline\n            </span>\n          </p>\n          </div>\n          <div class=\"live-status online\">\n            <p>\n              <span *ngIf=\"athleteData?.online==true\">\n                Online\n              </span>\n             \n            </p>\n            </div>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-grid>\n  <div class=\"sticky-div\" [ngClass]=\"isClassAdded ? 'add-bg':''\">\n    <ion-grid class=\"tabs-design\">\n      <ion-segment\n        [(ngModel)]=\"selectedIndex\"\n        (ngModelChange)=\"getAppearanceData()\"\n        mode=\"ios\"\n      >\n        <ion-segment-button value=\"appearances\">\n          <ion-label>Requests</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"profile\">\n          <ion-label>Profile</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-grid>\n  </div>\n\n  <ion-grid class=\"content-part\">\n    <div class=\"profile-tab\" *ngIf=\"selectedIndex == 'profile'\">\n      <div class=\"details-part\">\n        <div class=\"details-box\">\n          <h5>Biography</h5>\n          <p>\n            {{athleteData?.bio ?? '-'}}\n          </p>\n        </div>\n        <div class=\"details-box\">\n          <h5>Team</h5>\n          <p>{{athleteData?.teamName ?? '-'}}</p>\n        </div>\n        <div class=\"details-box\">\n          <h5>Team State</h5>\n          <p>{{athleteData?.teamState ?? '-'}}</p>\n        </div>\n        <div class=\"details-box\">\n          <h5>Country</h5>\n          <p>{{athleteData?.country ?? '-'}}</p>\n        </div>\n        <div class=\"details-box\">\n          <h5>School/University</h5>\n          <p>{{athleteData?.universityName ?? '-'}}</p>\n        </div>\n        <div class=\"details-box\">\n          <h5>Born</h5>\n          <p>{{athleteData?.birthDate | date:'MMM d, y'}}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"appearances-tab\" *ngIf=\"selectedIndex == 'appearances'\">\n      <div class=\"schedule\">\n        <h6>SCHEDULE</h6>\n        <ng-container>\n          <div class=\"\">\n            <ion-select\n              [(ngModel)]=\"eventFilter\"\n              (ngModelChange)=\"resetAndGetMoreData()\"\n              interface=\"popover\"\n              mode=\"ios\"\n              [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\n            >\n              <ion-select-option value=\"All\">All</ion-select-option>\n              <ion-select-option value=\"upcoming\"\n                >Upcoming event</ion-select-option\n              >\n              <ion-select-option value=\"past\">Past event</ion-select-option>\n            </ion-select>\n          </div>\n        </ng-container>\n      </div>\n\n      <div *ngIf=\"scheduleData.length == 0\" class=\"no-data-found\">\n        <p>No upcoming Requests</p>\n      </div>\n\n      <athlete-card\n        [eventFilter]=\"eventFilter\"\n        *ngFor=\"let data of scheduleData\"\n        [cardData]=\"data\"\n        [userRole]=\"userRole\"\n        [eventState]=\"eventFilter\"\n        (changeStatus)=\" resetAndGetMoreData()\"\n      ></athlete-card>\n    </div>\n    <ion-infinite-scroll\n      [disabled]=\"isScrollDisabled\"\n      threshold=\"100px\"\n      (ionInfinite)=\"loadMoreEvents($event)\"\n    >\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n  <ion-grid class=\"buble-part\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<!-- <ion-footer mode=\"ios\" *ngIf=\"selectedIndex == 'profile'\">\n  <ion-toolbar mode=\"ios\">\n    <div *ngIf=\"latestAthleteEvent\" class=\"footer-part\">\n      <div class=\"highest-bid\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/icon/highest-bid.svg\" />\n          </ion-avatar>\n          <ion-label>\n            <p>\n              Highest Bid for upcoming event\n              <span>{{latestAthleteEvent.eventName}}</span>\n            </p>\n          </ion-label>\n          <ion-text slot=\"end\">$100</ion-text>\n        </ion-item>\n      </div>\n      <div class=\"buttons-swipe\">\n        <div class=\"buttons-data\">\n          <ion-item-sliding (ionDrag)=\"getAmountOpened($event)\">\n            <ion-item-options side=\"start\">\n              <ion-item-option color=\"danger\"></ion-item-option>\n            </ion-item-options>\n            <ion-item lines=\"none\">\n              <ion-button slot=\"start\">\n                <img src=\"assets/images/button-auth.png\" />\n                <span\n                  >Bid <br />\n                  Now</span\n                >\n              </ion-button>\n            </ion-item>\n          </ion-item-sliding>\n        </div>\n\n        <div class=\"swipe-data\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              <img class=\"one\" src=\"assets/icon/arrow-right.svg\" />\n              <img class=\"two\" src=\"assets/icon/arrow-right.svg\" />\n              <img class=\"three\" src=\"assets/icon/arrow-right.svg\" />\n            </ion-label>\n            <ion-text slot=\"end\">\n              <p>Min Bid</p>\n              <span>${{latestAthleteEvent.minBid}}</span>\n            </ion-text>\n          </ion-item>\n        </div>\n      </div>\n      <div class=\"wanna-bubble\">\n        <p>Wanna Bubble Up? Increase your Bid</p>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer> -->\n\n<!-- <div class=\"bid-submitted\">\n        <ion-item lines=\"none\">\n            <ion-label>\n                <h5>Bid Submitted</h5>\n                <span>$200</span>\n            </ion-label>\n            <div class=\"auth-btn\" slot=\"end\">\n              <ion-button routerLink=\"/fan-waitlist\">\n                <img src=\"assets/images/button-auth-green.png\" />\n                <span>Go</span>\n              </ion-button>\n            </div>\n            <div class=\"auth-btn\" slot=\"end\">\n              <ion-button>\n                <img src=\"assets/images/button-auth-red.png\" />\n                <span><img src=\"assets/icon/close-btn.svg\"></span>\n              </ion-button>\n            </div>\n        </ion-item>\n    </div> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile-view_athlete_athlete_module_ts.js.map