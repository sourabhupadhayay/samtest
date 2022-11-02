import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/providers/common.service';
import { ConstantService } from 'src/app/providers/constant.service';
import { CoreService } from 'src/app/providers/core.service';
import { DataService } from 'src/app/providers/data.service';
import { Storage } from "@capacitor/storage";

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPage implements OnInit {

  userId: any;
  notificationContentData: any;

  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getNotificationData();
  }

  async getNotificationData() {
    let userData = await this.coreService.getUserDataFromStorage();
    this.userId = userData.id;
    await this.getPushNotification();
  }

  getPushNotification() {
    let request: any = {
      path: "notification/notification/view/getAll",

     data : {
        "filter": {
          "userId": this.userId
        },
        "page": {
          "pageLimit": 20,
          "pageNumber": 0
        },
        "sort": {
          "orderBy": "DESC",
          "sortBy": "SENT_DATE"
        }
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response["status"]["code"] === this.constantService.STATUS_OK) {
        this.notificationContentData = response['data']['content'];
        console.log("data ",this.notificationContentData);
      } else {
        this.coreService.showToastMessage(
          response.status['description'],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  viewedNotification(id:string) {
    let request: any = {
      path: `notification/notification/view?id=`+id, 
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      if (response["status"]["code"] === "OK") {
      } else {
      }
    });
  }

}
