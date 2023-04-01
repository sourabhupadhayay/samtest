(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_push-notification_push-notification_page_ts-src_app_pages_schedule_canc-8b4b97"],{

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

/***/ 83258:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelMessageModalComponent": () => (/* binding */ CancelMessageModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cancel_message_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-message-modal.component.html?ngResource */ 84405);
/* harmony import */ var _cancel_message_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-message-modal.component.scss?ngResource */ 73854);
/* harmony import */ var _cancel_message_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cancel_message_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);






let CancelMessageModalComponent = class CancelMessageModalComponent {
  constructor(modalCtrl, coreService, navParams) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.navParams = navParams;
    this.eventState = this.navParams.get("eventState");
  }
  ngOnInit() {}
  onSubmit() {
    if (!this.cancelMessage) {
      this.coreService.showToastMessage("Please enter refusal reason", this.coreService.TOAST_ERROR);
      return;
    }
    this.modalCtrl.dismiss(this.cancelMessage);
  }
};
CancelMessageModalComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_2__.CoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
}];
CancelMessageModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-cancel-message-modal",
  template: _cancel_message_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cancel_message_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CancelMessageModalComponent);


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

/***/ 19940:
/*!***************************************************************!*\
  !*** ./src/app/pages/schedule/meet-otp/meet-otp.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetOtpComponent": () => (/* binding */ MeetOtpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _meet_otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meet-otp.component.html?ngResource */ 42489);
/* harmony import */ var _meet_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meet-otp.component.scss?ngResource */ 56133);
/* harmony import */ var _meet_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_meet_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);









let MeetOtpComponent = class MeetOtpComponent {
  constructor(modalCtrl, navParams, apiService, coreService, constantService) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.apiService = apiService;
    this.coreService = coreService;
    this.constantService = constantService;
    this.userRole = this.navParams.get("userRole");
    this.eventName = this.navParams.get("eventName");
    this.eventId = this.navParams.get("eventId");
    this.athleteName = this.navParams.get("athleteName");
    this.fanName = this.navParams.get("fanName");
    this.otpFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]);
    this.otpInputConfig = {
      length: 6,
      inputClass: "otpInput",
      containerClass: "optInputContainer",
      placeholder: "-",
      allowNumbersOnly: true,
      disableAutoFocus: false
    };
  }
  ngOnInit() {
    if (this.userRole == "fan") {
      this.getOtp();
    }
    console.log(this.athleteName);
  }
  getOtp() {
    let request = {
      path: "core/event/getOtp/" + this.eventId,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.otp = response.data;
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  verifyOtp() {
    if (this.validateOtp()) return;
    let request = {
      path: `core/event/otp/verify/${this.otpFormControl.value}?eventId=${this.eventId}`,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        this.modalCtrl.dismiss();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  validateOtp() {
    if (this.otpFormControl.invalid) {
      this.coreService.showToastMessage("Please enter valid otp", this.coreService.TOAST_ERROR);
      return true;
    }
  }
};
MeetOtpComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__.ConstantService
}];
MeetOtpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-meet-otp",
  template: _meet_otp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_meet_otp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MeetOtpComponent);


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

