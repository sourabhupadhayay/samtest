import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
<<<<<<< HEAD
import { format, parseISO } from "date-fns";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { CoreService } from "src/app/providers/core.service";
=======
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";
>>>>>>> 9f38b30 (fixed merge conflict)

@Component({
  selector: "app-signup-details",
  templateUrl: "./signup-details.page.html",
  styleUrls: ["./signup-details.page.scss"],
})
export class SignupDetailsPage implements OnInit {
<<<<<<< HEAD
  isPasswordStrong = false;
  isShowingPassword = false;
  isShowingConfirmPassword = false;
  isShowingPasswordHint = false;
  signUpDetailsForm: FormGroup;
  confirmPassword: String = "";
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService
  ) {}
=======
  signUpDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
>>>>>>> 9f38b30 (fixed merge conflict)

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpDetailsForm = this.formBuilder.group({
      fullName: [null, [Validators.required]],
<<<<<<< HEAD
      email: [null, [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
=======
      email: [null, [Validators.required]],
>>>>>>> 9f38b30 (fixed merge conflict)
      password: [null, Validators.required],
      birthDate: [null, Validators.required],
      phone: [null],
      teamName: [null],
      teamState: [null],
      school: [null],
    });
  }

<<<<<<< HEAD
  onSubmit() {
    console.log(this.signUpDetailsForm);
    this.isFormSubmitted = true;
    // validations
    if (this.isFormValid()) return;
    if (this.isPassWordStrongEnough()) return;
    if (this.validateBothPasswords()) return;
  }

  uploadImage() {
    this.coreService.changeProfile().then((image) => {
      console.log(image);
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
  onStrengthChanged(strength: number) {
    if (strength === 100) {
      this.isPasswordStrong = true;
    }
  }
  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }
  public showConfirmPassword(): void {
    this.isShowingConfirmPassword = !this.isShowingConfirmPassword;
  }

=======
>>>>>>> 9f38b30 (fixed merge conflict)
  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    let formattedDate = this.formatDate(date);
    this.signUpDetailsForm.controls.birthDate.patchValue(formattedDate);

    console.log(new Date(formattedDate));
  }

<<<<<<< HEAD
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
=======
  onSubmit() {
    console.log(this.signUpDetailsForm);
>>>>>>> 9f38b30 (fixed merge conflict)
  }
}
