import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  isFormSubmitted = false;
  isShowingPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router
  ) {}

  ngOnInit() {}

  showPasswordToggle() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let request: Request = {
      path: "auth/users/login",
      data: { ...this.loginForm.value, loginSource: "WEB" },
    };

    this.coreService.presentLoader();
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
}
