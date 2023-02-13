import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { IonModal, ModalController, NavParams } from "@ionic/angular";
import { data } from "cypress/types/jquery";
import { CoreService } from "src/app/providers/core.service";
import { CommonService } from "../../../providers/common.service";
import { ApplePay } from "@fresha/capacitor-plugin-applepay";
declare var Square: any;
declare var SqPaymentForm: any;
//magic to allow us to access the SquarePaymentForm lib
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild("CreateAppearance") ConfirmModal: IonModal;
  isBiddingForEvent: boolean = this.navParams.get("isBiddingForEvent");
  errors: any[] = [];
  nonce: string;
  paymentType: "SQUARE_PAYMENT" | "apple" = "SQUARE_PAYMENT";
  errorMsg: any;
  sqPaymentForm: any; //this is our payment form object
  card: any;
  PaymentSummaryItem: any = {
    label: "bid",
    amount: "2",
  };
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private commonService: CommonService,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    // this.showPayment();
    // this.initializeCard();
    this.initializeCardApple();
  }
  onClickCancel() {
    this.modalCtrl.dismiss();
  }
  async cancel() {
    await this.modal.dismiss();
  }
  async onSubmit() {
    await this.cancel();
    this.modalCtrl.dismiss({
      nonce: this.nonce,
      paymentType: this.paymentType,
    });
  }

  openCreateModal() {
    this.pay();
    // this.sqPaymentForm.requestCardNonce();

    setTimeout(() => {
      if (this.errors.length > 0) {
        return;
      }

      //this.ConfirmModal.present();
    }, 1000);
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
      inputStyles: [
        {
          fontSize: "14px",
          lineHeight: "16px",
          padding: "5px",
          placeholderColor: "#949494",
          backgroundColor: "transparent",
        },
      ],
      // Initialize the credit card placeholders
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "Card Number",
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV",
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY",
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Postal",
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

            errors
              .slice()
              .reverse()
              .forEach(function (error) {
                toastMsg = error.message;
              });
            this.coreService.showToastMessage(
              toastMsg,
              this.coreService.TOAST_ERROR
            );
            return;
          } else {
            this.errors = [];
            this.nonce = nonce;
          }
          //TODO: Replace alert with code in step 2.1
        },
      },
    });
    //TODO: paste code from step 1.1.4
    console.log("bfhf", this.sqPaymentForm);
    this.sqPaymentForm.build();
  }

  async initializeCard(payments?: any) {
    payments = Square.payments(
      this.commonService.publicInfo.squareAppId,
      this.commonService.publicInfo.locationId
    );

    const darkModeCardStyle = {
      ".input-container": {
        borderColor: "#2D2D2D",
        borderRadius: "6px",
      },
      ".input-container.is-focus": {
        borderColor: "#006AFF",
      },
      ".input-container.is-error": {
        borderColor: "#ff1600",
      },
      ".message-text": {
        color: "#999999",
      },
      ".message-icon": {
        color: "#999999",
      },
      ".message-text.is-error": {
        color: "#ff1600",
      },
      ".message-icon.is-error": {
        color: "#ff1600",
      },
      input: {
        backgroundColor: "#2D2D2D",
        color: "#FFFFFF",
        fontFamily: "helvetica neue, sans-serif",
      },
      "input::placeholder": {
        color: "#999999",
      },
      "input.is-error": {
        color: "#ff1600",
      },
    };
    this.card = await payments.card({
      // style: darkModeCardStyle,
    });
    await this.card.attach("#card-container");
    return this.card;

    let tokenResult;
    const button = document.getElementById("card-button");
    button.addEventListener("click", (e) => {
      console.log("called");
      e.preventDefault();
      tokenResult = this.card.tokenize();
      console.log("token new ", tokenResult);
    });
  }

  async pay() {
    await this.card.tokenize().then((data) => (this.nonce = data.token));
    console.log("nonce ", this.nonce);
    // await this.card.tokenize().then(data=>
    //   console.log("card ",data))
    if (this.nonce != undefined) {
      this.ConfirmModal.present();
    }
  }

  applePayPayment() {
    console.log("apple pay ment");

    ApplePay.initiatePayment({
      merchantIdentifier: "merchant.com.bubbleapp",
      countryCode: "US",
      currencyCode: "USD",
      supportedCountries: ["US"],
      supportedNetworks: ["amex", "visa", "vPay"],
      summaryItems: [this.PaymentSummaryItem],
      requiredShippingContactFields: ["emailAddress"],
      requiredBillingContactFields: ["emailAddress"],
      merchantCapabilities: [
        "capability3DS",
        "capabilityCredit",
        "capabilityDebit",
        "capabilityEMV",
      ],
      billingContact: { emailAddress: "ankita.k@techroversolutions.com" },
      shippingContact: { emailAddress: "ankita.k@techroversolutions.com" },
    });
  }
  //Apple pay using square
  buildPaymentRequest(payments) {
    return payments?.paymentRequest({
      countryCode: "US",
      currencyCode: "USD",
      total: {
        amount: "1.00",
        label: "Total",
      },
    });
  }

  async initializeCardApple(payments?: any) {
    this.card = await payments?.card();
    await this.card?.attach("#card-container");
    console.log("card", this.card);

    this.initializeApplePay();
    return this.card;
  }
  async initializeApplePay(payments?: any) {
    console.log(payments, "pay req");
    payments = Square.payments(
      this.commonService.publicInfo.squareAppId,
      this.commonService.publicInfo.locationId
    );
    const paymentRequest = this.buildPaymentRequest(payments);
    console.log(paymentRequest, "paymentRequest");

    const applePay = await payments?.applePay(paymentRequest);
    console.log(applePay, "applepay");

    // Note: You do not need to `attach` applePay.
    if (applePay) {
      const applePayButton = document.getElementById("apple-pay-button");
      applePayButton.addEventListener("click", async (event) => {
        await this.handlePaymentMethodSubmission(event, applePay);
      });
    }
    return applePay;
  }

  async handlePaymentMethodSubmission(event, paymentMethod) {
    event.preventDefault();

    try {
      // disable the submit button as we await tokenization and make a payment request.

      const token = await this.tokenize(paymentMethod);
      // const paymentResults = await createPayment(token);
      //this.displayPaymentResults("SUCCESS");

      console.debug("Payment Success", token);
    } catch (e) {
      // cardButton.disabled = false;
      //this.displayPaymentResults("FAILURE");
      console.error(e.message);
    }
  }
  async tokenize(paymentMethod) {
    const tokenResult = await paymentMethod?.tokenize();
    if (tokenResult.status === "OK") {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }

      throw new Error(errorMessage);
    }
  }
  displayPaymentResults(status) {
    const statusContainer = document.getElementById("payment-status-container");
    if (status === "SUCCESS") {
      statusContainer.classList.remove("is-failure");
      statusContainer.classList.add("is-success");
    } else {
      statusContainer.classList.remove("is-success");
      statusContainer.classList.add("is-failure");
    }

    statusContainer.style.visibility = "visible";
  }
}
