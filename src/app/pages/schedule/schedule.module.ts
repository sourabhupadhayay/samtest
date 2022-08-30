import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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
import { ShowOtpComponent } from "./show-otp/show-otp.component";
import { EnterOtpComponent } from "./enter-otp/enter-otp.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    CommonDirectiveModule,
    PipesModule,
  ],
  declarations: [
    SchedulePage,
    CardComponent,
    DismissmodalComponent,
    CancelRequestModalComponent,
    CancelMessageModalComponent,
    ApproveRequestComponent,
    ShowOtpComponent,
    EnterOtpComponent,
  ],
})
export class SchedulePageModule {}
