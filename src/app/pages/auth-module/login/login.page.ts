import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import {
  FacebookLogin,
  FacebookLoginResponse,
} from "@capacitor-community/facebook-login";

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
  FACEBOOK_PERMISSIONS: string[] = [
    "email",
    "user_birthday",
    "user_photos",
    "user_gender",
  ];

  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router
  ) {
    GoogleAuth.initialize({
      clientId:
        "1082803264576-6fh2eljajj00i2ofs55omddhmrs1s3q1.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
  }

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

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
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

  ionViewDidLeave() {
    this.isFormSubmitted = false;
    this.loginForm.reset();
  }

  //google sign in
  async googleSignIn() {
    let user = await GoogleAuth.signIn();
    console.log(user);
  }

  //facebook login

  async faceBookSignIn() {
    let result = (await FacebookLogin.login({
      permissions: this.FACEBOOK_PERMISSIONS,
    })) as FacebookLoginResponse;

    console.log(result);
  }
}
