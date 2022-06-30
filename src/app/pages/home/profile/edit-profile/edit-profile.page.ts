import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { Photo } from "@capacitor/camera";
import {
  ActionSheetController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { format, parseISO } from "date-fns";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Storage } from "@capacitor/storage";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
  fanProfileForm: FormGroup;
  athleteProfileForm: FormGroup;
  currentDate: string = new Date().toISOString();
  profileUrl: string = "";
  isFormSubmitted: boolean = false;
  // ProfileImageBlob: SafeUrl | null | string = null;
  selectedImage: Photo | null = null;
  loggedInUserData: any;
  nameInitials: string;
  currentUserRole: "fan" | "athlete";
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private formBuilder: FormBuilder,
    private navController: NavController,
    public actionSheetController: ActionSheetController,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getCurrentUserDetails();
    this.getUserDataFromStorage();
  }

  initForm() {
    if (this.currentUserRole == "fan") {
      this.initFanForm();
    } else {
      this.initAthleteForm();
    }
  }

  async getUserDataFromStorage() {
    const { value } = await Storage.get({ key: "userDetails" });
    this.loggedInUserData = JSON.parse(value);
    this.currentUserRole = this.getUserType(this.loggedInUserData.roles);
    this.initForm();
  }

  initFanForm() {
    this.fanProfileForm = this.formBuilder.group({
      fullName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      showBirthDate: [false],
      birthDate: ["", Validators.required],
      phone: [""],
      teamName: [""],
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
        this.getInitials(response.data.fullName);
        this.profileUrl = response.data.profileUrl;
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

  async selectImage() {
    // await this.coreService.getCameraPermission();
    this.selectedImage = await this.coreService.captureImage();
    let blob = await fetch(this.selectedImage.webPath).then((r) => r.blob());

    let imageSize = this.coreService.formatBytes(blob.size);
    if (imageSize > 5) {
      this.coreService.showToastMessage(
        "please upload image that is under 5 mb ",
        this.coreService.TOAST_WARNING
      );
      return;
    }

    this.uploadImageToServer(blob, this.selectedImage.format);
    // this.ProfileImageBlob = this.DOMSanitizer.bypassSecurityTrustUrl(
    //   this.selectedImage.webPath
    // );
  }

  removeImage() {
    this.selectedImage = null;
    // this.ProfileImageBlob = null;
    this.profileUrl = "";
    this.cd.detectChanges();
  }

  uploadImageToServer(imageBlob: Blob, imageFormat: string) {
    if (!this.selectedImage) {
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
      this.profileUrl = response.data.url;
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
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        this.router.navigateByUrl("/tabs/home");
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  fanDataRequest(): Request {
    this.isFormSubmitted = true;

    if (this.isFormValid()) return;
    if (this.validateAge()) return;

    let { birthDate, ...signUpResponse } = this.fanProfileForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        birthDate: new Date(birthDate).toISOString(),
        profileUrl: this.profileUrl,
      },
      isAuth: true,
    };
    return request;
  }

  athleteDataRequest(): Request {
    let request: Request = {
      path: "auth/users/update",
      data: {
        ...this.athleteProfileForm.value,

        profileUrl: this.profileUrl,
      },
      isAuth: true,
    };
    return request;
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.formatDate(date);

    this.fanProfileForm.controls.birthDate.patchValue(formattedDate);
  }

  getInitials(fullName: String) {
    let splitName = fullName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    if (lastName) {
      this.nameInitials = firstName[0] + lastName[0];
    } else {
      this.nameInitials = firstName[0];
    }
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
    let age = this._calculateAge(selectedDate);
    if (age <= 18) {
      this.coreService.showToastMessage(
        "age of user must be greater than 18",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  private _calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  async presentProfileActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Change profile pic",
      animated: true,
      buttons: [
        {
          text: "Choose profile picture",
          icon: "image-outline",
          handler: () => {
            this.selectImage();
          },
        },
        {
          text: "Remove profile picture",
          role: "destructive",

          icon: "trash",
          handler: () => {
            this.removeImage();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
        },
      ],
    });

    await actionSheet.present();
  }
  getUserType(userRole: string[]): "athlete" | "fan" {
    let isAthlete = userRole.some((role) => role === "ATHLETE");
    if (isAthlete) {
      return "athlete";
    } else {
      return "fan";
    }
  }
}
