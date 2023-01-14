import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Preferences } from "@capacitor/preferences";
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
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { _FirebaseMessagingName } from "firebase/messaging/sw";
import {
  SignInWithApple,
  AppleSignInResponse,
  AppleSignInErrorResponse,
  ASAuthorizationAppleIDRequest,
} from "@awesome-cordova-plugins/sign-in-with-apple/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  isFormSubmitted = false;
  isShowingPassword: boolean = false;
  authPublicInfo: any;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });
  returnUrl: string;
  generatedToken: string | null = null;
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
    private commonAuthData: AuthModuleService,
    private afMessaging: AngularFireMessaging,
    private signInWithApple: SignInWithApple
  ) {
    GoogleAuth.initialize({
      clientId:
        "573316732862-ihcsn2uu3cvnhq115s1ejvnbv5mko29t.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });
    // this.applesign();
  }

  ngOnInit() {
    this.getAuthPublicInfo();
  }
  ionViewWillEnter() {
    this.generateNotificationToken();
    this.requestPushNotificationsPermission();
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/tabs/home";
  }
  getAuthPublicInfo() {
    let request: Request = {
      path: "auth/configuration/publicInfo",
      isAuth: false,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      this.authPublicInfo = response.data;
    });
  }
  showPasswordToggle() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  async onSubmit() {
    this.isFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    let request: Request = {
      path: "auth/users/login",
      data: {
        ...this.loginForm.value,
        loginSource: "WEB",
        deviceToken: this.generatedToken,
      },
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    if (this.authPublicInfo.twoStepAuthentication) {
      this.apiService.post(request, false).subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          console.log("eaning");

          localStorage.setItem("authDetails", JSON.stringify(response.data));
          Preferences.set({
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
    } else {
      this.apiService.post(request, false).subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.commonService.getAthleteEarnings();
          localStorage.setItem("authDetails", JSON.stringify(response.data));
          Preferences.set({
            key: "userDetails",
            value: JSON.stringify(response.data),
          }).then(() => {
            this.commonAuthData.loginEmail = this.loginForm.controls.email.value;
            this.router.navigate(["/tabs/home"]);
          });
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
    }
  }

  socialLogin(data) {
    let request: Request = {
      path: "auth/users/login",
      data: {
        socialAccessToken: data.socialAccessToken,
        socialLoginType: data.socialLoginType,
        deviceToken: this.generatedToken,
      },
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        console.log("social");
        localStorage.setItem("authDetails", JSON.stringify(response.data));

        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        Preferences.set({
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
    // this.coreService.showToastMessage(
    //   "Development under progress",
    //   this.coreService.TOAST_INFO
    // );
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
    this.coreService.showToastMessage(
      "Development under progress",
      this.coreService.TOAST_INFO
    );
    // try {
    //   let result = (await FacebookLogin.login({
    //     permissions: this.FACEBOOK_PERMISSIONS,
    //   })) as FacebookLoginResponse;
    //   let RequestData = {
    //     socialAccessToken: result.accessToken.token,
    //     socialLoginType: "FACEBOOK",
    //   };
    //   this.socialLogin(RequestData);
    // } catch (e) {}
  }

  async generateNotificationToken() {
    if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
      this.generatedToken = null;
    }

    let result = await PushNotifications.requestPermissions();
    console.log("result login", result.receive);
    if (result.receive === "granted") {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      this.generatedToken = null;
      // Show some error
    }

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      this.generatedToken = token.value;
      // alert("Push registration success, token: " + token.value);
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        // alert("Push received: " + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        // alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }
  requestPushNotificationsPermission() {
    // requesting permission
    this.afMessaging.requestToken // getting tokens
      .subscribe(
        (token) => {
          // USER-REQUESTED-TOKEN
          this.generatedToken = token;
          console.log("Permission granted! Save to the server!", token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getMessage() {
    this.afMessaging.messages.subscribe((e) => {
      console.log(e);
    });
  }
  applesign() {
    this.signInWithApple
      .signin({
        requestedScopes: [
          ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
          ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
        ],
      })
      .then((res: AppleSignInResponse) => {
        // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user

        let RequestData = {
          socialAccessToken: res.identityToken,
          socialLoginType: "APPLE",
        };
        this.socialLogin(RequestData);
        console.log(res);
        console.log(res.identityToken);
      })
      .catch((error: AppleSignInErrorResponse) => {
        alert(error.code + " " + error.localizedDescription);
        console.error(error);
      });
  }
}
