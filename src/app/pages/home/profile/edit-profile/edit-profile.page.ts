import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { format, parseISO } from "date-fns";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
  editProfileForm: FormGroup;
  currentDate: string = new Date().toISOString();
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private authentication: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCurrentUserDetails();
    this.initForm();
  }
  initForm() {
    this.editProfileForm = this.formBuilder.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
      ],
      showBirthDate: [false],
      birthDate: [null, Validators.required],
      phone: [{ value: null, disabled: false }],
      teamName: [""],
    });
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.editProfileForm.patchValue(response.data);
        this.patchDateValue(response.data.birthDate);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  onSubmit() {
    console.log(this.editProfileForm);
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.formatDate(date);
    console.log(formattedDate);

    this.editProfileForm.controls.birthDate.patchValue(formattedDate);
  }

  isFormValid(): boolean {
    if (this.editProfileForm.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid details",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  validateAge(): boolean {
    let selectedDate = new Date(this.editProfileForm.controls.birthDate.value);
    let age = this._calculateAge(selectedDate);
    if (age <= 18) {
      this.coreService.showToastMessage(
        "age of user must be greater than 18",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  private _calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
