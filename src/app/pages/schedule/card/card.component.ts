import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "schedule-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() cardData;
  constructor() {}

  ngOnInit() {
    // this.dateFormat();
  }

  //   dateFormat() {
  //     var countDownDate = new Date(this.cardData.createdDate).getTime();
  //     let days;
  //     let hours;
  //     let minutes;
  //     let seconds;
  //     let now;
  //     let timeleft;
  //     let counter;
  //     var myfunc = setInterval(() => {
  //       now = new Date().getTime();
  //       timeleft = countDownDate - now;
  //       days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //       hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //       seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  //       var liveTime =
  //         days +
  //         "DAYS" +
  //         " : " +
  //         hours +
  //         "H" +
  //         " : " +
  //         minutes +
  //         "M " +
  //         " : " +
  //         seconds +
  //         "S";
  //       if (days >= 1) {
  //         counter = [
  //           {
  //             days: days,
  //             title_days: "DAY",
  //             hours: hours,
  //             title_hours: "H",
  //             minutes: minutes,
  //             title_min: "M",
  //             sec: seconds,
  //             title_sec: "S",
  //           },
  //         ];
  //       } else {
  //         if (days < 1 && hours < 1) {
  //           counter = [
  //             { minutes: minutes, title_min: "M", sec: seconds, title_sec: "S" },
  //           ];
  //         } else {
  //           counter = [
  //             {
  //               hours: hours,
  //               title_hours: "H",
  //               minutes: minutes,
  //               title_min: "M",
  //               sec: seconds,
  //               title_sec: "S",
  //             },
  //           ];
  //         }
  //       }

  //       console.log(liveTime);
  //     }, 1000);
  //   }
}
