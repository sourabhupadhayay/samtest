import { Location } from "@angular/common";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { PaymentComponent } from "../../tabs/payment/payment.component";

@Component({
  selector: "app-bid-payment",
  templateUrl: "./bid-payment.page.html",
  styleUrls: ["./bid-payment.page.scss"],
})
export class BidPaymentPage implements OnInit {
  eventData: any | null = null;
  nameInitials: string;
  bidAmount: number;
  eventId: string;
  paymentType: "SQUARE_PAYMENT" | "apple" = "SQUARE_PAYMENT";
  paymentData: paymentData | null = null;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private constantService: ConstantService,
    private commonService: CommonService,
    private renderer: Renderer2,
    private _location: Location
  ) {}

  ngOnInit() {
    this.squarePaymentScript();
    this.getEventDataFromParams();
  }

  squarePaymentScript() {
    const script = this.renderer.createElement("script");
    if (this.commonService.publicInfo?.squareEnvironment == "PRODUCTION") {
      script.src = `https://js.squareup.com/v2/paymentform`;
    } else {
      script.src = `https://js.squareupsandbox.com/v2/paymentform`;
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
        `Please enter bid amount greater than ${this.eventData?.minBid}$`,
        this.coreService.TOAST_ERROR
      );
      return;
    }

    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: PaymentComponent,
      cssClass: "client-filter-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();
    this.paymentData = data;
    this.paymentType = this.paymentData.paymentType;
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

  getMaximumBidForEvent() {
    let request: Request = {
      path: "core/event/bid/max/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
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
        paymentType: this.paymentData.paymentType,
        totalAmount: this.bidAmount,
      },
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.router.navigate(["waitlist"]);
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
        `Please enter bid amount greater than ${this.eventData?.minBid}$`,
        this.coreService.TOAST_ERROR
      );
      return true;
    }
    return false;
  }
}
interface paymentData {
  nonce: string;
  paymentType: "SQUARE_PAYMENT" | "apple";
}