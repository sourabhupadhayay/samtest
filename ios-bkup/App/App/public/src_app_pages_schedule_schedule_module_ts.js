(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_schedule_schedule_module_ts"],{

/***/ 75419:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/schedule/approve-request/approve-request.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveRequestComponent": () => (/* binding */ ApproveRequestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _approve_request_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve-request.component.html?ngResource */ 95371);
/* harmony import */ var _approve_request_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve-request.component.scss?ngResource */ 90252);
/* harmony import */ var _approve_request_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_approve_request_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ApproveRequestComponent = class ApproveRequestComponent {
  constructor(modalCtrl, navParams) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.eventType = this.navParams.get("eventType");
    this.creatorName = this.navParams.get("createdBy");
    this.eventName = this.navParams.get("eventName");
  }
  ngOnInit() {}
};
ApproveRequestComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
}];
ApproveRequestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-approve-request",
  template: _approve_request_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_approve_request_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ApproveRequestComponent);


/***/ }),

/***/ 91011:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-request-modal/cancel-request-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelRequestModalComponent": () => (/* binding */ CancelRequestModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cancel_request_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-request-modal.component.html?ngResource */ 77888);
/* harmony import */ var _cancel_request_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-request-modal.component.scss?ngResource */ 58616);
/* harmony import */ var _cancel_request_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cancel_request_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let CancelRequestModalComponent = class CancelRequestModalComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
  }
  ngOnInit() {}
};
CancelRequestModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
}];
CancelRequestModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-cancel-request-modal",
  template: _cancel_request_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cancel_request_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CancelRequestModalComponent);


/***/ }),

/***/ 44355:
/*!*******************************************************!*\
  !*** ./src/app/pages/schedule/card/card.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component.html?ngResource */ 77323);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.scss?ngResource */ 33735);
/* harmony import */ var _card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _approve_request_approve_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../approve-request/approve-request.component */ 75419);
/* harmony import */ var _cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cancel-message-modal/cancel-message-modal.component */ 83258);
/* harmony import */ var _cancel_request_modal_cancel_request_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cancel-request-modal/cancel-request-modal.component */ 91011);
/* harmony import */ var _dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dismissmodal/dismissmodal.component */ 32746);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/share */ 58921);
/* harmony import */ var _meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../meet-otp/meet-otp.component */ 19940);

















let CardComponent = class CardComponent {
  constructor(cd, coreService, apiService, constantService, commonService, alertController, modalCtrl, router) {
    this.cd = cd;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.commonService = commonService;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.eventState = "APPROVED";
    this.timer = null;
    this.eventType = "Paid";
  }
  ngOnInit() {
    this.dateFormat();
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
  presentAlert() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.message = " call you soon";
      var concatmessage = _this.cardData.athleteName.concat(_this.message.toString());
      const alert = yield _this.alertController.create({
        header: "Calling soon",
        message: concatmessage,
        buttons: ["OK"]
      });
      yield alert.present();
    })();
  }
  calender() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: "Coming soon",
        // message: "Athlete will call you soon",
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
    if (this.timer.minutes <= 10) {
      return false;
    } else {
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
  shareEvent() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_share__WEBPACK_IMPORTED_MODULE_11__.Share.share({
        title: "BubbleApp event",
        text: _this3.cardData.eventName,
        url: _this3.commonService.publicInfo.webLink + "/tabs/schedule"
      });
    })();
  }
  invitedText() {
    if (this.userRole == "fan") {
      if (this.cardData.creatorPersona == "ADMIN" || this.cardData.creatorPersona == "ATHLETE") {
        return "Created by";
      } else {
        return "Invited to";
      }
    } else {
      if (this.cardData.creatorPersona == "ADMIN" || this.cardData.creatorPersona == "ATHLETE") {
        return "Created by";
      } else {
        return "Invited by";
      }
    }
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
  openProfilePage(userRole) {
    if (userRole == "fan") {
      this.router.navigate([`profile/fan/${this.cardData.userId}`]);
    } else {
      this.router.navigate([`profile/athlete/${this.cardData.athleteId}`]);
    }
  }
  presentDismissModal() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: _dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_10__.DismissmodalComponent,
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
      if (_this4.eventState == "PENDING") {
        _this4.changeEventStatus("CANCELLED");
      } else {
        _this4.presentMessageModal();
      }
    })();
  }
  presentRefuseModal() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalCtrl.create({
        component: _cancel_request_modal_cancel_request_modal_component__WEBPACK_IMPORTED_MODULE_9__.CancelRequestModalComponent,
        cssClass: "small-modal"
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (data) {
        _this5.presentMessageModal();
      }
    })();
  }
  presentMessageModal() {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalCtrl.create({
        component: _cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_8__.CancelMessageModalComponent,
        componentProps: {
          eventState: _this6.eventState
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
      _this6.changeEventStatus("CANCELLED", data);
    })();
  }
  bidAthleteEvent(data) {
    this.eventData = data;
    if (data.creatorPersona == "ADMIN" && !this.cardData.bidSubmitted) {
      // this.eventType='Paid';
      this.router.navigate(["waitlist/event/" + data.id]);
      this.onPayment();
      //  this.ConfirmModal.present()
    } else {
      if (this.cardData.bidSubmitted) {
        this.router.navigate(["waitlist/event/" + data.id]);
      } else {
        this.router.navigate(["bid-payment/" + data.id]);
      }
    }
  }
  joinFanCall(fan) {
    console.log("fan", fan.id);
    this.commonService.callingFanDetail = fan;
    this.router.navigate(["waitlist/call/" + fan.id], {
      queryParams: {
        isBidEvent: false
      }
    });
  }
  athleteEvent(fan) {
    this.commonService.callingFanDetail = fan;
    this.router.navigate(["waitlist/event/" + fan.id]);
  }
  canAthleteJoinEvent(count) {
    if (count == 0) {
      return true;
    }
  }
  approveRequestModal() {
    var _this7 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let eventData = {
        eventType: _this7.cardData.eventType,
        createdBy: _this7.cardData.userName,
        eventName: _this7.cardData.eventName
      };
      const modal = yield _this7.modalCtrl.create({
        component: _approve_request_approve_request_component__WEBPACK_IMPORTED_MODULE_7__.ApproveRequestComponent,
        componentProps: eventData,
        cssClass: "small-modal"
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (data) {
        _this7.changeEventStatus("APPROVED");
      }
    })();
  }
  ionViewDidLeave() {
    clearInterval(this.interval);
  }
  dismissModal() {
    this.modal.dismiss();
  }
  openOtpModel() {
    var _this8 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let eventData = {
        eventName: _this8.cardData.eventName,
        userRole: _this8.userRole,
        eventId: _this8.cardData.id,
        athleteName: _this8.cardData.athleteName,
        fanName: _this8.cardData.userName
      };
      const modal = yield _this8.modalCtrl.create({
        component: _meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_12__.MeetOtpComponent,
        componentProps: eventData,
        cssClass: "small-modal"
      });
      modal.present();
    })();
  }
  onSubmit() {
    if (this.eventType == "") {
      this.coreService.showToastMessage("Please select event type", this.coreService.TOAST_ERROR);
    } else {
      if (this.eventType == 'Paid') {
        this.router.navigate(["bid-payment/" + this.eventData.id]);
      } else {
        // this.router.navigate(["waitlist/event/" + this.eventData.id]);
        this.onPayment();
      }
      this.eventType = "";
      this.modalCtrl.dismiss();
    }
  }
  onPayment() {
    let request = {
      path: "core/event/bid/save",
      data: {
        eventId: this.eventData.id,
        totalAmount: 0
      },
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.router.navigate(["waitlist/event/" + this.eventData.id]);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  cancel() {
    this.modal.dismiss();
    this.eventType = 'Paid';
  }
};
CardComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}];
CardComponent.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal]
  }],
  ConfirmModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ["CreateAppearance"]
  }],
  changeStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
  }],
  cardData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }],
  eventState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }],
  userRole: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }]
};
CardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "schedule-card",
  template: _card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CardComponent);


/***/ }),

/***/ 27198:
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 71645);




const routes = [{
  path: '',
  component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
}];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SchedulePageRoutingModule);


/***/ }),

