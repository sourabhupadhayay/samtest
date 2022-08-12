import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
import { CoreService } from "src/app/providers/core.service";
import {CommonService} from "../../../providers/common.service";

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
  errors: any[] = [];
  nonce: string;
  paymentType: "SQUARE_PAYMENT" | "apple" = "SQUARE_PAYMENT";
  errorMsg:any;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private commonService: CommonService,
  ) {}
  sqPaymentForm: any; //this is our payment form object

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
    this.sqPaymentForm.requestCardNonce();

    setTimeout(() => {
      if (this.errors.length > 0) {
        return;
      }

      this.ConfirmModal.present();
    }, 1000);
  }

  ngOnInit() {
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
            errors.slice().reverse().forEach(function (error) {
              toastMsg =error.message
            });
            this.coreService.showToastMessage(
              toastMsg,
              this.coreService.TOAST_ERROR
            );
            return
          } else {
          this.errors = [];
          this.nonce = nonce;
        }
          //TODO: Replace alert with code in step 2.1
        },
      },
    });
    //TODO: paste code from step 1.1.4
    this.sqPaymentForm.build();
  }
  // requestCardNonce(event) {
  //   // Don't submit the form until SqPaymentForm returns with a nonce
  //   event.preventDefault();

  //   // Request a nonce from the SqPaymentForm object
  //   this.paymentForm.requestCardNonce();
  // }
}
