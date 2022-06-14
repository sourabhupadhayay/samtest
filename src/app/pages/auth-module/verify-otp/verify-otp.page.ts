import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { NgOtpInputConfig } from "ng-otp-input";

@Component({
  selector: "app-verify-otp",
  templateUrl: "./verify-otp.page.html",
  styleUrls: ["./verify-otp.page.scss"],
})
export class VerifyOTPPage implements OnInit {
  otpFormControl: FormControl = new FormControl<number | null>(null, [
    Validators.required,
  ]);

  otpInputConfig: NgOtpInputConfig = {
    length: 6,
    inputClass: "otpInput",
    containerClass: "optInputContainer",
    placeholder:"-"
  };

  constructor() {}

  ngOnInit() {}

  onOtpChange(value: string | number) {
    console.log(value);
  }
}
