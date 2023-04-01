(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_new-booking_new-booking_module_ts"],{

/***/ 30493:
/*!*******************************************************************!*\
  !*** ./src/app/pages/push-notification/push-notification.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotificationPage": () => (/* binding */ PushNotificationPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _push_notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push-notification.page.html?ngResource */ 32863);
/* harmony import */ var _push_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./push-notification.page.scss?ngResource */ 85099);
/* harmony import */ var _push_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_push_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/badge/ngx */ 72720);












let PushNotificationPage = class PushNotificationPage {
  constructor(modalCtrl, coreService, apiService, constantService, router, commonService, badge, platform) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.router = router;
    this.commonService = commonService;
    this.badge = badge;
    this.platform = platform;
    this.badgeCount = 0;
  }
  ngOnInit() {
    this.getNotificationData();
    this.getNotificationCount();
    this.viewAllNotification();
    this.resetBadgesCount();
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
  resetBadgesCount() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.platform.is("desktop") || _this.platform.is("mobileweb")) {
        console.log("web");
        return;
      } else {
        yield _this.badge.clear();
      }
    })();
  }
  getNotificationData() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userData = yield _this2.coreService.getUserDataFromStorage();
      _this2.userId = userData.id;
      yield _this2.getPushNotification();
    })();
  }
  getPushNotification() {
    let request = {
      path: "notification/notification/view/getAll",
      data: {
        "filter": {
          "userId": this.userId
        },
        "page": {
          "pageLimit": 20,
          "pageNumber": 0
        },
        "sort": {
          "orderBy": "DESC",
          "sortBy": "SENT_DATE"
        }
      },
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.notificationContentData = response['data']['content'];
      } else {
        this.coreService.showToastMessage(response.status['description'], this.coreService.TOAST_ERROR);
      }
    });
  }
  viewedNotification(id) {
    let request = {
      path: `notification/notification/view?id=` + id,
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      if (response["status"]["code"] === "OK") {} else {}
    });
  }
  viewAllNotification() {
    let request = {
      path: `notification/notification/view?viewAll=true`,
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      if (response["status"]["code"] === "OK") {
        console.log("cleared");
      } else {}
    });
  }
};
PushNotificationPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _awesome_cordova_plugins_badge_ngx__WEBPACK_IMPORTED_MODULE_7__.Badge
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}];
PushNotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-push-notification',
  template: _push_notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_push_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PushNotificationPage);


/***/ }),

/***/ 64077:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/new-booking/new-booking-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBookingPageRoutingModule": () => (/* binding */ NewBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _new_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-booking.page */ 7291);




const routes = [{
  path: '',
  component: _new_booking_page__WEBPACK_IMPORTED_MODULE_0__.NewBookingPage
}];
let NewBookingPageRoutingModule = class NewBookingPageRoutingModule {};
NewBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NewBookingPageRoutingModule);


/***/ }),

/***/ 41533:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/new-booking/new-booking.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBookingPageModule": () => (/* binding */ NewBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-booking-routing.module */ 64077);
/* harmony import */ var _new_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-booking.page */ 7291);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);
/* harmony import */ var src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/common-directive.module */ 33109);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);











let NewBookingPageModule = class NewBookingPageModule {};
NewBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_3__.CommonDirectiveModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _new_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewBookingPageRoutingModule],
  declarations: [_new_booking_page__WEBPACK_IMPORTED_MODULE_1__.NewBookingPage]
})], NewBookingPageModule);


/***/ }),

/***/ 7291:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/new-booking/new-booking.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBookingPage": () => (/* binding */ NewBookingPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-booking.page.html?ngResource */ 70354);
/* harmony import */ var _new_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-booking.page.scss?ngResource */ 43416);
/* harmony import */ var _new_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terms-conditions/terms-conditions.component */ 92716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payment/payment.component */ 13985);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../push-notification/push-notification.page */ 30493);
/* harmony import */ var _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fresha/capacitor-plugin-applepay */ 20323);














// import * as moment from 'moment';





