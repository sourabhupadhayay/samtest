(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_profile_edit-profile_edit-profile_module_ts"],{

/***/ 19247:
/*!********************************************************************************!*\
  !*** ./src/app/pages/home/profile/edit-profile/edit-profile-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 62450);




const routes = [{
  path: '',
  component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
}];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EditProfilePageRoutingModule);


/***/ }),

/***/ 61549:
/*!************************************************************************!*\
  !*** ./src/app/pages/home/profile/edit-profile/edit-profile.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 19247);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 62450);
/* harmony import */ var src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/common-directive.module */ 33109);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);









let EditProfilePageModule = class EditProfilePageModule {};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_directives_common_directive_module__WEBPACK_IMPORTED_MODULE_2__.CommonDirectiveModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule],
  declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
})], EditProfilePageModule);


/***/ }),

/***/ 62450:
/*!**********************************************************************!*\
  !*** ./src/app/pages/home/profile/edit-profile/edit-profile.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 76703);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 74369);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var _pages_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pages/push-notification/push-notification.page */ 30493);















let EditProfilePage = class EditProfilePage {
  constructor(modalCtrl, coreService, apiService, constantService, router, formBuilder, commonService, cd, route, popoverController) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.commonService = commonService;
    this.cd = cd;
    this.route = route;
    this.popoverController = popoverController;
    this.currentDate = new Date().toISOString();
    this.isFormSubmitted = false;
    this.isUserProfileComplete = true;
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.getUserDataFromStorage();
    this.isUserFromSocialLogIn();
    this.getNotificationCount();
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
  getUserDataFromStorage() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.get({
        key: "userDetails"
      });
      _this.loggedInUserData = JSON.parse(value);
      _this.currentUserRole = _this.commonService.getUserType(_this.loggedInUserData.roles);
      _this.getCurrentUserDetails();
      _this.initForm();
    })();
  }
  initForm() {
    if (this.currentUserRole == "fan") {
      this.initFanForm();
    } else {
      this.initAthleteForm();
    }
  }
  isUserFromSocialLogIn() {
    this.route.queryParams.subscribe(params => {
      if (!params.isProfileComplete) {
        return;
      }
      this.isUserProfileComplete = JSON.parse(params.isProfileComplete);
    });
    this.cd.detectChanges();
  }
  initFanForm() {
    this.fanProfileForm = this.formBuilder.group({
      fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z ]*$")]],
      showBirthDate: [false],
      birthDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      phone: [""],
      teamName: [""],
      country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z ]*$")],
      teamState: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z ]*$")]
    });
  }
  initAthleteForm() {
    this.athleteProfileForm = this.formBuilder.group({
      teamName: [""],
      teamState: [""],
      country: [""],
      universityName: [""],
      phone: [""]
    });
  }
  getCurrentUserDetails() {
    let request = {
      path: "auth/users/currentUser",
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.nameInitials = this.commonService.getInitials(response.data.fullName);
        this.commonService.profileUrl = response.data.profileUrl;
        this.patchFormData(response.data);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  patchFormData(data) {
    if (this.currentUserRole == "fan") {
      this.fanProfileForm.patchValue(data);
      this.patchDateValue(data.birthDate);
    } else {
      this.athleteProfileForm.patchValue(data);
    }
  }
  removeImage() {
    this.coreService.removeImage();
  }
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
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.postImage(request).subscribe(response => {
      this.coreService.dismissLoader();
      this.commonService.profileUrl = response.data.url;
      console.log(this.commonService.profileUrl);
      this.cd.detectChanges();
    });
  }
  onSubmit() {
    let request;
    if (this.currentUserRole == "fan") {
      request = this.fanDataRequest();
    } else {
      request = this.athleteDataRequest();
    }
    if (!request) {
      return;
    }
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.set({
          key: "userDetails",
          value: JSON.stringify(response.data)
        });
        this.router.navigateByUrl("/tabs/profile");
        this.commonService.$profileSubject.next();
        this.isUserProfileComplete = true;
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  fanDataRequest() {
    let {
      birthDate,
      ...signUpResponse
    } = this.fanProfileForm.value;
    let request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        birthDate: new Date(birthDate).toISOString(),
        profileUrl: this.commonService.profileUrl,
        phone: this.checkPhoneNumLength(this.fanProfileForm.value.phone)
      },
      isAuth: true
    };
    return request;
  }
  presentModal() {
    if (this.currentUserRole == "fan") {
      this.isFormSubmitted = true;
      if (this.isFormValid()) return;
      if (this.validateAge()) return;
      if (this.validatePhoneFanForm()) return;
    }
    this.modal.present();
  }
  checkPhoneNumLength(phone) {
    if (phone?.length > 14) {
      return phone.substring(0, 14);
    }
    return phone;
  }
  athleteDataRequest() {
    this.validatePhoneAthleteForm();
    let request = {
      path: "auth/users/update",
      data: {
        ...this.athleteProfileForm.value,
        profileUrl: this.commonService.profileUrl,
        phone: this.checkPhoneNumLength(this.athleteProfileForm.value.phone)
      },
      isAuth: true
    };
    return request;
  }
  patchDateValue(date) {
    if (!date) {
      return;
    }
    let formattedDate = this.commonService.formatDate(date);
    this.fanProfileForm.controls.birthDate.patchValue(formattedDate);
  }
  isFormValid() {
    if (this.fanProfileForm.invalid) {
      this.coreService.showToastMessage("Please enter valid details", this.coreService.TOAST_ERROR);
      return true;
    }
  }
  validateAge() {
    let selectedDate = new Date(this.fanProfileForm.controls.birthDate.value);
    let age = this.commonService._calculateAge(selectedDate);
    if (age <= 18) {
      this.coreService.showToastMessage("age of user must be greater than 18", this.coreService.TOAST_ERROR);
      return true;
    }
  }
  cancelEditProfile() {
    if (this.isUserProfileComplete) {
      this.router.navigate(["/tabs/profile"]);
    } else {
      this.deleteAccount();
    }
  }
  presentProfileActionSheet() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.coreService.changeProfile();
    })();
  }
  onclick_cancel() {
    this.modalCtrl.dismiss();
  }
  logout() {
    let request = {
      path: "auth/users/logout",
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.modalCtrl.dismiss();
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.clear().then(() => {
          localStorage.removeItem("authDetail");
          localStorage.removeItem("authDetails");
          this.router.navigate(["/auth/login"]);
        });
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  deleteAccount() {
    let request = {
      path: "auth/users/manage/delete/" + this.loggedInUserData.id,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        this.modalCtrl.dismiss();
        this.logout();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  validatePhoneFanForm() {
    if (!this.fanProfileForm.controls.phone.value) {
      return;
    }
    if (this.fanProfileForm.controls.phone.value != "" && this.fanProfileForm.controls.phone.value.length < 14) {
      this.coreService.showToastMessage("Please enter valid phone number", this.coreService.TOAST_ERROR);
      this.fanProfileForm.controls.phone.patchValue("");
      return true;
    }
    if (!this.fanProfileForm.controls.phone.value) {
      this.fanProfileForm.controls.phone.patchValue(this.fanProfileForm.controls.phone.value);
    }
  }
  validatePhoneAthleteForm() {
    if (!this.athleteProfileForm.controls.phone.value) {
      return;
    }
    if (this.athleteProfileForm.controls.phone.value.length < 14) {
      this.athleteProfileForm.controls.phone.patchValue("");
    }
  }
  goBack() {
    this.router.navigate(["/tabs/profile"]);
  }
  presentPopover(ev) {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this3.popoverController.create({
        component: _pages_push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_8__.PushNotificationPage,
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
EditProfilePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
}];
EditProfilePage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: ["editModal"]
  }]
};
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-edit-profile",
  template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EditProfilePage);


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

/***/ 74369:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/profile/edit-profile/edit-profile.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url('card-bg.png') no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 5px;\n  min-height: 180px;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  align-self: center;\n  padding: 0;\n  position: relative;\n  z-index: 9;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  align-self: center;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 0px;\n  position: relative;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: inline-block;\n  border: 1px solid var(--white-clr);\n  border-radius: 10px;\n  margin-top: 10px;\n  width: 142px;\n}\nion-content .top-card .profile-part .upload-img {\n  height: 100%;\n  overflow: hidden;\n  max-height: 140px;\n  border-radius: 10px;\n  background: #1b4b64;\n}\nion-content .top-card .profile-part .upload-img img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 140px;\n  min-height: 140px;\n  z-index: 99;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\nion-content .top-card .profile-part .edit-btn {\n  padding: 0;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  left: 0;\n  bottom: -25px;\n  z-index: 999;\n}\nion-content .top-card .profile-part .edit-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3),\n    inset 0px 4px 4px #9bd9ff;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 52px;\n  width: 52px;\n  border-radius: 52px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .top-card .profile-part .edit-btn ion-button img {\n  height: 52px;\n  width: 52px;\n  border: 0;\n}\nion-content .top-card .profile-part .edit-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  padding: 0 12px;\n  line-height: 18px;\n}\nion-content .top-card .profile-part .edit-btn ion-button span img {\n  height: 25px;\n  width: 25px;\n  z-index: 99999;\n  position: relative;\n  border: 0;\n  border-radius: 0;\n}\nion-content .top-card .profile-part .edit-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .top-card .profile-part .edit-btn ion-button.ion-focusable {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 4px 4px #9bd9ff;\n  --border-radius: 52px;\n}\nion-content .content-part {\n  padding: 95px 15px 15px;\n  position: relative;\n  z-index: 99;\n}\nion-content .content-part .input-main {\n  padding: 15px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 10px;\n}\nion-content .content-part .input-main .input-box {\n  margin-bottom: 10px;\n}\nion-content .content-part .input-main .input-box ion-item {\n  position: relative;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .content-part .input-main .input-box ion-item ion-label {\n  color: var(--light-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 0 0 6px;\n}\nion-content .content-part .input-main .input-box ion-item ion-input {\n  pointer-events: all;\n  --background: var(--white-clr);\n  border-radius: 10px;\n  border: 1px solid var(--theme-one-bg);\n  --padding-start: 10px;\n  --padding-end: 10px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  background: var(--white-clr);\n  position: relative;\n}\nion-content .content-part .input-main .input-box ion-item .date-icon {\n  margin: 0;\n  align-self: center;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0px;\n  margin: auto;\n  z-index: 2;\n  height: 20px;\n  width: 20px;\n}\nion-content .content-part .input-main .check-box {\n  margin-bottom: 6px;\n}\nion-content .content-part .input-main .check-box ion-item {\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\nion-content .content-part .input-main .check-box ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 20px;\n  --border-color: var(--black-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 1px;\n  --border-color-checked: var(--black-clr);\n  --ripple-color: none;\n  --border-radius: 6px;\n  --checkmark-color: var(--black-clr);\n}\nion-content .content-part .input-main .check-box ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n}\n\nion-footer {\n  background: var(--theme-one-bg);\n}\nion-footer ion-toolbar {\n  padding-bottom: 3px;\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--theme-one-bg);\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\nion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.dateModal {\n  --background: rgba(44, 39, 45, 0.2);\n}\n.dateModal::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.dateModal ion-content {\n  --background: transparent;\n}\n.dateModal ion-datetime {\n  border-radius: 8px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.dateModal ion-datetime .tile-font {\n  color: var(--theme-one-clr);\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\n.error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\n\n.red {\n  color: var(--red-clr);\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 140px;\n  height: 140px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 0px;\n  color: #fff;\n  display: flex;\n  /* place-items: center; */\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.athlete-bio {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0px 0 15px;\n}\n.athlete-bio h6 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/home/profile/edit-profile/edit-profile.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  padding: 15px 0;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(\n    60.17% 29.84% at 50% 50%,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .top-card {\n  background: url(../../../../../assets/images/card-bg.png) no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0 0 25px 25px;\n  background-size: cover;\n  box-shadow: 0 7px 7px #066da0;\n  padding: 35px 0 5px;\n  min-height: 180px;\n}\nion-content .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .top-card .title-part ion-item ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  align-self: center;\n  padding: 0;\n  position: relative;\n  z-index: 9;\n}\nion-content .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .top-card .title-part ion-item .notification {\n  align-self: center;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-content .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .top-card .profile-part {\n  padding-top: 0px;\n  position: relative;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: inline-block;\n  border: 1px solid var(--white-clr);\n  border-radius: 10px;\n  margin-top: 10px;\n  width: 142px;\n}\nion-content .top-card .profile-part .upload-img {\n  height: 100%;\n  overflow: hidden;\n  max-height: 140px;\n  border-radius: 10px;\n  background: #1b4b64;\n}\nion-content .top-card .profile-part .upload-img img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 140px;\n  min-height: 140px;\n  z-index: 99;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\nion-content .top-card .profile-part .edit-btn {\n  padding: 0;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  left: 0;\n  bottom: -25px;\n  z-index: 999;\n}\nion-content .top-card .profile-part .edit-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3),\n    inset 0px 4px 4px #9bd9ff;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 52px;\n  width: 52px;\n  border-radius: 52px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .top-card .profile-part .edit-btn ion-button img {\n  height: 52px;\n  width: 52px;\n  border: 0;\n}\nion-content .top-card .profile-part .edit-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  height: fit-content;\n  width: 100%;\n  padding: 0 12px;\n  line-height: 18px;\n}\nion-content .top-card .profile-part .edit-btn ion-button span img {\n  height: 25px;\n  width: 25px;\n  z-index: 99999;\n  position: relative;\n  border: 0;\n  border-radius: 0;\n}\nion-content .top-card .profile-part .edit-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\nion-content .top-card .profile-part .edit-btn ion-button.ion-focusable {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 4px 4px #9bd9ff;\n  --border-radius: 52px;\n}\nion-content .content-part {\n  padding: 95px 15px 15px;\n  position: relative;\n  z-index: 99;\n}\nion-content .content-part .input-main {\n  padding: 15px 15px;\n  background: rgba(var(--white-bg-rgb), 0.7);\n  border-radius: 8px;\n  box-shadow: 0 -2px 2px var(--white-clr);\n  margin-bottom: 10px;\n}\nion-content .content-part .input-main .input-box {\n  margin-bottom: 10px;\n}\nion-content .content-part .input-main .input-box ion-item {\n  position: relative;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .content-part .input-main .input-box ion-item ion-label {\n  color: var(--light-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 0 0 6px;\n}\nion-content .content-part .input-main .input-box ion-item ion-input {\n  pointer-events: all;\n  --background: var(--white-clr);\n  border-radius: 10px;\n  border: 1px solid var(--theme-one-bg);\n  --padding-start: 10px;\n  --padding-end: 10px;\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  background: var(--white-clr);\n  position: relative;\n}\nion-content .content-part .input-main .input-box ion-item .date-icon {\n  margin: 0;\n  align-self: center;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0px;\n  margin: auto;\n  z-index: 2;\n  height: 20px;\n  width: 20px;\n}\nion-content .content-part .input-main .check-box {\n  margin-bottom: 6px;\n}\nion-content .content-part .input-main .check-box ion-item {\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\nion-content .content-part .input-main .check-box ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 20px;\n  --border-color: var(--black-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 1px;\n  --border-color-checked: var(--black-clr);\n  --ripple-color: none;\n  --border-radius: 6px;\n  --checkmark-color: var(--black-clr);\n}\nion-content .content-part .input-main .check-box ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n}\n\nion-footer {\n  background: var(--theme-one-bg);\n}\nion-footer ion-toolbar {\n  padding-bottom: 3px;\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--theme-one-bg);\n  text-align: center;\n}\nion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\nion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.dateModal {\n  --background: rgba(44, 39, 45, 0.2);\n}\n.dateModal::part(content) {\n  backdrop-filter: blur(6px);\n}\n.dateModal ion-content {\n  --background: transparent;\n}\n.dateModal ion-datetime {\n  border-radius: 8px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n}\n.dateModal ion-datetime .tile-font {\n  color: var(--theme-one-clr);\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.error-msg p {\n  position: relative;\n  padding-left: 20px;\n  font-size: 0.8125rem;\n  color: var(--red-clr);\n  margin: 5px 0 0;\n  font-weight: 400;\n}\n.error-msg p img {\n  width: 15px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 15px;\n  left: 0;\n}\n\n.red {\n  color: var(--red-clr);\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 140px;\n  height: 140px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 0px;\n  color: #fff;\n  display: flex;\n  /* place-items: center; */\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.athlete-bio {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0px 0 15px;\n}\n.athlete-bio h6 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
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

/***/ 76703:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/profile/edit-profile/edit-profile.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"top-card\">\n    <div class=\"title-part\">\n      <ion-item lines=\"none\" >\n        <ion-icon \n          *ngIf=\"isUserProfileComplete\"\n          (click)=\"goBack()\"\n          slot=\"start\"\n          name=\"arrow-back-outline\" \n        ></ion-icon>\n        <!-- <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"goBack()\">back</ion-back-button></ion-buttons> -->\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/single-logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n        <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n    <div *ngIf=\"commonService.profileUrl !== ''\" class=\"profile-part\">\n      <div class=\"upload-img\">\n        <img referrerpolicy=\"no-referrer\" [src]=\"commonService.profileUrl | profile\" />\n      </div>\n\n      <div class=\"edit-btn\">\n        <ion-button (click)=\"presentProfileActionSheet()\">\n          <img src=\"assets/images/button-auth.png\" />\n          <span>\n            <img src=\"assets/icon/camera-white.svg\" />\n          </span>\n        </ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"commonService.profileUrl ==''\" class=\"profile-part\">\n      <div class=\"inital\">\n        <span class=\"initial__span\">\n          {{nameInitials}}\n        </span>\n      </div>\n\n      <div class=\"edit-btn\">\n        <ion-button (click)=\"presentProfileActionSheet()\">\n          <img src=\"assets/images/button-auth.png\" />\n          <span>\n            <img src=\"assets/icon/camera-white.svg\" />\n          </span>\n        </ion-button>\n      </div>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"content-part\">\n    <div *ngIf=\"currentUserRole =='athlete'\" class=\"athlete-bio\">\n      <svg\n        width=\"25\"\n        height=\"25\"\n        viewBox=\"0 0 16 16\"\n        fill=\"#000\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M7.99935 0.666016C6.54896 0.666016 5.13113 1.09611 3.92517 1.9019C2.71921 2.7077 1.77928 3.85301 1.22424 5.193C0.669193 6.53299 0.523969 8.00748 0.806927 9.43001C1.08989 10.8525 1.78832 12.1592 2.8139 13.1848C3.83949 14.2104 5.14616 14.9088 6.56869 15.1918C7.99122 15.4747 9.46571 15.3295 10.8057 14.7745C12.1457 14.2194 13.291 13.2795 14.0968 12.0735C14.9026 10.8676 15.3327 9.44975 15.3327 7.99935C15.3304 6.05513 14.557 4.1912 13.1823 2.81643C11.8075 1.44166 9.94357 0.668309 7.99935 0.666016ZM7.99935 13.9993C6.81266 13.9993 5.65263 13.6475 4.66593 12.9882C3.67924 12.3289 2.9102 11.3918 2.45608 10.2954C2.00195 9.19909 1.88313 7.99269 2.11464 6.82881C2.34615 5.66492 2.9176 4.59582 3.75671 3.75671C4.59583 2.91759 5.66492 2.34615 6.82881 2.11464C7.9927 1.88313 9.1991 2.00195 10.2955 2.45607C11.3918 2.9102 12.3289 3.67923 12.9882 4.66593C13.6475 5.65262 13.9994 6.81266 13.9994 7.99935C13.9974 9.59005 13.3646 11.115 12.2399 12.2398C11.1151 13.3646 9.59006 13.9974 7.99935 13.9993ZM8.66602 5.33268H7.33269V3.99935H8.66602V5.33268ZM8.66602 11.9993H7.33269V6.66602H8.66602V11.9993Z\"\n        />\n      </svg>\n      <h6>To update your biography, please contact your BubbleApp manager.</h6>\n    </div>\n    <ng-container *ngIf=\"currentUserRole =='fan'\">\n      <div [formGroup]=\"fanProfileForm\" class=\"input-main\">\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\"\n              >Full name <span class=\"red\">*</span>\n            </ion-label>\n            <ion-input\n              data-cy=\"fullName\"\n              formControlName=\"fullName\"\n              type=\"text\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n          <div\n            *ngIf=\"isFormSubmitted && fanProfileForm.controls.fullName.invalid\"\n            class=\"error-msg\"\n            id=\"userNameError\"\n          >\n            <p><img src=\"assets/icon/info-red.svg\" /> Please enter valid full name</p>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Phone no.</ion-label>\n            <ion-input\n              data-cy=\"phone\"\n              type=\"text\"\n              appPhoneMask\n              formControlName=\"phone\"\n            ></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\"\n              >Birthdate <span class=\"red\">*</span></ion-label\n            >\n            <ion-input\n              id=\"open-modal\"\n              formControlName=\"birthDate\"\n              type=\"text\"\n            ><img class=\"date-icon\" slot=\"end\" src=\"assets/icon/calendar.svg\"></ion-input>\n            \n          </ion-item>\n          <div\n            *ngIf=\"isFormSubmitted && fanProfileForm.controls.birthDate.invalid\"\n            class=\"error-msg\"\n          >\n            <p><img src=\"assets/icon/info-red.svg\" /> Birthdate is required</p>\n          </div>\n        </div>\n        <ion-modal class=\"dateModal\" trigger=\"open-modal\" mode=\"ios\">\n          <ng-template>\n            <ion-content>\n               <!--  date picker format  change --> \n              <!-- <ion-datetime\n                [max]=\"currentDate\"\n                mode=\"ios\"\n                #dateTime\n                presentation=\"date\"\n                [showDefaultButtons]=\"true\"\n                (ionChange)=\"patchDateValue(dateTime.value)\"\n              > -->\n              <ion-datetime  mode=\"ios\" #dateTime1 displayFormat=\"DD.MM.YYYY\" \n              presentation=\"date\" prefer-wheel=\"true\"  [showDefaultButtons]=\"true\"\n              (ionChange)=\"patchDateValue(dateTime1.value)\">\n                <span slot=\"title\" class=\"tile-font\">Select Birthdate</span></ion-datetime\n              >\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n        <div class=\"check-box\">\n          <ion-item lines=\"none\" mode=\"ios\">\n            <ion-checkbox\n              formControlName=\"showBirthDate\"\n              name=\"checkbox\"\n              mode=\"md\"\n              slot=\"start\"\n            ></ion-checkbox>\n            <ion-label>Make my birthday visible to all users</ion-label>\n          </ion-item>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Team</ion-label>\n            <ion-input\n              data-cy=\"team\"\n              formControlName=\"teamName\"\n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Country</ion-label>\n            <ion-input\n              data-cy=\"country\"\n              formControlName=\"country\"\n              type=\"text\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n          <div\n            *ngIf=\"isFormSubmitted && fanProfileForm.controls.country.invalid\"\n            class=\"error-msg\"\n            id=\"userNameError\"\n          >\n            <p><img src=\"assets/icon/info-red.svg\" /> Country is invalid</p>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Team state</ion-label>\n            <ion-input\n              data-cy=\"state\"\n              formControlName=\"teamState\"\n              type=\"text\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n          <div\n            *ngIf=\"isFormSubmitted && fanProfileForm.controls.teamState.invalid\"\n            class=\"error-msg\"\n            id=\"userNameError\"\n          >\n            <p><img src=\"assets/icon/info-red.svg\" /> State is invalid</p>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"currentUserRole == 'athlete'\">\n      <div [formGroup]=\"athleteProfileForm\" class=\"input-main\">\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Team </ion-label>\n            <ion-input formControlName=\"teamName\" type=\"text\"></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Team State</ion-label>\n            <ion-input\n              formControlName=\"teamState\"\n              type=\"text\"\n              value=\"Houston Cougars football\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n        </div>\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Country</ion-label>\n            <ion-input\n              formControlName=\"country\"\n              type=\"text\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n        </div>\n\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">School/University</ion-label>\n            <ion-input\n              formControlName=\"universityName\"\n              type=\"text\"\n              appCharOnly\n            ></ion-input>\n          </ion-item>\n        </div>\n\n        <div class=\"input-box\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\" mode=\"ios\">Phone no.</ion-label>\n            <ion-input\n              type=\"text\"\n              appPhoneMask\n              formControlName=\"phone\"\n            ></ion-input>\n          </ion-item>\n        </div>\n      </div>\n    </ng-container>\n  </ion-grid>\n\n  <ion-grid class=\"buble-part\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-footer mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-button (click)=\" cancelEditProfile()\" class=\"white-btn\">\n      <img src=\"assets/icon/close-icon.png\" />\n    </ion-button>\n    <ion-button\n      data-cy=\"submit-info\"\n      (click)=\"presentModal()\"\n      class=\"white-btn\"\n    >\n      <img src=\"assets/icon/right-icon.png\" />\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-modal #editModal class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3>Edit Profile</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p>Are you sure, you want to edit your profile?</p>\n      </div>\n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button class=\"white-btn\" (click)=\"onclick_cancel()\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button\n          data-cy=\"submit-modal\"\n          (click)=\"onSubmit()\"\n          class=\"white-btn\"\n        >\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n";

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
//# sourceMappingURL=src_app_pages_home_profile_edit-profile_edit-profile_module_ts.js.map