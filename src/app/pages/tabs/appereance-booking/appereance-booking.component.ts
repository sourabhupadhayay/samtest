import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ModalController } from "@ionic/angular";

import { CommonService } from "src/app/providers/common.service";
import { CoreService } from "src/app/providers/core.service";

@Component({
  selector: "app-appereance-booking",
  templateUrl: "./appereance-booking.component.html",
  styleUrls: ["./appereance-booking.component.scss"],
})
export class AppereanceBookingComponent implements OnInit {
  athleteForm: FormGroup;
  fanForm: FormGroup;
  isFormSubmitted = false;
  fanEventType: string = "VIDEO";
  constructor(
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    private commonService: CommonService,
    private coreService: CoreService
  ) {}

  ngOnInit() {
    this.initAppearanceForm();
    this.eventTypeSelected();
  }
  getUserRole() {}

  eventTypeSelected() {
    console.log(this.fanEventType);
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
    });
  }

  onclick_cancel() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.athleteForm);
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.commonService.formatDateTime(date);
    this.athleteForm.controls.startDate.patchValue(formattedDate);
  }

  patchTime(time: string) {
    let formattedTime = this.commonService.formatTime(time);

    var timeParts = formattedTime.split(":");

    let hour = timeParts[0];
    let min = timeParts[1];

    if (hour.trim() === "00" && min.trim() === "00") {
      return;
    }

    if (hour == "00") {
      this.athleteForm.controls.duration.patchValue(`${min.trim()}m`);
    } else {
      this.athleteForm.controls.duration.patchValue(`${hour}h ${min.trim()}m`);
    }

    let totalMin = this.commonService.convertTimeToMinute(hour, min);
  }

  validAthleteInputBorder(formControlName: string): string {
    if (
      this.athleteForm.controls[formControlName].invalid &&
      this.isFormSubmitted
    ) {
      return "error-input";
    } else {
      return "";
    }
  }
}