let NewBookingPage = class NewBookingPage {
  constructor(modalCtrl, fb, commonService, coreService, apiService, constant, renderer, currencyPipe, platform, router, popoverController) {
    this.modalCtrl = modalCtrl;
    this.fb = fb;
    this.commonService = commonService;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constant = constant;
    this.renderer = renderer;
    this.currencyPipe = currencyPipe;
    this.platform = platform;
    this.router = router;
    this.popoverController = popoverController;
    this.isAthleteFormSubmitted = false;
    this.isFanFormSubmitted = false;
    this.fanEventType = "VIDEO";
    this.selectedAthleteId = "";
    this.validationType = {
      addressLine1: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      city: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[a-zA-Z ]*$")],
      state: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[a-zA-Z ]*$")],
      zipCode: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(5)]
    };
    this.selectedAthleteName = "";
    this.totalAthleteDuration = 0;
    this.totalFanDuration = 0;
    this.isTermsAndConditionAccepted = false;
    this.defaultDate = new Date().toISOString();
    this.maxData = new Date().getFullYear() + 5;
    this.selectduration = "00:00";
    this.minSample = new Date().toISOString();
    this.badgeCount = 0;
    this.commonService.subscribe("payment Data", data => {
      console.log(data, "ankita");
      this.nonce = data.nonce;
      this.paymentType = data.paymentType;
    });
    console.log("abcd", this.nonce, this.paymentType);
  }
  ngOnInit() {
    const script = this.renderer.createElement("script");
    if (this.commonService?.publicInfo?.squareEnvironment == "PRODUCTION") {
      script.src = `https://web.squarecdn.com/v1/square.js`;
    } else {
      // script.src = `https://js.squareupsandbox.com/v2/paymentform`; //deprecated
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
    }
    this.renderer.appendChild(document.head, script);
    this.initAppearanceForm();
    this.fanForm.get("duration").disable();
    this.getUserRole();
    this.eventTypeSelected();
    this.getSelectedAthlete();
    this.setTimeZone();
    console.log("abcd1", this.nonce, this.paymentType);
  }
  getUserRole() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userRole = yield _this.coreService.getUserRoleFromStorage();
      _this.setDuration();
    })();
  }
  ionViewDidEnter() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.selectedIndex = await this.commonService.fanEventType;
      _this2.fanEventType = yield _this2.commonService.fanEventType;
      console.log("type ", _this2.commonService.fanEventType);
      _this2.setDuration();
      _this2.initAppearanceForm();
      _this2.fanForm.get("duration").disable();
      _this2.getUserRole();
      _this2.eventTypeSelected();
      _this2.getSelectedAthlete();
      _this2.setTimeZone();
      _this2.getNotificationCount();
    })();
  }
  getAppearanceData() {
    // this.fanEventType= this.commonService.fanEventType;
    console.log('ff ', this.fanEventType);
    this.isTermsAndConditionAccepted = false;
  }
  setTimeZone() {
    if (this.platform.is("ios")) {
      this.androidTimeZone();
    } else {
      console.log("in android");
      this.androidTimeZone();
    }
  }
  androidTimeZone() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("time zone", userTimeZone);
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(Date.now() - tzoffset).toISOString();
    this.currentDate = localISOTime;
    this.starttime = this.currentDate;
    this.defaultDate = this.currentDate;
  }
  toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        return (num < 10 ? "0" : "") + num;
      };
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + "T" + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()) + dif + pad(Math.floor(Math.abs(tzo) / 60)) + ":" + pad(Math.abs(tzo) % 60);
  }
  setDuration() {
    if (this.userRole !== "fan") {
      return;
    }
    if (this.fanEventType !== "VIDEO") {
      this.fanForm.controls.duration.reset();
      return;
    }
    this.fanForm.controls.duration.patchValue(this.commonService.publicInfo.defaultDurationOfFanEvent + "min");
    this.totalFanDuration = this.commonService.publicInfo.defaultDurationOfFanEvent;
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  eventTypeSelected() {
    this.setDuration();
    if (this.fanEventType == "VIDEO") {
      this.removeValidators(this.fanForm.controls.eventAddress);
    } else {
      this.addValidators(this.fanForm.controls.eventAddress);
    }
  }
  removeValidators(form) {
    for (const key in form.controls) {
      form.get(key).clearValidators();
      form.get(key).updateValueAndValidity();
    }
  }
  addValidators(form) {
    for (const key in form.controls) {
      form.get(key).setValidators(this.validationType[key]);
      form.get(key).updateValueAndValidity();
    }
  }
  presentTermsAndConditions() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_7__.TermsConditionsComponent,
        cssClass: "tandc-modal"
      });
      modal.present();
    })();
  }
  initAppearanceForm() {
    this.athleteForm = this.fb.nonNullable.group({
      eventType: ["VIDEO"],
      startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      minBid: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      description: [""],
      eventName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
    });
    this.fanForm = this.fb.nonNullable.group({
      startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      minBid: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      description: [""],
      eventName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      selectedAthleteName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      eventAddress: this.fb.group({
        addressLine1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
        city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[a-zA-Z ]*$")]],
        state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[a-zA-Z ]*$")]],
        zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(5)]]
      }),
      time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
    });
  }
  onclick_cancel() {
    if (this.userRole == "athlete") {
      this.athleteForm.reset();
      this.isAthleteFormSubmitted = false;
    } else {
      this.fanForm.reset();
      this.isFanFormSubmitted = false;
    }
    this.router.navigate(["/tabs/home"]);
    this.isTermsAndConditionAccepted = false;
  }
  onSubmit() {
    let request;
    if (this.userRole == "athlete") {
      request = this.athleteDataRequest();
    } else {
      request = this.fanDataRequest();
    }
    this.subscribeData = this.commonService.subscribe("payment Data", data => {
      console.log(data, "ankita1");
      this.nonce = data.nonce;
      this.paymentType = data.paymentType;
    });
    console.log(request.data, this.nonce, this.paymentType, "etgg");
    if (!request) {
      return;
    }
    if (this.userRole == "athlete") {
      this.coreService.presentLoader(this.constant.WAIT);
      this.apiService.post(request).subscribe(response => {
        this.coreService.dismissLoader();
        if (response.status.code == this.constant.STATUS_OK) {
          this.modalCtrl.dismiss(false);
          window.location.reload();
        } else {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
        }
      });
    } else {
      this.requestData = request;
    }
  }
  athleteDataRequest() {
    this.isAthleteFormSubmitted = true;
    // this.athleteForm.controls.minBid.patchValue(
    //   this.parseStringToFloat(this.athleteForm.controls.minBid.value)
    // );
    if (this.athleteForm.invalid) {
      return;
    }
    this.isAthleteFormSubmitted = true;
    this.athleteForm.value.minBid = this.parseStringToFloat(this.athleteForm.controls.minBid.value);
    let {
      startDate,
      duration,
      time,
      ...athletePayload
    } = this.athleteForm.value;
    let request = {
      path: "core/event/create",
      data: {
        ...athletePayload,
        startDate: this.eventStartTime,
        duration: this.totalAthleteDuration
      },
      isAuth: true
    };
    this.router.navigate(["/tabs/home"]);
    return request;
  }
  fanDataRequest() {
    this.isFanFormSubmitted = true;
    // this.fanForm.controls.minBid.patchValue(
    //   this.parseStringToFloat(this.fanForm.controls.minBid.value)
    // );
    this.fanForm.value.minBid = this.parseStringToFloat(this.fanForm.controls.minBid.value);
    this.commonService.bidAmount = this.parseStringToFloat(this.fanForm.controls.minBid.value);
    if (this.fanForm.invalid) {
      this.coreService.showToastMessage("Please enter valid details", this.coreService.TOAST_ERROR);
      return;
    }
    if (this.isSelectedAthleteValid()) {
      return;
    }
    this.createEventRequest = this.requestData;
    this.presentPaymentModal();
    let {
      selectedAthleteName,
      startDate,
      duration,
      eventAddress,
      time,
      ...signUpResponse
    } = this.fanForm.value;
    let request = {
      path: "core/event/create",
      data: {
        ...signUpResponse,
        startDate: this.eventStartTime,
        duration: this.totalFanDuration,
        athleteId: this.selectedAthleteId,
        eventType: this.fanEventType,
        eventAddress: this.fanEventType == "IN_PERSON" ? eventAddress : {}
      },
      isAuth: true
    };
    return request;
  }
  setDateValue(date) {
    if (!date) {
      return;
    }
    let dt = date.split("T")[0];
    let formattedDate = this.commonService.formatDateTimeUpdated(dt);
    if (this.userRole == "athlete") {
      this.athleteForm.controls.startDate.patchValue(formattedDate);
    } else {
      this.fanForm.controls.startDate.patchValue(formattedDate);
    }
    //let dt2 = new Date(date).toISOString();
    this.isoDate = date.split("T")[0];
    this.defaultDate = this.isoDate;
  }
  setTimeValue(time) {
    this.starttime = time;
    if (!time) {
      return;
    }
    var tm = time;
    let timedata = tm.split("T")[1];
    let hour = timedata.split(":")[0];
    let minute = timedata.split(":")[1];
    var AmOrPm = +hour >= 12 ? "pm" : "am";
    var o = +hour % 12 || 12;
    var startTime = o + ":" + minute + " " + AmOrPm;
    +":" + minute + " " + AmOrPm;
    if (this.userRole == "athlete") {
      this.athleteForm.controls.time.patchValue(startTime);
    } else {
      this.fanForm.controls.time.patchValue(startTime);
    }
    this.eventStartTime = this.isoDate + "T" + timedata;
  }
  getSelectedAthlete() {
    this.$athletes = this.fanForm.controls.selectedAthleteName.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(search => search.trim()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(value => {
      this.resetSelectedAthleteId(value);
      let request = {
        path: "auth/users/manage/filter/list",
        data: {
          filter: {
            roles: ["ATHLETE"],
            search: value
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
      this.coreService.presentLoader(this.constant.WAIT);
      return this.apiService.post(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
        this.coreService.dismissLoader();
        if (response.status.code == this.constant.STATUS_OK) {
          return response.data;
        } else {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
        }
      }));
    }));
  }
  selectedAthlete(athlete) {
    this.selectedAthleteId = athlete.id;
    this.selectedAthleteName = athlete.fullName;
  }
  isSelectedAthleteValid() {
    if (this.selectedAthleteId == "") {
      this.coreService.showToastMessage("Please select valid athlete", this.coreService.TOAST_ERROR);
      return true;
    }
    return false;
  }
  resetSelectedAthleteId(value) {
    if (value !== this.selectedAthleteName) {
      this.selectedAthleteId = "";
    }
  }
  patchTime(time) {
    this.selectduration = time;
    var timeParts = time.split(":");
    let hour = timeParts[0];
    let min = timeParts[1];
    if (hour.trim() === "00" && min.trim() === "00") {
      return;
    }
    if (this.userRole == "athlete") {
      if (hour == "00") {
        this.athleteForm.controls.duration.patchValue(`${min.trim()}m`);
      } else {
        this.athleteForm.controls.duration.patchValue(`${hour}h ${min.trim()}m`);
      }
      this.totalAthleteDuration = this.commonService.convertTimeToMinute(hour, min);
    } else {
      if (hour == "00") {
        this.fanForm.controls.duration.patchValue(`${min.trim()}m`);
      } else {
        this.fanForm.controls.duration.patchValue(`${hour}h ${min.trim()}m`);
      }
      this.totalFanDuration = this.commonService.convertTimeToMinute(hour, min);
    }
  }
  validAthleteInputBorder(formControlName) {
    if (this.athleteForm.controls[formControlName].invalid && this.isAthleteFormSubmitted) {
      return "error-input";
    } else {
      return "";
    }
  }
  validFanInputBorder(formControlName) {
    if (this.fanForm.controls[formControlName].invalid && this.isFanFormSubmitted) {
      return "error-input";
    } else {
      return "";
    }
  }
  validFanAddressInputBorder(formControlName) {
    if (this.fanForm.get("eventAddress").controls[formControlName].invalid && this.isFanFormSubmitted) {
      return "error-input";
    } else {
      return "";
    }
  }
  getInitials(name) {
    return this.commonService.getInitials(name);
  }
  setInputCurrency() {
    let bidAmount = null;
    if (this.userRole == "fan") {
      bidAmount = this.fanForm.controls.minBid.value;
    } else {
      bidAmount = this.athleteForm.controls.minBid.value;
    }
    if (!bidAmount) {
      return;
    }
    if (bidAmount.includes("$")) {
      bidAmount = bidAmount.replace("$", "");
    }
    if (bidAmount.includes(",")) {
      bidAmount = bidAmount.replace(",", "");
    }
    let convertedAmount = this.currencyPipe.transform(bidAmount, "$");
    if (this.userRole == "fan") {
      this.fanForm.controls.minBid.patchValue(convertedAmount);
    } else {
      this.athleteForm.controls.minBid.patchValue(convertedAmount);
    }
  }
  parseStringToFloat(bidAmount) {
    if (!bidAmount) {
      return;
    }
    if (bidAmount.includes("$")) {
      bidAmount = bidAmount.replace("$", "");
    }
    if (bidAmount.includes(",")) {
      bidAmount = bidAmount.replace(",", "");
    }
    return parseFloat(bidAmount);
  }
  presentPaymentModal() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__.PaymentComponent,
        cssClass: "client-filter-modal",
        componentProps: {
          isBiddingForEvent: false
        }
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (!data) {
        return;
      }
      _this4.createEventRequest = _this4.requestData;
      _this4.createEventRequest.data = {
        ..._this4.createEventRequest.data,
        ...data
      };
      _this4.createEventForFan();
    })();
  }
  createEventForFan() {
    // this.commonService.subscribe("payment Data", (data)=>{
    //   console.log(data,"ankita2");
    //   this.nonce=data.nonce
    //   this.paymentType=data.paymentType
    // })
    console.log(this.createEventRequest.data);
    if (this.paymentType == 'APPLE_PAYMENT') {
      this.createEventRequest['data']['nonce'] = this.nonce;
      this.createEventRequest['data']['paymentType'] = this.paymentType;
    }
    //   this.createEventRequest=this.data1;
    console.log("fannn", this.createEventRequest);
    this.coreService.presentLoader(this.constant.WAIT);
    this.apiService.post(this.createEventRequest).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constant.STATUS_OK) {
        if (this.paymentType == 'APPLE_PAYMENT') {
          _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_10__.ApplePay.completeLastPayment({
            status: 'success'
          }).then(res => {
            console.log("complete", res);
            this.router.navigate(["/tabs/schedule"]);
          });
        }
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  presentPopover(ev) {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this5.popoverController.create({
        component: _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_9__.PushNotificationPage,
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
  getNotificationCount() {
    let request = {
      path: "notification/notification/check/v2",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.badgeCount = response.data.unreadCount;
      return this.badgeCount;
    });
  }
  newPresentAppearanceBookingModal() {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalCtrl.create({
        component: _this6.newPresentAppearanceBookingModal,
        cssClass: "client-filter-modal"
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      if (!data) {
        return;
      }
    })();
  }
  redirectBackToHome() {
    this.onclick_cancel();
  }
  ngOnDestroy() {
    this.subscribeData.unsubscribe();
  }
};
NewBookingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.PopoverController
}];
NewBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-new-booking',
  template: _new_booking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe],
  styles: [(_new_booking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewBookingPage);


/***/ }),

