import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginPageModule),
      },
      {
        path: "forgot",
        loadChildren: () =>
          import("./forgot-password/forgot-password.module").then(
            (m) => m.ForgotPasswordPageModule
          ),
      },
      {
        path: "verify-otp",
        loadChildren: () =>
          import("./verify-otp/verify-otp.module").then(
            (m) => m.VerifyOTPPageModule
          ),
      },
      {
        path: "reset-password",
        loadChildren: () =>
          import("./reset-password/reset-password.module").then(
            (m) => m.ResetPasswordPageModule
          ),
      },
      {
        path: "signup-details",
        loadChildren: () =>
          import("./signup-details/signup-details.module").then(
            (m) => m.SignupDetailsPageModule
          ),
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthModuleRoutingModule {}
