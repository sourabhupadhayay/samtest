(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-view_fan_fan_module_ts"],{

/***/ 91595:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-view/fan/fan-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fanPageRoutingModule": () => (/* binding */ fanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fan.page */ 93634);




const routes = [{
  path: ":id",
  component: _fan_page__WEBPACK_IMPORTED_MODULE_0__.fanPage
}];
let fanPageRoutingModule = class fanPageRoutingModule {};
fanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], fanPageRoutingModule);


/***/ }),

/***/ 72978:
/*!******************************************************!*\
  !*** ./src/app/pages/profile-view/fan/fan.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fanPageModule": () => (/* binding */ fanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fan-routing.module */ 91595);
/* harmony import */ var _fan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan.page */ 93634);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);








let fanPageModule = class fanPageModule {};
fanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _fan_routing_module__WEBPACK_IMPORTED_MODULE_0__.fanPageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule],
  declarations: [_fan_page__WEBPACK_IMPORTED_MODULE_1__.fanPage]
})], fanPageModule);


/***/ }),

/***/ 93634:
/*!****************************************************!*\
  !*** ./src/app/pages/profile-view/fan/fan.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fanPage": () => (/* binding */ fanPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fan.page.html?ngResource */ 95517);
/* harmony import */ var _fan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fan.page.scss?ngResource */ 65594);
/* harmony import */ var _fan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../push-notification/push-notification.page */ 30493);













let fanPage = class fanPage {
  constructor(coreService, apiService, route, constantService, commonService, popoverController) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.route = route;
    this.constantService = constantService;
    this.commonService = commonService;
    this.popoverController = popoverController;
    this.fanData = null;
    this.badgeCount = 0;
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.getUserIdFromParams();
    this.getNotificationCount();
  }
  getUserIdFromParams() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(params => {
      this.coreService.presentLoader(this.constantService.WAIT);
      let request = {
        path: "auth/users/currentUser?userId=" + params.get("id"),
        isAuth: true
      };
      return this.apiService.get(request);
    })).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.fanData = response.data;
        this.nameInitials = this.commonService.getInitials(this.fanData.fullName);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
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
fanPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
}];
fanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "fan-page",
  template: _fan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_fan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], fanPage);


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

