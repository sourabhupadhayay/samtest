(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_tabs_payment_payment_component_ts-src_app_pipes_pipes_module_ts"],{

/***/ 13985:
/*!*********************************************************!*\
  !*** ./src/app/pages/tabs/payment/payment.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component.html?ngResource */ 48218);
/* harmony import */ var _payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component.scss?ngResource */ 35025);
/* harmony import */ var _payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _providers_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/common.service */ 33507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fresha/capacitor-plugin-applepay */ 20323);












let PaymentComponent = class PaymentComponent {
  constructor(modalCtrl, coreService, commonService, navParams, apiService, constantService, router) {
    this.modalCtrl = modalCtrl;
    this.coreService = coreService;
    this.commonService = commonService;
    this.navParams = navParams;
    this.apiService = apiService;
    this.constantService = constantService;
    this.router = router;
    this.isBiddingForEvent = this.navParams.get("isBiddingForEvent");
    this.errors = [];
    this.paymentType = "APPLE_PAYMENT";
    this.isCardSelected = false;
    this.showPaymentScreen = false;
    this.isChecked = false;
    this.savecard = [];
    this.paymentData = null;
    // Apple pay variable 
    this.PaymentSummaryItem = {
      label: "bid",
      amount: ""
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.showPayment();
      _this.getSavedCardList();
      // this.initializeCard();
      _this.LoggedInUser = yield localStorage.getItem("authDetails");
    })();
  }
  showPaymentDiv(show) {
    this.showPaymentScreen = show;
    if (this.paymentType == 'APPLE_PAYMENT') {
      this.card.detach();
    }
  }
  adjustValidYear(str) {
    let year = String(str).substring(2, 4);
    return year;
  }
  getSavedCardList() {
    let request = {
      path: "core/payment/cards?paymentType=SQUARE_PAYMENT",
      isAuth: true
    };
    this.apiService.get(request).subscribe(response => {
      this.savecard = response.data;
      this.savecard.forEach((element, index) => {
        this.savecard[index]['isCardSelected'] = false;
        this.savecard[index]['yearUpd'] = this.adjustValidYear(this.savecard[index]["expYear"]);
      });
      console.log("c ", this.savecard);
    });
  }
  selectCard(i, selectedCardData) {
    this.tappedCardDetails = selectedCardData;
    this.isCardSelected = true;
    console.log("clicked ", this.isCardSelected, selectedCardData);
    this.savecard.forEach((element, index) => {
      if (index == i) {
        this.savecard[index]['isCardSelected'] = true;
      } else {
        this.savecard[index]['isCardSelected'] = false;
      }
    });
  }
  saveSelectedCard() {
    console.log("card saved!", this.paymentType);
    let request = {
      path: "core/payment/cards",
      data: {
        email: this.LoggedInUser?.email,
        fullName: this.LoggedInUser?.fullName,
        nonce: this.nonce,
        paymentType: "SQUARE_PAYMENT"
      },
      isAuth: true
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        console.log(this.paymentType, "payment tpe save");
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_SUCCESS);
        this.ConfirmSaveCardModal.dismiss();
      } else {
        this.coreService.showToastMessage(response.status.description, this.coreService.TOAST_ERROR);
      }
    });
  }
  CardSaveCheckBox(e) {
    var _this2 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (e.detail.checked) {
        let tokenResult;
        _this2.coreService.presentLoader(_this2.constantService.WAIT);
        yield _this2.card.tokenize().then(data => {
          tokenResult = data.status, _this2.nonce = data.token;
        });
        _this2.coreService.dismissLoader();
        console.log("token new ", tokenResult, _this2.nonce);
        if (tokenResult != 'Invalid') {
          _this2.ConfirmSaveCardModal.present();
        } else {
          _this2.isChecked = false;
        }
      }
    })();
  }
  paymentThroughSelectedCard() {
    console.log("456");
    if (!this.isCardSelected && this.paymentType == 'SQUARE_PAYMENT') {
      this.coreService.showToastMessage("Please select a card for payment!", this.coreService.TOAST_ERROR);
      return;
    }
    console.log("123");
    this.confirmSavedCardPayment.present();
  }
  confirmPaymentFromSavedCard() {
    var _this3 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("pay !");
      if (_this3.paymentType == 'SQUARE_PAYMENT') {
        console.log("if cLL");
        _this3.pay();
      } else {
        console.log("else cll");
        if (!_this3.isBiddingForEvent) {
          _this3.confirmSavedCardPayment.dismiss();
          _this3.applePayPayment();
        } else {
          console.log("else 12243call");
          _this3.onClickCancel();
          setTimeout(() => {
            _this3.modalCtrl.dismiss({
              paymentType: _this3.paymentType
            });
          }, 1000);
        }
      }
    })();
  }
  onClickCancel() {
    console.log("payment close modal");
    this.modalCtrl.dismiss();
  }
  cancel() {
    var _this4 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isChecked = false;
      _this4.ConfirmSaveCardModal.dismiss();
      _this4.confirmSavedCardPayment.dismiss();
      yield _this4.modal.dismiss();
    })();
  }
  onSubmit() {
    var _this5 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.cancel();
      console.log("pay meeemnt", _this5, _this5.paymentType);
      if (_this5.paymentType == 'SQUARE_PAYMENT') {
        _this5.modalCtrl.dismiss({
          nonce: _this5.nonce,
          paymentType: _this5.paymentType,
          cardId: _this5.tappedCardDetails?.id
        });
      } else {
        _this5.modalCtrl.dismiss({
          nonce: _this5.nonce,
          paymentType: _this5.paymentType
        });
      }
      console.log("routing url", _this5.routingUrl);
      _this5.routingUrl = _this5.router.url;
      if (_this5.routingUrl == "/tabs/new-booking") {
        _this5.router.navigate(["/tabs/schedule"]);
      }
    })();
  }
  openCreateModal() {
    if (this.paymentType == 'SQUARE_PAYMENT') {
      this.pay();
      // this.sqPaymentForm.requestCardNonce();
      setTimeout(() => {
        if (this.errors.length > 0) {
          return;
        }
        //this.ConfirmModal.present();
      }, 1000);
    } else {
      if (!this.isBiddingForEvent) {
        this.ConfirmModal.present();
      } else {
        this.modalCtrl.dismiss({
          paymentType: this.paymentType
        });
      }
    }
  }
  showPayment() {
    let toastMsg;
    var applicationId = this.commonService.publicInfo.squareAppId;
    this.sqPaymentForm = new SqPaymentForm({
      // Initialize the payment form elements
      //TODO: Replace with your sandbox application ID
      applicationId: applicationId,
      inputClass: "sq-input",
      autoBuild: false,
      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [{
        fontSize: "14px",
        lineHeight: "16px",
        padding: "5px",
        placeholderColor: "#949494",
        backgroundColor: "transparent"
      }],
      // Initialize the credit card placeholders
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "Card Number"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Postal"
      },
      // SqPaymentForm callback functions
      callbacks: {
        /*
         * callback function: cardNonceResponseReceived
         * Triggered when: SqPaymentForm completes a card nonce request
         */
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          if (errors) {
            // Log errors from nonce generation to the browser developer console.
            this.errors = errors;
            errors.slice().reverse().forEach(function (error) {
              toastMsg = error.message;
            });
            this.coreService.showToastMessage(toastMsg, this.coreService.TOAST_ERROR);
            return;
          } else {
            this.errors = [];
            this.nonce = nonce;
          }
          //TODO: Replace alert with code in step 2.1
        }
      }
    });
    //TODO: paste code from step 1.1.4
    console.log("bfhf", this.sqPaymentForm);
    this.sqPaymentForm.build();
  }
  initializeCard(payments) {
    var _this6 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      payments = Square.payments(_this6.commonService.publicInfo.squareAppId, _this6.commonService.publicInfo.locationId);
      const darkModeCardStyle = {
        '.input-container': {
          borderColor: '#2D2D2D',
          borderRadius: '6px'
        },
        '.input-container.is-focus': {
          borderColor: '#006AFF'
        },
        '.input-container.is-error': {
          borderColor: '#ff1600'
        },
        '.message-text': {
          color: '#999999'
        },
        '.message-icon': {
          color: '#999999'
        },
        '.message-text.is-error': {
          color: '#ff1600'
        },
        '.message-icon.is-error': {
          color: '#ff1600'
        },
        input: {
          backgroundColor: '#2D2D2D',
          color: '#FFFFFF',
          fontFamily: 'helvetica neue, sans-serif'
        },
        'input::placeholder': {
          color: '#999999'
        },
        'input.is-error': {
          color: '#ff1600'
        }
      };
      _this6.card = yield payments.card({
        // style: darkModeCardStyle,
      });
      yield _this6.card.attach('#card-container');
      return _this6.card;
      const button = document.getElementById('card-button');
      console.log(button);
      button.addEventListener('click', e => {
        console.log("called", e);
        e.preventDefault();
      });
    })();
  }
  pay() {
    var _this7 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let error = [];
      yield _this7.card.tokenize().then(data => _this7.nonce = data.token);
      console.log("nonce ", _this7.nonce);
      // await this.card.tokenize().then(data=>
      //   console.log("card ",data))
      // if (this.nonce != undefined && this.paymentType == 'SQUARE_PAYMENT') {
      //   this.ConfirmModal.present()
      // }
      //chANGE
      console.log(_this7.isCardSelected);
      if (_this7.paymentType == 'SQUARE_PAYMENT' && _this7.isCardSelected) {
        console.log("data nonce");
        _this7.ConfirmModal.present();
      }
    })();
  }
  PaymentTypeSelect(event) {
    var _this8 = this;
    return (0,_Users_onlymac_Documents_Bubble_App_BubbleApp_Mobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.card?.detach();
      console.log("payment select", event);
      _this8.paymentType = event?.detail?.value;
      if (_this8.paymentType == 'SQUARE_PAYMENT') {
        _this8.initializeCard();
      } else {
        console.log("pay ment else");
        if (_this8.paymentType == 'APPLE_PAYMENT') _this8.card.attach();
        yield _this8.card?.detach();
      }
    })();
  }
  // Apple pay using square
  applePayPayment() {
    this.PaymentSummaryItem.amount = parseFloat(this.commonService.bidAmount).toString();
    console.log("apple pay ment", this.PaymentSummaryItem);
    _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_7__.ApplePay.canMakePayments().then(res => {
      console.log("can make payment", res);
      try {
        _fresha_capacitor_plugin_applepay__WEBPACK_IMPORTED_MODULE_7__.ApplePay.initiatePayment({
          merchantIdentifier: "merchant.com.bubbleapp",
          countryCode: "US",
          currencyCode: "USD",
          supportedCountries: ["United States"],
          supportedNetworks: ["amex", "chinaUnionPay", "cartesBancaires", "discover", "eftpos", "electron", "idCredit", "interac", "JCB", "maestro", "masterCard", "privateLabel", "quicPay", "suica", "visa", "vPay"],
          summaryItems: [this.PaymentSummaryItem],
          requiredShippingContactFields: ["emailAddress"],
          requiredBillingContactFields: ["emailAddress"],
          merchantCapabilities: ["capability3DS", "capabilityCredit", "capabilityDebit", "capabilityEMV"],
          billingContact: {
            emailAddress: "ankita.k@techroversolutions.com"
          },
          shippingContact: {
            emailAddress: "ankita.k@techroversolutions.com"
          }
        }).then(res => {
          console.log("inital ", res);
          this.paymentData = res;
          this.paymentData.nonce = res.PaymentNonce;
          this.paymentData.paymentType = 'APPLE_PAYMENT';
          console.log("pay ment 123", this.paymentData.nonce);
          if (this.paymentData.nonce != "") {
            console.log("modal call");
            let data = {};
            data['nonce'] = this.paymentData.nonce, data['paymentType'] = this.paymentData.paymentType, console.log("1124432", data);
            this.commonService.publish("payment Data", data);
            this.modalCtrl.dismiss({});
          }
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
PaymentComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_4__.CoreService
}, {
  type: _providers_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams
}, {
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];
PaymentComponent.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal]
  }],
  ConfirmModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["CreateAppearance"]
  }],
  ConfirmSaveCardModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["saveCard"]
  }],
  confirmSavedCardPayment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["confirmSavedCardPayment"]
  }]
};
PaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-payment",
  template: _payment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_payment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PaymentComponent);


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

