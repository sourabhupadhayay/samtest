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
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService } from "src/app/providers/data.service";

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

  nameInitials: string;

  liveTime: any;
  counter: any;
  timer: any = null;
  interval;

  constructor(
    private cd: ChangeDetectorRef,

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
