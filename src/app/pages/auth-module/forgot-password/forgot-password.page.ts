import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AuthModuleService } from "../auth-module.service";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  emailController: FormControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
  ]);

  isFormSubmitted = false;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private commonService: AuthModuleService,
    private platform: Platform,
    private commonService2: CommonService
  ) {}

  ngOnInit() {}

  saveSignupData() {
    this.commonService.forgotPasswordEmail = this.emailController.value;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.emailController.invalid) {
      return;
    }

    let request: Request = {
      path: "auth/users/user/password/forget",
      data: {
        email: this.emailController.value,
      },
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === "OK") {
        this.saveSignupData();
        this.router.navigate(["auth/verify-otp"], {
          queryParams: {
            mode: "forgot",
          },
        });
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
}