/***/ 44813:
/*!********************************************************************************!*\
  !*** ./node_modules/@fresha/capacitor-plugin-applepay/dist/esm/definitions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 20323:
/*!**************************************************************************!*\
  !*** ./node_modules/@fresha/capacitor-plugin-applepay/dist/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePay": () => (/* binding */ ApplePay)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 44813);

const ApplePay = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('ApplePay', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_fresha_capacitor-plugin-applepay_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 87866)).then(m => new m.ApplePayWeb())
});



/***/ }),

/***/ 35025:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/payment/payment.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select {\n  padding: 15px 0 0;\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item {\n  padding: 5px 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: 0 0 10px #ccc;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-radio {\n  margin: 0 10px 0 0;\n  --color-checked: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label h5 {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p span {\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img {\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.unchecked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.checked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked {\n  --background: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-radio {\n  --color-checked: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label h5 {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label p {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.unchecked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.checked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details {\n  padding: 10px 0 2px;\n  position: relative;\n  z-index: 9;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details h2 {\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n  margin: 5px 0;\n  font-weight: 500;\n  display: block;\n  width: 100%;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details label.sq-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box {\n  padding: 10px 0 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item ion-input {\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved h4 {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  margin: 0 0 15px 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part {\n  display: flex;\n  flex-flow: column;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card {\n  background: var(--theme-one-bg);\n  border-radius: 10px;\n  padding: 15px;\n  min-height: 176px;\n  background: url('card-new-bg.png') no-repeat center;\n  background-size: cover;\n  position: relative;\n  margin-bottom: -120px;\n  box-shadow: 0 0 10px #0883c5;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top {\n  display: flex;\n  padding: 15px 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top p {\n  color: var(--white-clr);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top .card-icon img {\n  width: 27px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom {\n  text-align: right;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px;\n  background: rgba(var(--black-bg-rgb), 0.1);\n  border-radius: 0 0 10px 10px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom h5 {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom h6 {\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card.selected-card {\n  order: 1;\n  border: 1px solid var(--black-clr);\n  z-index: 3;\n}\n.client-filter-modal .inner-content .main-screen .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 25px;\n  margin-bottom: 10px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar .add-card-btn ion-button {\n  width: 100%;\n  --background: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover:var(--theme-one-bg);\n  --color:var(--white-clr);\n  --border-radius: 10px;\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.box-sq {\n  position: relative;\n}\n.box-sq img.icon-input {\n  position: absolute;\n  right: 11px;\n  bottom: 20px;\n  margin: auto;\n  height: auto;\n  width: 20px;\n}\n\n.plr-0 {\n  padding: 0;\n}\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.no-cards p {\n  color: var(--text-gray);\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 15px 0;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/tabs/payment/payment.component.scss"],"names":[],"mappings":"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","sourcesContent":[".client-filter-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding-top: 52px;\n  z-index: 5;\n  border-radius: 50px 50px 0;\n  box-shadow: none;\n  border: 0;\n}\n.client-filter-modal ion-header .icon-header {\n  text-align: center;\n  padding: 0px 15px 15px 15px;\n  background: #fff;\n  border-radius: 55px 55px 0 0;\n  margin-top: 0px;\n  background: var(--white-bg);\n  position: relative;\n}\n.client-filter-modal ion-header .icon-header img {\n  max-width: 100%;\n  margin-top: -36px;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header h3 {\n  color: var(--theme-one-clr);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .icon-header p {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin: 5px 0 0;\n  position: relative;\n  z-index: 5;\n}\n.client-filter-modal ion-header .top-noch {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  z-index: -1;\n}\n.client-filter-modal ion-header .top-noch img {\n  max-width: 100%;\n  margin: 0;\n  width: 250px;\n}\n.client-filter-modal ion-header::after {\n  display: none;\n}\n.client-filter-modal .inner-content {\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen {\n  padding: 0 15px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select {\n  padding: 15px 0 0;\n  background: var(--white-bg);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item {\n  padding: 5px 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: 0 0 10px #ccc;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-radio {\n  margin: 0 10px 0 0;\n  --color-checked: var(--text-gray);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label h5 {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p {\n  color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item ion-label p span {\n  font-weight: 300;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img {\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.unchecked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item img.checked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked {\n  --background: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-radio {\n  --color-checked: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label h5 {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked ion-label p {\n  color: var(--white-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.unchecked {\n  display: none !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item ion-item.item-radio-checked img.checked {\n  display: block !important;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details {\n  padding: 10px 0 2px;\n  position: relative;\n  z-index: 9;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details h2 {\n  font-size: 1rem;\n  color: var(--theme-one-clr);\n  margin: 5px 0;\n  font-weight: 500;\n  display: block;\n  width: 100%;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details label.sq-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box {\n  padding: 10px 0 0px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-label {\n  margin: 0;\n  padding: 0px;\n  font-size: 0.875rem;\n  color: var(--text-gray);\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item {\n  --padding-start: 10px;\n  --inner-padding-end: 10px;\n  border: 1px solid var(--theme-one-clr);\n  border-radius: 8px;\n  --min-height: 46px;\n  position: relative;\n  overflow: initial;\n  --background: transparent;\n  box-shadow: none;\n  margin-top: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item ion-input {\n  color: var(--black-clr);\n  --color: var(--black-clr);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .input-box ion-item img {\n  margin: 0;\n  width: 22px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 35px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved h4 {\n  color: var(--text-gray);\n  font-size: 0.875rem;\n  margin: 0 0 15px 0;\n  font-weight: 400;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part {\n  display: flex;\n  flex-flow: column;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card {\n  background: var(--theme-one-bg);\n  border-radius: 10px;\n  padding: 15px;\n  min-height: 176px;\n  background: url(../../../../assets/images/card-new-bg.png) no-repeat center;\n  background-size: cover;\n  position: relative;\n  margin-bottom: -120px;\n  box-shadow: 0 0 10px #0883c5;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top {\n  display: flex;\n  padding: 15px 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top p {\n  color: var(--white-clr);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-number-top .card-icon img {\n  width: 27px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom {\n  text-align: right;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px;\n  background: rgba(var(--black-bg-rgb), 0.1);\n  border-radius: 0 0 10px 10px;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom h5 {\n  font-size: 0.875rem;\n  color: var(--white-clr);\n  font-weight: 500;\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card .card-bottom h6 {\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n  margin: 0;\n}\n.client-filter-modal .inner-content .main-screen .payment-select .select-item .card-details .new-card-saved .card-main-part .card.selected-card {\n  order: 1;\n  border: 1px solid var(--black-clr);\n  z-index: 3;\n}\n.client-filter-modal .inner-content .main-screen .save-card {\n  padding: 5px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item {\n  --padding-start:15px;\n  --inner-padding-end:15px;\n  --background: var(--white-bg);\n  border-radius: 8px;\n  box-shadow: none;\n  --padding-start: 0;\n  --innerpadding-end: 0;\n  --background: transparent;\n  --ripple-color: none;\n  --background-activated: none;\n  --background-focused: none;\n  --background-hover: none;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --ripple-color: none;\n  --min-height: 25px;\n  margin-bottom: 10px;\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-checkbox {\n  --ripple-color: none;\n  margin: 0;\n  margin-right: 5px;\n  --size: 17px;\n  --border-color: var(--theme-one-clr);\n  --background-checked: transparent;\n  --background: transparent;\n  --border-width: 2px;\n  --checkmark-width: 3px;\n  --border-color-checked: var(--theme-one-clr);\n  --ripple-color: none;\n  --border-radius: 50px;\n  --checkmark-color: var(--theme-one-clr);\n}\n.client-filter-modal .inner-content .main-screen .save-card ion-item ion-label {\n  --color: var(--theme-one-clr);\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.client-filter-modal ion-footer {\n  background: var(--white-bg);\n}\n.client-filter-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\n.client-filter-modal ion-footer ion-toolbar .add-card-btn ion-button {\n  width: 100%;\n  --background: var(--theme-one-bg);\n  --background-activated: var(--theme-one-bg);\n  --background-focused: var(--theme-one-bg);\n  --background-hover:var(--theme-one-bg);\n  --color:var(--white-clr);\n  --border-radius: 10px;\n  text-transform: capitalize;\n  font-size: 1rem;\n  color: var(--white-clr);\n  font-weight: 600;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\n.client-filter-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n.client-filter-modal ion-footer ion-toolbar .nil4all span {\n  font-size: 0.875rem;\n  color: var(--theme-one-clr);\n  text-transform: uppercase;\n  opacity: 1;\n  font-weight: 700;\n  margin-top: 0px;\n  display: inline-block;\n  font-style: italic;\n}\n.client-filter-modal .bg-bubble {\n  margin: 0;\n  padding: 0;\n}\n.client-filter-modal .bg-bubble .dots-bubble {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: inherit;\n  overflow: hidden;\n  top: 58px;\n  left: 0;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.client-filter-modal .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n  z-index: 99;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(1) {\n  width: 25px;\n  height: 25px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(3) {\n  width: 35px;\n  height: 35px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(4) {\n  width: 30px;\n  height: 30px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(7) {\n  width: 35px;\n  height: 35px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(10) {\n  width: 30px;\n  height: 30px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(19) {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px #9ce5ff;\n}\n.client-filter-modal .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #9ce5ff;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\nion-modal.small-modal .modal-wrapper {\n  max-width: 70%;\n}\nion-modal.small-modal ion-header {\n  --background: transparent;\n  background: transparent;\n  position: relative;\n  padding: 0;\n  padding: 15px;\n  z-index: 5;\n  box-shadow: none;\n  border: 0;\n  text-align: center;\n}\nion-modal.small-modal ion-header h3 {\n  color: var(--black-clr);\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0;\n}\nion-modal.small-modal ion-header::after {\n  display: none;\n}\nion-modal.small-modal .inner-content {\n  --background: var(--white-bg);\n}\nion-modal.small-modal .inner-content .main-screen {\n  padding: 0 15px;\n  text-align: center;\n}\nion-modal.small-modal .inner-content .main-screen p {\n  font-size: 0.875rem;\n  color: var(--black-clr);\n  font-weight: 400;\n  margin: 0;\n  line-height: 22px;\n}\nion-modal.small-modal ion-footer {\n  background: var(--white-bg);\n}\nion-modal.small-modal ion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 0px;\n  --padding-bottom: 10px;\n  --background: var(--white-bg);\n  text-align: center;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button img {\n  width: 40px;\n  height: 40px;\n}\nion-modal.small-modal ion-footer ion-toolbar ion-button.button-disabled {\n  opacity: 0.5;\n}\n\n.box-sq {\n  position: relative;\n}\n.box-sq img.icon-input {\n  position: absolute;\n  right: 11px;\n  bottom: 20px;\n  margin: auto;\n  height: auto;\n  width: 20px;\n}\n\n.plr-0 {\n  padding: 0;\n}\n\n.pl-0 {\n  padding-left: 0;\n}\n\n.pr-0 {\n  padding-right: 0;\n}\n\n.no-cards p {\n  color: var(--text-gray);\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 15px 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48218:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/payment/payment.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"client-filter-modal payment-flow\">\n  <ion-header mode=\"ios\">\n    <div class=\"icon-header\">\n      <img src=\"assets/icon/header-bubble.png\" />\n      <h3>Select Payment Option</h3>\n    </div>\n    <div class=\"top-noch\">\n      <img src=\"assets/images/modal-tope.png\" />\n    </div>\n  </ion-header>\n\n  <div class=\"inner-content\">\n    <div class=\"main-screen\">\n      <div class=\"payment-select\">\n        <ion-radio-group [(ngModel)]=\"paymentType\" mode=\"md\" (ionChange)=\"PaymentTypeSelect($event)\">\n          <div class=\"select-item\">\n            <ion-item lines=\"none\" mode=\"md\">\n              <ion-radio slot=\"start\" value=\"APPLE_PAYMENT\"></ion-radio>\n              <ion-label>\n                <h5>Apple Pay</h5>\n                <p>Balance : <span>$500</span></p>\n\n              </ion-label>\n              <img\n                slot=\"end\"\n                class=\"checked\"\n                src=\"assets/images/apple-pay.svg\"\n              />\n              <img\n                slot=\"end\"\n                class=\"unchecked\"\n                src=\"assets/images/apple-pay-gray.svg\"\n              />\n            </ion-item>\n          </div>\n\n          <div class=\"select-item\">\n            <ion-item lines=\"none\" mode=\"md\" >\n              <ion-radio slot=\"start\" value=\"SQUARE_PAYMENT\"></ion-radio>\n              <ion-label>\n                <h5>Credit Card</h5>\n              </ion-label>\n              <img\n                slot=\"end\"\n                class=\"checked\"\n                src=\"assets/images/card-icn-white.svg\"\n              />\n              <img\n                slot=\"end\"\n                class=\"unchecked\"\n                src=\"assets/images/card-icn.svg\"\n              />\n            </ion-item>\n            <div *ngIf=\"paymentType == 'SQUARE_PAYMENT'\" class=\"card-details\">\n\n              <div [hidden]=!showPaymentScreen>\n                <form id=\"payment-form\">\n                  <div id=\"card-container\"></div>\n                </form>\n                <div id=\"payment-status-container\"></div>\n                <!-- <div class=\"save-card\" *ngIf=\"paymentType=='SQUARE_PAYMENT'\">\n                  <ion-item lines=\"none\" mode=\"ios\">\n                    <ion-label>Save Card</ion-label>\n                    <ion-checkbox slot=\"start\" mode=\"ios\"  id=\"card-button\" (ionChange)=\"CardSaveCheckBox($event)\"[(ngModel)]=\"isChecked\"></ion-checkbox>\n                  </ion-item>\n                </div> -->\n  \n              </div>\n\n              <div class=\"new-card-saved\" [hidden]=showPaymentScreen>\n                <h4> Saved Cards:</h4>\n                  <div class=\"card-main-part\" *ngIf=\"savecard.length !== 0\">\n                      <div class=\"card\" *ngFor=\"let card of savecard let i=index\" [ngClass]=\"card.isCardSelected ? 'selected-card' : ''\" (click)=\"selectCard(i,card)\">\n                          <div class=\"card-number-top\">\n                            <p>**** **** **** {{card.lastFourDigit}}</p>\n                              <div class=\"card-icon\">\n                                  <img *ngIf=\"card.cardBrand == 'MASTERCARD'\" src=\"assets/icon/Mastercard.svg\">\n                                  <img *ngIf=\"card.cardBrand == 'AMERICAN_EXPRESS'\" src=\"assets/icon/Amex.svg\">\n                                  <img *ngIf=\"card.cardBrand == 'DISCOVER'\" src=\"assets/icon/Discover.svg\">\n                                  <img *ngIf=\"card.cardBrand == 'JCB'\" src=\"assets/icon/JCB.svg\">\n                                  <img *ngIf=\"card.cardBrand == 'VISA'\" src=\"assets/icon/Visa.svg\">\n                                  <img *ngIf=\"card.cardBrand == 'CHINA_UNIONPAY'\" src=\"assets/icon/union pay.svg\">\n                              </div>\n                          </div>\n                          <div class=\"card-bottom\">\n                              <h5>Valid Thru</h5>\n                              <h6>{{card.expMonth}}/{{card.yearUpd}}</h6>\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"no-cards\" *ngIf=\"savecard.length == 0\">\n                    <p>No saved cards found!</p>\n                </div>\n                 \n              </div>              \n              <div class=\"clear-fixed\"></div>\n              \n              <!-- <ion-row>\n                <ion-col size=\"12\" class=\"plr-0\">\n                  <div class=\"box-sq\">\n                    <label for=\"sq-card-number\" class=\"sq-label\"\n                      >Card Number:</label\n                    >\n                    <div id=\"sq-card-number\" class=\"sq-input-box\"></div>\n                    <img class=\"icon-input\" src=\"assets/icon/card-new.svg\" />\n                  </div>\n                </ion-col>\n\n                <ion-col size=\"12\" class=\"plr-0\">\n                  <div class=\"box-sq\">\n                    <label for=\"sq-cvv\" class=\"sq-label\">CVV:</label>\n                    <div id=\"sq-cvv\" class=\"sq-input-box\"></div>\n                    <img class=\"icon-input\" src=\"assets/icon/cvv-new.svg\" />\n                  </div>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"pl-0\">\n                  <div class=\"box-sq\">\n                    <label for=\"sq-expiration-date\" class=\"sq-label\"\n                      >Expiration Date:</label\n                    >\n                    <div id=\"sq-expiration-date\" class=\"sq-input-box\"></div>\n                    <img\n                      class=\"icon-input\"\n                      src=\"assets/icon/calendar-new.svg\"\n                    />\n                  </div>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"pr-0\">\n                  <div class=\"box-sq\">\n                    <label for=\"sq-postal-code\" class=\"sq-label\"\n                      >Postal Code:</label\n                    >\n                    <div id=\"sq-postal-code\" class=\"sq-input-box\"></div>\n                    <img class=\"icon-input\" src=\"assets/icon/cvv-new.svg\" />\n                  </div>\n                </ion-col>\n\n              </ion-row> -->\n            </div>\n          </div>\n        </ion-radio-group>\n        <div class=\"save-card\" *ngIf=\"paymentType=='SQUARE_PAYMENT'\">\n          <ion-item lines=\"none\" mode=\"ios\">\n            <ion-label>Save Card</ion-label>\n            <ion-checkbox slot=\"start\" mode=\"ios\"  id=\"card-button\" (ionChange)=\"CardSaveCheckBox($event)\"[(ngModel)]=\"isChecked\"></ion-checkbox>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-footer mode=\"ios\" >\n    <ion-toolbar mode=\"ios\">\n      <div class=\"add-card-btn\" *ngIf=\"paymentType=='SQUARE_PAYMENT'\" [hidden]=showPaymentScreen (click)=\"showPaymentDiv(true)\">\n        <ion-button>+ Add New Card</ion-button>\n      </div>\n      <div class=\"add-card-btn\"  *ngIf=\"paymentType=='SQUARE_PAYMENT'\"[hidden]=!showPaymentScreen (click)=\"showPaymentDiv(false)\">\n        <ion-button>Back to saved cards</ion-button>\n      </div>\n\n    <!-- select card screen -->\n      <div [hidden]=showPaymentScreen >\n        <ion-button class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" (click)=\"onClickCancel()\"/>\n        </ion-button>\n        <ion-button class=\"white-btn\" (click)=\"paymentThroughSelectedCard()\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </div>\n\n      <!-- add card-screen -->\n      <div [hidden]=!showPaymentScreen>\n        <ion-button class=\"white-btn\" (click)=\"onClickCancel()\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button class=\"white-btn\" (click)=\"openCreateModal()\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </div>\n\n      <div class=\"nil4all\">\n        <span>#NIL4ALL</span>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n\n  <ion-grid class=\"bg-bubble\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n</div>\n\n<ion-modal #CreateAppearance class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3 *ngIf=\"!isBiddingForEvent\">Create Appearance</h3>\n      <h3 *ngIf=\"isBiddingForEvent\">Create Bid</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p *ngIf=\"!isBiddingForEvent\">\n          Are you sure, you want to create appearance?\n        </p>\n        <p *ngIf=\"isBiddingForEvent\">\n          Are you sure, you want to bid this event?\n        </p>\n      </div>\n     \n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button (click)=\"cancel()\" class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button (click)=\"onSubmit()\" class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n\n\n\n<!-- save card pop-up -->\n<ion-modal #saveCard class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3 *ngIf=\"isBiddingForEvent\">Save Card</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p>\n          Are you sure, you want to save this card?\n        </p>\n      </div>\n     \n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button (click)=\"cancel()\" class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button (click)=\"saveSelectedCard()\" class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n\n\n<!-- confirm card pop-up -->\n<ion-modal #confirmSavedCardPayment class=\"small-modal\">\n  <ng-template>\n    <ion-header mode=\"md\">\n      <h3 *ngIf=\"isBiddingForEvent\">Use this card</h3>\n    </ion-header>\n\n    <div class=\"inner-content\">\n      <div class=\"main-screen\">\n        <p>\n          Are you sure, you want to use this card for bid of ${{this.commonService.bidAmount}} ?\n        </p>\n      </div>\n     \n    </div>\n\n    <ion-footer mode=\"ios\">\n      <ion-toolbar mode=\"ios\">\n        <ion-button (click)=\"cancel()\" class=\"white-btn\">\n          <img src=\"assets/icon/close-icon.png\" />\n        </ion-button>\n        <ion-button (click)=\"confirmPaymentFromSavedCard()\" class=\"white-btn\">\n          <img src=\"assets/icon/right-icon.png\" />\n        </ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_tabs_payment_payment_component_ts-src_app_pipes_pipes_module_ts.js.map