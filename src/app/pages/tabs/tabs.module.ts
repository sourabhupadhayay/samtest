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
  declarations: [TabsPage, AppereanceBookingComponent],
})
export class TabsPageModule {}
