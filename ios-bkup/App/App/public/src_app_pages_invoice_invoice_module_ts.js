(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_invoice_invoice_module_ts"],{

/***/ 8501:
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice/invoice-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageRoutingModule": () => (/* binding */ InvoicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.page */ 9529);




const routes = [{
  path: '',
  component: _invoice_page__WEBPACK_IMPORTED_MODULE_0__.InvoicePage
}, {
  path: 'privacy-policy',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacy-policy/privacy-policy.module */ 70886)).then(m => m.PrivacyPolicyPageModule)
}];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {};
InvoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], InvoicePageRoutingModule);


/***/ }),

/***/ 21259:
/*!*************************************************!*\
  !*** ./src/app/pages/invoice/invoice.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageModule": () => (/* binding */ InvoicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 8501);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page */ 9529);
/* harmony import */ var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-of-service/terms-of-service.component */ 26040);









let InvoicePageModule = class InvoicePageModule {};
InvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoicePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
  declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_1__.InvoicePage, _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_2__.TermsOfServiceComponent]
})], InvoicePageModule);


/***/ }),

/***/ 9529:
/*!***********************************************!*\
  !*** ./src/app/pages/invoice/invoice.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePage": () => (/* binding */ InvoicePage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invoice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page.html?ngResource */ 4543);
/* harmony import */ var _invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.page.scss?ngResource */ 58947);
/* harmony import */ var _invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-of-service/terms-of-service.component */ 26040);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../push-notification/push-notification.page */ 30493);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.page */ 86247);

















