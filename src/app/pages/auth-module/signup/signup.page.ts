import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalController, Platform } from "@ionic/angular";
import { EMAIL_PATTERN } from "src/app/helpers/emailValidation";
import { CommonService } from "src/app/providers/common.service";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { AuthModuleService } from "../auth-module.service";
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
  term:any;
  emailFromUrl : string = '';
  isEmailFromRoute : boolean = false;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private router: Router,
    private constantService: ConstantService,
    private commonService: AuthModuleService,
    public commonservice: CommonService,
    private platform: Platform,
    private commonService2: CommonService
  ) {}

  ngOnInit() {
    let email:string  = this.router.url;
    email = email.slice(13);
    console.log("email ",email);
    this.getEmailFromURL(this.router.url)
  }

  getEmailFromURL(url:any) {
    this.emailFromUrl = url.slice(13);
    if(this.emailFromUrl) {
      this.isEmailFromRoute = true;
      this.signUpForm.controls['email'].patchValue(this.emailFromUrl);
      this.signUpForm.controls['email'].setValue(this.emailFromUrl);
      this.signUpForm.controls['email'].disable();
      this.commonService.isDirectedFromInviteLink  = this.isEmailFromRoute;
    }
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

  saveSignupData() {
    this.commonService.signUpData = this.signUpForm.value;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    if(this.isEmailFromRoute) {
      this.signUpForm.value.email = this.emailFromUrl
    }
    let request: Request = {
      path: "auth/users/signUp",
      data: { ...this.signUpForm.value },
    };

    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.saveSignupData();
        if(this.isEmailFromRoute) {
          this.commonService.signUpWithInviteLinkDetails = response['data'];
        }
        this.router.navigate(["/auth/verify-otp"], {
          queryParams: {
            mode: "signup",
          },
        });
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  goBack(){
    localStorage.removeItem("authDetail");
    this.router.navigate(["/auth/login"])
   
  }
}
