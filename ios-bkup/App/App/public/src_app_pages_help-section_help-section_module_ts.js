(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_help-section_help-section_module_ts"],{

/***/ 82889:
/*!*******************************************************************!*\
  !*** ./src/app/pages/help-section/help-section-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpSectionPageRoutingModule": () => (/* binding */ HelpSectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _help_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-section.page */ 45655);




const routes = [{
  path: '',
  component: _help_section_page__WEBPACK_IMPORTED_MODULE_0__.HelpSectionPage
}];
let HelpSectionPageRoutingModule = class HelpSectionPageRoutingModule {};
HelpSectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HelpSectionPageRoutingModule);


/***/ }),

/***/ 56537:
/*!***********************************************************!*\
  !*** ./src/app/pages/help-section/help-section.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpSectionPageModule": () => (/* binding */ HelpSectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _help_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-section-routing.module */ 82889);
/* harmony import */ var _help_section_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-section.page */ 45655);







let HelpSectionPageModule = class HelpSectionPageModule {};
HelpSectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _help_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpSectionPageRoutingModule],
  declarations: [_help_section_page__WEBPACK_IMPORTED_MODULE_1__.HelpSectionPage]
})], HelpSectionPageModule);


/***/ }),

/***/ 45655:
/*!*********************************************************!*\
  !*** ./src/app/pages/help-section/help-section.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpSectionPage": () => (/* binding */ HelpSectionPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _help_section_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-section.page.html?ngResource */ 27459);
/* harmony import */ var _help_section_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-section.page.scss?ngResource */ 63366);
/* harmony import */ var _help_section_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_help_section_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../push-notification/push-notification.page */ 30493);












let HelpSectionPage = class HelpSectionPage {
  constructor(apiService, popoverController, coreService, constant, commonService, modal) {
    this.apiService = apiService;
    this.popoverController = popoverController;
    this.coreService = coreService;
    this.constant = constant;
    this.commonService = commonService;
    this.modal = modal;
    this.badgeCount = 0;
    this.feedbackMsg = '';
    this.isModalOpen = false;
  }
  ngOnInit() {
    this.getNotificationCount();
    this.getUserDataFromStorage();
    this.getFAQList();
  }
  ionViewWillEnter() {
    this.getNotificationCount();
  }
  getUserDataFromStorage() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
        key: "userDetails"
      });
      _this.loggedInUserData = JSON.parse(value);
      _this.currentUserRole = _this.commonService.getUserType(_this.loggedInUserData.roles);
    })();
  }
  presentPopover(ev) {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this2.popoverController.create({
        component: _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_8__.PushNotificationPage,
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
  submitFeedBack() {
    if (this.feedbackMsg == '') {
      this.coreService.showToastMessage("Please enter feedback!", this.coreService.TOAST_ERROR);
      return;
    } else {
      let request = {
        path: "core/contact/submit",
        data: {
          "email": this.loggedInUserData?.email,
          "fullName": this.loggedInUserData?.fullName,
          "message": this.feedbackMsg,
          "role": this.currentUserRole
        },
        isAuth: false
      };
      this.coreService.presentLoader(this.constant.WAIT);
      this.apiService.post(request).subscribe(response => {
        this.coreService.dismissLoader();
        if (response.status.code == this.constant.STATUS_OK) {
          this.feedbackMsg = '';
          this.isModalOpen = false;
          this.modal.dismiss();
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_SUCCESS);
        } else {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
        }
      });
    }
  }
  getFAQList() {
    let request = {
      path: "auth/faq",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.faqList = response?.data;
    });
  }
};
HelpSectionPage.ctorParameters = () => [{
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_6__.CoreService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];
HelpSectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-help-section',
  template: _help_section_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_help_section_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HelpSectionPage);


/***/ }),

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

