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
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    
  isFormSubmitted = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  onSubmit() {
    console.log(this.emailController.errors)
    this.isFormSubmitted = true;
    if (this.emailController.valid) {
      this.router.navigate(["auth/verify-otp"]);
    }
    
  }
}