/***/ 21839:
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-routing.module */ 27198);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page */ 71645);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card.component */ 44355);
/* harmony import */ var src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/common-directive.module */ 33109);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var _dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dismissmodal/dismissmodal.component */ 32746);
/* harmony import */ var _cancel_request_modal_cancel_request_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-request-modal/cancel-request-modal.component */ 91011);
/* harmony import */ var _cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel-message-modal/cancel-message-modal.component */ 83258);
/* harmony import */ var _approve_request_approve_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./approve-request/approve-request.component */ 75419);
/* harmony import */ var _meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meet-otp/meet-otp.component */ 19940);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-otp-input */ 2981);
















let SchedulePageModule = class SchedulePageModule {};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulePageRoutingModule, src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_3__.CommonDirectiveModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputModule],
  declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SchedulePage, _card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _dismissmodal_dismissmodal_component__WEBPACK_IMPORTED_MODULE_5__.DismissmodalComponent, _cancel_request_modal_cancel_request_modal_component__WEBPACK_IMPORTED_MODULE_6__.CancelRequestModalComponent, _cancel_message_modal_cancel_message_modal_component__WEBPACK_IMPORTED_MODULE_7__.CancelMessageModalComponent, _approve_request_approve_request_component__WEBPACK_IMPORTED_MODULE_8__.ApproveRequestComponent, _meet_otp_meet_otp_component__WEBPACK_IMPORTED_MODULE_9__.MeetOtpComponent]
})], SchedulePageModule);


/***/ }),

/***/ 71645:
/*!*************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _schedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.html?ngResource */ 18601);
/* harmony import */ var _schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.page.scss?ngResource */ 33062);
/* harmony import */ var _schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../push-notification/push-notification.page */ 30493);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);














let SchedulePage = class SchedulePage {
  constructor(coreService, apiService, constantService, commonService, cd, modalCtrl, popoverController, router, core) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.commonService = commonService;
    this.cd = cd;
    this.modalCtrl = modalCtrl;
    this.popoverController = popoverController;
    this.router = router;
    this.core = core;
    this.userData = null;
    this.nameInitials = "";
    this.eventState = "APPROVED";
    this.eventFilter = "All";
    this.scheduleData = [];
    this.isClassAdded = false;
    this.pageNumber = 0;
    this.totalElements = 0;
    this.isScrollDisabled = false;
    this.athleteEarnings = 0;
    this.badgeCount = 0;
  }
  ionViewWillEnter() {
    //this.getAthleteEarnings();
    this.getUserDataFromStorage();
    this.athleteScheduleRequest();
    this.fanScheduleRequest();
    this.pageNumber = 0;
  }
  ionViewDidEnter() {
    this.addClassOnScroll();
    this.athleteScheduleRequest();
    this.fanScheduleRequest();
    this.getNotificationCount();
  }
  ngOnInit() {
    this.navigateSubscription = this.commonService.$navigateSubject.subscribe(() => {
      this.pageNumber = 0;
      this.athleteScheduleRequest();
      this.getUserDataFromStorage();
      this.fanScheduleRequest();
      this.commonService.getAthleteEarnings();
    });
    this.athleteScheduleRequest();
    // this.getAthleteEarnings();
    this.fanScheduleRequest();
    this.getNotificationCount();
  }
  onclick_cancel() {
    this.modalCtrl.dismiss();
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
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverController.create({
        component: _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_7__.PushNotificationPage,
        cssClass: "notification-pop",
        event: ev,
        translucent: false,
        side: "bottom",
        alignment: "start",
        size: "auto"
      });
      yield popover.present();
      const {
        role
      } = yield popover.onDidDismiss();
    })();
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
  handleRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      // Any calls to load data go here
      console.log("schedule data");
      event.target.complete();
      this.getNotificationCount();
      this.resetAndGetMoreData();
      this.getScheduleDetails();
      this.athleteScheduleRequest();
      this.getAthleteEarnings();
      this.fanScheduleRequest();
    }, 2000);
  }
  getUserDataFromStorage() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.userRole = yield _this2.coreService.getUserRoleFromStorage();
      let userData = yield _this2.coreService.getUserDataFromStorage();
      _this2.nameInitials = _this2.commonService.getInitials(userData.fullName);
      _this2.userData = userData;
      _this2.userId = userData.id;
      _this2.getScheduleDetails();
    })();
  }
  getScheduleDetails() {
    let request;
    if (this.userRole == "athlete") {
      request = this.athleteScheduleRequest();
    } else {
      request = this.fanScheduleRequest();
    }
    if (!request) {
      return;
    }
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.pageNumber == 0) {
          this.scheduleData = response.data.content;
        } else {
          response.data.content.forEach(element => {
            this.scheduleData.push(element);
          });
        }
        this.totalElements = response.data.totalElements;
        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  athleteScheduleRequest() {
    let request = {
      path: "core/event/getEvents",
      data: {
        filter: {
          athleteIds: [this.userId],
          eventState: "UPCOMING",
          eventStatuses: ["APPROVED"],
          selfCreated: false
        },
        page: {
          pageLimit: 10,
          pageNumber: this.pageNumber
        },
        sort: {
          orderBy: "ASC",
          sortBy: "START_DATE"
        }
      },
      isAuth: true
    };
    //event state filter
    if (this.eventState == "PAST") {
      request.data.filter.eventStatuses = ["APPROVED"];
      delete request.data.filter.selfCreated;
      request.data.filter.eventState = "PAST";
      request.data.sort.orderBy = "DESC";
    } else if (this.eventState == "PENDING") {
      request.data.filter.eventStatuses = ["PENDING"];
      delete request.data.filter.selfCreated;
      request.data.filter.eventState = "UPCOMING";
    } else if (this.eventFilter == "sponsored") {
      request.data.filter.creatorPersonas = ["ADMIN"];
    }
    //event filter
    if (this.eventFilter == "fan") {
      request.data.filter.creatorPersonas = ["USER"];
    } else if (this.eventFilter == "me") {
      request.data.filter.selfCreated = true;
      request.data.filter.creatorPersonas = ["ATHLETE"];
    } else if (this.eventFilter == "sponsored") {
      request.data.filter.creatorPersonas = ["ADMIN"];
    }
    return request;
  }
  fanScheduleRequest() {
    let request = {
      path: "core/event/getEvents",
      data: {
        filter: {
          creatorPersonas: ["USER", "ATHLETE", "ADMIN"],
          eventState: "UPCOMING",
          eventStatuses: ["APPROVED"],
          selfCreated: true
        },
        page: {
          pageLimit: 10,
          pageNumber: this.pageNumber
        },
        sort: {
          orderBy: "ASC",
          sortBy: "START_DATE"
        }
      },
      isAuth: true
    };
    //event state filter
    if (this.eventState == "PAST") {
      request.data.filter.eventStatuses = ["APPROVED"];
      request.data.filter.eventState = "PAST";
      request.data.sort.orderBy = "DESC";
    } else if (this.eventState == "PENDING") {
      request.data.filter.creatorPersonas = ["USER"];
      request.data.filter.eventStatuses = ["PENDING"];
      request.data.filter.eventState = "UPCOMING";
    }
    if (this.eventState !== "PENDING") {
      //event creator  filter
      if (this.eventFilter == "athlete") {
        request.data.filter.creatorPersonas = ["ATHLETE"];
        request.data.filter.eventStatuses = ["APPROVED"];
      } else if (this.eventFilter == "me") {
        request.data.filter.selfCreated = true;
        request.data.filter.creatorPersonas = ["USER"];
      } else if (this.eventFilter == "sponsored") {
        request.data.filter.eventStatuses = ["APPROVED"];
        request.data.filter.creatorPersonas = ["ADMIN"];
      }
    }
    return request;
  }
  resetAndGetMoreData() {
    this.totalElements = 0;
    this.pageNumber = 0;
    this.isScrollDisabled = false;
    this.scheduleData = [];
    this.getScheduleDetails();
  }
  loadMoreEvents(event) {
    this.pageNumber++;
    this.getScheduleDetails();
    event.target.complete();
    if (this.totalElements <= this.scheduleData.length) {
      this.isScrollDisabled = true;
    }
  }
  listHeading() {
    switch (this.eventState) {
      case "APPROVED":
        return "SCHEDULE";
      case "PAST":
        return "COMPLETED ";
      case "PENDING":
        return "REQUEST";
    }
    // if (this.userRole == "athlete") {
    // } else {
    //   switch (this.eventState) {
    //     case "APPROVED":
    //       return "SCHEDULE";
    //     case "PAST":
    //       return "COMPLETED ";
    //     case "PENDING":
    //       return "REQUEST";
    //   }
    // }
  }

  redirectToInvoice() {
    if (this.userRole == "athlete") {
      this.router.navigate(["/invoice"]);
    } else {
      return;
    }
  }
  getAthleteEarnings() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userRole = yield _this3.core.getUserRoleFromStorage();
      if (userRole == "athlete") {
        let request = {
          path: "core/event/athlete/cash",
          isAuth: true
        };
        _this3.apiService.get(request).subscribe(response => {
          if (response.status.code === _this3.constantService.STATUS_OK) {
            _this3.athleteEarnings = response?.data?.totalEarning;
            console.log("athleteEarnings", _this3.athleteEarnings);
            _this3.commonService.athleteEarning = _this3.athleteEarnings;
          }
        });
      } else {
        return;
      }
    })();
  }
};
SchedulePage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}];
SchedulePage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent]
  }]
};
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-schedule",
  template: _schedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [(_schedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SchedulePage);


/***/ }),

