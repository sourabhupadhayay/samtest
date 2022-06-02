import { Injectable } from "@angular/core";

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
  async presentLoader(): Promise<void> {
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
}
