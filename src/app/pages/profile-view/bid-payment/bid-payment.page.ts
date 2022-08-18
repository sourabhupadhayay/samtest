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
  athleteData: any | null = null;
  nameInitials: string;
  bidAmount: number;
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
    this.getAthleteData();
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

  getAthleteData() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.coreService.presentLoader(this.constantService.WAIT);
          let request: Request = {
            path: "auth/users/currentUser?userId=" + params.get("id"),
          };
          return this.apiService.get(request);
        })
      )
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.athleteData = response.data;
          this.nameInitials = this.commonService.getInitials(
            this.athleteData.fullName
          );
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
        eventId: "",
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
