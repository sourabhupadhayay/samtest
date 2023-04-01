(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome-screen_welcome-screen_module_ts"],{

/***/ 22816:
/*!***********************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeScreenPageRoutingModule": () => (/* binding */ WelcomeScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _welcome_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-screen.page */ 22272);




const routes = [{
  path: '',
  component: _welcome_screen_page__WEBPACK_IMPORTED_MODULE_0__.WelcomeScreenPage
}];
let WelcomeScreenPageRoutingModule = class WelcomeScreenPageRoutingModule {};
WelcomeScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], WelcomeScreenPageRoutingModule);


/***/ }),

/***/ 60342:
/*!***************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeScreenPageModule": () => (/* binding */ WelcomeScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _welcome_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-screen-routing.module */ 22816);
/* harmony import */ var _welcome_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-screen.page */ 22272);







let WelcomeScreenPageModule = class WelcomeScreenPageModule {};
WelcomeScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _welcome_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeScreenPageRoutingModule],
  declarations: [_welcome_screen_page__WEBPACK_IMPORTED_MODULE_1__.WelcomeScreenPage]
})], WelcomeScreenPageModule);


/***/ }),

/***/ 22272:
/*!*************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeScreenPage": () => (/* binding */ WelcomeScreenPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-screen.page.html?ngResource */ 89646);
/* harmony import */ var _welcome_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-screen.page.scss?ngResource */ 67291);
/* harmony import */ var _welcome_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_welcome_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 85191);








let WelcomeScreenPage = class WelcomeScreenPage {
  constructor(router) {
    this.router = router;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
  }
  ngOnInit() {}
  nextSlide() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.slides.slideNext();
    })();
  }
  skip() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
        key: "first_time",
        value: "no"
      });
      _this2.router.navigate(["/"], {
        replaceUrl: true
      });
    })();
  }
};
WelcomeScreenPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];
WelcomeScreenPage.propDecorators = {
  slides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSlides]
  }]
};
WelcomeScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-welcome-screen",
  template: _welcome_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_welcome_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WelcomeScreenPage);


/***/ }),

