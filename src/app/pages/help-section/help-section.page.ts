import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommonService } from 'src/app/providers/common.service';
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

  constructor(
    private apiService: DataService,
    public popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
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

}
