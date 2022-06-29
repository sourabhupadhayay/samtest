import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Photo } from "@capacitor/camera";
import { ActionSheetController, ModalController } from "@ionic/angular";
import { format, parseISO } from "date-fns";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfilePage implements OnInit {
  editProfileForm: FormGroup;
  currentDate: string = new Date().toISOString();
  profileUrl: string | null = "";
  isFormSubmitted: boolean = false;
  // ProfileImageBlob: SafeUrl | null | string = null;
  selectedImage: Photo | null = null;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private formBuilder: FormBuilder,
    private DOMSanitizer: DomSanitizer,
    public actionSheetController: ActionSheetController,
    private cd: ChangeDetectorRef,
    private authData: AuthenticationService
  ) {}

  ngOnInit() {
    this.getCurrentUserDetails();
    this.initForm();
  }
  initForm() {
    this.editProfileForm = this.formBuilder.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern("^[a-zA-Z ]*$")],
      ],
      showBirthDate: [false],
      birthDate: [null, Validators.required],
      phone: [{ value: null, disabled: false }],
      teamName: [""],
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
        this.profileUrl = response.data.profileUrl;
        this.editProfileForm.patchValue(response.data);
        this.patchDateValue(response.data.birthDate);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
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
    this.profileUrl = null;
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
    this.isFormSubmitted = true;
    console.log(this.editProfileForm);
    if (this.isFormValid()) return;
    if (this.validateAge()) return;

    let { birthDate, ...signUpResponse } = this.editProfileForm.value;

    let request: Request = {
      path: "auth/users/update",
      data: {
        ...signUpResponse,
        birthDate: new Date(birthDate).toISOString(),
        profileUrl: this.profileUrl,
      },
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );
        this.router.navigate(["/tabs/profile"]);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    if (!date) {
      return;
    }
    let formattedDate = this.formatDate(date);
    console.log(formattedDate);

    this.editProfileForm.controls.birthDate.patchValue(formattedDate);
  }

  isFormValid(): boolean {
    if (this.editProfileForm.invalid) {
      this.coreService.showToastMessage(
        "Please enter valid details",
        this.coreService.TOAST_ERROR
      );
      return true;
    }
  }
  validateAge(): boolean {
    let selectedDate = new Date(this.editProfileForm.controls.birthDate.value);
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
}
