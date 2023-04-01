(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth-module_verify-otp_verify-otp_module_ts"],{

/***/ 63242:
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth-module/verify-otp/verify-otp-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOTPPageRoutingModule": () => (/* binding */ VerifyOTPPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _verify_otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-otp.page */ 87094);




const routes = [{
  path: '',
  component: _verify_otp_page__WEBPACK_IMPORTED_MODULE_0__.VerifyOTPPage
}];
let VerifyOTPPageRoutingModule = class VerifyOTPPageRoutingModule {};
VerifyOTPPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VerifyOTPPageRoutingModule);


/***/ }),

/***/ 22159:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth-module/verify-otp/verify-otp.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOTPPageModule": () => (/* binding */ VerifyOTPPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _verify_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-otp-routing.module */ 63242);
/* harmony import */ var _verify_otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-otp.page */ 87094);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let VerifyOTPPageModule = class VerifyOTPPageModule {};
VerifyOTPPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _verify_otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyOTPPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule],
  declarations: [_verify_otp_page__WEBPACK_IMPORTED_MODULE_1__.VerifyOTPPage]
})], VerifyOTPPageModule);


/***/ }),

/***/ 87094:
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth-module/verify-otp/verify-otp.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyOTPPage": () => (/* binding */ VerifyOTPPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verify_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-otp.page.html?ngResource */ 34964);
/* harmony import */ var _verify_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-otp.page.scss?ngResource */ 75487);
/* harmony import */ var _verify_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_verify_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _auth_module_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth-module.service */ 81000);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);














let VerifyOTPPage = class VerifyOTPPage {
  constructor(coreService, apiService, constantService, cd, router, common, route, commonService, platform) {
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.cd = cd;
    this.router = router;
    this.common = common;
    this.route = route;
    this.commonService = commonService;
    this.platform = platform;
    this.otpFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6)]);
    this.otpInputConfig = {
      length: 6,
      inputClass: "otpInput",
      containerClass: "optInputContainer",
      placeholder: "-",
      allowNumbersOnly: true,
      disableAutoFocus: false
    };
    this.isOtpSent = false;
    this.timeLeft = 120;
    this.generatedToken = null;
  }
  ngOnInit() {
    this.startTimer();
    this.getFlowInfo();
    // this.registerVoipNotification();
  }

  ionViewWillEnter() {
    this.generateNotificationToken();
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/tabs/home";
  }
  getFlowInfo() {
    this.route.queryParams.subscribe(params => {
      this.mode = params.mode;
      this.returnUrl = params.returnUrl;
    });
  }
  onSubmit() {
    this.verifyActivateAccountOtp();
  }
  resendOtp() {
    this.stopTimer();
    let email = this.getEmail();
    if (!email) {
      return this.router.navigate(["/"]);
    }
    let request = {
      path: `auth/users/otp/send?email=${email}`,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === "OK") {
        this.timeLeft = 120;
        this.startTimer();
        this.cd.detectChanges();
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  verifyActivateAccountOtp() {
    if (this.validateOtp()) return;
    if (localStorage.getItem("voipToken")) {
      this.voipToken = localStorage.getItem("voipToken");
    }
    let request = {
      path: "auth/users/otp/verify/" + this.otpFormControl.value + "?deviceToken=" + this.generatedToken + "?voipDeviceToken=" + this.voipToken,
      isAuth: true
    };
    // this.apiService.post(request).subscribe((response: Response) => {
    //   this.authPublicInfo = response.data;
    // });
    let isTokenTemporary = true;
    if (this.mode == "login") {
      isTokenTemporary = false;
    }
    console.log(request);
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request, isTokenTemporary).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        //  console.log(response)
        this.routeToNextPage();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  //utility methods
  stopTimer() {
    clearInterval(this.interval);
  }
  routeToNextPage() {
    if (this.mode == "signup") {
      this.router.navigate(["auth/signup-details"]);
    } else if (this.mode == "forgot") {
      this.router.navigate(["auth/reset-password"]);
    } else {
      this.commonService.$socketSubject.next();
      this.router.navigateByUrl(this.returnUrl);
    }
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  ionViewDidLeave() {
    this.stopTimer();
  }
  getEmail() {
    if (this.mode == "signup") {
      return this.common.signUpData.email;
    } else if (this.mode == "forgot") {
      return this.common.forgotPasswordEmail;
    } else {
      return this.common.loginEmail;
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.cd.detectChanges();
      }
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
    return `0${mDisplay}: ${sDisplay}s`;
  }
  validateOtp() {
    if (this.otpFormControl.invalid) {
      this.coreService.showToastMessage("Please enter valid OTP", this.coreService.TOAST_ERROR);
      return true;
    }
  }
  generateNotificationToken() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.platform.is("desktop") || _this.platform.is("mobileweb")) {
        _this.generatedToken = null;
      }
      let result = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.requestPermissions();
      console.log("result notification", result);
      if (result.receive === "granted") {
        // Register with Apple / Google to receive push via APNS/FCM
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.register();
      } else {
        _this.generatedToken = null;
        // Show some error
      }
      // On success, we should be able to receive notifications
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_8__.PushNotifications.addListener("registration", token => {
        _this.generatedToken = token.value;
      });
      console.log(_this.generatedToken);
    })();
  }
};
VerifyOTPPage.ctorParameters = () => [{
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _auth_module_service__WEBPACK_IMPORTED_MODULE_7__.AuthModuleService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
}];
VerifyOTPPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-verify-otp",
  template: _verify_otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
  styles: [(_verify_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], VerifyOTPPage);


