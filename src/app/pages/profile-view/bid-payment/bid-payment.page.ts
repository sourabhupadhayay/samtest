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
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private constantService: ConstantService,
    private commonService: CommonService,
    private renderer: Renderer2
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

  async presentPaymentModal() {
    if (this.bidAmount < 50 || !this.bidAmount) {
      this.coreService.showToastMessage(
        "Please enter bid amount greater than 50$",
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
    console.log(data);
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
        this.eventData = response.data;
        console.log(this.eventData);
        this.nameInitials = this.commonService.getInitials(
          this.eventData.athleteName
        );
        this.getMaximumBidForEvent();
        // if (response.status.code === this.constantService.STATUS_OK) {
        //   this.eventData = response.data;
        //   console.log(this.eventData);
        //   this.nameInitials = this.commonService.getInitials(
        //     this.eventData.athleteName
        //   );
        // } else {
        //   this.coreService.showToastMessage(
        //     response.status.description,
        //     this.coreService.TOAST_ERROR
        //   );
        // }
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
        console.log(response);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  onPayment() {
    if (this.bidAmount < 50 || !this.bidAmount) {
      this.coreService.showToastMessage(
        "Please enter bid amount greater than 50$",
        this.coreService.TOAST_ERROR
      );
      return;
    }
    let request: Request = {
      path: "core/event/bid/save",
      data: {
        eventId: this.eventId,
        nonce: "",
        paymentType: "",
        totalAmount: this.bidAmount,
      },
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe(() => {});
  }
}
