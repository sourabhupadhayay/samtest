import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SignupDetailsPageRoutingModule } from "./signup-details-routing.module";

import { SignupDetailsPage } from "./signup-details.page";
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupDetailsPageRoutingModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule,
  ],
  declarations: [SignupDetailsPage],
})
export class SignupDetailsPageModule {}
