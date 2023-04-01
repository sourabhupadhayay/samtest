(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile-view_bid-payment_bid-payment_module_ts"],{

/***/ 60201:
/*!******************************************************************************!*\
  !*** ./src/app/pages/profile-view/bid-payment/bid-payment-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidPaymentPageRoutingModule": () => (/* binding */ BidPaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bid_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bid-payment.page */ 23039);




const routes = [{
  path: ":id",
  component: _bid_payment_page__WEBPACK_IMPORTED_MODULE_0__.BidPaymentPage
}];
let BidPaymentPageRoutingModule = class BidPaymentPageRoutingModule {};
BidPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BidPaymentPageRoutingModule);


/***/ }),

/***/ 6813:
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile-view/bid-payment/bid-payment.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidPaymentPageModule": () => (/* binding */ BidPaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bid_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bid-payment-routing.module */ 60201);
/* harmony import */ var _bid_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bid-payment.page */ 23039);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);








let BidPaymentPageModule = class BidPaymentPageModule {};
BidPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _bid_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.BidPaymentPageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule],
  declarations: [_bid_payment_page__WEBPACK_IMPORTED_MODULE_1__.BidPaymentPage]
})], BidPaymentPageModule);


/***/ }),

/***/ 23039:
/*!********************************************************************!*\
  !*** ./src/app/pages/profile-view/bid-payment/bid-payment.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidPaymentPage": () => (/* binding */ BidPaymentPage)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bid_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bid-payment.page.html?ngResource */ 75418);
/* harmony import */ var _bid_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bid-payment.page.scss?ngResource */ 60161);
/* harmony import */ var _bid_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bid_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common.service */ 33507);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _tabs_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tabs/payment/payment.component */ 13985);
/* harmony import */ var _push_notification_push_notification_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../push-notification/push-notification.page */ 30493);
/* harmony import */ var _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fresha/capacitor-plugin-applepay */ 20323);

