/***/ 65594:
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile-view/fan/fan.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url('card-bg.png') no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  min-height: 190px;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --min-height: 100px;\n}\nion-content .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 142px;\n  min-width: 142px;\n  height: auto;\n  margin-right: 15px;\n}\nion-content .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 142px;\n  border: 1px solid var(--white-clr);\n  height: auto;\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  max-height: 158px;\n}\nion-content .top-card .profile-part ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n}\nion-content .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label span {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 400;\n  margin: 0;\n}\nion-content .content-part {\n  padding: 60px 15px 15px;\n  position: relative;\n  z-index: 999;\n}\nion-content .content-part .details-part {\n  padding: 10px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  overflow: auto;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .content-part .details-part .details-box {\n  border-bottom: 1px solid var(--white-clr);\n  padding: 5px 0;\n}\nion-content .content-part .details-part .details-box h5 {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block;\n  font-weight: 400;\n}\nion-content .content-part .details-part .details-box h5::after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  height: 1px;\n  width: 60%;\n  background: var(--theme-one-clr);\n  content: \"\";\n}\nion-content .content-part .details-part .details-box p {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\nion-content .content-part .details-part .details-box:last-child {\n  border-bottom: 0;\n}\nion-content .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/profile-view/fan/fan.page.scss"],"names":[],"mappings":"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AAA;EACA,mBAAA;EACA,0EAAA;AALN;AAOI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AALN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,0EAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AANN;AAQI;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,0EAAA;AANN;AAQI;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,0EAAA;AANN;AAQI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AANN;AASI;EACE;IACE,cAAA;IACA,wBAAA;EAPN;EASI;IACE,2BAAA;EAPN;EASI;IACE,cAAA;IACA,6BAAA;EAPN;AACF;;AAWA;EACE,kBAAA;AARF;AASE;EACE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;EACA,uBAAA;AAPJ","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url(../../../../assets/images/card-bg.png) no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9999;\n  min-height: 190px;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --min-height: 100px;\n}\nion-content .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 142px;\n  min-width: 142px;\n  height: auto;\n  margin-right: 15px;\n}\nion-content .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 142px;\n  border: 1px solid var(--white-clr);\n  height: auto;\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  max-height: 158px;\n}\nion-content .top-card .profile-part ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n}\nion-content .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0;\n}\nion-content .top-card .profile-part ion-item ion-label span {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  font-weight: 400;\n  margin: 0;\n}\nion-content .content-part {\n  padding: 60px 15px 15px;\n  position: relative;\n  z-index: 999;\n}\nion-content .content-part .details-part {\n  padding: 10px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  overflow: auto;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 15px;\n}\nion-content .content-part .details-part .details-box {\n  border-bottom: 1px solid var(--white-clr);\n  padding: 5px 0;\n}\nion-content .content-part .details-part .details-box h5 {\n  margin: 0;\n  padding: 0;\n  color: var(--theme-one-clr);\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block;\n  font-weight: 400;\n}\nion-content .content-part .details-part .details-box h5::after {\n  position: absolute;\n  left: 0;\n  bottom: -5px;\n  height: 1px;\n  width: 60%;\n  background: var(--theme-one-clr);\n  content: \"\";\n}\nion-content .content-part .details-part .details-box p {\n  margin: 10px 0;\n  color: var(--black-clr);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\nion-content .content-part .details-part .details-box:last-child {\n  border-bottom: 0;\n}\nion-content .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  text-transform: uppercase;\n  border: 1px solid white;\n}"],"sourceRoot":""}]);
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

/***/ 95517:
/*!*****************************************************************!*\
  !*** ./src/app/pages/profile-view/fan/fan.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"top-card\">\n    <div class=\"title-part\">\n      <ion-item lines=\"none\" mode=\"ios\">\n        <ion-icon\n          routerLink=\"/tabs/schedule\"\n          slot=\"start\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALLs</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n        <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n    <div class=\"profile-part\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ng-container *ngIf=\"fanData?.profileUrl !== '' \">\n            <img [src]=\"fanData?.profileUrl | profile\" />\n          </ng-container>\n          <ng-container *ngIf=\"fanData?.profileUrl == '' \">\n            <div class=\"inital\">\n              <span class=\"initial__span\">\n                {{nameInitials}}\n              </span>\n            </div>\n          </ng-container>\n        </ion-avatar>\n        <ion-label>\n          <h5>{{fanData?.fullName}}</h5>\n          <span>{{fanData?.teamName}}</span>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"content-part\">\n    <div class=\"details-part\">\n      <div class=\"details-box\">\n        <h5>Email</h5>\n        <p>{{fanData?.email}}</p>\n      </div>\n      <div class=\"details-box\" *ngIf=\"fanData?.showBirthDate ==true\">\n        <h5>Birthday</h5>\n        <p>{{fanData?.birthDate | date:'MMM d, y'}}</p>\n      </div>\n      <!-- <div class=\"details-box\">\n        <h5>Phone no.</h5>\n        <p>{{fanData?.phone }}</p>\n      </div> -->\n<!-- team hidden for fan profile  -->\n      <!-- <div class=\"details-box\">\n        <h5>Team</h5>\n        <p>{{fanData?.teamName}}</p>\n      </div> -->\n      <div class=\"details-box\">\n        <h5>State</h5>\n        <p>{{fanData?.teamState}}</p>\n      </div>\n      <div class=\"details-box\">\n        <h5>Country</h5>\n        <p>{{fanData?.country}}</p>\n      </div>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"buble-part\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</ion-content>\n";

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
//# sourceMappingURL=src_app_pages_profile-view_fan_fan_module_ts.js.map