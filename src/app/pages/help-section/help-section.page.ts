import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ModalController, PopoverController } from '@ionic/angular';
import { CommonService } from 'src/app/providers/common.service';
import { ConstantService } from 'src/app/providers/constant.service';
import { CoreService } from 'src/app/providers/core.service';
import { DataService } from 'src/app/providers/data.service';
import { PushNotificationPage } from '../push-notification/push-notification.page';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.page.html',
  styleUrls: ['./help-section.page.scss'],
})
export class HelpSectionPage implements OnInit {

  badgeCount : number = 0;
  feedbackMsg : string = '';
  loggedInUserData : any;
  currentUserRole : any;
  isModalOpen : boolean = false;
  faqList : any;



  constructor(
    private apiService: DataService,
    public popoverController: PopoverController,
    public coreService : CoreService,
    public constant : ConstantService,
    public commonService : CommonService,
    public modal : ModalController
  ) {
  }

  ngOnInit() {
    this.getNotificationCount();
    this.getUserDataFromStorage();
    this.getFAQList();
  }

  ionViewWillEnter() {
    this.getNotificationCount();
  }

  async getUserDataFromStorage() {
    const { value } = await Preferences.get({ key: "userDetails" });
    this.loggedInUserData = JSON.parse(value);
    this.currentUserRole = this.commonService.getUserType(
      this.loggedInUserData.roles
    );
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PushNotificationPage,
      cssClass: 'notification-pop',
      event: ev,
      translucent: false,
      side: 'bottom',
      alignment: 'start',
      size:'auto'
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  getNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
      this.apiService.get(request).subscribe((response: any) => {
        this.badgeCount = response.data.unreadCount;
        return this.badgeCount;
      });
  }

  submitFeedBack() {
    if(this.feedbackMsg == '') {
      this.coreService.showToastMessage(
        "Please enter feedback!",
        this.coreService.TOAST_ERROR
      );
      return;
    } else {
      let request: any = {
        path: "core/contact/submit",
        data: {
          "email": this.loggedInUserData?.email,
          "fullName": this.loggedInUserData?.fullName,
          "message": this.feedbackMsg,
          "role": this.currentUserRole
        },
        isAuth: false,
      };
      this.coreService.presentLoader(this.constant.WAIT);
      this.apiService.post(request).subscribe((response: any) => {
        this.coreService.dismissLoader();
        if (response.status.code == this.constant.STATUS_OK) {
          this.feedbackMsg = '';
          this.isModalOpen = false;
          this.modal.dismiss();
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_SUCCESS
          );
        } else {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_ERROR
          );
        }
      });
    }
  }

  getFAQList() {
    let request: any = {
      path: "auth/faq",
      isAuth: true,
    };
      this.apiService.get(request).subscribe((response: any) => {
        this.faqList = response?.data;
      });
  }
    

}
