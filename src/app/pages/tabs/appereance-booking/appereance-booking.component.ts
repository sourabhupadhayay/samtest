import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from "rxjs/operators";

import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
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
  $athletes: Observable<any>;
  selectedAthleteId: string;
  validationType = {
    addressLine1: [Validators.required],
    city: [Validators.required],
    state: [Validators.required],
    zipcode: [Validators.required],
  };
  selectedAthleteName: string = "";
  totalAthleteDuration: number = 0;
  totalFanDuration: number = 0;

  constructor(
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    private commonService: CommonService,
    private coreService: CoreService,
    private apiService: DataService,
    private constant: ConstantService
  ) {}

  ngOnInit() {
    this.initAppearanceForm();
    this.getUserRole();
    this.eventTypeSelected();
    this.getSelectedAthlete();
  }
  async getUserRole() {
    this.userRole = await this.coreService.getUserDataFromStorage();
  }

  eventTypeSelected() {
    if (this.fanEventType == "VIDEO") {
      this.removeValidators(this.fanForm.controls.eventAddress as FormGroup);
    } else {
      this.addValidators(this.fanForm.controls.eventAddress as FormGroup);
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
      selectedAthleteName: ["", Validators.required],
      eventAddress: this.fb.group({
        addressLine1: ["", [Validators.required]],
        city: ["", [Validators.required]],
        state: ["", [Validators.required]],
        zipcode: ["", [Validators.required]],
      }),
    });
  }

  onclick_cancel() {
    if (this.userRole == "athlete") {
      this.athleteForm.reset();
      this.isAthleteFormSubmitted = false;
    } else {
      this.fanForm.reset();
      this.isFanFormSubmitted = false;
    }
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    let request: Request;
    if (this.userRole == "athlete") {
      request = this.athleteDataRequest();
    } else {
      request = this.fanDataRequest();
    }

    console.log(request);
  }

  athleteDataRequest() {
    this.isAthleteFormSubmitted = true;
    if (this.athleteForm.invalid) {
      return;
    }
    this.isAthleteFormSubmitted = true;

    let { startDate, duration, ...athletePayload } = this.athleteForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...athletePayload,
        startDate: new Date(startDate).toISOString(),
        duration: this.totalAthleteDuration,
      },
      isAuth: true,
    };
    return request;
  }

  fanDataRequest() {
    this.isFanFormSubmitted = true;
    if (this.fanForm.invalid) {
      return;
    }
    let {
      selectedAthleteName,
      startDate,
      duration,
      eventAddress,
      ...signUpResponse
    } = this.fanForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        startDate: new Date(startDate).toISOString(),
        duration: this.totalFanDuration,
        athleteId: this.selectedAthleteId,
        eventType: this.fanEventType,
        eventAddress: this.fanEventType == "IN_PERSON" ? eventAddress : "",
      },
      isAuth: true,
    };
    return request;
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

  getSelectedAthlete() {
    this.$athletes = this.fanForm.controls.selectedAthleteName.valueChanges.pipe(
      startWith(""),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((value) => {
        let request: Request = {
          path: "auth/users/manage/filter/list",
          data: {
            filter: {
              roles: ["ATHLETE"],
              search: value,
            },
            page: {
              pageLimit: 1,
              pageNumber: 0,
            },
            sort: {
              orderBy: "ASC",
              sortBy: "FIRST_NAME",
            },
          },
          isAuth: false,
        };

        this.coreService.presentLoader(this.constant.WAIT);
        return this.apiService.post(request).pipe(
          map((response: Response) => {
            this.coreService.dismissLoader();
            if (response.status.code == this.constant.STATUS_OK) {
              this.isSelectedAthleteValid(value);
              return response.data;
            } else {
              this.coreService.showToastMessage(
                response["status"]["description"],
                this.coreService.TOAST_ERROR
              );
            }
          })
        );
      })
    );
  }

  selectedAthlete(athlete: any) {
    this.selectedAthleteId = athlete.id;
    this.selectedAthleteName = athlete.fullName;
  }
  isSelectedAthleteValid(textFieldValue: string) {
    if (textFieldValue !== this.selectedAthleteName) {
      this.selectedAthleteId == "";
      this.selectedAthleteName = "";
      this.fanForm.controls.selectedAthleteName.reset();
      this.coreService.showToastMessage(
        "Please select valid athlete",
        this.coreService.TOAST_ERROR
      );
    }
  }

  patchTime(time: string) {
    // console.log(time);
    // let formattedTime = this.commonService.formatTime(time);

    var timeParts = time.split(":");

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
      this.totalAthleteDuration = this.commonService.convertTimeToMinute(
        hour,
        min
      );
    } else {
      if (hour == "00") {
        this.fanForm.controls.duration.patchValue(`${min.trim()}m`);
      } else {
        this.fanForm.controls.duration.patchValue(`${hour}h ${min.trim()}m`);
      }
      this.totalFanDuration = this.commonService.convertTimeToMinute(hour, min);
    }
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
      this.fanForm.controls[formControlName].invalid &&
      this.isFanFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
  validFanAddressInputBorder(formControlName: string) {
    if (
      (this.fanForm.get("eventAddress") as FormGroup).controls[formControlName]
        .invalid &&
      this.isFanFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
}
