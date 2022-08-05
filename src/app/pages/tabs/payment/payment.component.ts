import { Component, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
declare var SqPaymentForm: any;
//magic to allow us to access the SquarePaymentForm lib
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  constructor(public modalCtrl: ModalController) {}
  sqPaymentForm: any; //this is our payment form object
  nonce: string | null = null;

  onClickCancel() {
    this.modalCtrl.dismiss();
  }
  async cancel() {
    await this.modal.dismiss();
  }
  async onSubmit() {
    this.sqPaymentForm.requestCardNonce();

    await this.cancel();
    this.onClickCancel();
  }

  ngOnInit() {
    var applicationId = "sandbox-sq0idb-r92A0oxpvi6g0Y1wHRzYwA";
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
            console.error("Encountered errors:");
            errors.forEach(function (error) {
              console.error("  " + error.message);
            });
            this.nonce = null;
            return;
          }

          this.nonce = nonce;
          //TODO: Replace alert with code in step 2.1
        },
      },
    });
    //TODO: paste code from step 1.1.4
    this.sqPaymentForm.build();
    console.log("foram", this.sqPaymentForm);
  }
  // requestCardNonce(event) {
  //   // Don't submit the form until SqPaymentForm returns with a nonce
  //   event.preventDefault();

  //   // Request a nonce from the SqPaymentForm object
  //   this.paymentForm.requestCardNonce();
  // }
}
