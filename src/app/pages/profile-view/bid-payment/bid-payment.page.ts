import { DecimalPipe, formatNumber, Location } from "@angular/common";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { PaymentComponent } from "../../tabs/payment/payment.component";
import { PopoverController } from "@ionic/angular";
import { PushNotificationPage } from "../../push-notification/push-notification.page";
import { ApplePay } from "@fresha/capacitor-plugin-applepay";
@Component({
  selector: "app-bid-payment",
  templateUrl: "./bid-payment.page.html",
  styleUrls: ["./bid-payment.page.scss"],
  providers: [DecimalPipe],
})
export class BidPaymentPage implements OnInit {
  eventData: any | null = null;
  nameInitials: string;
  bidAmount: string;
  eventId: string;
  paymentType: "SQUARE_PAYMENT" | "apple" = "SQUARE_PAYMENT";
  paymentData: paymentData | null = null;
  currentBidAmount: string = "";
  MaxAmount: string = "";
  badgeCount: number = 0;
  PaymentSummaryItem: any = {
    label: "bid",
    amount: "2",
  };
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private constantService: ConstantService,
    private commonService: CommonService,
    private renderer: Renderer2,
    private _location: Location,
    private decimalPipe: DecimalPipe,
    public popoverController: PopoverController
  ) {}

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

  async presentPaymentModal() {
    if (this.bidAmount < this.eventData?.minBid || !this.bidAmount) {
      this.coreService.showToastMessage(
        `Please enter bid amount greater than $${this.eventData?.minBid}`,
        this.coreService.TOAST_ERROR
      );
      return;
    }

    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: PaymentComponent,
      cssClass: "client-filter-modal",
      componentProps: {
        isBiddingForEvent: true,
      },
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();
    this.paymentData = data;
    this.paymentType = this.paymentData?.paymentType;
    if (!data) {
      return;
    }
  }

  getEventDataFromParams() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.eventId = params.get("id");
          this.coreService.presentLoader(this.constantService.WAIT);

          let request: Request = {
            path: "core/event/details/" + params.get("id"),
          };
          return this.apiService.get(request);
        })
      )
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();

        if (response.status.code === this.constantService.STATUS_OK) {
          this.eventData = response.data;

          this.nameInitials = this.commonService.getInitials(
            this.eventData.athleteName
          );
          this.getMaximumBidForEvent();
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
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
    let request: Request = {
      path: "core/event/bid/max/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        if (response.data.currentBid != null) {
          this.currentBidAmount = response.data.currentBid.totalAmount;
        }
        if (response.data.maxBid != null) {
          this.MaxAmount = response.data.maxBid.totalAmount;
        }
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  onPayment() {
    if (this.checkIsBidEntered()) return;
    if (this.checkPaymentData()) return;

    let request: Request = {
      path: "core/event/bid/save",
      data: {
        eventId: this.eventId,
        nonce: this.paymentData.nonce,
        paymentType: this.paymentData?.paymentType,
        totalAmount: parseFloat(this.bidAmount),
      },
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.router.navigate(["waitlist/event/" + this.eventId]);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  checkPaymentData(): boolean {
    if (!this.paymentData) {
      this.coreService.showToastMessage(
        `Please enter valid payment details`,
        this.coreService.TOAST_ERROR
      );
      return true;
    }
    return false;
  }

  checkIsBidEntered(): boolean {
    if (this.bidAmount < this.eventData?.minBid || !this.bidAmount) {
      this.coreService.showToastMessage(
        `Please enter bid amount greater than $${this.eventData?.minBid}`,
        this.coreService.TOAST_ERROR
      );
      return true;
    }
    return false;
  }

  getToFixedDigits(event: any) {
    if (event.target.value !== "")
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }

  getNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: any) => {
      this.badgeCount = response.data.unreadCount;
      console.log("c ", this.badgeCount);
      return this.badgeCount;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PushNotificationPage,
      cssClass: "notification-pop",
      event: ev,
      translucent: false,
      side: "bottom",
      alignment: "start",
      size: "auto",
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }
  applePayPayment() {
    console.log("apple pay ment");
    ApplePay.canMakePayments().then((res: any) => {
      console.log("can make payment", res);
      ApplePay.initiatePayment({
        merchantIdentifier: "merchant.com.bubbleapp",
        countryCode: "US",
        currencyCode: "USD",
        supportedCountries: ["United State"],
        supportedNetworks: ["amex", "masterCard", "visa"],
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
    });
  }
}

interface paymentData {
  nonce: string;
  paymentType: "SQUARE_PAYMENT" | "apple";
}
