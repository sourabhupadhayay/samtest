import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ResetPasswordPageRoutingModule } from "./reset-password-routing.module";

import { ResetPasswordPage } from "./reset-password.page";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  declarations: [ResetPasswordPage],
})
export class ResetPasswordPageModule {}
