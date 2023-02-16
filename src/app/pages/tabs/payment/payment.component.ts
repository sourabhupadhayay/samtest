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

declare var Square :any;
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
  paymentType: "SQUARE_PAYMENT" | "apple" = "SQUARE_PAYMENT";
  errorMsg: any;
  sqPaymentForm: any; //this is our payment form object
  card :any;
  isCardSelected: boolean = false;
  showPaymentScreen : boolean = false;
  isChecked:boolean=false
  savecard:any=[];
  LoggedInUser : any;
  tappedCardDetails : any;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private commonService: CommonService,
    public navParams: NavParams,
    public apiService: DataService,
    public constantService : ConstantService,
  ) {}

  async ngOnInit() {
    // this.showPayment();
    this.getSavedCardList();
    this.initializeCard();
    this.LoggedInUser = await localStorage.getItem("authDetails");
  }

  showPaymentDiv(show:boolean) {
    this.showPaymentScreen = show;
  }

  getSavedCardList() {
      let request: any = {
        path: "core/payment/cards?paymentType=SQUARE_PAYMENT",
        isAuth: true,
      };
        this.apiService.get(request).subscribe((response: any) => {
          this.savecard = response.data;
          this.savecard.forEach((element,index) => {
              this.savecard[index]['isCardSelected']=false;
            }) 
          console.log("c ",this.savecard);
          });
  }

  selectCard(i:number,selectedCardData:any) {
    this.tappedCardDetails = selectedCardData;
    this.isCardSelected = true;
    console.log("clicked ",this.isCardSelected,selectedCardData)
    this.savecard.forEach((element,index) => {
      if(index==i){
        this.savecard[index]['isCardSelected']=true
      }
      else{
        this.savecard[index]['isCardSelected']=false
      }
      
    });
  }

  saveSelectedCard() {
    console.log("card saved!");
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
      }
    });

  }

  async CardSaveCheckBox(e:any) {
   if( e.detail.checked) {
    let tokenResult;
    await this.card.tokenize().then(data=>
      {
        tokenResult=data.status,
        this.nonce = data.token
      }
    );
    console.log("token new ",tokenResult,this.nonce)
    if(tokenResult!='Invalid'){
    this.ConfirmSaveCardModal.present();
    }
    else{
      this.isChecked=false
    }
   }
  }

  paymentThroughSelectedCard() {
    if(!this.isCardSelected) {
      this.coreService.showToastMessage(
        "Please select a card for payment!",
        this.coreService.TOAST_ERROR
      );
      return;
    }
    this.confirmSavedCardPayment.present();
  }

 async confirmPaymentFromSavedCard() {
    console.log("pay !");
    this.pay();
  }

  onClickCancel() {
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
    this.modalCtrl.dismiss({
      nonce: this.nonce,
      paymentType: this.paymentType,
      cardId: this.tappedCardDetails?.id
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
  async initializeCard(payments?:any) {
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
      console.log("called",e)
    e.preventDefault(); 
})
  } 

 async pay() {
  let error:any[]= []
   await this.card.tokenize().then(data=>
      this.nonce = data.token,
      );  
      console.log("nonce ",this.nonce);
      // await this.card.tokenize().then(data=>
      //   console.log("card ",data))
      // if(this.nonce!=undefined){
      //   this.ConfirmModal.present()
      // }
      this.ConfirmModal.present()
  }
  
}