/***/ 48470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 48470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 83656)).then(m => new m.ShareWeb())
});



/***/ }),

/***/ 90252:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/schedule/approve-request/approve-request.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/approve-request/approve-request.component.scss"],"names":[],"mappings":"AACE;EACE,cAAA;AAAJ;AAEE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAAJ;AAEI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAAN;AAGI;EACE,aAAA;AADN;AAIE;EACE,6BAAA;AAFJ;AAGI;EACE,eAAA;EACA,kBAAA;AADN;AAEM;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;AAAR;AAKE;EACE,2BAAA;AAHJ;AAII;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAFN;AAGM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AADR;AAEQ;EACE,WAAA;EACA,YAAA;AAAV;AAEQ;EACE,YAAA;AAAV","sourcesContent":[".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58616:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-request-modal/cancel-request-modal.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/cancel-request-modal/cancel-request-modal.component.scss"],"names":[],"mappings":"AACE;EACE,cAAA;AAAJ;AAEE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAAJ;AAEI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAAN;AAGI;EACE,aAAA;AADN;AAIE;EACE,6BAAA;AAFJ;AAGI;EACE,eAAA;EACA,kBAAA;AADN;AAEM;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;AAAR;AAKE;EACE,2BAAA;AAHJ;AAII;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAFN;AAGM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AADR;AAEQ;EACE,WAAA;EACA,YAAA;AAAV;AAEQ;EACE,YAAA;AAAV","sourcesContent":[".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33735:
/*!********************************************************************!*\
  !*** ./src/app/pages/schedule/card/card.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-item-sliding {\n  margin: 30px 0;\n  overflow: visible;\n}\nion-item-sliding ion-item-options {\n  flex-flow: column;\n  align-items: flex-end;\n  background: var(--dark-blue);\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border: 0;\n}\nion-item-sliding ion-item-options ion-item-option {\n  height: inherit;\n  background: var(--dark-blue);\n  width: 60px;\n  border-bottom: 1px solid rgba(var(--white-clr-rgb), 0.5);\n}\nion-item-sliding ion-item-options ion-item-option button {\n  display: inline-block;\n  text-align: right;\n  width: auto;\n}\nion-item-sliding ion-item-options ion-item-option:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option:first-child {\n  border-top-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option.delete {\n  background: var(--red-bg);\n}\nion-item-sliding ion-item-options ion-item-option.approve {\n  background: var(--green-clr);\n}\nion-item-sliding.item-sliding-active-slide span img {\n  transform: rotate(0deg);\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 0.75rem;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 0.75rem;\n  text-align: right;\n  min-height: 7px;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  word-wrap: break-word;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 0.75rem;\n  font-weight: 300;\n  margin: 0;\n  white-space: nowrap;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__date span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__date span img {\n  height: 17px;\n  width: 17px;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  word-break: break-word;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n}\n.card__cta--green p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--green span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--green span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--blue p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--blue span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--blue span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  /* margin: 0; */\n  /* --padding: 0; */\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 1.5625rem;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb !important;\n}\nion-button.button-disabled p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\nion-button.button-disabled span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\nion-button.button-disabled span img {\n  width: 18px;\n  height: 18px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: var(--white-clr);\n  display: grid !important;\n  place-items: center;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.popover-arrow {\n  display: none !important;\n}\n\n.popover.bottom .arrow {\n  visibility: hidden;\n}\n\n.card__sponser {\n  display: flex;\n  gap: 5px;\n  height: 65px;\n  width: 135px;\n  border-radius: 65px;\n  padding: 7px;\n  flex-flow: column;\n}\n.card__sponser img {\n  max-width: 100%;\n  border-radius: 0;\n  width: 50px;\n  margin: auto;\n  margin-right: 0;\n}\n.card__sponser__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__sponser__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n\n.ath-icon {\n  position: relative;\n  padding-left: 30px;\n}\n.ath-icon .icon-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 25px;\n  width: 25px;\n}\n.ath-icon .icon-img img {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n}\n.ath-icon .icon-img span {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: var(--bg-gray);\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  background: #1b4b64;\n}\n.ath-icon p {\n  font-size: 0.75rem;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n}\n.ath-icon p span.featured {\n  display: block;\n  color: var(--text-gray);\n  font-weight: 400;\n  font-size: 0.75rem;\n  text-align: left;\n}\n\n.bubble-text p {\n  position: relative;\n  padding-left: 23px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-one-clr);\n}\n.bubble-text p img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  bottom: 0;\n  margin: auto;\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data {\n  margin: 0 5px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 26px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color: var(--text-gray);\n  margin-right: 5px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/card/card.component.scss"],"names":[],"mappings":"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","sourcesContent":["ion-item-sliding {\n  margin: 30px 0;\n  overflow: visible;\n}\nion-item-sliding ion-item-options {\n  flex-flow: column;\n  align-items: flex-end;\n  background: var(--dark-blue);\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border: 0;\n}\nion-item-sliding ion-item-options ion-item-option {\n  height: inherit;\n  background: var(--dark-blue);\n  width: 60px;\n  border-bottom: 1px solid rgba(var(--white-clr-rgb), 0.5);\n}\nion-item-sliding ion-item-options ion-item-option button {\n  display: inline-block;\n  text-align: right;\n  width: auto;\n}\nion-item-sliding ion-item-options ion-item-option:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option:first-child {\n  border-top-right-radius: 20px;\n}\nion-item-sliding ion-item-options ion-item-option.delete {\n  background: var(--red-bg);\n}\nion-item-sliding ion-item-options ion-item-option.approve {\n  background: var(--green-clr);\n}\nion-item-sliding.item-sliding-active-slide span img {\n  transform: rotate(0deg);\n}\n\n.card {\n  border-radius: 20px;\n  background-color: white;\n  color: black;\n  padding: 5px 15px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  position: relative;\n  width: 100%;\n}\n.card__container {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --border-radius: 20px;\n  --background: none;\n  overflow: inherit;\n  --inner-border-width: 0;\n}\n.card__slideIcon {\n  position: absolute;\n  right: -2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.card__slideIcon img {\n  max-width: 100%;\n}\n.card__slideIcon span {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 15px;\n  height: fit-content;\n}\n.card__slideIcon span img {\n  max-width: 100%;\n  width: 15px;\n  transform: rotate(180deg);\n  transition: all 0.2s;\n}\n.card__eventType {\n  z-index: 99;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n  position: absolute;\n  top: -18px;\n  left: 20px;\n  background-color: #55cd89;\n  min-width: 100px;\n  border-radius: 20px;\n}\n.card__eventType h6 {\n  margin: 0;\n  padding: 8px 0;\n  color: white;\n  font-size: 0.75rem;\n}\n.card .inPersonEvent {\n  background-color: var(--theme-one-clr);\n}\n.card__time {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 0.75rem;\n  text-align: right;\n  min-height: 7px;\n}\n.card__time span {\n  color: var(--theme-one-clr);\n}\n.card__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.card__heading {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--theme-one-clr);\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  word-wrap: break-word;\n}\n.card__opp {\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);\n  color: var(--theme-one-clr);\n  text-align: center;\n  margin-right: 6px;\n}\n.card__opp h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.card__opp h6 {\n  font-size: 0.75rem;\n  font-weight: 300;\n  margin: 0;\n  white-space: nowrap;\n}\n.card__opp--disabled {\n  color: #bbbbbb;\n  background: #f7f7f7;\n  border: 1px solid #efefef;\n}\n.card__date {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__date h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n}\n.card__date span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__date span img {\n  height: 17px;\n  width: 17px;\n}\n.card__detail {\n  padding-bottom: 5px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n.card__detail h6 {\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  word-break: break-word;\n}\n.card__detail span {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__detail span img {\n  height: 17px;\n  width: 17px;\n  min-width: 17px;\n  min-height: 17px;\n}\n.card__border {\n  height: 1px;\n  background-color: #bbbbbb;\n  margin: 2px 0;\n}\n.card__invite {\n  margin-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f5f5f5;\n  padding-top: 5px;\n}\n.card .fans-bided-event {\n  display: flex;\n  align-items: center;\n  background: var(--bg-gray);\n  border-radius: 6px;\n  max-width: 152px;\n}\n.card .fans-bided-event p {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 500;\n}\n.card .fans-bided-event p span {\n  font-weight: 700;\n}\n.card .fans-bided-event ion-button {\n  margin: 0;\n  box-shadow: none;\n  height: 2.6em;\n  --padding-end: 13px;\n  --padding-start: 13px;\n  --background: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n.card .fans-bided-event ion-button img {\n  margin-right: 5px;\n  width: 20px;\n}\n.card .profile {\n  display: flex;\n  gap: 5px;\n}\n.card .profile img {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n}\n.card .profile__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card .profile__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__cta p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--green {\n  --background-activated: #55cd89;\n  --background: #55cd89;\n}\n.card__cta--green p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--green span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--green span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--blue {\n  --background-activated: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--blue p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n.card__cta--blue span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\n.card__cta--blue span img {\n  width: 18px;\n  height: 18px;\n}\n.card__cta--cancel {\n  --background-activated: #f74444;\n  --background: #f74444;\n  /* margin: 0; */\n  /* --padding: 0; */\n  align-items: center;\n  text-transform: capitalize;\n  justify-items: center;\n  justify-content: center;\n  --padding-start: 0.7em;\n  --padding-end: 0.7em;\n}\n.card__cta--password {\n  margin: 0;\n  font-size: 1.5625rem;\n  letter-spacing: 4px;\n  padding-top: 8px;\n}\n.card__completed {\n  margin: 0;\n  color: #55cd89;\n  font-weight: 700;\n  font-size: 0.75rem;\n}\n\n.disabled-text {\n  color: #bbbbbb;\n}\n.disabled-text span {\n  color: #bbbbbb;\n}\n\n.disabled-text-light {\n  color: #585858;\n}\n\nion-button.button-disabled {\n  --background-activated: #bbbbbb;\n  --background: #bbbbbb !important;\n}\nion-button.button-disabled p {\n  margin: 0;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  padding-left: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\nion-button.button-disabled span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  height: 18px;\n  width: 18px;\n}\nion-button.button-disabled span img {\n  width: 18px;\n  height: 18px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 30px !important;\n  height: 30px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: var(--white-clr);\n  display: grid !important;\n  place-items: center;\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n\n.card-border {\n  border-right: 4px solid #056ea6;\n}\n\n.popover-arrow {\n  display: none !important;\n}\n\n.popover.bottom .arrow {\n  visibility: hidden;\n}\n\n.card__sponser {\n  display: flex;\n  gap: 5px;\n  height: 65px;\n  width: 135px;\n  border-radius: 65px;\n  padding: 7px;\n  flex-flow: column;\n}\n.card__sponser img {\n  max-width: 100%;\n  border-radius: 0;\n  width: 50px;\n  margin: auto;\n  margin-right: 0;\n}\n.card__sponser__detail h6 {\n  color: #bbbbbb;\n  font-weight: 300;\n  font-size: 0.75rem;\n  margin: 0;\n}\n.card__sponser__detail h5 {\n  color: var(--theme-one-clr);\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin: 0;\n}\n\n.ath-icon {\n  position: relative;\n  padding-left: 30px;\n}\n.ath-icon .icon-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 25px;\n  width: 25px;\n}\n.ath-icon .icon-img img {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n}\n.ath-icon .icon-img span {\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: var(--bg-gray);\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  background: #1b4b64;\n}\n.ath-icon p {\n  font-size: 0.75rem;\n  color: var(--theme-one-clr);\n  font-weight: 600;\n  margin: 0;\n  display: inline-block;\n}\n.ath-icon p span.featured {\n  display: block;\n  color: var(--text-gray);\n  font-weight: 400;\n  font-size: 0.75rem;\n  text-align: left;\n}\n\n.bubble-text p {\n  position: relative;\n  padding-left: 23px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--theme-one-clr);\n}\n.bubble-text p img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  bottom: 0;\n  margin: auto;\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data {\n  margin: 0 5px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 26px;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-modal.small-modal .inner-content .main-screen .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color: var(--text-gray);\n  margin-right: 5px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33062:
/*!**************************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .profile {\n  background: url('card-bg.png') no-repeat;\n  margin: 0 15px 15px;\n  padding: 10px;\n  border-radius: 10px;\n  background-size: cover;\n}\nion-content .profile__top {\n  display: flex;\n  gap: 10px;\n}\nion-content .profile__image {\n  position: relative;\n}\nion-content .profile__image img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\nion-content .profile__image span {\n  height: 10px;\n  right: 0;\n  width: 10px;\n  border-radius: 15px;\n  position: absolute;\n  top: 26px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\nion-content .profile__image span.online {\n  background: var(--online);\n}\nion-content .profile__image span.busy {\n  background: #ff2929;\n}\nion-content .profile__image span.offline {\n  background: var(--offline);\n}\nion-content .profile__details p {\n  font-size: 0.875rem;\n  margin: 0;\n  padding-bottom: 5px;\n  font-weight: 400;\n  opacity: 0.5;\n  color: var(--white-clr);\n}\nion-content .profile__name {\n  font-size: 1rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 600;\n}\nion-content .profile__border {\n  margin-top: 10px;\n  height: 1px;\n  background-color: #fff;\n  opacity: 0.2;\n}\nion-content .profile__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\nion-content .profile__bottom h6 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0;\n  font-style: italic;\n}\nion-content .profile__opp {\n  font-size: 0.75rem;\n  font-weight: 500;\n  font-style: italic;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .profile__opp span {\n  font-weight: 700;\n}\n\n.sticky-div {\n  transition: all 0.3s;\n  position: sticky;\n  top: 88px;\n  z-index: 999;\n  padding: 19px 15px 10px;\n  margin-bottom: 6px;\n}\n.sticky-div.add-bg {\n  background: var(--theme-one-bg);\n}\n\n.content-part {\n  padding: 6px 15px 70px;\n}\n\n.tabs-design {\n  background: rgba(var(--theme-one-clr), 0.3);\n  border-radius: 50px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 0px 8px #157bb2;\n}\n.tabs-design ion-segment {\n  border-radius: 50px;\n}\n.tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\n.tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\n.tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0px;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n  min-height: 25px;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  width: 34px;\n  height: 34px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n.initials__online {\n  height: 10px;\n  right: 0;\n  width: 10px;\n  border-radius: 15px;\n  position: absolute;\n  top: 23px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\n.initials__online.online {\n  background: var(--online);\n}\n.initials__online.busy {\n  background: #ff2929;\n}\n.initials__online.offline {\n  background: var(--offline);\n}\n\n.bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.notifications-data {\n  background: var(--white-bg);\n  border-radius: 16px;\n  box-shadow: 0px 20px 24px rgba(17, 17, 17, 0.12);\n}\n.notifications-data .top-part {\n  border-radius: 16px 16px 0 0;\n  background: var(--white-bg);\n  padding: 10px;\n}\n.notifications-data .top-part p {\n  color: var(--text-gray);\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  text-align: right;\n}\n.notifications-data .top-part p span {\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.notifications-data .top-part h5 {\n  color: var(--green-clr);\n  font-size: 0.875rem;\n  margin: 0;\n  font-weight: 700;\n}\n.notifications-data .data-part {\n  background: var(--theme-one-bg);\n  text-align: center;\n  padding: 15px 20px;\n  border-radius: 0 0 16px 16px;\n}\n.notifications-data .data-part p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\n.notifications-data .data-part p span {\n  font-weight: 600;\n}\n.notifications-data .data-part p u {\n  text-decoration: underline;\n}\n\n.profile__bottom {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/schedule.page.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,qBAAA,EAAA,iBAAA;EACA;;;;GAAA;EAKA;;;;GAAA;EAKA;;;;GAAA;EAKA,mHAAA;EAEA,kCAAA;AAAF;AACE;EAEE,SAAA;EACA,UAAA;EACA,4BAAA;EAEA,mBAAA;EACA,gBAAA;EACA,MAAA;EACA,aAAA;EACA,+BAAA;AADJ;AAGM;EACE,qBAAA;EACA,yBAAA;EACA,uBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;AADR;AAGQ;EACE,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;AADV;AAGQ;EACE,SAAA;EACA,UAAA;AADV;AAEU;EACE,SAAA;EACA,UAAA;EACA,kBAAA;AAAZ;AACY;EACE,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,kBAAA;AACd;AAGQ;EACE,SAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AADV;AAEU;EACE,WAAA;AAAZ;AAEU;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,yBAAA;AAAZ;AAOE;EACE,wCAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;AALJ;AAOI;EACE,aAAA;EACA,SAAA;AALN;AAOI;EACE,kBAAA;AALN;AAMM;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAJR;AAMM;EACE,YAAA;EACA,QAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,qBAAA;EACA,WAAA;EACA,kCAAA;AAJR;AAKQ;EACE,yBAAA;AAHV;AAKQ;EACE,mBAAA;AAHV;AAKQ;EACE,0BAAA;AAHV;AASM;EACE,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;AAPR;AAWI;EACE,eAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;AATN;AAYI;EACE,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;AAVN;AAYI;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;AAVN;AAWM;EACE,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;AATR;AAYI;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;EACA,SAAA;AAVN;AAWM;EACE,gBAAA;AATR;;AAeA;EAAa,oBAAA;EACX,gBAAA;EACA,SAAA;EACA,YAAA;EAEA,uBAAA;EACA,kBAAA;AAZF;AAcE;EACE,+BAAA;AAZJ;;AAgBA;EACE,sBAAA;AAbF;;AAeA;EACE,2CAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;EACA,6BAAA;AAZF;AAaE;EACE,mBAAA;AAXJ;AAYI;EACE,SAAA;EACA,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AAVN;AAWM;EACE,mBAAA;EACA,gBAAA;AATR;AAWM;EACE,2BAAA;EACA,4BAAA;EACA,8BAAA;EACA,mCAAA;EACA,4BAAA;AATR;AAUQ;EACE,gBAAA;AARV;;AAcA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AAXF;AAYE;EACE,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,gBAAA;AAVJ;;AAaA;EACE,kBAAA;EACA,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,4CAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AAVF;AAYI;EACE,uBAAA;AAVN;;AAcA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;AAXF;AAYE;EACE,uBAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;EACA,cAAA;EACA,mBAAA;AAVJ;;AAaA;EACE,kBAAA;AAVF;AAWE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;AATJ;AAWE;EACE,YAAA;EACA,QAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,qBAAA;EACA,WAAA;EACA,kCAAA;AATJ;AAUI;EACE,yBAAA;AARN;AAUI;EACE,mBAAA;AARN;AAUI;EACE,0BAAA;AARN;;AAaA;EACE,SAAA;EACA,UAAA;AAVF;AAWE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,4BAAA;EACA,6BAAA;AATJ;AAWE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mCAAA;EACA,WAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,0EAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AATJ;AAWE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AATJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,0EAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAVJ;AAYE;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AAVJ;AAYE;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AAVJ;AAYE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAVJ;AAaE;EACE;IACE,cAAA;IACA,wBAAA;EAXJ;EAaE;IACE,2BAAA;EAXJ;EAaE;IACE,cAAA;IACA,6BAAA;EAXJ;AACF;;AAiBE;EACE,cAAA;AAdJ;AAgBE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAdJ;AAgBI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAdN;AAiBI;EACE,aAAA;AAfN;AAkBE;EACE,6BAAA;AAhBJ;AAiBI;EACE,eAAA;EACA,kBAAA;AAfN;AAgBM;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;AAdR;AAmBE;EACE,2BAAA;AAjBJ;AAkBI;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAhBN;AAiBM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AAfR;AAgBQ;EACE,WAAA;EACA,YAAA;AAdV;AAgBQ;EACE,YAAA;AAdV;;AAoBA;EACE,2BAAA;EAA6B,mBAAA;EAAqB,gDAAA;AAfpD;AAgBE;EAAU,4BAAA;EAA+B,2BAAA;EAA6B,aAAA;AAXxE;AAYI;EAAE,uBAAA;EAAyB,kBAAA;EAAoB,SAAA;EAAW,gBAAA;EAAkB,iBAAA;AALhF;AAMM;EAAK,2BAAA;EAA6B,mBAAA;EAAqB,gBAAA;AAD7D;AAGI;EAAG,uBAAA;EAAyB,mBAAA;EAAqB,SAAA;EAAW,gBAAA;AAGhE;AADE;EACE,+BAAA;EAAiC,kBAAA;EAAoB,kBAAA;EAAoB,4BAAA;AAM7E;AALI;EAAE,mBAAA;EAAqB,uBAAA;EAAyB,SAAA;EAAW,gBAAA;AAW/D;AAVM;EAAK,gBAAA;AAaX;AAZM;EAAE,0BAAA;AAeR;;AAXA;EACE,eAAA;AAcF","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .profile {\n  background: url(\"../../../assets/images/card-bg.png\") no-repeat;\n  margin: 0 15px 15px;\n  padding: 10px;\n  border-radius: 10px;\n  background-size: cover;\n}\nion-content .profile__top {\n  display: flex;\n  gap: 10px;\n}\nion-content .profile__image {\n  position: relative;\n}\nion-content .profile__image img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\nion-content .profile__image span {\n  height: 10px;\n  right: 0;\n  width: 10px;\n  border-radius: 15px;\n  position: absolute;\n  top: 26px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\nion-content .profile__image span.online {\n  background: var(--online);\n}\nion-content .profile__image span.busy {\n  background: #ff2929;\n}\nion-content .profile__image span.offline {\n  background: var(--offline);\n}\nion-content .profile__details p {\n  font-size: 0.875rem;\n  margin: 0;\n  padding-bottom: 5px;\n  font-weight: 400;\n  opacity: 0.5;\n  color: var(--white-clr);\n}\nion-content .profile__name {\n  font-size: 1rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 600;\n}\nion-content .profile__border {\n  margin-top: 10px;\n  height: 1px;\n  background-color: #fff;\n  opacity: 0.2;\n}\nion-content .profile__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\nion-content .profile__bottom h6 {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0;\n  font-style: italic;\n}\nion-content .profile__opp {\n  font-size: 0.75rem;\n  font-weight: 500;\n  font-style: italic;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .profile__opp span {\n  font-weight: 700;\n}\n\n.sticky-div {\n  transition: all 0.3s;\n  position: sticky;\n  top: 88px;\n  z-index: 999;\n  padding: 19px 15px 10px;\n  margin-bottom: 6px;\n}\n.sticky-div.add-bg {\n  background: var(--theme-one-bg);\n}\n\n.content-part {\n  padding: 6px 15px 70px;\n}\n\n.tabs-design {\n  background: rgba(var(--theme-one-clr), 0.3);\n  border-radius: 50px;\n  padding: 0;\n  margin-bottom: 15px;\n  box-shadow: 0 0px 8px #157bb2;\n}\n.tabs-design ion-segment {\n  border-radius: 50px;\n}\n.tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\n.tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\n.tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0px;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n  min-height: 25px;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.initials {\n  position: relative;\n}\n.initials__span {\n  width: 34px;\n  height: 34px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}\n.initials__online {\n  height: 10px;\n  right: 0;\n  width: 10px;\n  border-radius: 15px;\n  position: absolute;\n  top: 23px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\n.initials__online.online {\n  background: var(--online);\n}\n.initials__online.busy {\n  background: #ff2929;\n}\n.initials__online.offline {\n  background: var(--offline);\n}\n\n.bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.notifications-data {\n  background: var(--white-bg);\n  border-radius: 16px;\n  box-shadow: 0px 20px 24px rgba(17, 17, 17, 0.12);\n}\n.notifications-data .top-part {\n  border-radius: 16px 16px 0 0;\n  background: var(--white-bg);\n  padding: 10px;\n}\n.notifications-data .top-part p {\n  color: var(--text-gray);\n  font-size: 0.75rem;\n  margin: 0;\n  font-weight: 400;\n  text-align: right;\n}\n.notifications-data .top-part p span {\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.notifications-data .top-part h5 {\n  color: var(--green-clr);\n  font-size: 0.875rem;\n  margin: 0;\n  font-weight: 700;\n}\n.notifications-data .data-part {\n  background: var(--theme-one-bg);\n  text-align: center;\n  padding: 15px 20px;\n  border-radius: 0 0 16px 16px;\n}\n.notifications-data .data-part p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\n.notifications-data .data-part p span {\n  font-weight: 600;\n}\n.notifications-data .data-part p u {\n  text-decoration: underline;\n}\n\n.profile__bottom {\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95371:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/schedule/approve-request/approve-request.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Approve Request</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>\n        Are you sure, you want to approve {{eventType | titlecase\n        }}({{eventName}}) request from {{creatorName | titlecase}}?\n      </p>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss(false)\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\"modalCtrl.dismiss(true)\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 77888:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-request-modal/cancel-request-modal.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Refuse Request</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>\n        Are you sure, you want to refuse the appearance?\n      </p>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss(false)\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\"modalCtrl.dismiss(true)\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 77323:
/*!********************************************************************!*\
  !*** ./src/app/pages/schedule/card/card.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item-sliding>\n  <div class=\"container\">\n    <ion-item class=\"card__container\">\n      <div class=\"card\" [ngClass]=\"cardBorderClass()\">\n        <!-- arrow and border css class start  -->\n        <ng-container *ngIf=\"userRole == 'athlete'\">\n          <div  *ngIf=\"eventState == 'APPROVED' || eventState == 'PENDING'\" class=\"card__slideIcon\">\n            <img src=\"assets/images/blue-notch.png\" alt=\"\" />\n            <span class=\"arrow-move\">\n              <img src=\"assets/icon/arrow-left.svg\" />\n            </span>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"userRole == 'fan'\">\n          <div *ngIf=\"eventState == 'APPROVED'\" class=\"card__slideIcon\">\n            <img src=\"assets/images/blue-notch.png\" alt=\"\" />\n            <span class=\"arrow-move\">\n              <img src=\"assets/icon/arrow-left.svg\" />\n            </span>\n          </div>\n        </ng-container>\n        <!-- arrow and border css class end  -->\n        <!-- video and in person event icons start  -->\n        <div *ngIf=\"cardData.eventType !=='IN_PERSON'\" class=\"card__eventType\">\n          <img src=\"../../../../assets/icon/video.svg\" alt=\"\" />\n          <h6>Video</h6>\n        </div>\n        <div\n          *ngIf=\"cardData.eventType =='IN_PERSON'\"\n          class=\"card__eventType inPersonEvent\"\n        >\n          <img src=\"../../../../assets/icon/in-person.svg\" alt=\"\" />\n          <h6>In-person</h6>\n        </div>\n        <!-- video and in person event icons end  -->\n        <!-- event timing countdown start  -->\n        <div style=\"min-height: 15px;\">\n          <ng-container *ngIf=\"userRole == 'athlete'\">\n            <div *ngIf=\"eventState !== 'PAST'\" class=\"\">\n              <h6 *ngIf=\"timer.minutes > 0\" class=\"card__time\">\n                <ng-container *ngIf=\"this.timer.days\">\n                  <span>{{this.timer.days }}</span> {{this.timer.title_days}} :\n                </ng-container>\n                <ng-container *ngIf=\"this.timer.hours\">\n                  <span>{{this.timer.hours }}</span>\n                  {{this.timer?.title_hours}} :\n                </ng-container>\n                <span>{{this.timer.minutes}}</span> {{this.timer?.title_min}}\n              </h6>\n              <h6 *ngIf=\"timer.minutes <=  0\" class=\"card__time\">\n                Event Started\n              </h6>\n            </div>\n            <h6\n              *ngIf=\"eventState == 'PAST'\"\n              class=\"card__time disabled-text\"\n            ></h6>\n          </ng-container>\n          <ng-container *ngIf=\"userRole == 'fan'\">\n            <div *ngIf=\"eventState == 'APPROVED'\" class=\"\">\n              <h6 *ngIf=\"timer.minutes > 0\" class=\"card__time\">\n                <ng-container *ngIf=\"this.timer.days\">\n                  <span>{{this.timer.days }}</span> {{this.timer.title_days}} :\n                </ng-container>\n                <ng-container *ngIf=\"this.timer.hours\">\n                  <span>{{this.timer.hours }}</span>\n                  {{this.timer?.title_hours}} :\n                </ng-container>\n                <span>{{this.timer.minutes}}</span> {{this.timer?.title_min}}\n              </h6>\n              <h6 *ngIf=\"timer.minutes <=  0\" class=\"card__time\">\n                Event Started\n              </h6>\n            </div>\n            <h6\n              *ngIf=\"eventState == 'PENDING'\"\n              class=\"card__time disabled-text-light\"\n            >\n              Pending for approval\n            </h6>\n            <h6\n              *ngIf=\"eventState == 'PAST'\"\n              class=\"card__time disabled-text-light\"\n            ></h6>\n          </ng-container>\n        </div>\n        <!-- event timing countdown end  -->\n        <div class=\"card__body\">\n          <div class=\"card__details\">\n            <h6 class=\"card__heading\">{{cardData.eventName}}</h6>\n\n            <div class=\"card__date\">\n              <span\n                ><img src=\"../../../../assets/icon/calender-blue.svg\" alt=\"\"\n              /></span>\n              <h6>{{cardData.startDate | date:'MMM dd, YYYY'}}</h6>\n            </div>\n            <div class=\"card__detail\">\n              <span\n                ><img src=\"../../../../assets/icon/clock.svg\" alt=\"\"\n              /></span>\n              <h6>{{cardData.startDate | date:'shortTime'}}</h6>\n              <span>\n              <img src=\"../../../../assets/icon/duration-small.svg\" alt=\"\" />\n              </span>\n              <h6>{{timeConvert(cardData.duration)}}</h6>\n            </div>\n            <div class=\"card__detail\">\n              <ng-container *ngIf=\"cardData.eventType !== 'IN_PERSON'\">\n                <ng-container *ngIf=\"cardData.description !== ''\">\n                  <span\n                    ><img src=\"../../../../assets/icon/chat.svg\" alt=\"\"\n                  /></span>\n\n                  <h6>\n                    {{cardData.description }}\n                  </h6>\n                </ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"cardData.eventType == 'IN_PERSON'\">\n                <span\n                  ><img\n                    class=\"op-65\"\n                    src=\"../../../../assets/icon/location.svg\"\n                    alt=\"\"\n                /></span>\n                <h6>\n                  {{cardData.eventAddress?.addressLine1}},\n                  {{cardData.eventAddress?.city}},\n                  {{cardData.eventAddress?.state}},\n                  {{cardData.eventAddress?.zipCode}}\n                </h6>\n              </ng-container>\n            </div>\n          </div>\n\n          <div\n            *ngIf=\"!cardData.sponsorProfilePicture\"\n            [ngClass]=\"eventState == 'PAST' ? 'card__opp--disabled' :''\"\n            class=\"card__opp\"\n          >\n            <h3>\n              ${{cardData.minBid}}\n            </h3>\n            <h6\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              Minimum Bid\n            </h6>\n            <h6 *ngIf=\"cardData.creatorPersona == 'USER'\">\n              Opportunity\n            </h6>\n          </div>\n          <div *ngIf=\"cardData.sponsorProfilePicture\" class=\"card__sponser\">\n            <img [src]=\"cardData.sponsorProfilePicture | profile\" alt=\"\" />\n            <div class=\"ath-icon\">\t\n              <div class=\"icon-img\">\t\n                <img *ngIf=\"cardData?.athleteProfilePicture!== '' || cardData?.athleteProfilePicture \" [src]=\"cardData?.athleteProfilePicture | profile\" alt=\"\">\t\n                <span *ngIf=\"cardData?.athleteProfilePicture == '' || !cardData?.athleteProfilePicture\">{{athleteNameInitials}}</span>\t\n              </div>\t\n              <p *ngIf=\"cardData?.athleteName\">\n                <span class=\"featured\">Featured</span> {{cardData?.athleteName}}</p>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"card__border\"></div> -->\n\n        <div class=\"card__invite\">\n          <!-- invited and created by name and pic start  -->\n          <ng-container *ngIf=\"userRole == 'fan' && !cardData.sponsorProfilePicture\">\n            <ng-container\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              <div (click)=\"openProfilePage('athlete')\" class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'\">\n              <div (click)=\"openProfilePage('athlete')\" class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n\n          <ng-container *ngIf=\"userRole == 'fan' && cardData.sponsorProfilePicture\">\n              <div class=\"bubble-text\">\n                  <p><img src=\"assets/images/bubble-blue.svg\"> Brought to you by BubbleApp </p>\n              </div>\n          </ng-container>\n\n          <ng-container *ngIf=\"userRole == 'athlete'  && !cardData.sponsorProfilePicture\">\n            <ng-container\n              *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'\"\n            >\n              <div (click)=\"openProfilePage('athlete')\" class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.athleteProfilePicture !==''\"\n                  [src]=\"cardData.athleteProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div\n                  *ngIf=\"cardData?.athleteProfilePicture ==''\"\n                  class=\"inital\"\n                >\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.athleteName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"cardData.creatorPersona == 'USER'\">\n              <div (click)=\"openProfilePage('fan')\" class=\"profile\">\n                <img\n                  *ngIf=\"cardData?.userProfilePicture !==''\"\n                  [src]=\"cardData.userProfilePicture | profile\"\n                  alt=\"\"\n                />\n\n                <div *ngIf=\"cardData?.userProfilePicture ==''\" class=\"inital\">\n                  <span class=\"initial__span\">\n                    {{nameInitials}}\n                  </span>\n                </div>\n                <div class=\"profile__detail\">\n                  <h6>{{invitedText()}}</h6>\n                  <h5>{{cardData.userName}}</h5>\n                </div>\n              </div>\n            </ng-container>\n          </ng-container>\n\n          <ng-container *ngIf=\"userRole == 'athlete' && cardData.sponsorProfilePicture\">\n            <div class=\"bubble-text\">\n              <p><img src=\"assets/images/bubble-blue.svg\"> Brought to you by BubbleApp </p>\n          </div>\n          </ng-container> \n          <!-- invited and created by name and pic end  -->\n\n          <ng-container *ngIf=\"userRole == 'athlete'\">\n            <ng-container\n              *ngIf=\"eventState !== 'PAST' && eventState !== 'PENDING'\"\n            >\n              <ng-container *ngIf=\"cardData.creatorPersona == 'USER'    \">\n                <ion-button\n                  *ngIf=\"cardData.eventType !== 'IN_PERSON' \"\n                  (click)=\"joinFanCall(cardData)\"\n                  size=\"small\"\n                  class=\"card__cta--green\"\n                >\n                  <span\n                    ><img src=\"../../../../assets/icon/join-video.svg\" alt=\"\"\n                  /></span>\n                  <p>Join Now</p>\n                </ion-button>\n              </ng-container>\n              <ion-button\n                *ngIf=\"cardData.eventType == 'IN_PERSON'\"\n                [disabled]=\"canJoinEvent()\"\n                (click)=\"openOtpModel() \"\n                size=\"small\"\n                class=\"card__cta--green\"\n              >\n                <p class=\"card__cta--password\">****</p>\n              </ion-button>\n              <ng-container\n                *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'   \"\n              >\n                <div\n                  *ngIf=\"cardData.eventType !== 'IN_PERSON' \"\n                  class=\"fans-bided-event\"\n                >\n                  <p>\n                    <span>{{cardData.count}}</span>\n                    Fans bided on your event\n                  </p>\n                  <ion-button\n                    [disabled]=\"canAthleteJoinEvent(cardData.count)\"\n                    (click)=\"athleteEvent(cardData)\"\n                    ><img src=\"assets/icon/join-video.svg\" /> Go</ion-button\n                  >\n                </div>\n              </ng-container>\n            </ng-container>\n            <h6 *ngIf=\"eventState == 'PAST'\" class=\"card__completed\">\n              COMPLETED\n            </h6>\n          </ng-container>\n          <ng-container *ngIf=\"userRole == 'fan'\">\n            <ng-container *ngIf=\"eventState == 'APPROVED'\">\n              <ion-button\n                [disabled]=\"canBidForEvent()\"\n                (click)=\"bidAthleteEvent(cardData)\"\n                *ngIf=\"cardData.creatorPersona == 'ATHLETE' || cardData.creatorPersona == 'ADMIN'   \"\n                size=\"small\"\n                class=\"card__cta--blue\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/bid-dollar.svg\" alt=\"\"\n                /></span>\n                <p *ngIf=\"!cardData.bidSubmitted && cardData.creatorPersona != 'ADMIN'\">Bid now</p>\n                <p *ngIf=\"!cardData.bidSubmitted &&   cardData.creatorPersona == 'ADMIN'\">Join now</p>\n                <p *ngIf=\"cardData.bidSubmitted\">Go</p>\n              </ion-button>\n              <ion-button\n                (click)=\"presentAlert() \"\n                [disabled]=\"canJoinEvent()\"\n                *ngIf=\"cardData.creatorPersona == 'USER'  && cardData.eventType !== 'IN_PERSON'  \"\n                size=\"small\"\n                class=\"card__cta--green\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/join-video.svg\" alt=\"\"\n                /></span>\n                <p>Join now</p>\n              </ion-button>\n              <ion-button\n                [disabled]=\"canJoinEvent()\"\n                (click)=\"openOtpModel() \"\n                *ngIf=\"cardData.creatorPersona == 'USER' && cardData.eventType == 'IN_PERSON'  \"\n                size=\"small\"\n                class=\"card__cta--green\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/meet-up.svg\" alt=\"\"\n                /></span>\n                <p>Meet-Up</p>\n              </ion-button>\n            </ng-container>\n            <ng-container *ngIf=\"eventState == 'PENDING' \">\n              <ion-button\n                (click)=\"presentDismissModal()\"\n                size=\"small\"\n                class=\"card__cta card__cta--cancel\"\n              >\n                <span\n                  ><img src=\"../../../../assets/icon/cancel-cross.svg\" alt=\"\"\n                /></span>\n                <p>Cancel</p>\n              </ion-button>\n            </ng-container>\n            <ng-container>\n              <h6 *ngIf=\"eventState == 'PAST'\" class=\"card__completed\">\n                <img src=\"../../../../assets/icon/check-green.svg\" alt=\"\" />\n              </h6>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n    </ion-item>\n  </div>\n  <ng-container *ngIf=\"userRole == 'athlete'\">\n    <ion-item-options *ngIf=\"eventState == 'APPROVED'\">\n      <ion-item-option (click)=\"presentAlert()\" color=\"primary\">\n        <img src=\"assets/icon/share-icon.svg\" />\n      </ion-item-option>\n      <ion-item-option (click)=\"presentAlert()\" color=\"primary\">\n        <img src=\"assets/icon/calendar-card.svg\" />\n      </ion-item-option>\n      <ion-item-option (click)=\"presentAlert()\" color=\"primary\" class=\"delete\">\n        <img src=\"assets/icon/delete.svg\" />\n      </ion-item-option>\n    </ion-item-options>\n    <ion-item-options *ngIf=\"eventState == 'PENDING'\">\n      <ion-item-option\n        (click)=\"approveRequestModal()\"\n        color=\"primary\"\n        class=\"approve\"\n      >\n        <img src=\"assets/icon/approve-icon.svg\" />\n      </ion-item-option>\n\n      <ion-item-option\n        (click)=\"presentRefuseModal()\"\n        color=\"primary\"\n        class=\"delete\"\n      >\n        <img src=\"assets/icon/reject-icon.svg\" />\n      </ion-item-option>\n    </ion-item-options>\n  </ng-container>\n  <ng-container>\n    <ion-item-options *ngIf=\"eventState == 'APPROVED'\">\n      <ion-item-option (click)=\"shareEvent()\" color=\"primary\">\n        <img src=\"assets/icon/share-icon.svg\" />\n      </ion-item-option>\n      <ion-item-option (click)=\"calender()\" color=\"primary\">\n        <img src=\"assets/icon/calendar-card.svg\" />\n      </ion-item-option>\n      <!-- <ion-item-option\n        *ngIf=\"(cardData.creatorPersona == 'USER'  ||  cardData.athleteId != cardData.userId) && (userRole == 'fan') \"\n        (click)=\"presentDismissModal()\"\n        color=\"primary\"\n        class=\"delete\"\n      >\n        <img src=\"assets/icon/delete.svg\" />\n      </ion-item-option> -->\n      <ion-item-option\n        *ngIf=\"userRole == 'athlete' \"\n        (click)=\"presentDismissModal()\"\n        color=\"primary\"\n        class=\"delete\"\n      >\n        <img src=\"assets/icon/delete.svg\" />\n      </ion-item-option> </ion-item-options\n  ></ng-container>\n</ion-item-sliding>\n\n <ion-modal #CreateAppearance class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3>Bid to bubble up</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <!-- <h5 *ngIf=\"eventType=='Paid'\">\n          You’re first in line\n        </h5>\n        <p *ngIf=\"eventType=='Paid'\">\n          Athlete will call you soon\n        </p>\n      -->\n        <p *ngIf=\"eventType=='Free'\">\n          Wait for free or bid to skip to the front of the line\n        </p>\n        <div class=\"radio-btn\">\n          <ion-radio-group  [(ngModel)]=\"eventType\" mode=\"md\">\n            <div class=\"radio-main\">\n              <div class=\"radio-data\">\n                <ion-item lines=\"none\" mode=\"ios\">\n                  <ion-label >Bid</ion-label>\n                  <ion-radio mode=\"md\" slot=\"start\" value=\"Paid\"  ></ion-radio>\n                </ion-item>\n              </div>\n              <div class=\"radio-data\">\n                <ion-item lines=\"none\" mode=\"ios\">\n                  <ion-label>Free</ion-label>\n                  <ion-radio mode=\"md\" slot=\"start\" value=\"Free\" ></ion-radio> \n                </ion-item>\n              </div>\n            </div>\n          </ion-radio-group>\n        </div>\n      </div>\n      \n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button (click)=\"cancel()\" class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button (click)=\"onSubmit()\" class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal> \n";

/***/ }),

