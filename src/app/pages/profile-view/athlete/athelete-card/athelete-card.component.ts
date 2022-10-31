import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";
import { CancelMessageModalComponent } from "src/app/pages/schedule/cancel-message-modal/cancel-message-modal.component";
import { DismissmodalComponent } from "src/app/pages/schedule/dismissmodal/dismissmodal.component";
import { MeetOtpComponent } from "src/app/pages/schedule/meet-otp/meet-otp.component";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService } from "src/app/providers/data.service";

type EventStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
@Component({
  selector: "athlete-card",
  templateUrl: "./athelete-card.component.html",
  styleUrls: ["./athelete-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtheleteCardComponent implements OnInit {
  @Output() changeStatus: EventEmitter<null> = new EventEmitter();
  @Input() cardData;
  @Input() eventFilter: "past" | "upcoming" | "All";
  @Input() eventState: "APPROVED" | "PAST" | "PENDING" = "APPROVED";
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
    console.log("user ",this.userRole)
    this.getInitials();
  }

  getInitials() {
    this.nameInitials = this.commonService.getInitials(this.cardData.userName);
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

  joinFanCall(id: string) {
    this.router.navigate(["waitlist/call/" + id], {
      queryParams: {
        isBidEvent: false,
      },
    });
  }
  athleteEvent(id: string) {
    this.router.navigate(["waitlist/event/" + id]);
  }


  async openOtpModel() {
    let eventData = {
      eventName: this.cardData.eventName,
      userRole: this.userRole,
      eventId: this.cardData.id,
      athleteName: this.cardData.athleteName,
      fanName: this.cardData.userName,
    };
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: MeetOtpComponent,
      componentProps: eventData,
      cssClass: "small-modal",
    });
    modal.present();
  }

  canAthleteJoinEvent(count) {
    if (count == 0) {
      return true;
    }
  }


  canBidForEvent() {
    if (this.timer.days < 5) {
      return false;
    } else if (!this.timer.days) {
      return false;
    } else {
      return true;
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

    if (this.eventState == "PENDING") {
      this.changeEventStatus("CANCELLED");
    } else {
      this.presentMessageModal();
    }
  }

  async presentMessageModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: CancelMessageModalComponent,
      componentProps: {
        eventState: this.eventState,
      },

      cssClass: "small-modal",
    });
    modal.present();
    const { data, role } = await modal.onDidDismiss();

    if (!data) {
      return;
    }
    this.changeEventStatus("CANCELLED", data);
  }


  changeEventStatus(eventState: EventStatus, rejectionMessage?: string) {
    let request: any;

    if (rejectionMessage) {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?eventStatus=${eventState}&reason=${rejectionMessage}&sendMail=false`,
        isAuth: true,
      };
    } else {
      request = {
        path: `core/event/changeStatus/${this.cardData.id}?eventStatus=${eventState}&sendMail=false`,
        isAuth: true,
      };
    }

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: any) => {
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

  timeConvert(n: number) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if(rhours == 0){
    return  rminutes + "m";
    }
    if(rminutes > 1 && rhours>1)
    {
          return rhours + "h " + rminutes + "m";
     } else {
          return rhours + "h "
      }
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

  cardBorderClass(): string {
    if (this.userRole == "athlete") {
      return "card-border";
    } else {
      if (this.eventState == "APPROVED") {
        return "card-border";
      }
    }
  }

  invitedText(): String {
    if (
      this.cardData.creatorPersona == "ADMIN" ||
      this.cardData.creatorPersona == "ATHLETE"
    ) {
      return "Created by";
    } else {
      return "Invited by";
    }
  }
  bidAthleteEvent(id: string) {
    this.router.navigate(["bid-payment/" + id]);
  }
  // cardBorderClass(): string {
  //   if (this.userRole == "athlete") {
  //     return "card-border";
  //   } else {
  //     if (this.eventState == "APPROVED") {
  //       return "card-border";
  //     }
  //   }
  // }

  ionViewDidLeave() {
    clearInterval(this.interval);
  }
}
