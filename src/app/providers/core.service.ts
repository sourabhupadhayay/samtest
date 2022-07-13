import { Injectable } from "@angular/core";
import {
  Camera,
  CameraResultType,
  GalleryPhotos,
  Photo,
} from "@capacitor/camera";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { ToastOptions } from "@ionic/core";
import { CommonService } from "./common.service";
import { ConstantService } from "./constant.service";
import { DataService, Request, Response } from "./data.service";
import { Storage } from "@capacitor/storage";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  private loading: Promise<HTMLIonLoadingElement>;
  TOAST_SUCCESS = "TOAST_SUCCESS";

  TOAST_ERROR = "TOAST_ERROR";

  TOAST_WARNING = "TOAST_WARNING";

  TOAST_INFO = "TOAST_INFO";
  images!: string;
  isLoading = false;
  constructor(
    public toastCtrl: ToastController,
    private loadingController: LoadingController,
    public alertController: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private commonService: CommonService,
    private dataService: DataService,
    private constant: ConstantService,
    private actionSheetController: ActionSheetController
  ) {}

  async showToast(message: string): Promise<void> {
    const toastOpts: ToastOptions = await this.toastCtrl.create({
        message: message,
        duration: 2000,
        animated: true,
        cssClass: "ion-text-center",
        keyboardClose: true,
        translucent: true,
        header: "Info",
      }),
      toast = this.toastCtrl.create(toastOpts);
    return (await toast).present();
  }
  async presentLoader(message: string): Promise<void> {
    // Return;
    this.isLoading = true;

    return this.loadingController
      .create({
        spinner: "crescent",

        translucent: true,
        cssClass: "my-loading-class",
        animated: true,
        keyboardClose: true,
        showBackdrop: true,
        backdropDismiss: false,
        message,
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss();
          }
        });
      });
  }

  async dismissLoader() {
    this.isLoading = false;
    this.loadingController.getTop().then(async (value) => {
      if (value) {
        return await this.loadingController.dismiss();
      }
    });
    // console.log(topLoader);
    // if (topLoader) {
    //   return await this.loadingController.dismiss();
    // }
  }
  async showToastMessage(message: string, type: string): Promise<void> {
    const { icon, position, color } = this._colorPosition(type),
      toast = await this.toastCtrl.create({
        message: `<ion-icon name="${icon}" position="${position}" ></ion-icon> ${message}`,
        duration: 2500,
        position: "top",
        color,
        cssClass: "toast_msg",
      });

    return toast.present();
  }
  private _colorPosition(type: string) {
    let color = "",
      icon = "",
      position = "";
    if (type == this.TOAST_ERROR) {
      color = "danger";

      icon = "warning-outline";
    } else if (type == this.TOAST_INFO) {
      color = "tertiary";
      icon = "information-circle-outline";
    } else if (type == this.TOAST_SUCCESS) {
      color = "success";
      icon = "checkmark-outline";
    } else if (type == this.TOAST_WARNING) {
      color = "warning";
      icon = "warning-outline";
    }
    position = "relative";
    return { icon, position, color };
  }

  async changeProfile() {
    const actionSheet = await this.actionSheetController.create({
      header: "Change profile pic",
      animated: true,
      buttons: [
        {
          text: "Use Camera",
          icon: "camera-outline",
          handler: () => {
            this.selectImage();
          },
        },
        {
          text: "Choose from gallery",
          icon: "image-outline",
          handler: () => {
            this.getImageFromGallery();
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

    console.log("working");

    return await actionSheet.present();
  }

  removeImage() {
    this.commonService.profileUrl = "";
  }

  async selectImage() {
    let image = await this.captureImage();

    let blob = await fetch(image.webPath).then((r) => r.blob());

    let imageSize = this.formatBytes(blob.size);

    if (imageSize > 5) {
      this.showToastMessage(
        "please upload image that is under 5 mb ",
        this.TOAST_WARNING
      );

      return;
    }

    this.uploadImageToServer(blob, image.format);
  }
  async getImageFromGallery() {
    let photosArray = await this.pickImage();
    let image = photosArray.photos[0];
    let blob = await fetch(image.webPath).then((r) => r.blob());
    let imageSize = this.formatBytes(blob.size);
    if (imageSize > 5) {
      this.showToastMessage(
        "please upload image that is under 5 mb ",
        this.TOAST_WARNING
      );
      return;
    }

    this.uploadImageToServer(blob, image.format);
  }
  b6toBlob(b64Data: string): Blob {
    let contentType = "";
    const sliceSize = 512;
    const byteCharacters: string = atob(b64Data);
    const byteArrays: any[] = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice: string = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers: any[] = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray: Uint8Array = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob: Blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  uploadImage() {
    return this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select Option",
      buttons: [
        {
          text: "Gallery",
          handler: () => {
            this.pickImage();
          },
        },
        {
          text: "Camera",
          handler: () => {
            this.captureImage();
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async captureImage(): Promise<Photo> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    return image;
  }

  async pickImage(): Promise<GalleryPhotos> {
    const image = await Camera.pickImages({
      quality: 90,
      limit: 1,
    });

    return image;
  }

  // uploadImageToServer(image) {
  //   this.presentLoader(this.constant.UPLOADING);
  //   //const imageFile = this.b6toBlob(image);
  //   // const params = new FormData();
  //   //params.append("file", imageFile, `${Date.parse(new Date().toDateString())}.jpg`);
  //   //console.log(params);
  //   //let image: string = this.EXAMPLEIMG;
  //   const imageFile: Blob = this.b6toBlob(image);
  //   const params: FormData = new FormData();
  //   params.append("file", imageFile);
  //   console.log(params);
  //   return this.dataService
  //     .imgUpload(this.constant.PROFILE_PICTURE_UPLOAD, params)
  //     .subscribe((response: any) => {
  //       if (response.status.code == this.constant.STATUS_OK) {
  // this.common.profileUrl = response.data;
  //         this.dismissLoader();
  //         this.showToastMessage(
  //           response.status.description,
  //           this.constant.TOAST_SUCCESS
  //         );
  //       } else {
  //         this.dismissLoader();
  //         this.constant.showToastMessage(
  //           response.status.description,
  //           this.constant.TOAST_ERROR
  //         );
  //       }
  //     });
  // }

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
    this.presentLoader(this.constant.WAIT);
    this.dataService.postImage(request).subscribe((response: Response) => {
      this.dismissLoader();
      this.commonService.profileUrl = response.data.url;
    });
  }

  formatBytes(bytes, decimals = 2) {
    return bytes / 1024 / 1024; // in MiB
  }

  async getUserDataFromStorage(): Promise<userRole> {
    const { value } = await Storage.get({ key: "userDetails" });
    let userData = JSON.parse(value);
    return this.commonService.getUserType(userData.roles);
  }
}

export interface UserRole {
  userRole: userRole;
}
export type userRole = "fan" | "athlete";
