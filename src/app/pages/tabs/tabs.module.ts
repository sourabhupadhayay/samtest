import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { PipesModule } from "src/app/pipes/pipes.module";
import { AppereanceBookingComponent } from "./appereance-booking/appereance-booking.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    PipesModule,
  ],
  declarations: [TabsPage, AppereanceBookingComponent],
})
export class TabsPageModule {}
