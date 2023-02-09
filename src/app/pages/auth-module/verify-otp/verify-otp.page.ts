import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgOtpInputConfig } from "ng-otp-input";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AuthModuleService } from "../auth-module.service";
import { Preferences } from "@capacitor/preferences";
import { Platform } from "@ionic/angular";
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { CallKitVoip } from "capacitor-callkit-voip";
@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.page.html",
  styleUrls: ["./verify-otp.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyOTPPage implements OnInit, OnDestroy {
  otpFormControl: FormControl = new FormControl<number | null>(null, [
    Validators.required,
    Validators.minLength(6),
  ]);

  otpInputConfig: NgOtpInputConfig = {
    length: 6,
    inputClass: "otpInput",
    containerClass: "optInputContainer",
    placeholder: "-",
    allowNumbersOnly: true,
    disableAutoFocus: false,
  };
  isOtpSent: boolean = false;
  interval: any;
  timeLeft: number = 120;
  mode: "signup" | "forgot" | "login";
  returnUrl: string;
  generatedToken: string | null = null;
  voipToken: any;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private cd: ChangeDetectorRef,
    private router: Router,
    public common: AuthModuleService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.startTimer();
    this.getFlowInfo();
    this.registerVoipNotification();
  }
  ionViewWillEnter() {
    this.generateNotificationToken();
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/tabs/home";
  }
  getFlowInfo() {
    this.route.queryParams.subscribe((params: Params) => {
      this.mode = params.mode;
      this.returnUrl = params.returnUrl;
    });
  }

  onSubmit() {
    this.verifyActivateAccountOtp();
  }
  resendOtp() {
    this.stopTimer();

    let email = this.getEmail();
    if (!email) {
      return this.router.navigate(["/"]);
    }

    let request: Request = {
      path: `auth/users/otp/send?email=${email}`,
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === "OK") {
        this.timeLeft = 120;
        this.startTimer();
        this.cd.detectChanges();
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

  verifyActivateAccountOtp() {
    if (this.validateOtp()) return;
    if (localStorage.getItem("voipToken")) {
      this.voipToken = localStorage.getItem("voipToken");
    }
    let request: Request = {
      path:
        "auth/users/otp/verify/" +
        this.otpFormControl.value +
        "?deviceToken=" +
        this.generatedToken +
        "?voipDeviceToken=" +
        this.voipToken,
      isAuth: true,
    };
    // this.apiService.post(request).subscribe((response: Response) => {
    //   this.authPublicInfo = response.data;
    // });
    let isTokenTemporary = true;
    if (this.mode == "login") {
      isTokenTemporary = false;
    }
    console.log(request);
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService
      .get(request, isTokenTemporary)
      .subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response["status"]["code"] === this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_SUCCESS
          );
          //  console.log(response)
          this.routeToNextPage();
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }

  //utility methods

  stopTimer() {
    clearInterval(this.interval);
  }

  routeToNextPage() {
    if (this.mode == "signup") {
      this.router.navigate(["auth/signup-details"]);
    } else if (this.mode == "forgot") {
      this.router.navigate(["auth/reset-password"]);
    } else {
      this.commonService.$socketSubject.next();
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
  ionViewDidLeave(): void {
    this.stopTimer();
  }
  private getEmail(): string {
    if (this.mode == "signup") {
      return this.common.signUpData.email;
    } else if (this.mode == "forgot") {
      return this.common.forgotPasswordEmail;
    } else {
      return this.common.loginEmail;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.cd.detectChanges();
      }
    }, 1000);
  }
  secondsToHms(d: number) {
    d = Number(d);

    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? "" : "  ") : "0";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "0";

    if (s < 10) {
      sDisplay = "0" + sDisplay;
    }

    return `0${mDisplay}: ${sDisplay}s`;
  }

  validateOtp(): boolean {
    if (this.otpFormControl.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid OTP",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  async generateNotificationToken() {
    if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
      this.generatedToken = null;
    }

    let result = await PushNotifications.requestPermissions();
    console.log("result notification", result);
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
    });
    console.log(this.generatedToken);
  }
  async registerVoipNotification() {
    // register token
    CallKitVoip.addListener("registration", ({ token }: any) => {
      console.log(`VOIP token has been received ${token}`);
      this.voipToken = token;
      console.log("common", this.voipToken);
    });
  }
}
