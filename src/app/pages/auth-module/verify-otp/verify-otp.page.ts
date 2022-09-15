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
  mode: "signup" | "forgot";

  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private common: AuthModuleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.startTimer();
    this.getFlowInfo();
  }

  getFlowInfo() {
    this.route.queryParams.subscribe((params: Params) => {
      this.mode = params.mode;
    });
  }

  onSubmit() {
    this.verifyActivateAccountOtp();
  }
  resendOtp() {
    this.stopTimer();

    let email = this.getEmail();

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

    let request: Request = {
      path: "auth/users/otp/verify/" + this.otpFormControl.value,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request, true).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
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
    } else {
      this.router.navigate(["auth/reset-password"]);
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
    } else {
      return this.common.forgotPasswordEmail;
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
        "Please enter valid otp",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
}
