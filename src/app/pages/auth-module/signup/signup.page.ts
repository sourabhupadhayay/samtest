import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  isFormSubmitted = false;

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
      Validators.email,
    ]),
    phone: new FormControl<number | null>(null, [Validators.minLength(14)]),
    termCondition: new FormControl<boolean>(false),
  });
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private router: Router,
    private constantService: ConstantService
  ) {}

  ngOnInit() {}

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.signUpForm.invalid) {
      return;
    }

    let request: Request = {
      path: "auth/users/signUp",
      data: { ...this.signUpForm.value },
    };

    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.status === this.constantService.STATUS_OK) {
        this.router.navigate(["/auth/verify-otp"]);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
}
