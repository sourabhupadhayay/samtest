import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/providers/common.service';
import { ConstantService } from 'src/app/providers/constant.service';
import { CoreService, userRole } from 'src/app/providers/core.service';
import { AppereanceBookingComponent } from '../appereance-booking/appereance-booking.component';

@Component({
  selector: 'app-select-appereance',
  templateUrl: './select-appereance.page.html',
  styleUrls: ['./select-appereance.page.scss'],
})
export class SelectAppereancePage implements OnInit {

  fanEventType:any = 'VIDEO';
  userRole: userRole;
  $athletes: Observable<any>;

  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService,
    private constant: ConstantService,
    private router: Router,
    public commonService:CommonService
  ) { }

  ngOnInit() {
    this.getUserRole();

  }

  async getUserRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
  }
  // async ionViewDidEnter(){
  //   this.fanEventType = 
  //   console.log("type ",this.fanEventType);
  // }
  eventTypeSelected(e:any) {
    
    this.commonService.fanEventType=e;
  }


  async presentAppearanceBookingModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: AppereanceBookingComponent,
      cssClass: "client-filter-modal",
    });

    modal.present();

    const { data, role } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    // this.createEventRequest = data;
  }

  onclick_cancel() {
    this.modalCtrl.dismiss(false);
  }

  redirectTOAppereancePage() {
    console.log("called")
    // this.router.navigate(["/new-appereance-booking"]);
    this.router.navigate(["tabs/new-booking"]);
    this.modalCtrl.dismiss();
  }

}
