import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/providers/common.service';
import { ConstantService } from 'src/app/providers/constant.service';
import { CoreService } from 'src/app/providers/core.service';
import { DataService } from 'src/app/providers/data.service';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPage implements OnInit {

  userId: any;
  notificationContentData: any;
  badgeCount :number = 0;

  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    private router: Router,
    private commonService: CommonService,
    private badge: Badge,
    private platform: Platform,
  ) {}

  ngOnInit() {
    this.getNotificationData();
    this.getNotificationCount();
    this.viewAllNotification();
    this.resetBadgesCount();
  }


  getNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
      this.apiService.get(request).subscribe((response: any) => {
        this.badgeCount = response.data.unreadCount;
        console.log("c ",this.badgeCount)
        return this.badgeCount;
      });
  }

  async resetBadgesCount() {
    if(this.platform.is("desktop") || this.platform.is("mobileweb")) {
      console.log("web")
      return;
    } else {
       await this.badge.clear();
    }
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


  viewAllNotification() {
    let request: any = {
      path: `notification/notification/view?viewAll=true`, 
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      if (response["status"]["code"] === "OK") {
        console.log("cleared")
      } else {
      }
    });
  }

}