/***/ 67291:
/*!**************************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  position: relative;\n  --background: url('background-new.png') no-repeat center;\n  background-size: cover;\n  color: #333;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  width: 100%;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background: rgba(255, 255, 255, 0.462);\n  --bullet-background-active: #fff;\n}\n\nion-slide {\n  flex-flow: column;\n}\n\n.swiper-wrapper {\n  z-index: 9999;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100vh;\n  padding-bottom: 50px;\n  width: 100%;\n}\n\n.image-container {\n  max-height: 70vh;\n  width: 100%;\n  border-bottom-left-radius: 100%;\n  border-left: 5px solid #fff;\n  border-bottom: 5px solid #fff;\n  overflow: hidden;\n}\n.image-container img {\n  border-bottom-left-radius: 100%;\n  height: auto;\n  width: 100%;\n}\n\n.swiper-slide img {\n  max-height: none;\n}\n\n.details {\n  text-align: left;\n  padding: 10px 15px;\n}\n.details h2 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 10px 0 10px;\n  color: var(--white-clr);\n}\n\n.buttons {\n  display: flex;\n  justify-content: end;\n  width: 100%;\n  padding: 0px 5px;\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  z-index: 999;\n}\n.buttons ion-button {\n  font-size: 1rem;\n  font-weight: 400;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/welcome-screen/welcome-screen.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,wDAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;AACF;;AACA;EACE,YAAA;EACA,+CAAA;EACA,gCAAA;AAEF;;AAAA;EAEE,iBAAA;AAEF;;AAAA;EAAgB,aAAA;AAIhB;;AAHA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,oBAAA;EAAqB,WAAA;AAOvB;;AALA;EACE,gBAAA;EACE,WAAA;EACA,+BAAA;EACA,2BAAA;EACA,6BAAA;EACA,gBAAA;AAQJ;AAPE;EACE,+BAAA;EAGA,YAAA;EAAa,WAAA;AAQjB;;AALA;EAAkB,gBAAA;AASlB;;AAPA;EACE,gBAAA;EACA,kBAAA;AAUF;AATE;EACE,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;AAWJ;;AARA;EACE,aAAA;EAEA,oBAAA;EACA,WAAA;EACE,gBAAA;EACA,kBAAA;EAAoB,YAAA;EAAc,OAAA;EAAS,YAAA;AAa/C;AAZE;EACE,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,mCAAA;EACA,iCAAA;EACA,+BAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;AAcJ","sourcesContent":["ion-content {\n  position: relative;\n  --background: url(../../../assets/images/background-new.png) no-repeat center;\n  background-size: cover;\n  color: #333;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  width: 100%;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background: rgba(255, 255, 255, 0.462);\n  --bullet-background-active: #fff;\n}\n\nion-slide {\n  flex-flow: column;\n}\n\n.swiper-wrapper {\n  z-index: 9999;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100vh;\n  padding-bottom: 50px;\n  width: 100%;\n}\n\n.image-container {\n  max-height: 70vh;\n  width: 100%;\n  border-bottom-left-radius: 100%;\n  border-left: 5px solid #fff;\n  border-bottom: 5px solid #fff;\n  overflow: hidden;\n}\n.image-container img {\n  border-bottom-left-radius: 100%;\n  height: auto;\n  width: 100%;\n}\n\n.swiper-slide img {\n  max-height: none;\n}\n\n.details {\n  text-align: left;\n  padding: 10px 15px;\n}\n.details h2 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 10px 0 10px;\n  color: var(--white-clr);\n}\n\n.buttons {\n  display: flex;\n  justify-content: end;\n  width: 100%;\n  padding: 0px 5px;\n  position: absolute;\n  bottom: 15px;\n  left: 0;\n  z-index: 999;\n}\n.buttons ion-button {\n  font-size: 1rem;\n  font-weight: 400;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89646:
/*!**************************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" [forceOverscroll]=\"false\">\n  <ion-slides mode=\"ios\" pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <div class=\"container\">\n        <div class=\"image-container\">\n          <img src=\"../../../assets/images/football.jpg\" alt=\"\" />\n        </div>\n        <div class=\"details\">\n          <img src=\"../../../assets/icon/bubble-icon.svg\" alt=\"\" />\n          <h2>Book live chats and in-person appearances.</h2>\n        </div>\n\n        <div class=\"buttons\">\n          <!-- <ion-button (click)=\"skip()\">Skip</ion-button> -->\n          <!-- <ion-button (click)=\"skip()\" disabled> &nbsp;</ion-button> -->\n          <ion-button (click)=\"nextSlide()\">Next</ion-button>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"container\">\n        <div class=\"image-container\">\n          <img src=\"../../../assets/images/football2.jpg\" alt=\"\" />\n        </div>\n        <div class=\"details\">\n          <img src=\"../../../assets/icon/bubble-icon.svg\" alt=\"\" />\n          <h2>Get in the game! Chat live with your favorite athletes.</h2>\n        </div>\n        <div class=\"buttons\">\n          <!-- <ion-button (click)=\"skip()\">Skip</ion-button> -->\n          <!-- <ion-button (click)=\"skip()\" disabled> &nbsp;</ion-button> -->\n          <ion-button (click)=\"nextSlide()\">Next</ion-button>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"container\">\n        <div class=\"image-container\">\n          <img src=\"../../../assets/images/slide-3.png\" alt=\"\" />\n        </div>\n        <div class=\"details\">\n          <img src=\"../../../assets/icon/bubble-icon.svg\" alt=\"\" />\n          <h2>Beat the competition, bid to bubble up!</h2>\n        </div>\n        <div class=\"buttons\">\n          <!-- <ion-button (click)=\"skip()\">Skip</ion-button> -->\n          <!-- <ion-button (click)=\"skip()\" disabled> &nbsp;</ion-button> -->\n          <ion-button (click)=\"nextSlide()\">Next</ion-button>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"container\">\n        <div class=\"image-container\">\n          <img src=\"../../../assets/images/football3.jpg\" alt=\"\" />\n        </div>\n        <div class=\"details\">\n          <img src=\"../../../assets/icon/bubble-icon.svg\" alt=\"\" />\n          <h2>Let's live the moment with your favorite athlete</h2>\n        </div>\n        <div class=\"buttons\">\n          <!-- <ion-button (click)=\"skip()\">Skip</ion-button> -->\n          <!-- <ion-button (click)=\"skip()\" disabled> &nbsp;</ion-button> -->\n          <ion-button (click)=\"skip()\">Let’s Go</ion-button>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome-screen_welcome-screen_module_ts.js.map