import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Storage } from "@capacitor/storage";

import { Platform } from "@ionic/angular";
import {
  FacebookLogin,
  FacebookLoginResponse,
} from "@capacitor-community/facebook-login";
import { CommonService } from "src/app/providers/common.service";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { AuthModuleService } from "../auth-module.service";

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
  returnUrl: string;

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
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private platform: Platform,
    private commonAuthData: AuthModuleService
  ) {
    GoogleAuth.initialize({
      clientId:
        "1082803264576-6fh2eljajj00i2ofs55omddhmrs1s3q1.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
  }

  ngOnInit() {}
  ionViewWillEnter() {
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/tabs/home";
  }
  showPasswordToggle() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  async onSubmit() {
    this.isFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    let token = await this.generateNotificationToken();
    let request: Request = {
      path: "auth/users/login",
      data: { ...this.loginForm.value, loginSource: "WEB", deviceToken: token },
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request, true).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        Storage.set({
          key: "userDetails",
          value: JSON.stringify(response.data),
        }).then(() => {
          this.commonAuthData.loginEmail = this.loginForm.controls.email.value;
          this.router.navigate(["auth/verify-otp"], {
            queryParams: {
              mode: "login",
              returnUrl: this.returnUrl,
            },
          });
        });
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  socialLogin(data) {
    let request: Request = {
      path: "auth/users/login",
      data: {
        socialAccessToken: data.socialAccessToken,
        socialLoginType: data.socialLoginType,
      },
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        Storage.set({
          key: "userDetails",
          value: JSON.stringify(response.data),
        }).then(() => {
          if (!response.data.birthDate) {
            this.router.navigate(["/home/user/edit-profile"], {
              queryParams: {
                isProfileComplete: false,
              },
            });
          } else {
            this.router.navigateByUrl(this.returnUrl);
          }
        });
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
    try {
      let user = await GoogleAuth.signIn();

      let RequestData = {
        socialAccessToken: user.authentication.accessToken,
        socialLoginType: "GOOGLE",
      };

      this.socialLogin(RequestData);
    } catch (e) {}
  }

  //facebook login

  async faceBookSignIn() {
    try {
      let result = (await FacebookLogin.login({
        permissions: this.FACEBOOK_PERMISSIONS,
      })) as FacebookLoginResponse;

      let RequestData = {
        socialAccessToken: result.accessToken.token,
        socialLoginType: "FACEBOOK",
      };

      this.socialLogin(RequestData);
    } catch (e) {}
  }

  async generateNotificationToken(): Promise<string | null> {
    let generatedToken = null;

    if (this.platform.is("desktop")) {
      return generatedToken;
    }

    let result = await PushNotifications.requestPermissions();

    if (result.receive === "granted") {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      generatedToken = null;
      // Show some error
    }

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      generatedToken = token.value;
    });

    return generatedToken;
  }
}
