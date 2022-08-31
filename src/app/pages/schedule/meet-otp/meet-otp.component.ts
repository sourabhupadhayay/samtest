import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ModalController, NavParams } from "@ionic/angular";
import { NgOtpInputConfig } from "ng-otp-input";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-meet-otp",
  templateUrl: "./meet-otp.component.html",
  styleUrls: ["./meet-otp.component.scss"],
})
export class MeetOtpComponent implements OnInit {
  userRole: userRole = this.navParams.get("userRole");
  eventName: string = this.navParams.get("eventName");
  eventId: string = this.navParams.get("eventId");
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

  otp: number;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private apiService: DataService,
    private coreService: CoreService,
    private constantService: ConstantService
  ) {}

  ngOnInit() {
    if (this.userRole == "fan") {
      this.getOtp();
    }
  }

  getOtp() {
    let request: Request = {
      path: "core/event/getOtp/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.otp = response.data;
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  verifyOtp() {
    if (this.validateOtp()) return;

    let request: Request = {
      path: `core/event/otp/verify/${this.otpFormControl.value}?eventId=${this.eventId}`,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );

        this.modalCtrl.dismiss();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
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
