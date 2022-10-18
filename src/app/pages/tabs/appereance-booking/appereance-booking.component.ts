import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
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
import { TermsConditionsComponent } from "../terms-conditions/terms-conditions.component";
import { format, utcToZonedTime } from "date-fns-tz";

@Component({
  selector: "app-appereance-booking",
  templateUrl: "./appereance-booking.component.html",
  styleUrls: ["./appereance-booking.component.scss"],
  providers: [CurrencyPipe],
})
export class AppereanceBookingComponent implements OnInit {
  athleteForm: FormGroup;
  fanForm: FormGroup;
  isAthleteFormSubmitted = false;
  isFanFormSubmitted = false;
  fanEventType: "VIDEO" | "IN_PERSON" = "VIDEO";
  userRole: userRole;
  $athletes: Observable<any>;
  selectedAthleteId: string = "";
  validationType = {
    addressLine1: [Validators.required],
    city: [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
    state: [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
    zipCode: [Validators.required, Validators.minLength(5)],
  };
  selectedAthleteName: string = "";
  totalAthleteDuration: number = 0;
  totalFanDuration: number = 0;
  isTermsAndConditionAccepted: boolean = false;
  currentDate: string;
  currentTime: string;
  isoDate: any;
  eventStartTime:any;
  defaultDate = new Date().toISOString();

  constructor(
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    private commonService: CommonService,
    private coreService: CoreService,
    private apiService: DataService,
    private constant: ConstantService,
    private renderer: Renderer2,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    const script = this.renderer.createElement("script");
    if (this.commonService.publicInfo.squareEnvironment == "PRODUCTION") {
      script.src = `https://js.squareup.com/v2/paymentform`;
    } else {
      script.src = `https://js.squareupsandbox.com/v2/paymentform`;
    }
    this.renderer.appendChild(document.head, script);
    this.initAppearanceForm();
    this.getUserRole();
    this.eventTypeSelected();
    this.getSelectedAthlete();
    this.timeZone();
    console.log("ddddd ",this.defaultDate)
  }
  async getUserRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.setDuration();
  }

  timeZone() {
    // Get the time zone set on the user's device
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let date = new Date().toISOString();

    const zonedTime = utcToZonedTime(date, userTimeZone);

    let formattedDate = format(zonedTime, "yyyy-MM-dd HH:mm:ss zzz", {
      timeZone: userTimeZone,
    });
    let isoDate = new Date(formattedDate).toISOString();

    this.currentDate = isoDate;
  }

  setDuration() {
    if (this.userRole !== "fan") {
      return;
    }
    if (this.fanEventType !== "VIDEO") {
      this.fanForm.controls.duration.reset();
      return;
    }

    this.fanForm.controls.duration.patchValue(
      this.commonService.publicInfo.defaultDurationOfFanEvent + "min"
    );
    this.totalFanDuration = this.commonService.publicInfo.defaultDurationOfFanEvent;
  }

  eventTypeSelected() {
    this.setDuration();
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

  async presentTermsAndConditions() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: TermsConditionsComponent,
      cssClass: "tandc-modal",
    });
    modal.present();
  }

  initAppearanceForm() {
    this.athleteForm = this.fb.nonNullable.group({
      eventType: ["VIDEO"],
      startDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      minBid: [null, [Validators.required]],
      description: [""],
      eventName: ["", [Validators.required]],
      time: ["", [Validators.required]],
    });

    this.fanForm = this.fb.nonNullable.group({
      startDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      minBid: [null, [Validators.required]],
      description: [""],
      eventName: ["", [Validators.required]],
      selectedAthleteName: ["", Validators.required],
      eventAddress: this.fb.group({
        addressLine1: ["", [Validators.required]],
        city: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
        state: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
        zipCode: ["", [Validators.required, Validators.maxLength(5)]],
      }),
      time : ["",[Validators.required]]
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

    this.modalCtrl.dismiss(false);
  }

  onSubmit() {
    let request: Request;

    if (this.userRole == "athlete") {
      request = this.athleteDataRequest();
    } else {
      request = this.fanDataRequest();
    }

    if (!request) {
      return;
    }
    if (this.userRole == "athlete") {
      this.coreService.presentLoader(this.constant.WAIT);
      this.apiService.post(request).subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response.status.code == this.constant.STATUS_OK) {
          this.modalCtrl.dismiss(false);
        } else {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_ERROR
          );
        }
      });
    } else {
      this.modalCtrl.dismiss(request);
    }
  }

  athleteDataRequest() {
    this.isAthleteFormSubmitted = true;

    this.athleteForm.controls.minBid.patchValue(
      this.parseStringToFloat(this.athleteForm.controls.minBid.value)
    );

    if (this.athleteForm.invalid) {
      return;
    }
    this.isAthleteFormSubmitted = true;

    let { startDate, duration, time, ...athletePayload } = this.athleteForm.value;

    let request: Request = {
      path: "core/event/create",
      data: {
        ...athletePayload,
        // startDate: new Date(startDate).toISOString(),
        startDate : this.eventStartTime,
        duration: this.totalAthleteDuration,
      },
      isAuth: true,
    };
    return request;
  }

  fanDataRequest() {
    this.isFanFormSubmitted = true;

    this.fanForm.controls.minBid.patchValue(
      this.parseStringToFloat(this.fanForm.controls.minBid.value)
    );

    if (this.fanForm.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid details",
        this.coreService.TOAST_ERROR
      );
      return;
    }

    if (this.isSelectedAthleteValid()) {
      return;
    }

    let {
      selectedAthleteName,
      startDate,
      duration,
      eventAddress,
      time,

      ...signUpResponse
    } = this.fanForm.value;

    let request: Request = {
      path: "core/event/create",
      data: {
        ...signUpResponse,
        // startDate: new Date(startDate).toISOString(),
        startDate: this.eventStartTime,
        duration: this.totalFanDuration,
        athleteId: this.selectedAthleteId,
        eventType: this.fanEventType,

        eventAddress: this.fanEventType == "IN_PERSON" ? eventAddress : {},
      },
      isAuth: true,
    };
    return request;
  }

  setDateValue(date: string) {
    if (!date) {
      return;
    }
    let dt = date.split('T')[0];
    let formattedDate = this.commonService.formatDateTimeUpdated(dt);

    if (this.userRole == "athlete") {
      this.athleteForm.controls.startDate.patchValue(formattedDate);
    } else {
      this.fanForm.controls.startDate.patchValue(formattedDate);
    }
    let dt2 = new Date(date).toISOString();
    this.isoDate = dt2.split('T')[0];
    console.log("date ",this.isoDate);
  }
  setTimeValue(time: string) {
    if (!time) {
      return;
    }
    var tm = time;
    let timedata = tm.split('T')[1];
    console.log("time2 ",timedata)
    let hour = timedata.split(':')[0];
    let minute = timedata.split(':')[1];
  
    var AmOrPm = +hour >= 12 ? 'pm' : 'am';
    var o = (+hour % 12) || 12;
    var startTime = o + ":" + minute + " " + AmOrPm; + ":" + minute + " " + AmOrPm;
    if (this.userRole == "athlete") {
      this.athleteForm.controls.time.patchValue(startTime);
    } else {
      this.fanForm.controls.time.patchValue(startTime);
    }
   console.log("final ",this.isoDate+'T'+timedata);
   this.eventStartTime = (this.isoDate+'T'+timedata);
  }


  getSelectedAthlete() {
    this.$athletes = this.fanForm.controls.selectedAthleteName.valueChanges.pipe(
      startWith(""),
      map((search: string) => search.trim()),
      debounceTime(1000),
      distinctUntilChanged(),

      switchMap((value) => {
        this.resetSelectedAthleteId(value);

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
  isSelectedAthleteValid() {
    if (this.selectedAthleteId == "") {
      this.coreService.showToastMessage(
        "Please select valid athlete",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
    return false;
  }

  resetSelectedAthleteId(value: string) {
    if (value !== this.selectedAthleteName) {
      this.selectedAthleteId = "";
    }
  }

  patchTime(time: string) {
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

  getInitials(name: string): string {
    return this.commonService.getInitials(name);
  }

  setInputCurrency() {
    let bidAmount: string | null = null;
    if (this.userRole == "fan") {
      bidAmount = this.fanForm.controls.minBid.value;
    } else {
      bidAmount = this.athleteForm.controls.minBid.value;
    }

    if (!bidAmount) {
      return;
    }
    if (bidAmount.includes("$")) {
      bidAmount = bidAmount.replace("$", "");
    }
    if (bidAmount.includes(",")) {
      bidAmount = bidAmount.replace(",", "");
    }

    let convertedAmount = this.currencyPipe.transform(bidAmount, "$");

    if (this.userRole == "fan") {
      this.fanForm.controls.minBid.patchValue(convertedAmount);
    } else {
      this.athleteForm.controls.minBid.patchValue(convertedAmount);
    }
  }

  parseStringToFloat(bidAmount: string): number {
    if (bidAmount.includes("$")) {
      bidAmount = bidAmount.replace("$", "");
    }
    if (bidAmount.includes(",")) {
      bidAmount = bidAmount.replace(",", "");
    }

    return parseFloat(bidAmount);
  }
}