let InvoicePage = class InvoicePage {
  constructor(modalCtrl, popoverController, http, coreService, apiService, constantService, commonService, formBuilder, core, navController) {
    this.modalCtrl = modalCtrl;
    this.popoverController = popoverController;
    this.http = http;
    this.coreService = coreService;
    this.apiService = apiService;
    this.constantService = constantService;
    this.commonService = commonService;
    this.formBuilder = formBuilder;
    this.core = core;
    this.navController = navController;
    this.isTermsAndConditionAccepted = false;
    this.summarydetails = [];
    this.userData = [];
    this.dwollaRequestAmount = 0;
    this.badgeCount = 0;
    this.getRandomId = (min = 1000, max = 50000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log("num", num);
      this.invoiceNum = num;
      return num;
    };
  }
  ngOnInit() {
    this.getIpAddresss();
    this.initForm();
    this.summary();
    this.getUserDataFromStorage();
    this.getAthleteEarnings();
    this.getRandomId();
    this.getNotificationCount();
  }
  getUserDataFromStorage() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.userRole = await this.coreService.getUserRoleFromStorage();
      let userData = yield _this.coreService.getUserDataFromStorage();
      // this.nameInitials = this.commonService.getInitials(userData.fullName);
      _this.userData = userData;
      //this.userId = userData.id;
      //this.getScheduleDetails();
    })();
  }

  initForm() {
    this.bankDetailsForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      accountHolderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      accountNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      routingNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
    this.transferAmountForm = this.formBuilder.group({
      amount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.getAthleteEarnings();
      this.summary();
    }, 2000);
  }
  onClickCancel() {
    this.modalCtrl.dismiss();
    this.bankDetailsForm.reset();
    this.transferAmountForm.reset();
  }
  presentTermsAndServices() {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_3__.TermsOfServiceComponent,
        cssClass: "tandc-modal-new"
      });
      modal.present();
    })();
  }
  privacyPolicy() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__.PrivacyPolicyPage,
        cssClass: "tandc-modal-new"
      });
      modal.present();
    })();
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
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this4.popoverController.create({
        component: _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_4__.PushNotificationPage,
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
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  getToFixedDigits(event) {
    if (event.target.value !== '') event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  charOnly(evt) {
    var charCode = evt.charCode ? evt.charCode : evt.keyCode ? evt.keyCode : evt.which ? evt.which : 0;
    if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }
  getIpAddresss() {
    this.http.get('https://jsonip.com').subscribe(data => {
      console.log('ip ', data.ip);
      this.ipAddress = data.ip;
    });
  }
  getBankListing() {
    let request = {
      path: "core/payment/bank/list?ipAddress=" + this.ipAddress,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe(response => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.bankDetails = response.data;
          this.bankDetails.forEach((element, index) => {
            this.bankDetails[index]["nameInitials"] = this.commonService.getInitials(element.name);
          });
        } else {
          this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
        }
      });
    });
  }
  addBankAccount() {
    let data = this.bankDetailsForm.value;
    if (this.bankDetailsForm.valid && this.bankDetailsForm.value.accountNumber.length > 4) {
      let request = {
        path: "core/payment/bank/add?ipAddress=" + this.ipAddress,
        data: {
          ...this.bankDetailsForm.value
        },
        isAuth: true
      };
      this.apiService.post(request).subscribe(response => {
        if (response.status.code == this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_SUCCESS);
          let bankAddResponse = response.data;
          this.bankDetailsForm.reset();
          this.getBankListing();
          // this.onClickCancel();
        } else {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
        }
      });
    } else {
      this.coreService.showToastMessage("Please fill all required details", this.coreService.TOAST_ERROR);
      if (this.bankDetailsForm.value.accountNumber.length < 4) {
        this.coreService.showToastMessage("Account number must be add more then  4  digit.", this.coreService.TOAST_ERROR);
      }
    }
  }
  openTransferModal(id) {
    this.selectedBankId = id;
    this.transferModal.present();
    this.transferAmountForm.patchValue({
      amount: this.dwollaRequestAmount
    });
    this.transferAmountForm.controls['amount'].disable();
    //this.amountvalue= this.transferAmountForm.controls['amount'].value.toFixed(2);
    this.amountvalue = this.summarydetails.requestAmount.toFixed(2);
    console.log(this.transferAmountForm.controls['amount']);
  }
  convertStringToNum(value) {
    let amount = Number(value);
    return amount;
  }
  transferAmount() {
    if (this.transferAmountForm.valid) {
      // var amount = Number(this.transferAmountForm.value.amount);
      let request = {
        path: "core/payment/bank/transfer?ipAddress=" + this.ipAddress,
        data: {
          ...this.transferAmountForm.value,
          // "amount" : this.convertStringToNum(this.transferAmountForm.value.amount),
          "amount": this.amountvalue,
          "toBankAccountId": this.selectedBankId
        },
        isAuth: true
      };
      this.apiService.post(request).subscribe(response => {
        if (response.status.code == this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_SUCCESS);
          let bankAddResponse = response;
          console.log(bankAddResponse);
          this.onClickCancel();
          this.transferAmountForm.reset();
        } else {
          this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
        }
      });
    } else {
      this.coreService.showToastMessage("Please fill all required details", this.coreService.TOAST_ERROR);
    }
  }
  summary() {
    let request = {
      path: "core/event/athlete/summary",
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe(response => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          console.log("response", response);
          this.summarydetails = response.data;
          this.dwollaRequestAmount = response?.data?.dwollaRequestAmount;
        } else {
          this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
        }
      });
    });
  }
  back() {
    this.navController.navigateBack(["/tabs/schedule"]);
    this.commonService.$navigateSubject.next();
  }
  getAthleteEarnings() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userRole = yield _this5.core.getUserRoleFromStorage();
      if (userRole == 'athlete') {
        let request = {
          path: "core/event/athlete/cash",
          isAuth: true
        };
        _this5.apiService.get(request).subscribe(response => {
          if (response.status.code === _this5.constantService.STATUS_OK) {
            _this5.athleteEarnings = response?.data?.totalEarning;
          }
        });
      } else {
        return;
      }
    })();
  }
};
InvoicePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}];
InvoicePage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonModal]
  }],
  transferModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ["transferModal"]
  }]
};
InvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-invoice",
  template: _invoice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], InvoicePage);


/***/ }),

/***/ 86247:
/*!*********************************************************************!*\
  !*** ./src/app/pages/invoice/privacy-policy/privacy-policy.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page.html?ngResource */ 59974);
/* harmony import */ var _privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss?ngResource */ 288);
/* harmony import */ var _privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);






let PrivacyPolicyPage = class PrivacyPolicyPage {
  constructor(modalCtrl, commonService) {
    this.modalCtrl = modalCtrl;
    this.commonService = commonService;
  }
  ngOnInit() {}
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
};
PrivacyPolicyPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
}];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-privacy-policy',
  template: _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrivacyPolicyPage);


/***/ }),

/***/ 26040:
/*!******************************************************************************!*\
  !*** ./src/app/pages/invoice/terms-of-service/terms-of-service.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsOfServiceComponent": () => (/* binding */ TermsOfServiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_of_service_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-of-service.component.html?ngResource */ 56310);
/* harmony import */ var _terms_of_service_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-of-service.component.scss?ngResource */ 61657);
/* harmony import */ var _terms_of_service_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_terms_of_service_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);






