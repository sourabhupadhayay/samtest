import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SchedulePageRoutingModule } from "./schedule-routing.module";

import { SchedulePage } from "./schedule.page";
import { CardComponent } from "./card/card.component";
import { CommonDirectiveModule } from "src/app/directives/common-directive.module";
import { PipesModule } from "src/app/pipes/pipes.module";
import { DismissmodalComponent } from "./dismissmodal/dismissmodal.component";
import { CancelRequestModalComponent } from "./cancel-request-modal/cancel-request-modal.component";
import { CancelMessageModalComponent } from "./cancel-message-modal/cancel-message-modal.component";
import { ApproveRequestComponent } from "./approve-request/approve-request.component";
import { MeetOtpComponent } from "./meet-otp/meet-otp.component";
import { NgOtpInputModule } from "ng-otp-input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    CommonDirectiveModule,
    PipesModule,
    ReactiveFormsModule,
    NgOtpInputModule,
  ],
  declarations: [
    SchedulePage,
    CardComponent,
    DismissmodalComponent,
    CancelRequestModalComponent,
    CancelMessageModalComponent,
    ApproveRequestComponent,
    MeetOtpComponent,
  ],
})
export class SchedulePageModule {}
