import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { GalleryPhotos, Photo } from "@capacitor/camera";
import {
  ActionSheetController,
  IonModal,
  ModalController,
} from "@ionic/angular";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Storage } from "@capacitor/storage";
import { CommonService } from "src/app/providers/common.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
  @ViewChild("editModal") modal: IonModal;
  fanProfileForm: FormGroup;
  athleteProfileForm: FormGroup;
  currentDate: string = new Date().toISOString();
  isFormSubmitted: boolean = false;

  loggedInUserData: any;
  nameInitials: string;
  currentUserRole: "fan" | "athlete";
  isUserProfileComplete: boolean = true;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private formBuilder: FormBuilder,
    public commonService: CommonService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserDataFromStorage();
    this.isUserFromSocialLogIn();
  }

  async getUserDataFromStorage() {
    const { value } = await Storage.get({ key: "userDetails" });
    this.loggedInUserData = JSON.parse(value);
    this.currentUserRole = this.commonService.getUserType(
      this.loggedInUserData.roles
    );

    this.initForm();
    this.getCurrentUserDetails();
  }
  initForm() {
    if (this.currentUserRole == "fan") {
      this.initFanForm();
    } else {
      this.initAthleteForm();
    }
  }

  isUserFromSocialLogIn() {
    this.route.queryParams.subscribe((params: Params) => {
      if (!params.isProfileComplete) {
        return;
      }

      this.isUserProfileComplete = JSON.parse(params.isProfileComplete);
    });
    this.cd.detectChanges();
  }

  initFanForm() {
    this.fanProfileForm = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      showBirthDate: [false],
      birthDate: ["", Validators.required],
      phone: [""],
      teamName: [""],
      country: ["", Validators.pattern("^[a-zA-Z ]*$")],
      teamState: ["", Validators.pattern("^[a-zA-Z ]*$")],
    });
  }

  initAthleteForm() {
    this.athleteProfileForm = this.formBuilder.group({
      teamName: [""],
      teamState: [""],
      country: [""],
      universityName: [""],
      phone: [""],
    });
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.nameInitials = this.commonService.getInitials(
          response.data.fullName
        );
        this.commonService.profileUrl = response.data.profileUrl;
        this.patchFormData(response.data);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  patchFormData(data: any) {
    if (this.currentUserRole == "fan") {
      this.fanProfileForm.patchValue(data);
      this.patchDateValue(data.birthDate);
    } else {
      this.athleteProfileForm.patchValue(data);
    }
  }

  removeImage() {
    this.coreService.removeImage();
  }

  uploadImageToServer(imageBlob: Blob, imageFormat: string) {
    if (!imageBlob) {
      return;
    }
    let imageFormData: FormData = new FormData();
    imageFormData.append("file", imageBlob, `profile.${imageFormat}`);

    let request: Request = {
      path: "auth/file/upload/profile",
      data: imageFormData,
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.postImage(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      this.commonService.profileUrl = response.data.url;
      this.cd.detectChanges();
    });
  }

  onSubmit() {
    let request: Request;

    if (this.currentUserRole == "fan") {
      request = this.fanDataRequest();
    } else {
      request = this.athleteDataRequest();
    }
    if (!request) {
      return;
    }

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.modalCtrl.dismiss();
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        this.commonService.$profileSubject.next();
        this.router.navigateByUrl("/tabs/profile");
        this.isUserProfileComplete = true;
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  fanDataRequest(): Request {
    this.validatePhoneFanForm();

    let { birthDate, ...signUpResponse } = this.fanProfileForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        birthDate: new Date(birthDate).toISOString(),
        profileUrl: this.commonService.profileUrl,
      },
      isAuth: true,
    };
    return request;
  }

  presentModal() {
    if (this.currentUserRole == "fan") {
      this.isFormSubmitted = true;
      if (this.isFormValid()) return;
      if (this.validateAge()) return;
    }
    this.modal.present();
  }

  athleteDataRequest(): Request {
    this.validatePhoneAthleteForm();
    let request: Request = {
      path: "auth/users/update",
      data: {
        ...this.athleteProfileForm.value,
        profileUrl: this.commonService.profileUrl,
      },
      isAuth: true,
    };
    return request;
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.commonService.formatDate(date);

    this.fanProfileForm.controls.birthDate.patchValue(formattedDate);
  }

  isFormValid(): boolean {
    if (this.fanProfileForm.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid details",
        this.coreService.TOAST_ERROR
      );

      return true;
    }
  }
  validateAge(): boolean {
    let selectedDate = new Date(this.fanProfileForm.controls.birthDate.value);
    let age = this.commonService._calculateAge(selectedDate);
    if (age <= 18) {
      this.coreService.showToastMessage(
        "age of user must be greater than 18",
        this.coreService.TOAST_ERROR
      );

      return true;
    }
  }

  cancelEditProfile() {
    if (this.isUserProfileComplete) {
      this.router.navigate(["/tabs/profile"]);
    } else {
      this.deleteAccount();
    }
  }

  async presentProfileActionSheet() {
    this.coreService.changeProfile();
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

  logout() {
    let request: Request = {
      path: "auth/users/logout",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.modalCtrl.dismiss();
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        Storage.clear().then(() => {
          localStorage.removeItem("authDetail");
          this.router.navigate(["/auth/login"]);
        });
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  deleteAccount() {
    let request: Request = {
      path: "auth/users/manage/delete/" + this.loggedInUserData.id,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        this.modalCtrl.dismiss();
        this.logout();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  validatePhoneFanForm() {
    if (!this.fanProfileForm.controls.phone.value) {
      return;
    }

    if (this.fanProfileForm.controls.phone.value.length < 14) {
      this.fanProfileForm.controls.phone.patchValue("");
    }
  }
  validatePhoneAthleteForm() {
    if (!this.athleteProfileForm.controls.phone.value) {
      return;
    }
    if (this.athleteProfileForm.controls.phone.value.length < 14) {
      this.athleteProfileForm.controls.phone.patchValue("");
    }
  }
}