let TermsOfServiceComponent = class TermsOfServiceComponent {
  constructor(modalCtrl, commonService) {
    this.modalCtrl = modalCtrl;
    this.commonService = commonService;
  }
  ngOnInit() {}
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
};
TermsOfServiceComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
}];
TermsOfServiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-terms-of-service',
  template: _terms_of_service_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_terms_of_service_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TermsOfServiceComponent);


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

/***/ 58947:
/*!************************************************************!*\
  !*** ./src/app/pages/invoice/invoice.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 15px;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar .title-part {\n  padding-right: 15px;\n}\nion-header ion-toolbar .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-header ion-toolbar .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-header ion-toolbar .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head img {\n  max-width: 100%;\n  width: 140px;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.675rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-header ion-toolbar .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-header ion-toolbar .title-part ion-item .notification img {\n  width: 20px;\n}\nion-header ion-toolbar .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  min-height: 280px;\n  padding-top: 90px;\n  background: url('invoice.jpg') no-repeat top center;\n  background-size: cover;\n}\nion-content .main-screen .top-screen .summry-head ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-label h5 {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-label p {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-text {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head .ammount {\n  text-align: center;\n}\nion-content .main-screen .top-screen .summry-head .ammount h4 {\n  font-size: 1.375rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n}\nion-content .main-screen .top-screen .summry-head .ammount span {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n  text-align: center;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -6px 7px #196087;\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .main-part .invoice-data .head {\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .head h3 {\n  font-size: 1.25rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 700;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head {\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-label h4 {\n  font-size: 1.375rem;\n  font-weight: 600;\n  color: var(--white-clr);\n  margin: 5px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-label span {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text h4 {\n  font-size: 1.375rem;\n  font-weight: 600;\n  color: var(--white-clr);\n  margin: 5px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text span {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt {\n  border-top: 1px solid var(--white-clr);\n  border-bottom: 1px solid var(--white-clr);\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data {\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  --min-height: 21px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n  align-self: flex-start;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label span {\n  color: #004F79;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle {\n  border-top: 1px solid var(--white-clr);\n  border-bottom: 1px solid var(--white-clr);\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item {\n  --min-height: 36px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-label {\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-footer {\n  background: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n}\nion-footer ion-toolbar {\n  background: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n}\nion-footer ion-toolbar .footer-btn {\n  text-align: center;\n}\nion-footer ion-toolbar .footer-btn p {\n  margin: 0;\n}\nion-footer ion-toolbar .footer-btn img {\n  max-width: 100%;\n  width: 100px;\n}\nion-footer ion-toolbar .footer-btn ion-button {\n  font-size: 1rem;\n  color: var(--white-clr);\n  margin: 10px 0;\n  padding: 0;\n  --background: var(--green-clr);\n  --background-focused: var(--green-clr);\n  --background-hover: var(--green-clr);\n  --background-activated: var(--green-clr);\n  --box-shadow: none;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  text-transform: capitalize;\n}\n\n.client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .input-box {\n  padding: 2px 0 2px;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-label {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating .label-floating {\n  transform: translate3d(0, 13px, 0) !important;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating.item-has-value .label-floating, .client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  transform: translate3d(0, -12px, 0) !important;\n  z-index: 9999;\n  background: var(--white-bg);\n  --display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-input,\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-textarea {\n  background-color: white;\n  margin-top: 0px;\n  color: var(--text-black);\n  --color: var(--text-black);\n  font-size: 0.875rem;\n  --placeholder-color: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .input-box .transparent-input {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: none;\n  margin-top: 0px;\n  color: var(--text-black);\n  font-size: 0.875rem;\n  background-color: white;\n}\n.client-filter-modal .inner-content .main-screen .input-box .transparent-input::placeholder {\n  color: var(--text-gray);\n  opacity: 0.5;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main {\n  display: flex;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data {\n  margin: 0 5px;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color:var(--text-gray);\n  margin-right: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: var(--green-clr);\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--white-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--white-clr);\n  --border-color-checked: var(--theme-one-clr);\n  align-self: flex-start;\n  margin-top: 10px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.75rem;\n  color: var(--text-black);\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label span {\n  font-weight: 800;\n  display: inline-block;\n  position: relative;\n  z-index: 9;\n  margin-left: 5px;\n  color: var(--theme-one-clr);\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 52px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.tandc-modal ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\nion-modal.privacy-policy-modal ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.privacy-policy-modal ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.privacy-policy-modal ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n  margin-right: 15px;\n  font-size: 1.5rem;\n}\nion-modal.privacy-policy-modal ion-content {\n  --background: #fff;\n}\nion-modal.privacy-policy-modal ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.privacy-policy-modal ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\n.radio-box ion-radio-group {\n  display: flex;\n}\n.radio-box ion-radio-group ion-item {\n  --background: transparent;\n  --padding-start:0;\n  --padding-inline-end:0;\n}\n.radio-box ion-radio-group ion-radio {\n  margin: 0;\n  margin-right: 7px;\n}\n.radio-box ion-radio-group ion-label {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.bank-list {\n  text-align: left;\n  position: relative;\n  z-index: 9;\n}\n.bank-list span {\n  height: 45px;\n  width: 45px;\n  border-radius: 45px;\n  line-height: 45px;\n  display: inline-block;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--white-bg);\n  background: var(--theme-one-clr);\n}\n.bank-list p {\n  color: var(--text-gray);\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.bank-list .bank-name {\n  padding: 5px 5px 5px 0px;\n  display: inline-block;\n  margin: 4px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/invoice/invoice.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0;\n  position: absolute;\n  top: 15px;\n  left: 0;\n  z-index: 9;\n}\nion-header ion-toolbar .title-part {\n  padding-right: 15px;\n}\nion-header ion-toolbar .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-header ion-toolbar .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-header ion-toolbar .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head img {\n  max-width: 100%;\n  width: 140px;\n}\nion-header ion-toolbar .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.675rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-header ion-toolbar .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n}\nion-header ion-toolbar .title-part ion-item .notification img {\n  width: 20px;\n}\nion-header ion-toolbar .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\n\nion-content {\n  --background: #6bbde9;\n  position: relative;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-screen {\n  min-height: 280px;\n  padding-top: 90px;\n  background: url(../../../assets/images/invoice.jpg) no-repeat top center;\n  background-size: cover;\n}\nion-content .main-screen .top-screen .summry-head ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-label h5 {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-label p {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head ion-item ion-text {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n}\nion-content .main-screen .top-screen .summry-head .ammount {\n  text-align: center;\n}\nion-content .main-screen .top-screen .summry-head .ammount h4 {\n  font-size: 1.375rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n}\nion-content .main-screen .top-screen .summry-head .ammount span {\n  font-size: 0.75rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 400;\n  text-align: center;\n}\nion-content .main-screen .content-part {\n  padding: 15px 0;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(60.17% 29.84% at 50% 50%, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px -6px 7px #196087;\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .main-part {\n  position: relative;\n  z-index: 1;\n}\nion-content .main-screen .content-part .main-part .invoice-data .head {\n  padding: 10px 15px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .head h3 {\n  font-size: 1.25rem;\n  color: var(--white-clr);\n  margin: 0;\n  font-weight: 700;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table {\n  padding: 0 15px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head {\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-label h4 {\n  font-size: 1.375rem;\n  font-weight: 600;\n  color: var(--white-clr);\n  margin: 5px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-label span {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text h4 {\n  font-size: 1.375rem;\n  font-weight: 600;\n  color: var(--white-clr);\n  margin: 5px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-head ion-item ion-text span {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt {\n  border-top: 1px solid var(--white-clr);\n  border-bottom: 1px solid var(--white-clr);\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-tlt ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data {\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  --min-height: 21px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n  align-self: flex-start;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-label span {\n  color: #004F79;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-data ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle {\n  border-top: 1px solid var(--white-clr);\n  border-bottom: 1px solid var(--white-clr);\n  margin: 10px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item {\n  --min-height: 36px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  align-items: center;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item i {\n  font-style: normal;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0 10px 0px 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-label {\n  margin: 0;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-label h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-text {\n  text-align: right;\n}\nion-content .main-screen .content-part .main-part .invoice-data .invoice-table .table-totle ion-item ion-text h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white-clr);\n  margin: 0px 0 0px;\n}\nion-content .main-screen .content-part .buble-part {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .content-part .buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\nion-content .main-screen .content-part .buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-footer {\n  background: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n}\nion-footer ion-toolbar {\n  background: var(--theme-one-clr);\n  --background: var(--theme-one-clr);\n}\nion-footer ion-toolbar .footer-btn {\n  text-align: center;\n}\nion-footer ion-toolbar .footer-btn p {\n  margin: 0;\n}\nion-footer ion-toolbar .footer-btn img {\n  max-width: 100%;\n  width: 100px;\n}\nion-footer ion-toolbar .footer-btn ion-button {\n  font-size: 1rem;\n  color: var(--white-clr);\n  margin: 10px 0;\n  padding: 0;\n  --background: var(--green-clr);\n  --background-focused: var(--green-clr);\n  --background-hover: var(--green-clr);\n  --background-activated: var(--green-clr);\n  --box-shadow: none;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  text-transform: capitalize;\n}\n\n.client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .input-box {\n  padding: 2px 0 2px;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-label {\n  margin: 0;\n  padding: 0 10px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating .label-floating {\n  -webkit-transform: translate3d(0, 13px, 0) !important;\n  transform: translate3d(0, 13px, 0) !important;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating.item-has-value .label-floating, .client-filter-modal .inner-content .main-screen .input-box ion-item.item-label-floating.item-has-focus .label-floating {\n  -webkit-transform: translate3d(0, -12px, 0) !important;\n  transform: translate3d(0, -12px, 0) !important;\n  z-index: 9999;\n  background: var(--white-bg);\n  --display: inline-block;\n  width: fit-content;\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-input,\n.client-filter-modal .inner-content .main-screen .input-box ion-item ion-textarea {\n  background-color: white;\n  margin-top: 0px;\n  color: var(--text-black);\n  --color: var(--text-black);\n  font-size: 0.875rem;\n  --placeholder-color: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .input-box .transparent-input {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: none;\n  margin-top: 0px;\n  color: var(--text-black);\n  font-size: 0.875rem;\n  background-color: white;\n}\n.client-filter-modal .inner-content .main-screen .input-box .transparent-input::placeholder {\n  color: var(--text-gray);\n  opacity: 0.5;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main {\n  display: flex;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-text {\n  flex: 1;\n  align-self: center;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-text h5 {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data {\n  margin: 0 5px;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item ion-label {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .radio-btn .radio-main .radio-data ion-item ion-radio {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  --color-checked: var(--theme-one-clr);\n  --color:var(--text-gray);\n  margin-right: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: var(--green-clr);\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--white-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--white-clr);\n  --border-color-checked: var(--theme-one-clr);\n  align-self: flex-start;\n  margin-top: 10px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label {\n  word-break: break-word;\n  white-space: normal;\n  font-size: 0.75rem;\n  color: var(--text-black);\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label span {\n  font-weight: 800;\n  display: inline-block;\n  position: relative;\n  z-index: 9;\n  margin-left: 5px;\n  color: var(--theme-one-clr);\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 52px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.tandc-modal ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\nion-modal.privacy-policy-modal ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.privacy-policy-modal ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.privacy-policy-modal ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n  margin-right: 15px;\n  font-size: 1.5rem;\n}\nion-modal.privacy-policy-modal ion-content {\n  --background: #fff;\n}\nion-modal.privacy-policy-modal ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.privacy-policy-modal ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}\n\n.radio-box ion-radio-group {\n  display: flex;\n}\n.radio-box ion-radio-group ion-item {\n  --background: transparent;\n  --padding-start:0;\n  --padding-inline-end:0;\n}\n.radio-box ion-radio-group ion-radio {\n  margin: 0;\n  margin-right: 7px;\n}\n.radio-box ion-radio-group ion-label {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.bank-list {\n  text-align: left;\n  position: relative;\n  z-index: 9;\n}\n.bank-list span {\n  height: 45px;\n  width: 45px;\n  border-radius: 45px;\n  line-height: 45px;\n  display: inline-block;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--white-bg);\n  background: var(--theme-one-clr);\n}\n.bank-list p {\n  color: var(--text-gray);\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.bank-list .bank-name {\n  padding: 5px 5px 5px 0px;\n  display: inline-block;\n  margin: 4px;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 288:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/invoice/privacy-policy/privacy-policy.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-header {\n  text-align: center;\n}\nion-header ion-toolbar {\n  position: relative;\n}\nion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n  margin-right: 15px;\n  font-size: 1.5rem;\n}\n\nion-modal.tandc-modal-new ion-header {\n  text-align: center;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal-new ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal-new ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal-new ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/invoice/privacy-policy/privacy-policy.page.scss"],"names":[],"mappings":"AAAA;EAAW,kBAAA;AAEX;AADI;EAAY,kBAAA;AAIhB;AAHQ;EAAU,mBAAA;EAAqB,eAAA;EAAiB,eAAA;EAAiB,2BAAA;AASzE;AANS;EAAS,wBAAA;EAA0B,kBAAA;EAAoB,iBAAA;AAWhE;;AALI;EAAW,kBAAA;AASf;AARM;EAAY,kBAAA;AAWlB;AAVU;EAAU,mBAAA;EAAqB,eAAA;EAAiB,eAAA;EAAiB,2BAAA;AAgB3E;AAbW;EAAS,wBAAA;AAgBpB;AAZI;EACE,kBAAA;AAcN;AAbM;EAAS,SAAA;EAAW,aAAA;AAiB1B;AAhBQ;EAAE,mBAAA;EAAqB,wBAAA;EAA0B,gBAAA;EAAkB,gBAAA;EAAkB,mBAAA;EAAqB,iBAAA;AAwBlH","sourcesContent":["ion-header {\n  text-align: center;\n}\nion-header ion-toolbar {\n  position: relative;\n}\nion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n  margin-right: 15px;\n  font-size: 1.5rem;\n}\n\nion-modal.tandc-modal-new ion-header {\n  text-align: center;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal-new ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal-new ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal-new ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61657:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/invoice/terms-of-service/terms-of-service.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-modal.tandc-modal-new ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal-new ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal-new ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal-new ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/invoice/terms-of-service/terms-of-service.component.scss"],"names":[],"mappings":"AAEM;EAAY,kBAAA;AAAlB;AACU;EAAU,mBAAA;EAAqB,eAAA;EAAiB,eAAA;EAAiB,2BAAA;AAK3E;AAFW;EAAS,wBAAA;AAKpB;AADI;EACE,kBAAA;AAGN;AAFM;EAAS,SAAA;EAAW,aAAA;AAM1B;AALQ;EAAE,mBAAA;EAAqB,wBAAA;EAA0B,gBAAA;EAAkB,gBAAA;EAAkB,mBAAA;EAAqB,iBAAA;AAalH","sourcesContent":["ion-modal.tandc-modal-new ion-header ion-toolbar {\n  position: relative;\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-title {\n  align-items: center;\n  padding: 0 15px;\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n}\nion-modal.tandc-modal-new ion-header ion-toolbar ion-icon {\n  color: var(--text-black);\n}\nion-modal.tandc-modal-new ion-content {\n  --background: #fff;\n}\nion-modal.tandc-modal-new ion-content ion-grid {\n  margin: 0;\n  padding: 15px;\n}\nion-modal.tandc-modal-new ion-content ion-grid p {\n  font-size: 0.875rem;\n  color: var(--text-black);\n  margin: 0 0 10px;\n  font-weight: 400;\n  text-align: justify;\n  line-height: 21px;\n}"],"sourceRoot":""}]);
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

/***/ 4543:
/*!************************************************************!*\
  !*** ./src/app/pages/invoice/invoice.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"title-part\">\n     \n      <ion-item lines=\"none\">\n        <ion-icon\n          (click)=\"back()\"\n          slot=\"start\"\n          name=\"arrow-back-outline\"\n        ></ion-icon>\n\n        <ion-label>\n          <ion-grid class=\"logo-head\">\n            <img src=\"assets/images/logo.svg\" />\n            <div class=\"nil4all\">\n              <span>#NIL4ALL</span>\n            </div>\n          </ion-grid>\n        </ion-label>\n\n        <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n          <img src=\"assets/icon/notification.svg\" />\n          <span *ngIf=\"this.badgeCount != 0\">\n            <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n            <i *ngIf=\"this.badgeCount > 99\">99+</i>\n          </span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"\"\n      pullingText=\"\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-screen\">\n    <div class=\"top-screen\">\n      <div class=\"summry-head\">\n        <ion-item lines=\"none\">\n          <ion-label>\n            <h5>{{userData?.fullName}}</h5>\n            <p>Bubble Cash</p>\n          </ion-label>\n          <ion-text slot=\"end\">\n            <div class=\"ammount\">\n              {{summarydetails?.date | date:'MMM d, y'}}\n            </div>\n          </ion-text>\n        </ion-item>\n        <div class=\"ammount\">\n          <h4 *ngIf=\"athleteEarnings!=null\">${{athleteEarnings | number: '1.0-2'}}</h4>\n          <h4 *ngIf=\"athleteEarnings==null\">\n            $ 0\n          </h4>\n    \n          <span>Total Bubble Cash</span>\n        </div>\n      </div>\n\n      <ion-grid class=\"overlay-bg\"></ion-grid>\n    </div>\n\n    <ion-grid class=\"content-part\">\n      <div class=\"main-part\">\n        <div class=\"invoice-data\">\n          <div class=\"head\">\n            <h3>Payment Summary</h3>\n          </div>\n          <div class=\"invoice-table\">\n            <div class=\"table-head\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <span>INVOICE</span>\n                  <h4>#{{invoiceNum}}</h4>\n                </ion-label>\n                <ion-text>\n                  <span>DATE</span>\n                  <h4>{{summarydetails?.date | date:'MMM d, y'}}</h4>\n                </ion-text>\n              </ion-item>\n            </div>\n            <div class=\"table-tlt\">\n              <ion-item lines=\"none\">\n                <i slot=\"start\">#</i>\n                <ion-label>\n                  <h4>DESCRIPTION</h4>\n                </ion-label>\n                <ion-text>\n                  <h4>CHARGE</h4>\n                </ion-text>\n              </ion-item>\n            </div>\n            <div class=\"table-data\">\n            \n              <ion-item lines=\"none\" *ngFor=\"let summary of summarydetails?.summaryList\n              \">\n                <i slot=\"start\">{{summary.number}}</i>\n                <ion-label>\n                  <h4>{{summary.title}} <span>{{summary.fees}}</span></h4>\n                </ion-label>\n                <ion-text>\n                  <h4>$ {{summary.amount | number: '1.0-2'}}</h4>\n                </ion-text>\n              </ion-item>\n\n              <!-- <ion-item lines=\"none\">\n                <i slot=\"start\">2</i>\n                <ion-label>\n                  <h4>Processing Fees <span>(3.9%)</span></h4>\n                </ion-label>\n                <ion-text>\n                  <h4>$ 125.39</h4>\n                </ion-text>\n              </ion-item>\n\n              <ion-item lines=\"none\">\n                <i slot=\"start\">3</i>\n                <ion-label>\n                  <h4>BubbleApp Service Fees <span>(5%)</span></h4>\n                </ion-label>\n                <ion-text>\n                  <h4>$ 250.00</h4>\n                </ion-text>\n              </ion-item>\n\n              <ion-item lines=\"none\">\n                <i slot=\"start\">4</i>\n                <ion-label>\n                  <h4>Bank Transaction Fees <span>(5%)</span></h4>\n                </ion-label>\n                <ion-text>\n                  <h4>$ 250.00</h4>\n                </ion-text>\n              </ion-item> -->\n            </div>\n\n            <div class=\"table-totle\">\n              <ion-item lines=\"none\">\n                \n                <ion-label>\n                  <h4>Payment Amount</h4>\n                </ion-label>\n                <ion-text>\n                  <h4 *ngIf=\"athleteEarnings!=null\">$ {{(summarydetails.dwollaRequestAmount)?.toFixed(2)\n                  }}</h4>\n                  <h4 *ngIf=\"athleteEarnings==null\">$ 0</h4>\n                </ion-text>\n              </ion-item>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ion-grid class=\"buble-part\">\n        <div class=\"dots-bubble\">\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n          <div class=\"dots\"></div>\n        </div>\n      </ion-grid>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"footer-btn\">\n      <p><img src=\"assets/images/bb-to-home.png\" /></p>\n      <ion-button id=\"BubbleCashtoBank\" (click)=\"getBankListing()\" >Bubble Cash to Bank</ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-modal trigger=\"BubbleCashtoBank\" class=\"client-filter-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <div class=\"icon-header\">\n        <img src=\"assets/icon/header-bubble.png\" />\n        <h3>Account Details</h3>\n      </div>\n      <div class=\"top-noch\">\n        <img src=\"assets/images/modal-tope.png\" />\n      </div>\n    </ion-header>\n\n   \n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <ion-row [formGroup]=\"bankDetailsForm\">\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-input placeholder=\"Bank Name\" formControlName=\"name\"></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/user-icon.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-input placeholder=\"Account Holder Name\" type=\"text\"  (keypress)=\"charOnly($event)\" formControlName=\"accountHolderName\"></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/user-icon.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-input placeholder=\"Account Number\" (keypress)=\"numberOnly($event)\" maxlength=\"20\" formControlName=\"accountNumber\"></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/document.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"input-box\">\n              <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                <ion-input placeholder=\"Routing Number\" (keypress)=\"numberOnly($event)\" maxlength=\"9\" formControlName=\"routingNumber\"></ion-input>\n                <img\n                  class=\"ion-align-items-center\"\n                  slot=\"end\"\n                  src=\"assets/icon/document.svg\"\n                />\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"radio-box\">\n              \n              <ion-radio-group formControlName=\"accountType\" mode=\"md\">\n                <ion-item lines=\"none\">\n                  <ion-label >Checking</ion-label>\n                  <ion-radio slot=\"start\"  value=\"CHECKING\"  ></ion-radio>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <ion-label>Saving </ion-label>\n                    <ion-radio slot=\"start\"  value=\"SAVING\" ></ion-radio>\n                </ion-item>                      \n              </ion-radio-group>\n            </div>\n\n            <div class=\"bank-list\">\n              <div class=\"bank-name\" *ngFor=\"let bank of bankDetails\" (click)=\"openTransferModal(bank.id)\">\n                <span>{{bank?.nameInitials}}</span>\n                <p>{{bank?.name}}</p>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"save-card\">\n          <!-- <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>Save your Account Details For Future Transfer</ion-label>\n            <ion-checkbox slot=\"start\" mode=\"ios\"></ion-checkbox>\n          </ion-item> -->\n          <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label\n              >By clicking this you agree to our <span (click)=\"presentTermsAndServices()\" id=\"TermsOfUse\"\n                >Terms of Service </span> and<span id=\"TermsOfUse\" (click)=\"privacyPolicy()\">Privacy Policy.</span>\n<!--              , as well as our-->\n<!--              partner Dwolla’s <span id=\"TermsOfUse\">Terms of Service</span> and-->\n<!--              <span id=\"TermsOfUse\">Privacy Policy</span>.-->\n            </ion-label>\n            <ion-checkbox slot=\"start\" mode=\"ios\"  [(ngModel)]=\"isTermsAndConditionAccepted\"></ion-checkbox>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n \n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button class=\"white-btn\" (click)=\"onClickCancel()\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button class=\"white-btn\" id=\"termsofuse\" [disabled]=\"!isTermsAndConditionAccepted\" (click)=\"addBankAccount()\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n        <div class=\"nil4all\">\n          <span>#NIL4ALL</span>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n    <ion-grid class=\"bg-bubble\">\n      <div class=\"dots-bubble\">\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n      </div>\n    </ion-grid>\n  </ng-template>\n</ion-modal>\n\n<ion-modal #transferModal class=\"client-filter-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <div class=\"icon-header\">\n        <img src=\"assets/icon/header-bubble.png\" />\n        <h3>Transfer Payment</h3>\n      </div>\n      <div class=\"top-noch\">\n        <img src=\"assets/images/modal-tope.png\" />\n      </div>\n    </ion-header>\n\n    \n      <div class=\"inner-content\">\n        <div class=\"main-screen\">\n          <ion-row [formGroup]=\"transferAmountForm\">\n            <ion-col size=\"12\">\n              <div class=\"input-box\">\n                <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                  <ion-input placeholder=\"Amount\" \n                             (ionBlur)=\"getToFixedDigits($event)\" \n                             (keypress)=\"numberOnly($event)\" \n                             [(ngModel)]=\"amountvalue\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </ion-input>\n                  <img\n                    class=\"ion-align-items-center\"\n                    slot=\"end\"\n                    src=\"assets/icon/document.svg\"\n                  />\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <div class=\"input-box\">\n                <ion-item lines=\"none\" class=\"ion-align-items-center\">\n                  <ion-input placeholder=\"Description\" formControlName=\"details\" ></ion-input>\n                  <img\n                    class=\"ion-align-items-center\"\n                    slot=\"end\"\n                    src=\"assets/icon/user-icon.svg\"\n                  />\n                </ion-item>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    \n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button class=\"white-btn\" (click)=\"onClickCancel()\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button class=\"white-btn\" id=\"termsofuse\" (click)=\"transferAmount()\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n        <div class=\"nil4all\">\n          <span>#NIL4ALL</span>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n    <ion-grid class=\"bg-bubble\">\n      <div class=\"dots-bubble\">\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n        <div class=\"dots\"></div>\n      </div>\n    </ion-grid>\n  </ng-template>\n</ion-modal>\n";

/***/ }),

/***/ 59974:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/invoice/privacy-policy/privacy-policy.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Privacy-Policy</ion-title>\n    <ion-icon\n    slot=\"end\"\n    name=\"close-outline\"\n    (click)=\"onClickCancel()\"\n  ></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"content-part\">\n    <p [innerHtml]=\"this.commonService.privacypolicy\"></p>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 56310:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/invoice/terms-of-service/terms-of-service.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Modal T&C -->\n\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Terms of Use</ion-title>\n    <ion-icon\n      slot=\"end\"\n      name=\"close-outline\"\n      (click)=\"onClickCancel()\"\n    ></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"content-part\">\n    <p [innerHtml]=\"this.commonService.termconditions\"></p>\n  </ion-grid>\n</ion-content>\n";

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
//# sourceMappingURL=src_app_pages_invoice_invoice_module_ts.js.map