import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ModalController } from "@ionic/angular";

import { CommonService } from "src/app/providers/common.service";
import {
  CoreService,
  UserRole,
  userRole,
} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-appereance-booking",
  templateUrl: "./appereance-booking.component.html",
  styleUrls: ["./appereance-booking.component.scss"],
})
export class AppereanceBookingComponent implements OnInit {
  athleteForm: FormGroup;
  fanForm: FormGroup;
  isAthleteFormSubmitted = false;
  isFanFormSubmitted = false;
  fanEventType: "VIDEO" | "IN_PERSON" = "VIDEO";
  userRole: userRole;
  options: string[] = ["One", "Two", "Three"];
  validationType = {
    addressLine1: [Validators.required],
    city: [Validators.required],
    state: [Validators.required],
    zipcode: [Validators.required],
  };

  constructor(
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    private commonService: CommonService,
    private coreService: CoreService,
    private apiService: DataService
  ) {}

  ngOnInit() {
    this.initAppearanceForm();
    this.getUserRole();
    this.eventTypeSelected();
    this.selectedAthlete();
  }
  async getUserRole() {
    this.userRole = await this.coreService.getUserDataFromStorage();
  }

  eventTypeSelected() {
    if (this.fanEventType == "VIDEO") {
      this.removeValidators(this.fanForm.controls.EventAddress as FormGroup);
    } else {
      this.addValidators(this.fanForm.controls.EventAddress as FormGroup);
    }
  }

  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      form.get(key).clearValidators();
      form.get(key).updateValueAndValidity();
    }
  }
  public addValidators(form: FormGroup) {
    for (const key in form.controls) {
      form.get(key).setValidators(this.validationType[key]);
      form.get(key).updateValueAndValidity();
    }
  }

  initAppearanceForm() {
    this.athleteForm = this.fb.nonNullable.group({
      eventType: ["VIDEO"],
      startDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      minBid: ["", [Validators.required]],
      description: ["", [Validators.required]],
      eventName: ["", [Validators.required]],
    });

    this.fanForm = this.fb.nonNullable.group({
      startDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      minBid: ["", [Validators.required]],
      description: ["", [Validators.required]],
      eventName: ["", [Validators.required]],
      selectedAthleteName: [""],
      EventAddress: this.fb.group({
        addressLine1: ["", [Validators.required]],
        city: ["", [Validators.required]],
        state: ["", [Validators.required]],
        zipcode: ["", [Validators.required]],
      }),
    });
  }

  onclick_cancel() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.userRole == "athlete") {
      this.athleteDataRequest();
    } else {
      this.fanDataRequest();
    }
  }

  athleteDataRequest() {
    this.isAthleteFormSubmitted = true;

    // let request: Request = {
    //   path: "auth/users/update",
    //   data: {
    //     ...this.athleteProfileForm.value,
    //     profileUrl: this.commonService.profileUrl,
    //   },
    //   isAuth: true,
    // };
    // return request;
  }

  fanDataRequest() {
    this.isFanFormSubmitted = true;

    // let { birthDate, ...signUpResponse } = this.fanProfileForm.value;

    // let request: Request = {
    //   path: "auth/users/update",
    //   data: {
    //     ...signUpResponse,
    //     birthDate: new Date(birthDate).toISOString(),
    //     profileUrl: this.commonService.profileUrl,
    //   },
    //   isAuth: true,
    // };
    // return request;
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.commonService.formatDateTime(date);

    if (this.userRole == "athlete") {
      this.athleteForm.controls.startDate.patchValue(formattedDate);
    } else {
      this.fanForm.controls.startDate.patchValue(formattedDate);
    }
  }

  selectedAthlete() {
    this.fanForm.controls.selectedAthleteName.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  patchTime(time: string) {
    // console.log(time);
    // let formattedTime = this.commonService.formatTime(time);

    var timeParts = time.split(":");

    console.log(timeParts);

    let hour = timeParts[0];
    let min = timeParts[1];

    if (hour.trim() === "00" && min.trim() === "00") {
      return;
    }
    if (this.userRole == "athlete") {
      if (hour == "00") {
        this.athleteForm.controls.duration.patchValue(`${min.trim()}m`);
      } else {
        this.athleteForm.controls.duration.patchValue(
          `${hour}h ${min.trim()}m`
        );
      }
    } else {
      if (hour == "00") {
        this.fanForm.controls.duration.patchValue(`${min.trim()}m`);
      } else {
        this.fanForm.controls.duration.patchValue(`${hour}h ${min.trim()}m`);
      }
    }

    let totalMin = this.commonService.convertTimeToMinute(hour, min);
  }

  validAthleteInputBorder(formControlName: string): string {
    if (
      this.athleteForm.controls[formControlName].invalid &&
      this.isAthleteFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
  validFanInputBorder(formControlName: string): string {
    if (
      this.athleteForm.controls[formControlName].invalid &&
      this.isFanFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
  validFanAddressInputBorder(formControlName: string) {
    if (
      (this.fanForm.get("EventAddress") as FormGroup).controls[formControlName]
        .invalid &&
      this.isFanFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
}