/***/ 63366:
/*!**********************************************************************!*\
  !*** ./src/app/pages/help-section/help-section.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%,#2099da 100%);\n  --background: -webkit-radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  --background: radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .faq-main {\n  padding: 15px 15px;\n  height: 100%;\n  max-height: calc(100% - 180px);\n  position: relative;\n  z-index: 3;\n}\nion-content .faq-main .faq-card {\n  background: var(--white-bg);\n  border-radius: 15px;\n  padding: 0px 0px;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  overflow: auto;\n}\nion-content .faq-main .faq-card .faq-header {\n  padding: 15px 0 5px;\n  text-align: center;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background: var(--white-bg);\n  margin-bottom: 20px;\n}\nion-content .faq-main .faq-card .faq-header h3 {\n  font-weight: 700;\n  margin: 0;\n  color: var(--black-clr);\n  font-size: 1.875rem;\n  text-transform: uppercase;\n}\nion-content .faq-main .faq-card .faq-data {\n  flex-grow: 1;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion {\n  padding: 0 15px;\n  background: transparent;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item {\n  --padding-start:0px;\n  --inner-padding-end:0px;\n  --border-color:#E8E8E8;\n  --background:transparent;\n  --background-activated:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item ion-icon {\n  margin: 0;\n  --color: var(--text-gray);\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item .ion-accordion-toggle-icon {\n  margin: 0;\n  --color: var(--text-gray);\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion .ans-data {\n  padding-bottom: 20px;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion .ans-data p {\n  margin: 0;\n  padding: 0;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 400;\n  line-height: 20px;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion.accordion-expanded {\n  background: #E9F7FF;\n}\nion-content .faq-main .faq-card .contect-btn {\n  padding: 5px 15px;\n  position: sticky;\n  bottom: 0;\n  background: #fff;\n}\nion-content .faq-main .faq-card .contect-btn ion-button {\n  width: 100%;\n  --background: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover:var(--theme-one-bg);\n  --color:var(--white-clr);\n  --border-radius: 10px;\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n}\nion-content .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\nion-content .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.contact-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.contact-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.contact-modal ion-header::after {\n  display: none;\n}\nion-modal.contact-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.contact-modal .inner-content .main-screen {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-modal.contact-modal .inner-content .main-screen ion-item {\n  --padding-start:0;\n  --inner-padding-end:0;\n}\nion-modal.contact-modal .inner-content .main-screen ion-item ion-textarea {\n  background: #F5F5F5;\n  border-radius: 8px;\n  padding: 5px;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  --padding-start:10px;\n}\nion-modal.contact-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.contact-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  font-size: 0.975rem;\n  font-weight: 600;\n  width: 48%;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.send-btn {\n  --background: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --box-shadow: none;\n  --color:var(--white-clr);\n  color: var(--white-clr);\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.cancel-btn {\n  color: var(--text-gray);\n  --color: var(--text-gray) ;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/help-section/help-section.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%,#2099da 100%);\n  --background: -webkit-radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  --background: radial-gradient(60.17% 29.84% at 50% 50%,#6bbde9 0%,#2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  padding: 35px 0 5px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  background: var(--theme-one-bg);\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .faq-main {\n  padding: 15px 15px;\n  height: 100%;\n  max-height: calc(100% - 180px);\n  position: relative;\n  z-index: 3;\n}\nion-content .faq-main .faq-card {\n  background: var(--white-bg);\n  border-radius: 15px;\n  padding: 0px 0px;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  overflow: auto;\n}\nion-content .faq-main .faq-card .faq-header {\n  padding: 15px 0 5px;\n  text-align: center;\n  position: sticky;\n  top: 0px;\n  z-index: 9;\n  background: var(--white-bg);\n  margin-bottom: 20px;\n}\nion-content .faq-main .faq-card .faq-header h3 {\n  font-weight: 700;\n  margin: 0;\n  color: var(--black-clr);\n  font-size: 1.875rem;\n  text-transform: uppercase;\n}\nion-content .faq-main .faq-card .faq-data {\n  flex-grow: 1;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion {\n  padding: 0 15px;\n  background: transparent;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item {\n  --padding-start:0px;\n  --inner-padding-end:0px;\n  --border-color:#E8E8E8;\n  --background:transparent;\n  --background-activated:transparent;\n  --background-focused:transparent;\n  --background-hover:transparent;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item ion-icon {\n  margin: 0;\n  --color: var(--text-gray);\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion ion-item .ion-accordion-toggle-icon {\n  margin: 0;\n  --color: var(--text-gray);\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion .ans-data {\n  padding-bottom: 20px;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion .ans-data p {\n  margin: 0;\n  padding: 0;\n  font-size: 0.75rem;\n  color: var(--light-gray);\n  font-weight: 400;\n  line-height: 20px;\n}\nion-content .faq-main .faq-card .faq-data ion-accordion-group ion-accordion.accordion-expanded {\n  background: #E9F7FF;\n}\nion-content .faq-main .faq-card .contect-btn {\n  padding: 5px 15px;\n  position: sticky;\n  bottom: 0;\n  background: #fff;\n}\nion-content .faq-main .faq-card .contect-btn ion-button {\n  width: 100%;\n  --background: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover:var(--theme-one-bg);\n  --color:var(--white-clr);\n  --border-radius: 10px;\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n}\nion-content .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\nion-content .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.contact-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.contact-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.contact-modal ion-header::after {\n  display: none;\n}\nion-modal.contact-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.contact-modal .inner-content .main-screen {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-modal.contact-modal .inner-content .main-screen ion-item {\n  --padding-start:0;\n  --inner-padding-end:0;\n}\nion-modal.contact-modal .inner-content .main-screen ion-item ion-textarea {\n  background: #F5F5F5;\n  border-radius: 8px;\n  padding: 5px;\n  font-size: 0.875rem;\n  color: var(--text-black);\n  --padding-start:10px;\n}\nion-modal.contact-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.contact-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  font-size: 0.975rem;\n  font-weight: 600;\n  width: 48%;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.send-btn {\n  --background: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --box-shadow: none;\n  --color:var(--white-clr);\n  color: var(--white-clr);\n}\nion-modal.contact-modal ion-footer ion-toolbar ion-button.cancel-btn {\n  color: var(--text-gray);\n  --color: var(--text-gray) ;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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

/***/ 27459:
/*!**********************************************************************!*\
  !*** ./src/app/pages/help-section/help-section.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [scrollEvents]=\"true\">\n  <!-- <ion-header>\n    <ion-toolbar>\n      <img src=\"assets/images/single-logo.svg\" />\n      <div class=\"notification\" slot=\"end\" (click)=\"presentPopover($event)\">\n        <img src=\"assets/icon/notification.svg\" >\n        <span>\n          <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n          <i *ngIf=\"this.badgeCount > 99\">99+</i>\n        </span>\n      </div>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-grid class=\"top-card\">\n    <div class=\"title-part\">\n      <ion-item lines=\"none\" mode=\"md\">\n        <ion-icon\n          routerLink=\"/tabs/home\"\n          slot=\"start\"\n          name=\"arrow-back-outline\" mode=\"md\"\n        ></ion-icon>\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n        <div class=\"notification\" slot=\"end\"   (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"faq-main\">\n      <div class=\"faq-card\">\n          <div class=\"faq-header\">\n              <h3>FAQ</h3>\n          </div>\n          <div class=\"faq-data\">\n            <ion-accordion-group>\n              <ion-accordion *ngFor=\"let faq of faqList; let index = index\" value=\"{{faq?.id}}\">\n                <ion-item slot=\"header\">\n                  <ion-label>{{faq?.question}}</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p [innerHTML]=\"faq?.answer\" class=\"backtransperent\">{{faq?.answer}}</p>\n                </div>\n              </ion-accordion>\n              <!-- <ion-accordion value=\"second\">\n                <ion-item slot=\"header\">\n                  <ion-label>How to bid for event?</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p>Lorem ipsum dolor sit amet consectetur. Aliquam\n                    integer tortor arcu lectus a lacus amet magna.\n                    Lorem sagittis ut risus tortor a cursus morbi.\n                    Sagittis proin in risus neque volutpat pellentesque\n                    purus lectus velit. Cursus mollis eu morbi viverra\n                    nulla turpis.</p>\n                </div>\n              </ion-accordion>\n              <ion-accordion value=\"third\">\n                <ion-item slot=\"header\">\n                  <ion-label>How to invite athletes personally?</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p>Lorem ipsum dolor sit amet consectetur. Aliquam\n                    integer tortor arcu lectus a lacus amet magna.\n                    Lorem sagittis ut risus tortor a cursus morbi.\n                    Sagittis proin in risus neque volutpat pellentesque\n                    purus lectus velit. Cursus mollis eu morbi viverra\n                    nulla turpis.</p>\n                </div>\n              </ion-accordion>\n              <ion-accordion value=\"fore\">\n                <ion-item slot=\"header\">\n                  <ion-label>What are the charges to talk for a favorite Athletes?</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p>Lorem ipsum dolor sit amet consectetur. Aliquam\n                    integer tortor arcu lectus a lacus amet magna.\n                    Lorem sagittis ut risus tortor a cursus morbi.\n                    Sagittis proin in risus neque volutpat pellentesque\n                    purus lectus velit. Cursus mollis eu morbi viverra\n                    nulla turpis.</p>\n                </div>\n              </ion-accordion>\n              <ion-accordion value=\"five\">\n                <ion-item slot=\"header\">\n                  <ion-label>Can I use another payment method?</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p>Lorem ipsum dolor sit amet consectetur. Aliquam\n                    integer tortor arcu lectus a lacus amet magna.\n                    Lorem sagittis ut risus tortor a cursus morbi.\n                    Sagittis proin in risus neque volutpat pellentesque\n                    purus lectus velit. Cursus mollis eu morbi viverra\n                    nulla turpis.</p>\n                </div>\n              </ion-accordion>\n              <ion-accordion value=\"six\">\n                <ion-item slot=\"header\">\n                  <ion-label>payment deducted? without any conversation.!</ion-label>\n                </ion-item>\n                <div class=\"ans-data\" slot=\"content\">\n                  <p>Lorem ipsum dolor sit amet consectetur. Aliquam\n                    integer tortor arcu lectus a lacus amet magna.\n                    Lorem sagittis ut risus tortor a cursus morbi.\n                    Sagittis proin in risus neque volutpat pellentesque\n                    purus lectus velit. Cursus mollis eu morbi viverra\n                    nulla turpis.</p>\n                </div>\n              </ion-accordion> -->\n            </ion-accordion-group>\n          </div>\n          <div class=\"contect-btn\">\n              <ion-button (click)=\"isModalOpen=true\">Contact Us </ion-button>\n          </div>\n      </div>\n  </ion-grid>\n\n\n  <ion-modal  class=\"contact-modal\" [isOpen]=\"isModalOpen\">\n    <ng-template>\n      \n      <div class=\"inner-content\">\n        <div class=\"main-screen\">\n          <ion-item lines=\"none\">\n            <ion-textarea placeholder=\"Enter your message here\" rows=\"10\" [(ngModel)]=\"feedbackMsg\"></ion-textarea>\n          </ion-item>\n        </div>\n      </div>\n  \n      <ion-footer mode=\"ios\">\n        <ion-toolbar mode=\"ios\">\n          <ion-button class=\"cancel-btn\" (click)=\"isModalOpen=false\">\n            Cancel\n          </ion-button>\n          <ion-button  class=\"send-btn\" [disabled]=\"feedbackMsg == ''\" (click)=\"submitFeedBack()\">\n            Send Message\n          </ion-button>\n        </ion-toolbar>\n      </ion-footer>\n    </ng-template>\n  </ion-modal>\n\n  <ion-grid class=\"bg-bubble\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n<!-- </ion-grid> -->\n\n<!-- <ion-grid class=\"logo-bg\">\n  <img src=\"assets/icon/logo-bg.png\" />\n  <span>Work in progress</span>\n</ion-grid>\n</ion-content> -->";

/***/ }),

