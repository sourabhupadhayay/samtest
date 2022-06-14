import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VerifyOTPPageRoutingModule } from "./verify-otp-routing.module";

import { VerifyOTPPage } from "./verify-otp.page";
import { NgOtpInputModule } from "ng-otp-input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyOTPPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
  ],
  declarations: [VerifyOTPPage],
})
export class VerifyOTPPageModule {}