/***/ 18601:
/*!**************************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\">\n  <ion-grid class=\"top-card\">\n    <div class=\"title-part\">\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"\"\n          pullingText=\"\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"\">\n        </ion-refresher-content>\n      </ion-refresher>\n      <ion-item lines=\"none\" mode=\"md\">\n        <ion-icon\n          routerLink=\"/tabs/home\"\n          slot=\"start\"\n          name=\"arrow-back-outline\" mode=\"md\"\n        ></ion-icon>\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n          \n        </ion-label>\n        <div class=\"notification\" slot=\"end\"   (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-grid>\n\n  <div *ngIf=\"userData \" class=\"profile\">\n    <div class=\"profile__top\">\n      <div *ngIf=\"userData.profileUrl !== ''\" class=\"profile__image\">\n        <img [src]=\"userData.profileUrl | profile\" alt=\"\" />\n        <span class=\"online\"></span>\n      </div>\n      <ng-container *ngIf=\"userData.profileUrl == ''\">\n        <div class=\"initials\">\n          <span class=\"initials__span\">\n            {{nameInitials}}\n          </span>\n          <span class=\"initials__online online\"></span>\n        </div>\n      </ng-container>\n      <div class=\"profile__details\">\n        <h2 class=\"profile__name\">Hi {{userData?.fullName}}</h2>\n        <ng-container *ngIf=\"userRole == 'fan'\">\n          <p>{{userData?.teamName}}</p>\n          <p>{{userData?.teamState}} <b *ngIf=\"userData?.teamState == null\">/</b> {{userData?.country}}</p>\n        </ng-container>\n        <ng-container *ngIf=\"userRole == 'athlete'\">\n          <p>{{userData?.teamName}}</p>\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"profile__border\"></div>\n\n    <!-- <div *ngIf=\"userRole == 'fan'\" class=\"profile__bottom\">\n      <h4 class=\"profile__opp\">Opportunities on <span>BubbleApp</span></h4>\n      <h6>\n        ${{userData?.totalEventAmount}}\n      </h6>\n      <!--      <ion-button routerLink=\"/waitlist\">Test Video call</ion-button>\n    </div> -->\n\n    <div *ngIf=\"userRole == 'athlete'\" class=\"profile__bottom\" (click)=\"redirectToInvoice()\">\n      <h4 class=\"profile__opp\">\n        Your Bubble cash Earning On <span>BubbleApp</span>\n      </h4>\n      <h6 *ngIf=\"commonService.athleteEarnings!=null\">\n        ${{commonService.athleteEarnings | number: '1.0-2'}}\n      </h6>\n      <h6 *ngIf=\"commonService.athleteEarnings==null\">\n        $ 0\n      </h6>\n\n      <!-- <ion-button routerLink=\"/waitlist\">join</ion-button> -->\n    </div>\n  </div>\n\n  <div class=\"sticky-div\" [ngClass]=\"isClassAdded ? 'add-bg':''\">\n    <ion-grid class=\"tabs-design\">\n      <ion-segment\n        [(ngModel)]=\"eventState\"\n        (ngModelChange)=\"resetAndGetMoreData()\"\n        mode=\"ios\"\n      >\n        <ion-segment-button value=\"APPROVED\">\n          <ion-label>Upcoming</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"PAST\">\n          <ion-label>Past</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"PENDING\">\n          <ion-label>Requests</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-grid>\n    <div class=\"schedule\">\n      <h6>{{listHeading()}}</h6>\n\n      <ng-container *ngIf=\"userRole == 'athlete'\">\n        <div class=\"\">\n          <ion-select\n            [(ngModel)]=\"eventFilter\"\n            (ngModelChange)=\"resetAndGetMoreData()\"\n            interface=\"popover\"\n            mode=\"ios\"\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover' }\"\n          >\n            <ion-select-option value=\"All\">All</ion-select-option>\n            <ion-select-option value=\"me\">Created by me</ion-select-option>\n            <ion-select-option value=\"fan\">Created by fan</ion-select-option>\n            <ion-select-option value=\"sponsored\"\n              >Sponsored by</ion-select-option\n            >\n          </ion-select>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"userRole == 'fan'\">\n        <div *ngIf=\"eventState !== 'PENDING'\" class=\"\">\n          <ion-select\n            [(ngModel)]=\"eventFilter\"\n            (ngModelChange)=\"resetAndGetMoreData()\"\n            interface=\"popover\"\n            mode=\"ios\"\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\n          >\n            <ion-select-option value=\"All\">All</ion-select-option>\n            <ion-select-option value=\"me\">Created by me</ion-select-option>\n\n            <ion-select-option value=\"athlete\"\n              >Created by athlete</ion-select-option\n            >\n\n            <ion-select-option value=\"sponsored\"\n              >Sponsored by</ion-select-option\n            >\n          </ion-select>\n        </div>\n      </ng-container>\n    </div>\n    <!--    <div class=\"test-btn\">-->\n    <!--      <ion-button routerLink=\"/waitlist\" class=\"\">Test Video call</ion-button>-->\n    <!--    </div>-->\n  </div>\n  <ion-grid class=\"content-part\">\n    <div *ngIf=\"eventState == 'APPROVED'\" class=\"\">\n      <div *ngIf=\"scheduleData.length == 0\" class=\"no-data-found\">\n        <p>No upcoming event found</p>\n      </div>\n      <schedule-card\n        [userRole]=\"userRole\"\n        (changeStatus)=\" resetAndGetMoreData()\"\n        [eventState]=\"eventState\"\n        *ngFor=\"let data of scheduleData\"\n        [cardData]=\"data\"\n      ></schedule-card>\n    </div>\n    <div *ngIf=\"eventState == 'PAST'\" class=\"\">\n      <div *ngIf=\"scheduleData.length == 0\" class=\"no-data-found\">\n        <p>No past event found</p>\n      </div>\n      <schedule-card\n        [userRole]=\"userRole\"\n        [eventState]=\"eventState\"\n        *ngFor=\"let data of scheduleData\"\n        [cardData]=\"data\"\n      ></schedule-card>\n    </div>\n    <div *ngIf=\"eventState == 'PENDING'\" class=\"\">\n      <div *ngIf=\"scheduleData.length == 0\" class=\"no-data-found\">\n        <p>No upcoming Requests</p>\n      </div>\n      <schedule-card\n        [userRole]=\"userRole\"\n        (changeStatus)=\" resetAndGetMoreData()\"\n        [eventState]=\"eventState\"\n        *ngFor=\"let data of scheduleData\"\n        [cardData]=\"data\"\n      ></schedule-card>\n    </div>\n    <ion-infinite-scroll\n      [disabled]=\"isScrollDisabled\"\n      threshold=\"100px\"\n      (ionInfinite)=\"loadMoreEvents($event)\"\n    >\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-grid>\n\n  <ion-grid class=\"bg-bubble\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n\n\n<!-- <ion-modal trigger=\"logout\" class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3>Logout</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p>Are you sure, you want to logout from BubbleApp?</p>\n      </div>\n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button class=\"white-btn\" (click)=\"onclick_cancel()\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button data-cy=\"logout\" (click)=\"logout()\" class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_schedule_schedule_module_ts.js.map