/***/ 32863:
/*!********************************************************************************!*\
  !*** ./src/app/pages/push-notification/push-notification.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n\n<!-- <ion-popover #popover [isOpen]=\"isOpen\" triggerAction=\"click\" mode=\"md\">\n  <ng-template> -->\n    <ion-content>\n      <div class=\"notification-main\" *ngIf=\"notificationContentData?.length !== 0\">\n        <div class=\"data-part\" *ngFor=\"let data of notificationContentData\">\n          <div (click)=\"viewedNotification(data.id)\">\n            <ion-row>\n              <ion-col size=\"7\">\n                <h5>{{data.fullName}}</h5>\n              </ion-col>\n              <ion-col size=\"5\">\n                <div class=\"date-time\">\n                  <p>{{data.sentDate | date:\"MM/dd/yyyy  h:mma\"}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n            \n            \n            <p>{{data.title}}</p>\n            <p [innerText]=\"data.body\"></p>\n            \n          </div>\n        </div>\n        <!-- <div class=\"data-part\">\n          <h5>Casey Rodgers</h5>\n          <p>\n            “Let’s Get in Touch”, be ready for <u>Meet up</u> event with\n            <span>Casey Rodgers</span> will start in just 10 min.\n          </p>\n        </div> -->\n      </div>\n      <div class=\"notification-main\" *ngIf=\"notificationContentData?.length == 0\">\n        <div class=\"data-part\" >\n          <div>\n            <h5>No notifications found!</h5>\n          </div>\n        </div> \n      </div>\n    </ion-content>\n  <!-- </ng-template>\n</ion-popover> -->\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help-section_help-section_module_ts.js.map