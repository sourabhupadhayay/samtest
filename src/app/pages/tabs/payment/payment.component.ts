import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { IonModal, ModalController, NavParams } from "@ionic/angular";
import { data } from "cypress/types/jquery";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService } from "src/app/providers/data.service";
import { CommonService } from "../../../providers/common.service";
import { Request, Response } from "src/app/providers/data.service";
import { Router } from "@angular/router";
import { ApplePay } from "@fresha/capacitor-plugin-applepay";
import { Subject, Subscription } from "rxjs";
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
  @ViewChild("saveCard") ConfirmSaveCardModal: IonModal;
  @ViewChild("confirmSavedCardPayment") confirmSavedCardPayment: IonModal;
  isBiddingForEvent: boolean = this.navParams.get("isBiddingForEvent");
  errors: any[] = [];
  nonce: string;
  paymentType: "SQUARE_PAYMENT" | "APPLE_PAYMENT" = "APPLE_PAYMENT";
  errorMsg: any;
  sqPaymentForm: any; //this is our payment form object
  card: any;
  isCardSelected: boolean = false;
  showPaymentScreen: boolean = false;
  isChecked: boolean = false
  savecard: any = [];
  LoggedInUser: any;
  tappedCardDetails: any;
  year: string;
  routingUrl: any;
  paymentData: paymentData | null = null;
  // Apple pay variable 
  PaymentSummaryItem: any = { label: "bid", amount: "", };
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    public commonService: CommonService,
    public navParams: NavParams,
    public apiService: DataService,
    public constantService: ConstantService,
    private router: Router,
  ) { }

  async ngOnInit() {
    // this.showPayment();
    this.getSavedCardList();
    // this.initializeCard();
    this.LoggedInUser = await localStorage.getItem("authDetails");
  }

  showPaymentDiv(show: boolean) {
    this.showPaymentScreen = show;
    if (this.paymentType == 'APPLE_PAYMENT') {
      this.card.detach()
    }
  }

  adjustValidYear(str) {
    let year = String(str).substring(2, 4);
    return year;
  }

  getSavedCardList() {
    let request: any = {
      path: "core/payment/cards?paymentType=SQUARE_PAYMENT",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: any) => {
      this.savecard = response.data;
      this.savecard.forEach((element, index) => {
        this.savecard[index]['isCardSelected'] = false;
        this.savecard[index]['yearUpd'] = this.adjustValidYear(this.savecard[index]["expYear"]);
      })
      console.log("c ", this.savecard);
    });
  }

  selectCard(i: number, selectedCardData: any) {
    this.tappedCardDetails = selectedCardData;
    this.isCardSelected = true;
    console.log("clicked ", this.isCardSelected, selectedCardData)
    this.savecard.forEach((element, index) => {
      if (index == i) {
        this.savecard[index]['isCardSelected'] = true
      }
      else {
        this.savecard[index]['isCardSelected'] = false
      }

    });
  }

  saveSelectedCard() {
    console.log("card saved!",this.paymentType);
    let request: any = {
      path: "core/payment/cards",
      data: {
        email: this.LoggedInUser?.email,
        fullName: this.LoggedInUser?.fullName,
        nonce: this.nonce,
        paymentType: "SQUARE_PAYMENT"
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        console.log(this.paymentType,"payment tpe save");
        
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        this.ConfirmSaveCardModal.dismiss();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
        this.ConfirmSaveCardModal.dismiss();
      }
    });

  }

  async CardSaveCheckBox(e: any) {
    if (e.detail.checked) {
      let tokenResult;
      this.coreService.presentLoader(this.constantService.WAIT);
      await this.card.tokenize().then(data => {
        tokenResult = data.status,
          this.nonce = data.token
      }
      );
      this.coreService.dismissLoader();
      console.log("token new ", tokenResult, this.nonce)
      if (tokenResult != 'Invalid') {
        this.ConfirmSaveCardModal.present();
      }
      else {
        this.isChecked = false
      }
    }
  }

  paymentThroughSelectedCard() {
    console.log("456");

    if (!this.isCardSelected && this.paymentType == 'SQUARE_PAYMENT') {
      this.coreService.showToastMessage(
        "Please select a card for payment!",
        this.coreService.TOAST_ERROR
      );
      return;
    }
    console.log("123");

    this.confirmSavedCardPayment.present();
  }

  async confirmPaymentFromSavedCard() {
    console.log("pay !");
    if (this.paymentType == 'SQUARE_PAYMENT') {
      console.log("if cLL");
      
      this.pay();
    }
    else {
    console.log("else cll");
    
      if (!this.isBiddingForEvent) {
        this.confirmSavedCardPayment.dismiss()
        this.applePayPayment()
      }
      else {
        console.log("else 12243call");
        this.onClickCancel()
        setTimeout(() => {
          this.modalCtrl.dismiss({
            paymentType: this.paymentType
          });
        }, 1000);

      }
    }

  }

  onClickCancel() {
    console.log("payment close modal");

    this.modalCtrl.dismiss();
  }
  async cancel() {
    this.isChecked = false;
    this.ConfirmSaveCardModal.dismiss();
    this.confirmSavedCardPayment.dismiss();
    await this.modal.dismiss();
  }
  async onSubmit() {
    await this.cancel();
    console.log("pay meeemnt", this, this.paymentType);

    if (this.paymentType == 'SQUARE_PAYMENT') {
      this.modalCtrl.dismiss({
        nonce: this.nonce,
        paymentType: this.paymentType,
        cardId: this.tappedCardDetails?.id
      });
    }
    else {
      this.modalCtrl.dismiss({
        nonce: this.nonce,
        paymentType: this.paymentType,
      })
    }
    console.log("routing url", this.routingUrl);

    this.routingUrl = this.router.url;
    if (this.routingUrl == "/tabs/new-booking") {
      this.router.navigate(["/tabs/schedule"]);
    }
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
    }
    else {
      if (!this.isBiddingForEvent) { this.ConfirmModal.present(); } else { this.modalCtrl.dismiss({ paymentType: this.paymentType }) }
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
    payments = Square.payments(this.commonService.publicInfo.squareAppId, this.commonService.publicInfo.locationId)

    const darkModeCardStyle = {
      '.input-container': {
        borderColor: '#2D2D2D',
        borderRadius: '6px',
      },
      '.input-container.is-focus': {
        borderColor: '#006AFF',
      },
      '.input-container.is-error': {
        borderColor: '#ff1600',
      },
      '.message-text': {
        color: '#999999',
      },
      '.message-icon': {
        color: '#999999',
      },
      '.message-text.is-error': {
        color: '#ff1600',
      },
      '.message-icon.is-error': {
        color: '#ff1600',
      },
      input: {
        backgroundColor: '#2D2D2D',
        color: '#FFFFFF',
        fontFamily: 'helvetica neue, sans-serif',
      },
      'input::placeholder': {
        color: '#999999',
      },
      'input.is-error': {
        color: '#ff1600',
      },
    };
    this.card = await payments.card({
      // style: darkModeCardStyle,
    });
    await this.card.attach('#card-container');
    return this.card;
    const button = document.getElementById('card-button');
    console.log(button);
    button.addEventListener('click', e => {
      console.log("called", e)
      e.preventDefault();
    })
  }

  async pay() {
    let error: any[] = []
    await this.card.tokenize().then(data =>
      this.nonce = data.token,
    );
    console.log("nonce ", this.nonce);
    // await this.card.tokenize().then(data=>
    //   console.log("card ",data))
    // if (this.nonce != undefined && this.paymentType == 'SQUARE_PAYMENT') {
    //   this.ConfirmModal.present()
    // }
//chANGE
console.log(this.isCardSelected);

if ( this.paymentType == 'SQUARE_PAYMENT' && this.isCardSelected) {
  console.log("data nonce")
  this.ConfirmModal.present()
}
  }
  async PaymentTypeSelect(event) {
    await this.card?.detach();
   console.log("payment select",event);
   
    this.paymentType = event?.detail?.value;
  
    
    if (this.paymentType == 'SQUARE_PAYMENT') {
      this.initializeCard();
    }
    else {
      console.log("pay ment else");

      if (this.paymentType == 'APPLE_PAYMENT')
        this.card.attach();
      await this.card?.detach();

    }
  }
  // Apple pay using square

  applePayPayment() {
    this.PaymentSummaryItem.amount = parseFloat(this.commonService.bidAmount).toString()
    console.log("apple pay ment", this.PaymentSummaryItem);
    ApplePay.canMakePayments().then((res: any) => {
      console.log("can make payment", res);
      try {
        ApplePay.initiatePayment({
          merchantIdentifier: "merchant.com.bubbleapp",
          countryCode: "US",
          currencyCode: "USD",
          supportedCountries: ["United States"],
          supportedNetworks: [
            "amex",
            "chinaUnionPay",
            "cartesBancaires",
            "discover",
            "eftpos",
            "electron",
            "idCredit",
            "interac",
            "JCB",
            "maestro",
            "masterCard",
            "privateLabel",
            "quicPay",
            "suica",
            "visa",
            "vPay",
          ],
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
        }).then((res: any) => {
          console.log("inital ", res);
          this.paymentData = res
          this.paymentData.nonce = res.PaymentNonce
          this.paymentData.paymentType = 'APPLE_PAYMENT'
          console.log("pay ment 123", this.paymentData.nonce);

          if (this.paymentData.nonce != "") {
            console.log("modal call");
            let data = {}
            data['nonce'] = this.paymentData.nonce,
              data['paymentType'] = this.paymentData.paymentType,
              console.log("1124432", data);

            this.commonService.publish("payment Data", data)
            this.modalCtrl.dismiss({

            })
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

}
interface paymentData { nonce: string; paymentType: "SQUARE_PAYMENT" | "APPLE_PAYMENT"; }