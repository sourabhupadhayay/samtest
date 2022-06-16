import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
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
    //public routerOutLet: IonRouterOutlet,
    private router: Router
  ) {}

  ngOnInit() {}

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
  onSubmit() {
    console.log(this.signUpForm);
    this.isFormSubmitted = true;
    if (this.signUpForm.valid) {
      this.router.navigate(["/auth/verify-otp"]);
    }
  }
}
