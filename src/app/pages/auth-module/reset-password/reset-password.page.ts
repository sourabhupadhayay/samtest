import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CoreService } from "src/app/providers/core.service";
import {
  PasswordStrength,
  failedValidation,
} from "src/app/utility/passwordValidator";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordPage implements OnInit {
  isPasswordStrong = false;
  isShowingPassword = false;
  isShowingConfirmPassword = false;
  isShowingPasswordHint = false;
  passwordValidator = new PasswordStrength();
  failedValidationObject: failedValidation;
  passwordFormGroup: FormGroup = new FormGroup({
    password: new FormControl<string | null | number>(null, [
      Validators.required,
    ]),
    confirmPassword: new FormControl<string | null | number>(null, [
      Validators.required,
    ]),
  });

  constructor(private coreService: CoreService) {}

  ngOnInit() {
    this.onPasswordChanged();
  }

  onPasswordChanged() {
    this.passwordFormGroup.controls.password.valueChanges.subscribe((value) => {
      this.failedValidationObject = this.passwordValidator.validatePassword(
        value
      );
      this.isPasswordStrong = <boolean>(
        this.passwordValidator.isPasswordStrong(value)
      );

      console.log(this.isPasswordStrong);
    });
  }

  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
  public showConfirmPassword(): void {
    this.isShowingConfirmPassword = !this.isShowingConfirmPassword;
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
    if (this.isFormValid()) return;
    if (this.isPassWordStrongEnough()) return;
    if (this.validateBothPasswords()) return;
  }
}
