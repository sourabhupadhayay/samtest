import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "schedule-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() cardData;
  liveTime:any;
  counter:any;
  timer:any;
  constructor() {}

  ngOnInit() {
    console.log(this.cardData.startDate);
    this.dateFormat();
  }
  dateFormat() {
      var countDownDate = new Date(this.cardData.startDate).getTime();
      let days
      let hours
      let minutes
      let seconds
      let now
      let timeleft
      let counter
      var myfunc= setInterval(()=> {
        now = new Date().getTime();
        timeleft = countDownDate - now;
        days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        this.liveTime = days +'days' +' : ' + hours+ 'hours'+' : '+ minutes + 'mins '+' : ' + seconds + 'S'
        if(days>=1){
          this.counter={"days": days,"title_days" :'days', "hours": hours,"title_hours" :'hours',"minutes":minutes,"title_min":'mins',"sec": seconds,"title_sec" :'S'}
        }
        else{
          if(days<1 && hours<1){
            this.counter={"minutes":minutes,"title_min":'mins',"sec": seconds,"title_sec" :'S'}
          }
          else{
            this.counter={ "hours": hours,"title_hours" :'hours',"minutes":minutes,"title_min":'mins',"sec": seconds,"title_sec" :'S'}
          }

        }
        this.timer =this.counter;
        console.log("dsvfdg",this.timer)

      },1000)
  }

}
