import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Photo } from "@capacitor/camera";
import { format, parseISO } from "date-fns";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import {
  failedValidation,
  PasswordStrength,
} from "src/app/utility/passwordValidator";
import { AuthModuleService } from "../auth-module.service";
import {CommonService} from "../../../providers/common.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-signup-details",
  templateUrl: "./signup-details.page.html",
  styleUrls: ["./signup-details.page.scss"],
})
export class SignupDetailsPage implements OnInit {
  isPasswordStrong = false;
  isShowingPassword = false;
  isShowingConfirmPassword = false;
  isShowingPasswordHint = false;
  signUpDetailsForm: FormGroup;
  confirmPassword: String | null = null;
  isFormSubmitted: boolean = false;
  ProfileImageUrl: SafeUrl | null = null;
  selectedImage: Photo | null = null;
  passwordValidator = new PasswordStrength();
  failedValidationObject: failedValidation;
  profileUrl: string = "";
  currentDate: string = new Date().toISOString();
  selectedDOB:any;

  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService,
    private DOMSanitizer: DomSanitizer,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private common: AuthModuleService,
    public commonService: CommonService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.initForm();
    this.onPasswordChanged();
  }
  ionViewDidEnter() {
    this.getSignUpData();
  }
  ionViewDidLeave() {
    this.modalCtrl.dismiss();
    this.isFormSubmitted = false;
    this.signUpDetailsForm.reset();
  }

  initForm() {
    this.signUpDetailsForm = this.formBuilder.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
      ],
      email: [{ value: null, disabled: true }],
      password: [null, Validators.required],
      birthDate: [null, Validators.required],
      phone: [{ value: null, disabled: false }],
      showBirthDate: [false],
      teamName: [""],
      teamState: ["", Validators.pattern("^[a-zA-Z ]*$")],
      school: ["", Validators.pattern("^[a-zA-Z ]*$")],
      country: ["", Validators.pattern("^[a-zA-Z ]*$")],
    });
    this.getSignUpData();
  }

  onPasswordChanged() {
    this.signUpDetailsForm.controls.password.valueChanges.subscribe((value) => {
      this.failedValidationObject = this.passwordValidator.validatePassword(
        value
      );
      this.isPasswordStrong = <boolean>(
        this.passwordValidator.isPasswordStrong(value)
      );
    });
  }

  getSignUpData() {
    if (!this.common.signUpData) {
      return;
    }

    this.signUpDetailsForm.controls.email.patchValue(
      this.common.signUpData.email
    );

    if (!this.common.signUpData.phone) {
      return;
    }

    this.signUpDetailsForm.controls.phone.patchValue(
      this.common.signUpData.phone
    );

    this.signUpDetailsForm.controls.phone.disable({ onlySelf: true });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    // validations

    if (this.validateAge()) return;
    if (this.isFormValid()) return;
    if (this.isPassWordStrongEnough()) return;
    if (this.validateBothPasswords()) return;

    let { birthDate, ...signUpResponse } = this.signUpDetailsForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        birthDate: new Date(birthDate).toISOString(),
        profileUrl: this.profileUrl,
      },
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
         "User added sucessfully",
          this.coreService.TOAST_SUCCESS
        );
        this.router.navigate(["/auth/login"]);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  async selectImage() {
    // await this.coreService.getCameraPermission();
    this.selectedImage = await this.coreService.captureImage();
    let blob = await fetch(this.selectedImage.webPath).then((r) => r.blob());
    let imageSize = this.coreService.formatBytes(blob.size);
    if (imageSize > this.commonService.publicInfo.imageMaxSize) {
      this.coreService.showToastMessage(
        "please upload image that is under "+ this.commonService.publicInfo.imageMaxSize+" mb ",
        this.coreService.TOAST_WARNING
      );
      return;
    }
  if(blob.type=="image/png" || blob.type=="image/jpeg"){
    this.uploadImageToServer(blob, this.selectedImage.format);
    this.ProfileImageUrl = this.DOMSanitizer.bypassSecurityTrustUrl(
    this.selectedImage.webPath
    );
  }
  else{
    this.coreService.showToastMessage(
      "please upload image jpeg/png ",
      this.coreService.TOAST_ERROR
    );
  }
  }

  removeImage() {
    this.selectedImage = null;
    this.ProfileImageUrl = null;
    this.profileUrl = "";
  }

  uploadImageToServer(imageBlob: Blob, imageFormat: string) {
    if (!this.selectedImage) {
      return;
    }

    let imageFormData: FormData = new FormData();
    imageFormData.append("file", imageBlob, `profile.${imageFormat}`);

    let request: Request = {
      path: "auth/file/upload",
      data: imageFormData,
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.postImage(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      this.profileUrl = response.data.url;
    });
  }

  // utility methods
  checkDateFormat(event: any) {
    let x = event.target.value;

    if (x.length != 0) {
      let date = x.split("/");
      if (
        date[0].length >= 0 &&
        date[0].length <= 2 &&
        Number(date[0]) <= 12 &&
        date[1].length >= 0 &&
        date[1].length <= 2 &&
        Number(date[1]) <= 31 &&
        date[2].length == 4
      ) {
        return;
      } else {
        this.signUpDetailsForm.controls.birthDate.reset();

        this.coreService.showToastMessage(
          "Please enter valid date format",
          this.coreService.TOAST_ERROR
        );
      }
    }
  }

  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
  public showConfirmPassword(): void {
    this.isShowingConfirmPassword = !this.isShowingConfirmPassword;
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    let formattedDate = this.formatDate(date);

    this.signUpDetailsForm.controls.birthDate.patchValue(formattedDate);
    this.selectedDOB = new Date().toISOString();
    this.selectedDOB = date;
  }

  validateBothPasswords(): boolean {
    if (
      this.signUpDetailsForm.controls["password"].value !== this.confirmPassword
    ) {
      this.coreService.showToastMessage(
        "passwords do not match",
        this.coreService.TOAST_ERROR
      );

      return true;
    }
  }
  isPassWordStrongEnough(): boolean {
    if (!this.isPasswordStrong) {
      this.coreService.showToastMessage(
        "Password is not strong enough",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  isFormValid(): boolean {
    if (this.signUpDetailsForm.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid details",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  validateAge(): boolean {
    let selectedDate = new Date(
      this.signUpDetailsForm.controls.birthDate.value
    );
    let age = this._calculateAge(selectedDate);
    if (age <= 18) {
      this.coreService.showToastMessage(
        "Age of user must be greater than 18",
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
