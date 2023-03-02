import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { PipesModule } from "src/app/pipes/pipes.module";
import { AppereanceBookingComponent } from "./appereance-booking/appereance-booking.component";
import { CommonDirectiveModule } from "src/app/directives/common-directive.module";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { PaymentComponent } from "./payment/payment.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { SelectAppereancePage } from "./select-appereance/select-appereance.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    PipesModule,
    ReactiveFormsModule,
    CommonDirectiveModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  declarations: [
    TabsPage,
    AppereanceBookingComponent,
    SelectAppereancePage,
    PaymentComponent,
    TermsConditionsComponent,
  ],
})
export class TabsPageModule {}
