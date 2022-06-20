import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Photo } from "@capacitor/camera";
import { format, parseISO } from "date-fns";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import {
  failedValidation,
  PasswordStrength,
} from "src/app/utility/passwordValidator";

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

  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService,
    private DOMSanitizer: DomSanitizer,
    private apiService: DataService,
    private constantSerice: ConstantService
  ) {}

  ngOnInit() {
    this.initForm();
    this.onPasswordChanged();
  }

  initForm() {
    this.signUpDetailsForm = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: [null, Validators.required],
      birthDate: [null, Validators.required],
      phone: [null],
      teamName: [null],
      teamState: [null],
      school: [null],
    });
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

  onSubmit() {
    console.log(this.signUpDetailsForm);
    this.isFormSubmitted = true;
    // validations
    if (this.isFormValid()) return;
    if (this.isPassWordStrongEnough()) return;
    if (this.validateBothPasswords()) return;
  }

  async selectImage() {
    this.selectedImage = await this.coreService.captureImage();
    let blob = await fetch(this.selectedImage.webPath).then((r) => r.blob());

    this.ProfileImageUrl = this.DOMSanitizer.bypassSecurityTrustUrl(
      this.selectedImage.webPath
    );
    this.uploadImageToServer(blob);
  }

  removeImage() {
    this.selectedImage = null;
    this.ProfileImageUrl = null;
  }

  uploadImageToServer(imageBlob: Blob) {
    if (!this.selectedImage) {
      return;
    }

    const imageFormData: FormData = new FormData();
    imageFormData.append("file", imageBlob);
    console.log(imageBlob);

    let request: Request = {
      path: "auth/file/upload/profile",
      data: imageFormData,

      isAuth: true,
    };

    this.apiService.postImage(request).subscribe((response) => {
      console.log(response);
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
}
