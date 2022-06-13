import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  isFormSubmitted = false;
  isShowingPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl<string | null | number>(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  showPasswordToggle() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.loginForm.value);
  }
}
