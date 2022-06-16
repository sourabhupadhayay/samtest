import { Injectable } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { LoadingOptions, ToastOptions } from "@ionic/core";
import { CommonService } from "./common.service";
import { ConstantService } from "./constant.service";
import { DataService } from "./data.service";
import { Subject, Subscription } from "rxjs";
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

  headers: any = this.dataService._headerInit();
  constructor(
    public toastCtrl: ToastController,
    private loadingController: LoadingController,
    public alertController: AlertController,
    private actionSheetCtrl: ActionSheetController,

    private dataService: DataService,
    private constant: ConstantService,
    private common: CommonService
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
    const loaderOpts: LoadingOptions = {
      spinner: "crescent",
      duration: 2000,
      translucent: true,
      cssClass: "my-loading-class",
      animated: true,
      keyboardClose: true,
      showBackdrop: true,
      backdropDismiss: false,
      message,
    };
    this.loading = this.loadingController?.create(loaderOpts);
    (await this.loading)?.onDidDismiss().then((): any => (this.loading = null));
    return (await this.loading)?.present();
  }

  async dismissLoader() {
    return (await this.loading)?.dismiss();
  }
  async showToastMessage(message: string, type: string): Promise<void> {
    const { icon, position, color } = this._colorPosition(type),
      toast = await this.toastCtrl.create({
        message: `<ion-icon name="${icon}" position="${position}" ></ion-icon> ${message}`,
        duration: 2500,
        position: "bottom",
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
    const actionSheet: HTMLIonActionSheetElement = await this.actionSheetCtrl.create(
      {
        header: "Select Option",
        buttons: [
          {
            text: "Load from Library",
            handler: (): void => {
              this.pickImage();
            },
          },
          {
            text: "Use Camera",
            handler: (): void => {
              this.captureImage();
            },
          },
        ],
      }
    );
    await actionSheet.present();
  }
  b6toBlob(b64Data: any): Blob {
    // Split the base64 string in data and contentType
    const block: any = b64Data.split(";");
    // Get the content type of the image
    let contentType: any = block[0].split(":")[1]; // In this case "image/gif"
    // Get the real base64 content of the file
    const realData: any = block[1].split(",")[1]; //
    contentType = contentType || "";
    const sliceSize = 512;
    const byteCharacters: string = atob(realData);
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

  async captureImage(): Promise<string> {
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
    return image.webPath;
  }

  async pickImage() {
    this.presentLoader(this.constant.UPLOADING);

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });

    if (image) {
    }

    return image;
    // this.camera.getPicture(options).then(
    //   (imageData) => {
    //     /*
    //      * ImageData is either a base64 encoded string or a file URI
    //      * If it's base64 (DATA_URL):
    //      */

    //     console.log(`==>>img ${imageData}`);
    //     const img = `data:image/jpeg;base64,${imageData}`;
    //     this.uploadImageToServer(img);
    //     this.images = img;
    //     console.log(`img ${imageData}`);
    //   },
    //   (err) => {
    //     this.dismissLoader();
    //     console.log(err);
    //   }
    // );
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
  //         this.common.profileUrl = response.data;
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
}
