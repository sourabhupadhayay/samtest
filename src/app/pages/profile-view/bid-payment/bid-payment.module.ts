import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BidPaymentPageRoutingModule } from "./bid-payment-routing.module";

import { BidPaymentPage } from "./bid-payment.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidPaymentPageRoutingModule,
    PipesModule,
  ],
  declarations: [BidPaymentPage],
})
export class BidPaymentPageModule {}
