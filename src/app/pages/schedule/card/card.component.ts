import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, IonModal, ModalController } from "@ionic/angular";

import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import {
  CoreService,
  UserRole,
  userRole,
} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { ApproveRequestComponent } from "../approve-request/approve-request.component";
import { CancelMessageModalComponent } from "../cancel-message-modal/cancel-message-modal.component";
import { CancelRequestModalComponent } from "../cancel-request-modal/cancel-request-modal.component";
import { DismissmodalComponent } from "../dismissmodal/dismissmodal.component";

type EventStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

@Component({
  selector: "schedule-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @Output() changeStatus: EventEmitter<null> = new EventEmitter();
  @Input() cardData;
  @Input() eventState: String;
  @Input() userRole: userRole;
  nameInitials: string;
  liveTime: any;
  counter: any;
  timer: any = null;
  interval;

  constructor(
    private cd: ChangeDetectorRef,
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService,
    public commonService: CommonService,
    private alertController: AlertController,
    public modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.dateFormat();

    this.getInitials();
  }

  getInitials() {
    this.nameInitials = this.commonService.getInitials(this.cardData.userName);
  }

  changeEventStatus(eventState: EventStatus, rejectionMessage?: string) {
    let request: Request;

    if (rejectionMessage) {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?event=${eventState}&reason=${rejectionMessage}&sendMail=false`,
        isAuth: true,
      };
    } else {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?event=${eventState}&sendMail=false`,
        isAuth: true,
      };
    }

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();

      if (response.status.code === this.constantService.STATUS_OK) {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_SUCCESS
        );

        this.changeStatus.emit();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Coming soon",
      message: "This feature is coming soon stay tuned",
      buttons: ["OK"],
    });

    await alert.present();
  }

  canJoinEvent(): boolean {
    if (this.timer.hours) {
      return true;
    }
    if (this.timer.days) {
      return true;
    }

    if (this.timer.minutes < 10) {
      return false;
    } else {
      return true;
    }
  }

  timeConvert(n: number) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  dateFormat() {
    var countDownDate = new Date(this.cardData.startDate).getTime();
    let days;
    let hours;
    let minutes;
    let seconds;
    let now;
    let timeleft;

    now = new Date().getTime();
    timeleft = countDownDate - now;
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //initial time
    this.liveTime =
      days +
      "days" +
      " : " +
      hours +
      "hours" +
      " : " +
      minutes +
      "mins " +
      " : " +
      seconds +
      "S";
    if (days >= 1) {
      this.counter = {
        days: days,
        title_days: "days",
        hours: hours,
        title_hours: "hours",
        minutes: minutes,
        title_min: "mins",
        sec: seconds,
        title_sec: "S",
      };
    } else {
      if (days < 1 && hours < 1) {
        this.counter = {
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S",
        };
      } else {
        this.counter = {
          hours: hours,
          title_hours: "hours",
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S",
        };
      }
    }
    this.timer = this.counter;

    //refresh time after 60 seconds
    this.interval = setInterval(() => {
      now = new Date().getTime();
      timeleft = countDownDate - now;
      days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      this.liveTime =
        days +
        "days" +
        " : " +
        hours +
        "hours" +
        " : " +
        minutes +
        "mins " +
        " : " +
        seconds +
        "S";
      if (days >= 1) {
        this.counter = {
          days: days,
          title_days: "days",
          hours: hours,
          title_hours: "hours",
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S",
        };
      } else {
        if (days < 1 && hours < 1) {
          this.counter = {
            minutes: minutes,
            title_min: "mins",
            sec: seconds,
            title_sec: "S",
          };
        } else {
          this.counter = {
            hours: hours,
            title_hours: "hours",
            minutes: minutes,
            title_min: "mins",
            sec: seconds,
            title_sec: "S",
          };
        }
      }

      this.timer = this.counter;
      this.cd.detectChanges();
    }, 60000);
  }

  invitedText(): String {
    if (this.userRole == "fan") {
      if (
        this.cardData.creatorPersona == "ADMIN" ||
        this.cardData.creatorPersona == "ATHLETE"
      ) {
        return "Created by";
      } else {
        return "Invited to";
      }
    } else {
      if (
        this.cardData.creatorPersona == "ADMIN" ||
        this.cardData.creatorPersona == "ATHLETE"
      ) {
        return "Created by";
      } else {
        return "Invited by";
      }
    }
  }

  cardBorderClass(): string {
    if (this.userRole == "athlete") {
      return "card-border";
    } else {
      if (this.eventState == "APPROVED") {
        return "card-border";
      }
    }
  }

  openProfilePage(userRole: userRole) {
    if (userRole == "fan") {
      this.router.navigate([`profile/fan/${this.cardData.userId}`]);
    } else {
      this.router.navigate([`profile/athlete/${this.cardData.athleteId}`]);
    }
  }

  async presentDismissModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: DismissmodalComponent,
      cssClass: "small-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (!data) {
      return;
    }
    if (data) {
      this.presentMessageModal();
    }
  }
  async presentRefuseModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: CancelRequestModalComponent,
      cssClass: "small-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (data) {
      this.presentMessageModal();
    }
  }
  async presentMessageModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: CancelMessageModalComponent,
      cssClass: "small-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (!data) {
      return;
    }

    if (this.userRole == "fan") {
      this.changeEventStatus("CANCELLED", data);
    } else {
      this.changeEventStatus("REJECTED", data);
    }
  }
  async approveRequestModal() {
    let eventData = {
      eventType: this.cardData.eventType,
      createdBy: this.cardData.userName,
      eventName: this.cardData.eventName,
    };
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ApproveRequestComponent,
      componentProps: eventData,
      cssClass: "small-modal",
    });
    modal.present();

    const { data, role } = await modal.onDidDismiss();

    if (data) {
      this.changeEventStatus("APPROVED");
    }
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
  }

  dismissModal() {
    this.modal.dismiss();
  }
}
