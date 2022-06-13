import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthModuleRoutingModule } from "./auth-module-routing.module";
import { LoginPageModule } from "./login/login.module";
import { ForgotPasswordPageModule } from "./forgot-password/forgot-password.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    LoginPageModule,
    ForgotPasswordPageModule,
    ReactiveFormsModule,
  ],
})
export class AuthModuleModule {}
