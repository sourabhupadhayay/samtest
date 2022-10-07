import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { configuration } from "src/app/configuration";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService ,userRole} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

@Component({
  selector: "app-incoming-call",
  templateUrl: "./incoming-call.component.html",
  styleUrls: ["./incoming-call.component.scss"],
})
export class IncomingCallComponent implements OnInit {
  id: string;
  nameInitials: string;
  socket:any;
  constructor(
    private router: Router,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private apiService: DataService,
    private constantService: ConstantService,
    private coreService: CoreService,
    private core: CoreService,
  ) {}

  getBidIdFromRoute() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.nameInitials = this.commonService.getInitials(
      this.commonService.callingAthleteDetails.athleteName
    );
    this.getBidIdFromRoute();
    if (!this.commonService.callingAthleteDetails) {
      this.router.navigate(["/tabs/home"]);
    }
    this.callDisconnectSocket();
  }

  joinCall() {
    this.router.navigate(["/waitlist/call/" + this.id], {
      queryParams: {
        isBidEvent:
          this.commonService.callingAthleteDetails.creatorPersona == "USER"
            ? false
            : true,
      },
    });
  }
  disconnectCall() {
    console.log("details ", this.commonService.callingAthleteDetails.remainingTime)
      let request: Request = {
        path: "core/video/updateCall/" + this.id,
        data: {
          remainingTime: this.commonService.callingAthleteDetails.remainingTime,
        },
        isAuth: true,
      };
      this.coreService.presentLoader(this.constantService.WAIT);

      this.apiService.post(request).subscribe((response: Response) => {
        this.coreService.dismissLoader();
      });

    this.router.navigate(["/tabs/schedule"]);
  }

  async callDisconnectSocket() {
    console.log("called")
    let userRole: userRole = await this.core.getUserRoleFromStorage();
    let userDetails = await this.core.getUserDataFromStorage();

    this.socket = Stomp.over(
      () => new SockJS(configuration.BASE_URL + "core/greeting")
    );
    this.socket.reconnect_delay = 5000;
    this.socket.connect(
      {},
      (frame) => {
        this.socket.subscribe("/errors", (message) => {
          alert("Error " + message.body);
        });
        this.sendCutVideo(userDetails["id"]);
        this.socket.subscribe("/topic/cancelCall", (message) => {
          let responseData = JSON.parse(message.body).content;
          this.commonService.callingAthleteDetails = JSON.parse(responseData);
          console.log("response ",this.commonService.callingAthleteDetails.disconnectedByPersonRole)

          if (
            userDetails.id == this.commonService.callingAthleteDetails.userId
          ) {
            this.router.navigate([
              "/tabs/schedule"
            ]);
            if(this.commonService.callingAthleteDetails.disconnectedByPersonRole == 'ATHLETE' && userRole =='fan') {
              this.core.showToastMessage(
                "Athlete is busy.He/She will connect after sometime",
                this.core.TOAST_ERROR
              );
            }
          } else{
            console.log("no")
          }
        });
      },
      function (error) {
        console.log("STOMP error " + error);
      }
    );
  }

  sendCutVideo(id) {
    let data = JSON.stringify({
      userId: id,
    });
    this.socket.send("/app/cancelVideo", {}, data);
  }
}


