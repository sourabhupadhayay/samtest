import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BidPaymentPage } from "./bid-payment.page";

const routes: Routes = [
  {
    path: ":id",
    component: BidPaymentPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidPaymentPageRoutingModule {}
