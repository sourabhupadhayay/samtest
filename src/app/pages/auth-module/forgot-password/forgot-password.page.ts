import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  emailController: FormControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern(EMAIL_PATTERN),
    Validators.email
  ]);
  isFormSubmitted = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.emailController.valid) {
      this.router.navigate(["auth/verify-otp"]);
    }
    
  }
}