let BidPaymentPage = class BidPaymentPage {
  constructor(modalCtrl, coreService, apiService, route, router, constantService, commonService, renderer, _location, decimalPipe, popoverController) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.apiService = apiService;
    this.route = route;
    this.router = router;
    this.constantService = constantService;
    this.commonService = commonService;
    this.renderer = renderer;
    this._location = _location;
    this.decimalPipe = decimalPipe;
    this.popoverController = popoverController;
    this.eventData = null;
    this.paymentType = "APPLE_PAYMENT";
    this.paymentData = null;
    this.currentBidAmount = "";
    this.MaxAmount = "";
    this.badgeCount = 0;
    this.minBidAmountRequired = 0;
    this.hasPreviosBid = false;
    // Apple pay variable
    this.PaymentSummaryItem = {
      label: "bid",
      amount: ""
    };
  }
  ngOnInit() {
    this.squarePaymentScript();
    this.getEventDataFromParams();
    this.getNotificationCount();
  }
  squarePaymentScript() {
    const script = this.renderer.createElement("script");
    if (this.commonService.publicInfo?.squareEnvironment == "PRODUCTION") {
      script.src = `https://web.squarecdn.com/v1/square.js`;
    } else {
      // script.src = `https://js.squareupsandbox.com/v2/paymentform`;  //deprecated
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
    }
    this.renderer.appendChild(document.head, script);
  }
  onClickCancel() {
    this.modalCtrl.dismiss(false);
  }
  goBack() {
    this._location.back();
  }
  presentPaymentModal() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.bidAmount < _this.eventData?.minBid || !_this.bidAmount) {
        if (_this.hasPreviosBid) {
          _this.coreService.showToastMessage(`Your minimum bid has to be  $${_this.minBidAmountRequired}.00`, _this.coreService.TOAST_ERROR);
        } else {
          _this.coreService.showToastMessage(`Please enter bid amount`, _this.coreService.TOAST_ERROR);
        }
        return;
      }
      const modal = yield _this.modalCtrl.create({
        component: _tabs_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__.PaymentComponent,
        cssClass: "client-filter-modal",
        componentProps: {
          isBiddingForEvent: true
        }
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onDidDismiss();
      _this.paymentData = data;
      _this.paymentType = _this.paymentData?.paymentType;
      if (!data) {
        return;
      }
    })();
  }
  getEventDataFromParams() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(params => {
      this.eventId = params.get("id");
      this.coreService.presentLoader(this.constantService.WAIT);
      let request = {
        path: "core/event/details/" + params.get("id")
      };
      return this.apiService.get(request);
    })).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventData = response.data;
        this.nameInitials = this.commonService.getInitials(this.eventData.athleteName);
        this.getMaximumBidForEvent();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  convertNumberToDecimal() {
    if (!this.bidAmount) {
      return;
    }
    // this.bidAmount = this.decimalPipe.transform(this.bidAmount, "1.2-2");
  }

  getMaximumBidForEvent() {
    let request = {
      path: "core/event/bid/max/" + this.eventId,
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (response.data.currentBid != null) {
          this.currentBidAmount = response.data.currentBid.totalAmount;
        }
        if (response.data.maxBid != null) {
          this.MaxAmount = response.data.maxBid.totalAmount;
        }
        if (this.currentBidAmount) {
          this.hasPreviosBid = true;
        } else {
          this.hasPreviosBid = false;
        }
        this.minBidAmountRequired = response?.data?.minBidAmount;
        console.log("minReq ", this.minBidAmountRequired, this.hasPreviosBid);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  onPayment() {
    if (this.checkIsBidEntered()) return;
    if (this.checkPaymentData()) return;
    let request = {
      path: "core/event/bid/save",
      data: {
        eventId: this.eventId,
        nonce: this.paymentData.nonce,
        paymentType: this.paymentData?.paymentType,
        cardId: this.paymentData?.cardId,
        totalAmount: parseFloat(this.bidAmount)
      },
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.paymentType == 'APPLE_PAYMENT') {
          _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_9__.ApplePay.completeLastPayment({
            status: 'success'
          }).then(res => {
            console.log("complete", res);
          });
        }
        this.modalCtrl.dismiss();
        this.bidAmount = '';
        this.router.navigate(["waitlist/event/" + this.eventId]);
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  checkPaymentData() {
    if (!this.paymentData) {
      this.coreService.showToastMessage(`Please enter valid payment details`, this.coreService.TOAST_ERROR);
      return true;
    }
    return false;
  }
  checkIsBidEntered() {
    if (this.bidAmount < this.eventData?.minBid || !this.bidAmount) {
      this.coreService.showToastMessage(`Please enter bid amount greater than $${this.eventData?.minBid}`, this.coreService.TOAST_ERROR);
      return true;
    }
    return false;
  }
  getToFixedDigits(event) {
    if (event.target.value !== '') event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  validatePreviosBidAmount(e) {
    let input = e.target.value;
    if (this.hasPreviosBid) {
      if (input < this.minBidAmountRequired) {
        console.log('invalid');
        this.bidAmount = '';
        this.coreService.showToastMessage("Your minimum bid has to be  $" + this.minBidAmountRequired + `.00`, this.coreService.TOAST_ERROR);
      } else {
        console.log("valid");
        this.commonService.bidAmount = this.bidAmount;
      }
    } else {
      console.log("first time bid");
      this.commonService.bidAmount = this.bidAmount;
      return;
    }
  }
  numberOnly(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
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
  // Apple pay using square
  applePayPayment() {
    this.PaymentSummaryItem.amount = parseFloat(this.commonService.bidAmount).toString();
    console.log("apple pay ment", this.PaymentSummaryItem);
    _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_9__.ApplePay.canMakePayments().then(res => {
      console.log("can make payment", res);
      try {
        _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_9__.ApplePay.initiatePayment({
          merchantIdentifier: "merchant.com.bubbleapp",
          countryCode: "US",
          currencyCode: "USD",
          supportedCountries: ["United States"],
          supportedNetworks: ["amex", "chinaUnionPay", "cartesBancaires", "discover", "eftpos", "electron", "idCredit", "interac", "JCB", "maestro", "masterCard", "privateLabel", "quicPay", "suica", "visa", "vPay"],
          summaryItems: [this.PaymentSummaryItem],
          requiredShippingContactFields: ["emailAddress"],
          requiredBillingContactFields: ["emailAddress"],
          merchantCapabilities: ["capability3DS", "capabilityCredit", "capabilityDebit", "capabilityEMV"]
          // billingContact: { emailAddress: "ankita.k@techroversolutions.com" },
          // shippingContact: { emailAddress: "ankita.k@techroversolutions.com" },
        }).then(res => {
          console.log("inital ", res.PaymentNonce);
          this.paymentData = res;
          this.paymentData.nonce = res.PaymentNonce;
          this.paymentData.paymentType = 'APPLE_PAYMENT';
          this.onPayment();
          console.log("pay ment 123", this.paymentData.nonce);
          // 
          // const decodedPaymentData = atob(res.token.paymentData);
          // const paymentDataObject = JSON.parse(decodedPaymentData);
          // console.log("payment convert", paymentDataObject);
          // ApplePay.completeLastPayment(this.CompletePaymentRequest).then(
          //   (res: any) => {
          //     console.log("complete", res);
          //   }
          // );
        });
      } catch (error) {
        console.log(error, "apple pay errro");
      }
    });
  }
};
BidPaymentPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_4__.ConstantService
}, {
  type: src_app_providers_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController
}];
BidPaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-bid-payment",
  template: _bid_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe],
  styles: [(_bid_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BidPaymentPage);


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

/***/ 60161:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-view/bid-payment/bid-payment.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-card {\n  background: url('card-bg.png') no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n  background-size: cover;\n  box-shadow: none;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9;\n  max-height: 250px;\n}\nion-content .main-screen .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .main-screen .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n  margin-right: 5px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .main-screen .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 85px;\n  height: 81px;\n  margin-right: 15px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 85px;\n  border: 1px solid var(--white-clr);\n  height: 81px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label {\n  align-self: flex-start;\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0 0 5px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 5px;\n  display: flex;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label p span {\n  padding-left: 5px;\n  font-size: 0.75rem;\n}\nion-content .main-screen .content-part {\n  padding: 15px 15px 15px;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px 4px 12px #2a6a87;\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .bid-part {\n  text-align: center;\n  padding: 15px;\n}\nion-content .main-screen .content-part .bid-part h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .bid-part h3 span {\n  font-weight: 700;\n}\nion-content .main-screen .content-part .bid-part h4 {\n  margin: 15px 0;\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .bid-part h4 span {\n  font-weight: 700;\n  display: block;\n  margin-top: 7px;\n}\nion-content .main-screen .content-part .bid-part .input-part {\n  position: relative;\n  max-width: 295px;\n  margin: 0 auto;\n  padding-left: 30px;\n}\nion-content .main-screen .content-part .bid-part .input-part ion-input {\n  --color: var(--white-clr);\n  font-size: 2.1rem;\n  font-weight: 700;\n  caret-color: var(--white-clr) !important;\n  text-align: left;\n}\nion-content .main-screen .content-part .bid-part .input-part input {\n  caret-color: var(--white-clr) !important;\n}\nion-content .main-screen .content-part .bid-part .input-part span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 2.125rem;\n  color: var(--white-clr);\n  font-weight: 700;\n}\nion-content .main-screen .content-part .bid-part .select-payment {\n  display: block;\n  padding: 15px 0;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: rgba(var(--white-bg-rgb), 0.3);\n  --border-radius: 9px;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item img {\n  width: 34px;\n  margin-right: 10px;\n  align-self: center;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item ion-label {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--black-clr);\n  font-weight: 500;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item ion-icon {\n  font-size: 1.5rem;\n  color: var(--light-gray);\n  margin: 0;\n}\nion-content .main-screen .content-part .bid-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  line-height: 21px;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select {\n  padding: 15px 0 0;\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item {\n  padding: 5px 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: 0 0 10px #ccc;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-radio {\n  margin: 0 10px 0 0;\n  --color-checked: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label h5 {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p span {\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img {\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.unchecked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.checked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked {\n  --background: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-radio {\n  --color-checked: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label h5 {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label p {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.unchecked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.checked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details {\n  padding: 10px 0 2px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box {\n  padding: 10px 0 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item ion-input {\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\nion-modal.small-modal.bid-submitted .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal.bid-submitted ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 10px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: #b1dbf2;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --border-radius: 18px 18px 0px 0px;\n  border-radius: 18px 18px 0px 0px;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item ion-label h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin: 0;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item ion-text {\n  margin: 0;\n  color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\nion-modal.small-modal.bid-submitted ion-header::after {\n  display: none;\n}\nion-modal.small-modal.bid-submitted .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen {\n  padding: 15px 15px 10px;\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen h2 {\n  font-size: 1.5rem;\n  color: var(--black-clr);\n  font-weight: 700;\n  margin: 0 0 10px;\n  line-height: 26px;\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen p {\n  font-size: 1rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal.bid-submitted ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 6px 6px #707070;\n  margin: 5px 10px;\n  text-transform: capitalize;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button img {\n  height: 50px;\n  width: 50px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: -moz-fit-content;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.25rem;\n  line-height: 21px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button span img {\n  width: 20px;\n  height: 20px;\n  margin-top: 4px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 85px;\n  height: 81px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 1px solid white;\n  margin: 0;\n}\n\n@media screen and (max-width: 320px) {\n  ion-content .main-screen .content-part .bid-part .input-part ion-input {\n    font-size: 2rem !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/profile-view/bid-payment/bid-payment.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  --background: #6bbde9;\n  position: relative;\n  margin: 0;\n  --background: #6bbde9; /* Old browsers */\n  --background: -moz-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: -webkit-radial-gradient(\n    center,\n    ellipse cover,\n    #6bbde9 0%,\n    #2099da 100%\n  );\n  --background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  --box-shadow: 0px -6px 7px #2d94c9;\n}\nion-content .main-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\nion-content .main-screen .top-card {\n  background: url(../../../../assets/images/card-bg.png) no-repeat top center;\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n  background-size: cover;\n  box-shadow: none;\n  padding: 35px 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 9;\n  max-height: 250px;\n}\nion-content .main-screen .top-card .title-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  align-items: flex-start;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .title-part ion-item ion-icon {\n  color: var(--white-clr);\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\nion-content .main-screen .top-card .title-part ion-item ion-label .logo-head .nil4all span {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 500;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\nion-content .main-screen .top-card .title-part ion-item .notification {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  margin-top: 5px;\n  margin-right: 5px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification img {\n  width: 20px;\n}\nion-content .main-screen .top-card .title-part ion-item .notification span {\n  height: 10px;\n  width: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--white-clr);\n  position: absolute;\n  right: -2px;\n  top: -4px;\n  background: var(--red-bg);\n}\nion-content .main-screen .top-card .profile-part {\n  padding-top: 15px;\n}\nion-content .main-screen .top-card .profile-part ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  overflow: inherit;\n  position: relative;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-avatar {\n  --border-radius: 10px;\n  width: 85px;\n  height: 81px;\n  margin-right: 15px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-avatar img {\n  max-width: 100%;\n  border-radius: 10px;\n  width: 85px;\n  border: 1px solid var(--white-clr);\n  height: 81px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label {\n  align-self: flex-start;\n  word-break: break-word;\n  white-space: normal;\n  margin: 0;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label h5 {\n  font-size: 1.5rem;\n  color: var(--white-clr);\n  font-weight: 700;\n  margin: 0 0 5px;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label p {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 5px;\n  display: flex;\n}\nion-content .main-screen .top-card .profile-part ion-item ion-label p span {\n  padding-left: 5px;\n  font-size: 0.75rem;\n}\nion-content .main-screen .content-part {\n  padding: 15px 15px 15px;\n  margin: 0;\n  background: #6bbde9; /* Old browsers */\n  background: -moz-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: -webkit-radial-gradient(center, ellipse cover, #6bbde9 0%, #2099da 100%);\n  background: radial-gradient(ellipse at center, #6bbde9 0%, #2099da 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#6bbde9\", endColorstr=\"#2099da\",GradientType=1 );\n  box-shadow: 0px 4px 12px #2a6a87;\n  margin-top: -48px;\n  position: relative;\n  z-index: 99;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\nion-content .main-screen .content-part .bid-part {\n  text-align: center;\n  padding: 15px;\n}\nion-content .main-screen .content-part .bid-part h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .bid-part h3 span {\n  font-weight: 700;\n}\nion-content .main-screen .content-part .bid-part h4 {\n  margin: 15px 0;\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--white-clr);\n}\nion-content .main-screen .content-part .bid-part h4 span {\n  font-weight: 700;\n  display: block;\n  margin-top: 7px;\n}\nion-content .main-screen .content-part .bid-part .input-part {\n  position: relative;\n  max-width: 295px;\n  margin: 0 auto;\n  padding-left: 30px;\n}\nion-content .main-screen .content-part .bid-part .input-part ion-input {\n  --color: var(--white-clr);\n  font-size: 2.1rem;\n  font-weight: 700;\n  caret-color: var(--white-clr) !important;\n  text-align: left;\n}\nion-content .main-screen .content-part .bid-part .input-part input {\n  caret-color: var(--white-clr) !important;\n}\nion-content .main-screen .content-part .bid-part .input-part span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n  font-size: 2.125rem;\n  color: var(--white-clr);\n  font-weight: 700;\n}\nion-content .main-screen .content-part .bid-part .select-payment {\n  display: block;\n  padding: 15px 0;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: rgba(var(--white-bg-rgb), 0.3);\n  --border-radius: 9px;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item img {\n  width: 34px;\n  margin-right: 10px;\n  align-self: center;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item ion-label {\n  margin: 0;\n  font-size: 1rem;\n  color: var(--black-clr);\n  font-weight: 500;\n}\nion-content .main-screen .content-part .bid-part .select-payment ion-item ion-icon {\n  font-size: 1.5rem;\n  color: var(--light-gray);\n  margin: 0;\n}\nion-content .main-screen .content-part .bid-part .auth-btn {\n  padding: 15px 15px;\n  text-align: center;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 4px 4px #5a829b, inset 0px 4px 4px #9bd9ff;\n  text-transform: capitalize;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button img {\n  height: 80px;\n  width: 80px;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  line-height: 21px;\n}\nion-content .main-screen .content-part .bid-part .auth-btn ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\n\n.buble-part {\n  margin: 0;\n  padding: 0;\n}\n.buble-part .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 0px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.buble-part .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.buble-part .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n.buble-part .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.buble-part .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #fff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.no-data-found {\n  text-align: center;\n  max-width: 100%;\n  padding: 15px;\n}\n.no-data-found p {\n  color: var(--white-clr);\n  font-weight: 700;\n  font-size: 1rem;\n  text-transform: capitalize;\n  margin: 20px 0;\n  letter-spacing: 1px;\n}\n\n.schedule {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.schedule h6 {\n  font-size: 0.875rem;\n  margin: 0;\n  color: var(--white-clr);\n  font-weight: 500;\n}\n\nion-select {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  background-color: rgba(255, 255, 255, 0.519);\n  color: var(--black-clr);\n  font-size: 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\nion-select ion-item ion-label {\n  color: var(--black-clr);\n}\n\n.client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select {\n  padding: 15px 0 0;\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item {\n  padding: 5px 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: 0 0 10px #ccc;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-radio {\n  margin: 0 10px 0 0;\n  --color-checked: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label h5 {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p span {\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img {\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.unchecked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.checked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked {\n  --background: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-radio {\n  --color-checked: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label h5 {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label p {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.unchecked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.checked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details {\n  padding: 10px 0 2px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box {\n  padding: 10px 0 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item ion-input {\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\nion-modal.small-modal.bid-submitted .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal.bid-submitted ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 10px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  --background: #b1dbf2;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --border-radius: 18px 18px 0px 0px;\n  border-radius: 18px 18px 0px 0px;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item ion-label h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin: 0;\n}\nion-modal.small-modal.bid-submitted ion-header ion-item ion-text {\n  margin: 0;\n  color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\nion-modal.small-modal.bid-submitted ion-header::after {\n  display: none;\n}\nion-modal.small-modal.bid-submitted .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen {\n  padding: 15px 15px 10px;\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen h2 {\n  font-size: 1.5rem;\n  color: var(--black-clr);\n  font-weight: 700;\n  margin: 0 0 10px;\n  line-height: 26px;\n}\nion-modal.small-modal.bid-submitted .inner-content .main-screen p {\n  font-size: 1rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal.bid-submitted ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button {\n  cursor: pointer;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  --border-radius: 50%;\n  box-shadow: 0px 6px 6px #707070;\n  margin: 5px 10px;\n  text-transform: capitalize;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button img {\n  height: 50px;\n  width: 50px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  display: inline-block;\n  color: var(--white-clr);\n  font-weight: 700;\n  height: fit-content;\n  text-transform: capitalize;\n  font-size: 1.25rem;\n  line-height: 21px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button span img {\n  width: 20px;\n  height: 20px;\n  margin-top: 4px;\n}\nion-modal.small-modal.bid-submitted ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 1;\n  filter: grayscale(1);\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 85px;\n  height: 81px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 10px;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 1px solid white;\n  margin: 0;\n}\n\n@media screen and (max-width: 320px) {\n  ion-content .main-screen .content-part .bid-part .input-part ion-input {\n    font-size: 2rem !important;\n  }\n}"],"sourceRoot":""}]);
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

/***/ 75418:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-view/bid-payment/bid-payment.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"main-screen\">\n    <ion-grid class=\"top-card\">\n      <div class=\"title-part\">\n        <ion-item lines=\"none\" mode=\"md\">\n          <ion-icon\n            (click)=\"goBack()\"\n            slot=\"start\"\n            name=\"arrow-back-outline\" mode=\"md\"\n          ></ion-icon>\n          <ion-label>\n            <ion-grid class=\"logo-head\">\n              <img src=\"assets/images/single-logo.svg\" />\n              <div class=\"nil4all\">\n                <span>#NIL4ALL</span>\n              </div>\n            </ion-grid>\n          </ion-label>\n          <div class=\"notification\" slot=\"end\"  (click)=\"presentPopover($event)\">\n            <img src=\"assets/icon/notification.svg\" />\n            <span *ngIf=\"this.badgeCount != 0\">\n              <i *ngIf=\"this.badgeCount < 99\">{{this.badgeCount}}</i>\n              <i *ngIf=\"this.badgeCount > 99\">99+</i>\n            </span>\n          </div>\n        </ion-item>\n      </div>\n      <div class=\"profile-part\">\n        <ion-item lines=\"none\">\n          <ion-avatar\n            slot=\"start\"\n            *ngIf=\"eventData?.userProfilePicture !== '' \"\n          >\n            <img [src]=\"eventData?.userProfilePicture | profile\" />\n          </ion-avatar>\n          <ion-avatar *ngIf=\"eventData?.userProfilePicture == '' \">\n            <div class=\"initial\">\n              <span class=\"initial__span\">\n                {{nameInitials}}\n              </span>\n            </div>\n          </ion-avatar>\n          <ion-label>\n            <h5>{{eventData?.athleteName | titlecase}}</h5>\n\n            <p>{{eventData?.eventName}}</p>\n            <p>\n              <img src=\"assets/icon/calendar-white-small.svg\" alt=\"\" />\n              <span>{{eventData?.startDate | date:'MMM dd, YYYY'}}</span>\n            </p>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-grid>\n\n    <ion-grid class=\"content-part\">\n      <div class=\"bid-part\">\n        <h3 *ngIf=\"this.currentBidAmount ==''\">\n          Please enter more than <span>${{eventData?.minBid}}</span> for bid.\n        </h3>\n        <h3 *ngIf=\"this.MaxAmount !=''\">\n          Top Bid in the waitlist : <span>${{this.MaxAmount}}</span>\n        </h3>\n        <h4 *ngIf=\"this.currentBidAmount !=''\">\n          Your Previous Bid is\n          <span>${{this.currentBidAmount}}</span>\n        </h4>\n        <div class=\"input-part\">\n          <span>$</span>\n          <ion-input\n            [(ngModel)]=\"bidAmount\"\n            (keypress)=\"numberOnly($event)\"\n            (ionBlur)=\"getToFixedDigits($event);validatePreviosBidAmount($event)\"\n            placeholder=\"Enter Amount\"\n            type=\"number\"\n          ></ion-input>\n        </div>\n        <div class=\"select-payment\">\n          <ion-item lines=\"none\" (click)=\"presentPaymentModal()\">\n            <img\n              *ngIf=\"paymentType == 'APPLE_PAYMENT'\"\n              src=\"assets/images/pay-icon.png\"\n            />\n            <img\n              *ngIf=\"paymentType !== 'APPLE_PAYMENT'\"\n              src=\"assets/images/cc-img.png\"\n            />\n            <ion-label *ngIf=\"paymentType == 'APPLE_PAYMENT'\">Apple Pay</ion-label>\n            <ion-label *ngIf=\"paymentType !== 'APPLE_PAYMENT'\">Credit card</ion-label>\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-item>\n        </div>\n        <div class=\"auth-btn\">\n          <ion-button \n            [disabled]=\"!paymentData || !bidAmount \"\n            id=\"bidSubmitted\"\n          >\n            <img src=\"assets/images/button-auth.png\" />\n            <span>Pay<br />Now</span>\n          </ion-button>\n          <!-- <ion-button (click)=\"applePayPayment()\"\n          [disabled]=\"!paymentData || !bidAmount \" *ngIf=\"paymentType=='APPLE_PAYMENT'\"\n          id=\"bidSubmitted\"\n        >\n          <img src=\"assets/images/button-auth.png\" />\n          <span>Pay<br />Now</span>\n        </ion-button> -->\n          <!-- <ion-button class=\"\" (click)=\"applePayPayment()\">\n            Apple pay\n            </ion-button> -->\n        </div>\n      </div>\n    </ion-grid>\n  </div>\n\n  <ion-grid class=\"buble-part\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</ion-content>\n\n<ion-modal trigger=\"CreateAppearance\" class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3>Create Appearance</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p>Are you sure, you want to create appearance?</p>\n      </div>\n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n\n<ion-modal trigger=\"bidSubmitted\" class=\"small-modal bid-submitted\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h3>Highest Bid</h3>\n        </ion-label>\n        <ion-text slot=\"end\">{{MaxAmount}}</ion-text>\n      </ion-item>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <h2>${{bidAmount}}</h2>\n        <p>Bid Submitted!</p>\n      </div>\n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <div class=\"auth-btn\">\n          <ion-button (click)=\"onClickCancel()\">\n            <img src=\"assets/images/button-auth-red.png\" />\n            <span><img src=\"assets/icon/close-btn.svg\" /></span>\n          </ion-button>\n          <ion-button (click)=\"onPayment()\" *ngIf=\"paymentType=='SQUARE_PAYMENT'\">\n            <img src=\"assets/images/button-auth-green.png\" />\n            <span>Go</span>\n          </ion-button>\n          <ion-button (click)=\"applePayPayment()\" *ngIf=\"paymentType=='APPLE_PAYMENT'\">\n            <img src=\"assets/images/button-auth-green.png\" />\n            <span>Go</span>\n          </ion-button>\n        </div>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n";

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
//# sourceMappingURL=src_app_pages_profile-view_bid-payment_bid-payment_module_ts.js.map