/***/ 85099:
/*!********************************************************************************!*\
  !*** ./src/app/pages/push-notification/push-notification.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background:transparent;\n}\nion-content .notification-main {\n  padding: 5px;\n  padding-bottom: 1px;\n  background: var(--theme-one-clr);\n  border-radius: 10px;\n  overflow: auto;\n  max-height: calc(100vh - 110px);\n}\nion-content .notification-main .data-part {\n  margin-bottom: 5px;\n  background: var(--white-bg);\n  text-align: left;\n  padding: 15px 20px;\n  border-radius: 10px;\n}\nion-content .notification-main .data-part h5 {\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n  margin: 0 0 3px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\nion-content .notification-main .data-part p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .notification-main .data-part p span {\n  font-weight: 600;\n}\nion-content .notification-main .data-part p u {\n  text-decoration: underline;\n}\nion-content .notification-main .data-part ion-col {\n  margin: 0;\n  padding: 0;\n}\nion-content .notification-main .data-part .date-time {\n  text-align: right;\n  padding-left: 5px;\n}\nion-content .notification-main .data-part .date-time p {\n  font-size: 0.75rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n  opacity: 0.9;\n}\nion-content .notification-main .data-part .date-time p span {\n  font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/push-notification/push-notification.page.scss"],"names":[],"mappings":"AAAA;EAAY,wBAAA;AAEZ;AADI;EAAmB,YAAA;EAAc,mBAAA;EAC7B,gCAAA;EACA,mBAAA;EACA,cAAA;EACA,+BAAA;AAKR;AAJQ;EAAW,kBAAA;EACP,2BAAA;EAA6B,gBAAA;EAC7B,kBAAA;EACA,mBAAA;AAQZ;AAPY;EAAG,eAAA;EAAiB,2BAAA;EAA6B,eAAA;EAAiB,gBAAA;EAAkB,0BAAA;AAchG;AAbY;EAAE,mBAAA;EAAqB,wBAAA;EAA0B,SAAA;EAAW,gBAAA;AAmBxE;AAlBc;EAAK,gBAAA;AAqBnB;AApBc;EAAE,0BAAA;AAuBhB;AArBY;EAAQ,SAAA;EAAW,UAAA;AAyB/B;AAxBY;EAAW,iBAAA;EAAmB,iBAAA;AA4B1C;AA3Bc;EAAE,kBAAA;EAAoB,wBAAA;EAA0B,SAAA;EAAW,gBAAA;EAAkB,YAAA;AAkC3F;AAjCgB;EAAK,gBAAA;AAoCrB","sourcesContent":["ion-content {\n  --background:transparent;\n}\nion-content .notification-main {\n  padding: 5px;\n  padding-bottom: 1px;\n  background: var(--theme-one-clr);\n  border-radius: 10px;\n  overflow: auto;\n  max-height: calc(100vh - 110px);\n}\nion-content .notification-main .data-part {\n  margin-bottom: 5px;\n  background: var(--white-bg);\n  text-align: left;\n  padding: 15px 20px;\n  border-radius: 10px;\n}\nion-content .notification-main .data-part h5 {\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n  margin: 0 0 3px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\nion-content .notification-main .data-part p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .notification-main .data-part p span {\n  font-weight: 600;\n}\nion-content .notification-main .data-part p u {\n  text-decoration: underline;\n}\nion-content .notification-main .data-part ion-col {\n  margin: 0;\n  padding: 0;\n}\nion-content .notification-main .data-part .date-time {\n  text-align: right;\n  padding-left: 5px;\n}\nion-content .notification-main .data-part .date-time p {\n  font-size: 0.75rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n  opacity: 0.9;\n}\nion-content .notification-main .data-part .date-time p span {\n  font-weight: 600;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43416:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs/new-booking/new-booking.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9;\n  --background: -moz-radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%, #2099da 100%);\n  --background: -webkit-radial-gradient( 60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  --background: radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .tabs-design {\n  position: sticky;\n  top: 0;\n  z-index: 9;\n  border-radius: 50px;\n  padding: 0 15px;\n  margin-bottom: 15px;\n  left: 0;\n  background: transparent;\n  margin: 5px auto;\n  right: 0;\n  z-index: 9;\n}\nion-content .tabs-design ion-segment {\n  border-radius: 50px;\n}\nion-content .tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\nion-content .tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\nion-content .tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\nion-content .tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\nion-content .inner-content-new {\n  background: transparent;\n}\nion-content .inner-content-new .main-screen {\n  padding: 0 15px;\n}\nion-content .inner-content-new .main-screen .input-box {\n  padding: 2px 0 2px;\n}\nion-content .inner-content-new .main-screen .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: var(--white-bg);\n}\nion-content .inner-content-new .main-screen .input-box ion-item ion-label {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating .label-floating {\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  transform: translate3d(0, -12px, 0) !important;\n  z-index: 9999;\n  background: var(--white-bg);\n  --display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-content .inner-content-new .main-screen .input-box ion-item ion-input,\nion-content .inner-content-new .main-screen .input-box ion-item ion-textarea {\n  background-color: white;\n  margin-top: 0px;\n  color: var(--text-black);\n  --color: var(--text-black);\n  font-size: 0.875rem;\n  --placeholder-color: var(--text-gray);\n  --placeholder-opacity: 1;\n}\nion-content .inner-content-new .main-screen .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .inner-content-new .main-screen .input-box .transparent-input {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: none;\n  margin-top: 0px;\n  color: var(--text-black);\n  font-size: 0.875rem;\n  background-color: white;\n}\nion-content .inner-content-new .main-screen .input-box .transparent-input::placeholder {\n  color: var(--text-gray);\n  opacity: 1;\n}\nion-content .inner-content-new .main-screen .radio-btn {\n  position: sticky;\n  top: 0;\n  background: var(--white-bg);\n  z-index: 99;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main {\n  display: flex;\n  align-items: center;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data {\n  margin: 0 5px;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 26px;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color: var(--text-gray);\n  margin-right: 5px;\n}\nion-content .inner-content-new .main-screen .save-card {\n  padding: 5px;\n}\nion-content .inner-content-new .main-screen .save-card ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 15px;\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--white-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--white-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--white-clr);\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.75rem;\n  color: var(--text-black);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-label span {\n  font-weight: 800;\n  display: inline-block;\n  position: relative;\n  z-index: 9;\n  margin-left: 5px;\n  color: var(--white-clr);\n}\n\n.footer-btn {\n  text-align: center;\n  padding-bottom: 78px;\n  z-index: 3;\n  position: relative;\n}\n.footer-btn ion-button {\n  min-height: 50px;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.footer-btn ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.footer-btn ion-button.button-disabled {\n  opacity: 0.5;\n}\n.footer-btn .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n\n.bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.bg-bubble .dots-bubble {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.password-text {\n  padding: 5px 20px;\n}\n.password-text ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --background-activated: transparent;\n  --min-height: 17px;\n  margin-top: 1px;\n}\n.password-text ion-item img {\n  width: 17px;\n  margin: 0;\n  margin-right: 10px;\n}\n.password-text ion-item svg {\n  fill: var(--ion-color-success);\n  margin-right: 10px;\n}\n.password-text ion-item ion-label {\n  font-size: 0.8125rem;\n  color: var(--ion-color-success);\n  font-weight: 400;\n  margin: 3px 0;\n}\n.password-text ion-item.red-text ion-label {\n  color: var(--red-clr);\n}\n.password-text ion-item.red-text svg {\n  fill: var(--red-clr);\n}\n\n.hide-text {\n  display: none;\n}\n\n.dateModal {\n  --background: rgba(44, 39, 45, 0.2);\n}\n.dateModal::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.dateModal ion-content {\n  --background: transparent;\n}\n.dateModal ion-datetime {\n  border-radius: 8px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.dateModal ion-datetime .tile-font {\n  color: var(--theme-one-clr);\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.error-input {\n  border: 1px solid red !important;\n}\n\n.tandc-modal .ion-page ion-header ion-toolbar {\n  position: relative;\n}\n.tandc-modal .ion-page ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\n.tandc-modal .ion-page ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\n.tandc-modal .ion-page ion-content {\n  --background: #fff;\n}\n.tandc-modal .ion-page ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\n.tandc-modal .ion-page ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 25px !important;\n  height: 25px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  margin-right: 10px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/tabs/new-booking/new-booking.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9;\n  --background: -moz-radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%, #2099da 100%);\n  --background: -webkit-radial-gradient( 60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  --background: radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .tabs-design {\n  position: sticky;\n  top: 0;\n  z-index: 9;\n  border-radius: 50px;\n  padding: 0 15px;\n  margin-bottom: 15px;\n  left: 0;\n  background: transparent;\n  margin: 5px auto;\n  right: 0;\n  z-index: 9;\n}\nion-content .tabs-design ion-segment {\n  border-radius: 50px;\n}\nion-content .tabs-design ion-segment ion-segment-button {\n  margin: 0;\n  min-height: 47px;\n  --border-radius: 50px;\n  color: var(--black-clr);\n  --background: transparent;\n  background: transparent;\n  --border-width: 0px;\n}\nion-content .tabs-design ion-segment ion-segment-button ion-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\nion-content .tabs-design ion-segment ion-segment-button.segment-button-checked {\n  color: var(--theme-one-clr);\n  background: var(--white-clr);\n  --background: var(--white-clr);\n  --indicator-color: var(--white-clr);\n  --indicator-box-shadow: none;\n}\nion-content .tabs-design ion-segment ion-segment-button.segment-button-checked ion-label {\n  font-weight: 700;\n}\nion-content .inner-content-new {\n  background: transparent;\n}\nion-content .inner-content-new .main-screen {\n  padding: 0 15px;\n}\nion-content .inner-content-new .main-screen .input-box {\n  padding: 2px 0 2px;\n}\nion-content .inner-content-new .main-screen .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: var(--white-bg);\n}\nion-content .inner-content-new .main-screen .input-box ion-item ion-label {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating .label-floating {\n  -webkit-transform: translate3d(0, 13px, 0) !important;\n  transform: translate3d(0, 13px, 0) !important;\n}\nion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating.item-has-value .label-floating, ion-content .inner-content-new .main-screen .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  -webkit-transform: translate3d(0, -12px, 0) !important;\n  transform: translate3d(0, -12px, 0) !important;\n  z-index: 9999;\n  background: var(--white-bg);\n  --display: inline-block;\n  width: fit-content;\n}\nion-content .inner-content-new .main-screen .input-box ion-item ion-input,\nion-content .inner-content-new .main-screen .input-box ion-item ion-textarea {\n  background-color: white;\n  margin-top: 0px;\n  color: var(--text-black);\n  --color: var(--text-black);\n  font-size: 0.875rem;\n  --placeholder-color: var(--text-gray);\n  --placeholder-opacity: 1;\n}\nion-content .inner-content-new .main-screen .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .inner-content-new .main-screen .input-box .transparent-input {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: none;\n  margin-top: 0px;\n  color: var(--text-black);\n  font-size: 0.875rem;\n  background-color: white;\n}\nion-content .inner-content-new .main-screen .input-box .transparent-input::placeholder {\n  color: var(--text-gray);\n  opacity: 1;\n}\nion-content .inner-content-new .main-screen .radio-btn {\n  position: sticky;\n  top: 0;\n  background: var(--white-bg);\n  z-index: 99;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main {\n  display: flex;\n  align-items: center;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data {\n  margin: 0 5px;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 26px;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .inner-content-new .main-screen .radio-btn .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color: var(--text-gray);\n  margin-right: 5px;\n}\nion-content .inner-content-new .main-screen .save-card {\n  padding: 5px;\n}\nion-content .inner-content-new .main-screen .save-card ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 15px;\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--white-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--white-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--white-clr);\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.75rem;\n  color: var(--text-black);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .inner-content-new .main-screen .save-card ion-item ion-label span {\n  font-weight: 800;\n  display: inline-block;\n  position: relative;\n  z-index: 9;\n  margin-left: 5px;\n  color: var(--white-clr);\n}\n\n.footer-btn {\n  text-align: center;\n  padding-bottom: 78px;\n  z-index: 3;\n  position: relative;\n}\n.footer-btn ion-button {\n  min-height: 50px;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.footer-btn ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.footer-btn ion-button.button-disabled {\n  opacity: 0.5;\n}\n.footer-btn .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n\n.bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.bg-bubble .dots-bubble {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.password-text {\n  padding: 5px 20px;\n}\n.password-text ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --background-activated: transparent;\n  --min-height: 17px;\n  margin-top: 1px;\n}\n.password-text ion-item img {\n  width: 17px;\n  margin: 0;\n  margin-right: 10px;\n}\n.password-text ion-item svg {\n  fill: var(--ion-color-success);\n  margin-right: 10px;\n}\n.password-text ion-item ion-label {\n  font-size: 0.8125rem;\n  color: var(--ion-color-success);\n  font-weight: 400;\n  margin: 3px 0;\n}\n.password-text ion-item.red-text ion-label {\n  color: var(--red-clr);\n}\n.password-text ion-item.red-text svg {\n  fill: var(--red-clr);\n}\n\n.hide-text {\n  display: none;\n}\n\n.dateModal {\n  --background: rgba(44, 39, 45, 0.2);\n}\n.dateModal::part(content) {\n  backdrop-filter: blur(6px);\n}\n.dateModal ion-content {\n  --background: transparent;\n}\n.dateModal ion-datetime {\n  border-radius: 8px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n}\n.dateModal ion-datetime .tile-font {\n  color: var(--theme-one-clr);\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.error-input {\n  border: 1px solid red !important;\n}\n\n.tandc-modal .ion-page ion-header ion-toolbar {\n  position: relative;\n}\n.tandc-modal .ion-page ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\n.tandc-modal .ion-page ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\n.tandc-modal .ion-page ion-content {\n  --background: #fff;\n}\n.tandc-modal .ion-page ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\n.tandc-modal .ion-page ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 25px !important;\n  height: 25px !important;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  margin-right: 10px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 32863:
/*!********************************************************************************!*\
  !*** ./src/app/pages/push-notification/push-notification.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<!-- <ion-popover #popover [isOpen]=\"isOpen\" triggerAction=\"click\" mode=\"md\">\n  <ng-template> -->\n    <ion-content>\n      <div class=\"notification-main\" *ngIf=\"notificationContentData?.length !== 0\">\n        <div class=\"data-part\" *ngFor=\"let data of notificationContentData\">\n          <div (click)=\"viewedNotification(data.id)\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <h5>{{data.fullName}}</h5>\n              </ion-col>\n              <ion-col size=\"5\">\n                <div class=\"date-time\">\n                  <p>{{data.sentDate | date:\"MM/dd/yyyy  h:mma\"}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n            \n            \n            <p>{{data.title}}</p>\n            <p [innerText]=\"data.body\"></p>\n            \n          </div>\n        </div>\n        <!-- <div class=\"data-part\">\n          <h5>Casey Rodgers</h5>\n          <p>\n            “Let’s Get in Touch”, be ready for <u>Meet up</u> event with\n            <span>Casey Rodgers</span> will start in just 10 min.\n          </p>\n        </div> -->\n      </div>\n      <div class=\"notification-main\" *ngIf=\"notificationContentData?.length == 0\">\n        <div class=\"data-part\" >\n          <div>\n            <h5>No notifications found!</h5>\n          </div>\n        </div> \n      </div>\n    </ion-content>\n  <!-- </ng-template>\n</ion-popover> -->\n\n\n";

/***/ }),

