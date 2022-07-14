import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SchedulePageRoutingModule } from "./schedule-routing.module";

import { SchedulePage } from "./schedule.page";
import { CardComponent } from "./card/card.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SchedulePageRoutingModule],
  declarations: [SchedulePage, CardComponent],
})
export class SchedulePageModule {}
