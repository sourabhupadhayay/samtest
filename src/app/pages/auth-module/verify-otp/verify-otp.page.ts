import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgOtpInputConfig } from "ng-otp-input";
import { CoreService } from "src/app/providers/core.service";

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
  };
  isOtpSent: boolean = false;
  interval: any;
  timeLeft: number = 120;

  constructor(
    private coreService: CoreService,
    private zone: NgZone,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.startTimer();
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

  onSubmit() {
    if (this.otpFormControl.valid) {
    } else {
      this.coreService.showToastMessage(
        "Please enter valid otp",
        this.coreService.TOAST_ERROR
      );
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  ionViewDidLeave(): void {
    clearInterval(this.interval);
  }
}
