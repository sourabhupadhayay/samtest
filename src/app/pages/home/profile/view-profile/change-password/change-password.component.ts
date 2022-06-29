import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import {
  failedValidation,
  PasswordStrength,
} from "src/app/utility/passwordValidator";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  isPasswordStrong = false;
  isShowingPassword = false;
  isShowingConfirmPassword = false;
  isShowingOldPassword = false;
  passwordValidator = new PasswordStrength();
  failedValidationObject: failedValidation;
  isFormSubmitted = false;
  passwordFormGroup: FormGroup = new FormGroup({
    oldPassword: new FormControl<string | null | number>(null, [
      Validators.required,
    ]),
    password: new FormControl<string | null | number>(null, [
      Validators.required,
    ]),
    confirmPassword: new FormControl<string | null | number>(null, [
      Validators.required,
    ]),
  });
  constructor(
    private modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService
  ) {}

  ngOnInit() {
    this.onPasswordChanged();
  }

  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
  public showConfirmPassword(): void {
    this.isShowingConfirmPassword = !this.isShowingConfirmPassword;
  }
  public showOldPassword(): void {
    this.isShowingOldPassword = !this.isShowingOldPassword;
  }

  onPasswordChanged() {
    this.passwordFormGroup.controls.password.valueChanges.subscribe((value) => {
      this.failedValidationObject = this.passwordValidator.validatePassword(
        value
      );
      this.isPasswordStrong = <boolean>(
        this.passwordValidator.isPasswordStrong(value)
      );
    });
  }
  validateBothPasswords(): boolean {
    if (
      this.passwordFormGroup.controls["password"].value !==
      this.passwordFormGroup.controls["confirmPassword"].value
    ) {
      this.coreService.showToastMessage(
        "passwords do not match",
        this.coreService.TOAST_ERROR
      );

      return true;
    }
  }

  isFormValid(): boolean {
    if (this.passwordFormGroup.invalid) {
      this.coreService.showToastMessage(
        "Please enter password",
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

  onSubmit() {
    console.log(this.passwordFormGroup);
    this.isFormSubmitted = true;
    if (this.isFormValid()) return;
    if (this.isPassWordStrongEnough()) return;
    if (this.validateBothPasswords()) return;

    let request: Request = {
      path: "auth/users/user/password/reset",
      data: {
        oldPassword: this.passwordFormGroup.controls.oldPassword.value,
        newPassword: this.passwordFormGroup.controls.password.value,
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
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

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
}
