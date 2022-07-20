import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SchedulePageRoutingModule } from "./schedule-routing.module";

import { SchedulePage } from "./schedule.page";
import { CardComponent } from "./card/card.component";
import { CommonDirectiveModule } from "src/app/directives/common-directive.module";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    CommonDirectiveModule,
    PipesModule,
  ],
  declarations: [SchedulePage, CardComponent],
})
export class SchedulePageModule {}