/***/ 73854:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen textarea {\n  border: 1px solid #bbbbbb;\n  width: 100%;\n  background-color: var(--white-bg);\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n  height: 5rem;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component.scss"],"names":[],"mappings":"AACE;EACE,cAAA;AAAJ;AAEE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAAJ;AAEI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAAN;AAGI;EACE,aAAA;AADN;AAIE;EACE,6BAAA;AAFJ;AAGI;EACE,eAAA;EACA,kBAAA;AADN;AAEM;EACE,yBAAA;EACA,WAAA;EACA,iCAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;EACA,YAAA;AAAR;AAKE;EACE,2BAAA;AAHJ;AAII;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAFN;AAGM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AADR;AAEQ;EACE,WAAA;EACA,YAAA;AAAV;AAEQ;EACE,YAAA;AAAV","sourcesContent":[".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen textarea {\n  border: 1px solid #bbbbbb;\n  width: 100%;\n  background-color: var(--white-bg);\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n  height: 5rem;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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

/***/ 56133:
/*!****************************************************************************!*\
  !*** ./src/app/pages/schedule/meet-otp/meet-otp.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal .inner-content .main-screen p span {\n  font-weight: 700;\n}\n.small-modal .inner-content .main-screen .otp-fan {\n  color: var(--ion-color-primary);\n  font-size: 1.625rem;\n  font-weight: 700;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.meet-up__otp {\n  margin: 1rem 0;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/schedule/meet-otp/meet-otp.component.scss"],"names":[],"mappings":"AACE;EACE,cAAA;AAAJ;AAEE;EACE,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAAJ;AAEI;EACE,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAAN;AAGI;EACE,aAAA;AADN;AAIE;EACE,6BAAA;AAFJ;AAGI;EACE,eAAA;EACA,kBAAA;AADN;AAEM;EACE,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;AAAR;AACQ;EACE,gBAAA;AACV;AAEM;EACE,+BAAA;EACA,mBAAA;EACA,gBAAA;AAAR;AAKE;EACE,2BAAA;AAHJ;AAII;EACE,iBAAA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;AAFN;AAGM;EACE,yBAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AADR;AAEQ;EACE,WAAA;EACA,YAAA;AAAV;AAEQ;EACE,YAAA;AAAV;;AAMA;EACE,cAAA;AAHF","sourcesContent":[".small-modal .modal-wrapper {\n  max-width: 70%;\n}\n.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\n.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\n.small-modal ion-header::after {\n  display: none;\n}\n.small-modal .inner-content {\n  --background: var(--white-bg);\n}\n.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\n.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\n.small-modal .inner-content .main-screen p span {\n  font-weight: 700;\n}\n.small-modal .inner-content .main-screen .otp-fan {\n  color: var(--ion-color-primary);\n  font-size: 1.625rem;\n  font-weight: 700;\n}\n.small-modal ion-footer {\n  background: var(--white-bg);\n}\n.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.meet-up__otp {\n  margin: 1rem 0;\n}"],"sourceRoot":""}]);
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

/***/ 84405:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>{{ eventState == 'APPROVED' ? 'Cancellation': 'Refusal' }} Reason</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <textarea [(ngModel)]=\"cancelMessage\" name=\"\" id=\"\"></textarea>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"onSubmit()\" class=\"white-btn\">\n        <img src=\"assets/images/send-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 30136:
/*!************************************************************************************!*\
  !*** ./src/app/pages/schedule/dismissmodal/dismissmodal.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Cancel Confirmation</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>Are you sure, you want to cancel appearance?</p>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss(false)\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\"modalCtrl.dismiss(true)\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 42489:
/*!****************************************************************************!*\
  !*** ./src/app/pages/schedule/meet-otp/meet-otp.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"userRole == 'fan'\" class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Authentication Code</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>\n        Authentication code to share only with\n        <span>{{athleteName | titlecase}}</span> for <span>{{eventName}}</span>.\n      </p>\n      <h6 *ngIf=\"otp\" class=\"otp-fan\">\n        {{otp}}\n      </h6>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss()\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\"modalCtrl.dismiss()\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n<div *ngIf=\"userRole !== 'fan'\" class=\"small-modal\">\n  <ion-header mode=\"md\">\n    <h3>Authentication Code</h3>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <p>\n        Collect & enter Your authentication code from\n        <span>{{fanName | titlecase}}</span> for Approval of\n        <span>{{eventName}}</span>.\n      </p>\n      <div class=\"meet-up__otp\">\n        <ng-otp-input\n          [formCtrl]=\"otpFormControl\"\n          [config]=\"otpInputConfig\"\n        ></ng-otp-input>\n      </div>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\">\n    <ion-toolbar mode=\"ios\">\n      <ion-button (click)=\"modalCtrl.dismiss()\" class=\"white-btn\">\n        <img src=\"assets/icon/close-icon.png\" />\n      </ion-button>\n      <ion-button (click)=\" verifyOtp()\" class=\"white-btn\">\n        <img src=\"assets/icon/right-icon.png\" />\n      </ion-button>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_push-notification_push-notification_page_ts-src_app_pages_schedule_canc-8b4b97.js.map