/***/ 70354:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs/new-booking/new-booking.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <ion-content [scrollEvents]=\"true\">\n\n    <ion-grid class=\"top-card\">\n      <div class=\"title-part\">\n        <ion-item lines=\"none\" mode=\"md\">\n          <ion-icon\n          (click)=\"redirectBackToHome()\"\n            slot=\"start\"\n            name=\"arrow-back-outline\" mode=\"md\"\n          ></ion-icon>\n          <ion-label>\n            <ion-grid class=\"logo-head\">\n              <img src=\"assets/images/single-logo.svg\" />\n              <div class=\"nil4all\">\n                <span>#NIL4ALL</span>\n              </div>\n            </ion-grid>\n          </ion-label>\n          <div class=\"notification\" slot=\"end\"   (click)=\"presentPopover($event)\">\n            <img src=\"assets/icon/notification.svg\" />\n            <span *ngIf=\"this.badgeCount != 0\">\n              <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n              <i *ngIf=\"this.badgeCount > 99\">99+</i>\n            </span>\n          </div>\n        </ion-item>\n      </div>\n    </ion-grid>\n\n    <!-- <ion-grid class=\"tabs-design\">\n      <ion-segment\n        [(ngModel)]=\"this.fanEventType\"\n        (ngModelChange)=\"getAppearanceData()\"\n        mode=\"ios\"\n      >\n        <ion-segment-button value=\"VIDEO\">\n          <ion-label>Video {{this.fanEventType}}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"IN_PERSON\">\n          <ion-label>in-person{{userRole}}</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-grid> -->\n\n\n    <div *ngIf=\"userRole == 'athlete'\" class=\"inner-content-new\">\n      <div class=\"main-screen\">\n        <ion-grid class=\"tabs-design\">\n          <ion-segment\n          [(ngModel)]=\"fanEventType\"\n            (ngModelChange)=\"getAppearanceData()\"\n            mode=\"ios\"\n          >\n            <ion-segment-button value=\"VIDEO\">\n              <ion-label>Video</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-grid>\n        <ion-row [formGroup]=\"athleteForm\">\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                id=\"open-modal\"\n                [ngClass]=\"validAthleteInputBorder('startDate')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  formControlName=\"startDate\"\n                  placeholder=\"Select Date\"\n                  displayFormat=\"MM/DD/YYYY\" \n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/calendar.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"open-modal\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                      locale=\"en-US\"\n                      mode=\"ios\"\n                      #dateTime\n                      [showDefaultButtons]=\"true\"\n                      [min]=\"currentDate\"\n                      (ionChange)=\"setDateValue(dateTime.value)\"\n                      displayFormat=\"MM/DD/YYYY\"\n                      presentation=\"date\" \n                      [value] = \"defaultDate\"\n                      [max] =\"maxData\"\n                      prefer-wheel=\"true\" \n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select start date</span></ion-datetime\n                    >\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-col>\n  \n  \n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n              id=\"date-time1\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                displayFormat=\"h:mm a\"\n                 placeholder=\"Select Time\"\n                 formControlName=\"time\"\n                ></ion-input>\n              \n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/duration.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"date-time1\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                      displayFormat=\"hh:mm A\"\n                      mode=\"ios\"\n                      #dateTime1\n                      [showDefaultButtons]=\"true\"\n                      presentation=\"time\"\n                      (ionChange)=\"setTimeValue(dateTime1.value)\"\n                      [value] = \"starttime\"\n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select time</span></ion-datetime\n                    >\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-col>\n  \n  \n  \n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                id=\"date-time\"\n                [ngClass]=\"validAthleteInputBorder('duration')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  formControlName=\"duration\"\n                  placeholder=\"Duration\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/duration.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"date-time\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                      mode=\"ios\"\n                      presentation=\"time\"\n                      hourCycle=\"h23\"\n                      #dateTime\n                      [showDefaultButtons]=\"true\"\n                      [value]=\"selectduration\"\n                      (ionChange)=\"patchTime(dateTime.value)\"\n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select duration</span></ion-datetime\n                    >\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                [ngClass]=\"validAthleteInputBorder('eventName')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  formControlName=\"eventName\"\n                  placeholder=\"Event Name\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/event-name.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                [ngClass]=\"validAthleteInputBorder('minBid')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  appConverStringToInt\n                  inputmode=\"numeric\"\n                  (keypress)=\"numberOnly($event)\"\n                  (ionBlur)=\"setInputCurrency()\"\n                  formControlName=\"minBid\"\n                  placeholder=\"Minimum Bid\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/dolor.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ng-container *ngIf=\"fanEventType == 'IN_PERSON'\">\n            <ion-row formGroupName=\"eventAddress\">\n              <ion-col size=\"12\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('addressLine1')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-textarea\n                      formControlName=\"addressLine1\"\n                      placeholder=\"Address\"\n                    ></ion-textarea>\n                    <img\n                      class=\"ion-align-items-center\"\n                      slot=\"end\"\n                      src=\"assets/icon/location.svg\"\n                    />\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('state')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      formControlName=\"state\"\n                      placeholder=\"State\"\n                    ></ion-input>\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"input-box\">\n                  <ion-item\n                    inputmode=\"\"\n                    [ngClass]=\"validFanAddressInputBorder('city')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      formControlName=\"city\"\n                      placeholder=\"City\"\n                    ></ion-input>\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('zipCode')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      maxlength=\"5\"\n                      type=\"number\"\n                      formControlName=\"zipCode\"\n                      placeholder=\"Zip Code\"\n                    ></ion-input>\n                    <img\n                      class=\"ion-align-items-center\"\n                      slot=\"end\"\n                      src=\"assets/icon/location.svg\"\n                    />\n                  </ion-item>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-textarea\n                  formControlName=\"description\"\n                  placeholder=\"Message For Fans\"\n                ></ion-textarea>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/chat-black.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"save-card\">\n          <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label\n              >Accept<span (click)=\"presentTermsAndConditions()\"\n                >Terms & Conditions</span\n              ></ion-label\n            >\n            <ion-checkbox\n              [(ngModel)]=\"isTermsAndConditionAccepted\"\n              slot=\"start\"\n              mode=\"ios\"\n            ></ion-checkbox>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div *ngIf=\"userRole == 'fan'\" class=\"inner-content-new\">\n      <div class=\"main-screen\">\n        <ion-grid class=\"tabs-design\">\n          <ion-segment\n            [(ngModel)]=\"this.fanEventType\"\n            (ngModelChange)=\"getAppearanceData()\"\n            mode=\"ios\"\n          >\n            <ion-segment-button value=\"VIDEO\">\n              <ion-label>Video</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"IN_PERSON\">\n              <ion-label>In-person</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-grid>\n        <ion-row [formGroup]=\"fanForm\">\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                id=\"open-date\"\n                [ngClass]=\"validFanInputBorder('startDate')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  formControlName=\"startDate\"\n                  placeholder=\"Select Date\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/calendar.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"open-date\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                      locale=\"en-US\"\n                      mode=\"ios\"\n                      #dateTime\n                      [showDefaultButtons]=\"true\"\n                      [min]=\"currentDate\"\n                      (ionChange)=\"setDateValue(dateTime.value)\"\n                      displayFormat=\"MM/DD/YYYY\"\n                      presentation=\"date\" \n                      [value] = \"defaultDate\"\n                      [max] =\"maxData\"\n                      prefer-wheel=\"true\" \n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select start date</span></ion-datetime\n                    >\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-col>\n  \n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n              id=\"date-time\"\n                [ngClass]=\"validFanInputBorder('time')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                formControlName=\"time\"\n                displayFormat=\"h:mm a\"\n                placeholder=\"Select Time\"\n                format\n                ></ion-input>\n              \n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/duration.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"date-time\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                    displayFormat=\"hh:mm A\"\n                      mode=\"ios\"\n                      #dateTime\n                      [showDefaultButtons]=\"true\"\n                      presentation=\"time\"\n                      (ionChange)=\"setTimeValue(dateTime.value)\"\n                       [value] = \"starttime\"\n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select time</span></ion-datetime\n                    >\n                \n                  </ion-content>\n                </ng-template>\n  \n                \n              </ion-modal>\n  \n            </div>\n          </ion-col>\n  \n  \n  \n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                id=\"duration\"\n                [ngClass]=\"validFanInputBorder('duration')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  [disabled]=\"fanEventType == 'VIDEO'\"\n                  formControlName=\"duration\"\n                  placeholder=\"Duration\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/duration.svg\"\n                />\n              </ion-item>\n              <ion-modal class=\"dateModal\" trigger=\"duration\" mode=\"ios\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime\n                      mode=\"ios\"\n                      presentation=\"time\"\n                      hourCycle=\"h23\"\n                      #dateTime\n                      [showDefaultButtons]=\"true\"\n                      [value]=\"selectduration\"\n                      (ionChange)=\"patchTime(dateTime.value)\"\n                    >\n                      <span slot=\"title\" class=\"tile-font\">Select duration</span></ion-datetime\n                    >\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                [ngClass]=\"validFanInputBorder('eventName')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  formControlName=\"eventName\"\n                  placeholder=\"Event Name\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/event-name.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                [ngClass]=\"validFanInputBorder('selectedAthleteName')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n                mode=\"md\"\n              >\n                <input\n                  matInput\n                  [matAutocomplete]=\"auto\"\n                  formControlName=\"selectedAthleteName\"\n                  placeholder=\"Select Athlete\"\n                  class=\"transparent-input\"\n                />\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/arrow-down.svg\"\n                />\n              </ion-item>\n              <mat-autocomplete\n                #auto=\"matAutocomplete\"\n                class=\"custom-class\"\n                mode=\"md\"\n              >\n                <mat-option\n                  (click)=\"selectedAthlete(option)\"\n                  *ngFor=\"let option of $athletes | async\"\n                  [value]=\"option.fullName\"\n                >\n                  <div class=\"list-data\">\n                    <!-- <ion-list> -->\n                    <ion-item lines=\"none\">\n                      <img\n                        slot=\"start\"\n                        *ngIf=\" option.profileUrl !==''\"\n                        [src]=\"option.profileUrl | profile\"\n                      />\n                      <div *ngIf=\"option?.profileUrl ==''\" class=\"inital\">\n                        <span class=\"initial__span\">\n                          {{getInitials(option.fullName) | titlecase }}\n                        </span>\n                      </div>\n                      <ion-label>\n                        <h5>{{option.fullName }}</h5>\n                      </ion-label>\n                    </ion-item>\n                    <!-- </ion-list> -->\n                  </div>\n                </mat-option>\n              </mat-autocomplete>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item\n                [ngClass]=\"validFanInputBorder('minBid')\"\n                lines=\"none\"\n                class=\"ion-align-items-center\"\n              >\n                <ion-input\n                  appConverStringToInt\n                  (keypress)=\"numberOnly($event)\"\n                  (ionBlur)=\"setInputCurrency()\"\n                  formControlName=\"minBid\"\n                  inputmode=\"numeric\"\n                  placeholder=\"Offer Amount ($)\"\n                ></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/dolor.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ng-container *ngIf=\"fanEventType == 'IN_PERSON'\">\n            <ion-row formGroupName=\"eventAddress\">\n              <ion-col size=\"12\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('addressLine1')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-textarea\n                      formControlName=\"addressLine1\"\n                      placeholder=\"Address\"\n                    ></ion-textarea>\n                    <img\n                      class=\"ion-align-items-center\"\n                      slot=\"end\"\n                      src=\"assets/icon/location.svg\"\n                    />\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('state')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      formControlName=\"state\"\n                      placeholder=\"State\"\n                    ></ion-input>\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"input-box\">\n                  <ion-item\n                    inputmode=\"\"\n                    [ngClass]=\"validFanAddressInputBorder('city')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      formControlName=\"city\"\n                      placeholder=\"City\"\n                    ></ion-input>\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class=\"input-box\">\n                  <ion-item\n                    [ngClass]=\"validFanAddressInputBorder('zipCode')\"\n                    lines=\"none\"\n                    class=\"ion-align-items-center\"\n                  >\n                    <ion-input\n                      maxlength=\"5\"\n                      type=\"number\"\n                      formControlName=\"zipCode\"\n                      placeholder=\"Zip Code\"\n                    ></ion-input>\n                    <img\n                      class=\"ion-align-items-center\"\n                      slot=\"end\"\n                      src=\"assets/icon/location.svg\"\n                    />\n                  </ion-item>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n          <ion-col *ngIf=\"fanEventType === 'VIDEO'\" size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-textarea\n                  formControlName=\"description\"\n                  placeholder=\"Event Description\"\n                ></ion-textarea>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/chat-black.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n  \n        <div class=\"save-card\">\n          <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label\n              >Accept<span (click)=\"presentTermsAndConditions()\"\n                >Terms & Conditions</span\n              ></ion-label\n            >\n            <ion-checkbox\n              [(ngModel)]=\"isTermsAndConditionAccepted\"\n              slot=\"start\"\n              mode=\"ios\"\n            ></ion-checkbox>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footer-btn\">\n      <ion-button class=\"white-btn\" (click)=\"onclick_cancel()\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button\n        [disabled]=\"!isTermsAndConditionAccepted\"\n        (click)=\"onSubmit()\"\n        class=\"white-btn\"\n      >\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </div>\n    \n\n\n    <ion-grid class=\"bg-bubble\">\n      <div class=\"dots-bubble\">\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n      </div>\n    </ion-grid>\n  </ion-content>\n\n  <!-- <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      \n      <div class=\"nil4all\">\n        <span>#NIL4ALL</span>\n      </div>\n    </ion-toolbar>\n  </ion-footer> -->\n\n\n\n\n<!-- </ion-grid> -->\n\n<!-- <ion-grid class=\"logo-bg\">\n  <img src=\"assets/icon/logo-bg.png\" />\n  <span>Work in progress</span>\n</ion-grid>\n</ion-content> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_new-booking_new-booking_module_ts.js.map