/***/ }),

/***/ 75487:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth-module/verify-otp/verify-otp.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  color: var(--white-clr);\n  font-size: 1.7rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin-bottom: -115px !important;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  min-height: 160px;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 15px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 5px;\n  max-width: 60px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: 0px;\n  text-align: center;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 1rem;\n  color: var(--text-black);\n  --background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  border: 1px solid transparent;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input.has-value {\n  border-color: var(--black-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .main-screen .content-part .resend-text {\n  text-align: center;\n  padding: 10px 0;\n}\nion-content .main-screen .content-part .resend-text p {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 0.875rem;\n  display: inline-block;\n}\nion-content .main-screen .content-part .resend-text p span {\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--white-clr);\n  margin-left: 5px;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.8rem;\n  width: 100%;\n  word-break: normal;\n  white-space: nowrap;\n  padding: 0 10px;\n  line-height: 18px;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .auth-back-text {\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-back-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  line-height: 19px;\n}\nion-content .main-screen .content-part .auth-back-text p span {\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.875rem;\n}\nion-content .main-screen .content-part .auth-back-text p ion-icon {\n  font-size: 1rem;\n  color: var(--white-clr);\n  position: absolute;\n  left: 0;\n  top: 2px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.otp-timer {\n  text-align: center;\n  color: var(--white-clr);\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n\nion-back-button {\n  --color: #fff;\n  --icon-font-size: 1.7rem;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/auth-module/verify-otp/verify-otp.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar ion-icon {\n  color: var(--white-clr);\n  font-size: 1.7rem;\n  padding-left: 7px;\n  padding-top: 10px;\n  padding-bottom: 7px;\n  padding-right: 10px;\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin-bottom: -115px !important;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  max-height: 40vh;\n  position: relative;\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  min-height: 160px;\n}\nion-content .main-screen .top-screen ion-icon {\n  color: var(--white-clr);\n  font-size: 2rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nion-content .main-screen .top-screen .logo-head {\n  text-align: center;\n  position: absolute;\n  top: -42px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n  z-index: 2;\n}\nion-content .main-screen .top-screen .logo-head img {\n  max-width: 100%;\n  max-width: 70%;\n}\nion-content .main-screen .top-screen .video-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-screen .video-part video {\n  width: 100%;\n  width: 100%;\n}\nion-content .main-screen .top-screen .overlay-bg {\n  background: rgba(var(--theme-one-bg-rgb), 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .auth-title {\n  text-align: center;\n  padding: 5px 15px 15px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .auth-title img {\n  max-width: 100%;\n  width: 52px;\n  height: 74px;\n}\nion-content .main-screen .content-part .auth-title h4 {\n  color: var(--white-clr);\n  font-size: 1.875rem;\n  font-weight: 600;\n  margin: 5px 0;\n}\nion-content .main-screen .content-part .auth-title p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\nion-content .main-screen .content-part .auth-form {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .auth-form .input-box {\n  padding: 5px;\n  max-width: 60px;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0px;\n  --border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input {\n  margin-top: 0px;\n  text-align: center;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 1rem;\n  color: var(--text-black);\n  --background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  border: 1px solid transparent;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item ion-input.has-value {\n  border-color: var(--black-clr);\n}\nion-content .main-screen .content-part .auth-form .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\nion-content .main-screen .content-part .resend-text {\n  text-align: center;\n  padding: 10px 0;\n}\nion-content .main-screen .content-part .resend-text p {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 0.875rem;\n  display: inline-block;\n}\nion-content .main-screen .content-part .resend-text p span {\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--white-clr);\n  margin-left: 5px;\n}\nion-content .main-screen .content-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n}\nion-content .main-screen .content-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  font-size: 0.8rem;\n  width: 100%;\n  word-break: normal;\n  white-space: nowrap;\n  padding: 0 10px;\n  line-height: 18px;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .main-screen .content-part .auth-back-text {\n  text-align: center;\n}\nion-content .main-screen .content-part .auth-back-text p {\n  color: var(--white-clr);\n  margin: 0;\n  font-size: 0.75rem;\n  display: inline-block;\n  position: relative;\n  padding-left: 18px;\n  line-height: 19px;\n}\nion-content .main-screen .content-part .auth-back-text p span {\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 0.875rem;\n}\nion-content .main-screen .content-part .auth-back-text p ion-icon {\n  font-size: 1rem;\n  color: var(--white-clr);\n  position: absolute;\n  left: 0;\n  top: 2px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.otp-timer {\n  text-align: center;\n  color: var(--white-clr);\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n\nion-back-button {\n  --color: #fff;\n  --icon-font-size: 1.7rem;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 34964:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth-module/verify-otp/verify-otp.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\" [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar mode=\"md\">\n    <!-- <ion-icon\n      slot=\"start\"\n      name=\"arrow-back-outline\"\n      routerLink=\"/login\"\n    ></ion-icon> -->\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-back-button [text]=\"null\" icon=\"arrow-back-outline\" mode=\"md\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" [forceOverscroll]=\"false\">\n  <div class=\"main-screen\">\n    <div class=\"top-screen\">\n      <!-- <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon> -->\n      <ion-grid class=\"video-part\">\n        <video height=\"100%\" width=\"100%\" poster=\"assets/video/video-poster.png\"  loop=\"\" muted autoplay webkit-playsinline playsinline>\n          <source src=\"assets/video/video.mp4\">\n          <source src=\"assets/video/video.webm\">\n          <p class=\"warning\">Your browser does not support HTML5 video.</p>\n        </video>\n      </ion-grid>\n\n      <ion-grid class=\"logo-head\">\n        <img src=\"assets/images/logo.svg\" />\n        <div class=\"nil4all\">\n          <span>#NIL4ALL</span>\n        </div>\n      </ion-grid>\n\n      <ion-grid class=\"overlay-bg\"></ion-grid>\n    </div>\n\n    <ion-grid class=\"content-part\">\n      <div class=\"main-part\">\n        <div class=\"auth-title sticky-top\">\n          <img src=\"assets/images/auth-img.svg\" />\n          <h4>Verify OTP</h4>\n          <p>\n            To verify your email,<br />\n            we've sent a One-Time Password (OTP) to<br />\n            your email address.<br />\n            Please enter the OTP below.\n          </p>\n        </div>\n\n        <div class=\"auth-form\">\n          <ng-otp-input\n            [formCtrl]=\"otpFormControl\"\n            [config]=\"otpInputConfig\"\n          ></ng-otp-input>\n        </div>\n        <h4 *ngIf=\"timeLeft !==0\" class=\"otp-timer\">\n          {{secondsToHms(timeLeft)}}\n        </h4>\n\n        <div *ngIf=\"timeLeft ==0\" class=\"resend-text\">\n          <p>\n            Didn’t receive the One-Time password?\n            <span (click)=\"resendOtp()\">Resend</span>\n          </p>\n        </div>\n\n        <div class=\"auth-btn\">\n          <ion-button (click)=\"onSubmit()\">\n            <img src=\"assets/images/button-auth.png\" />\n            <span>Confirm</span>\n          </ion-button>\n        </div>\n\n        <div class=\"auth-back-text\">\n          <p routerLink=\"/auth/login\">\n            Back to\n            <span>Login</span>\n            <ion-icon name=\"chevron-back-outline\"></ion-icon>\n          </p>\n        </div>\n      </div>\n      <ion-grid class=\"buble-part\">\n        <div class=\"dots-bubble\">\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n        </div>\n      </ion-grid>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth-module_verify-otp_verify-otp_module_ts.js.map