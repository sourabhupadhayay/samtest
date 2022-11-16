import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { configuration } from "src/app/configuration";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { NativeAudio } from "@capacitor-community/native-audio";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-incoming-call",
  templateUrl: "./incoming-call.component.html",
  styleUrls: ["./incoming-call.component.scss"],
})
export class IncomingCallComponent implements OnInit, OnDestroy {
  id: string;
  nameInitials: string;
  socket: any;
  bidId: any;
  userDetails: any;
  constructor(
    private router: Router,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private apiService: DataService,
    private constantService: ConstantService,
    private coreService: CoreService,
    private core: CoreService,
    private platform: Platform
  ) {}

  getBidIdFromRoute() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.route.queryParams.subscribe((params) => {
      this.bidId = params.bidId;
      console.log(this.bidId);
    });
  }

  ngOnInit() {
    if (!this.commonService.callingAthleteDetails) {
      this.router.navigate(["/tabs/home"]);
    }
    this.getInitials();
    this.getBidIdFromRoute();
    this.callDisconnectSocket();
    this.loadAndPlayRingtone();
  }
  ionViewDidEnter() {
    this.loadAndPlayRingtone();
  }

  loadAndPlayRingtone() {
    console.log("working", this.platform.is);
    let audioConfig = {
      assetId: "discord",
      assetPath: "public/assets/sounds/Discord.mp3",
      audioChannelNum: 1,
      volume: 1.0,
      isUrl: false,
    };
    console.log(
      "platform",
      this.platform.is("android"),
      "ios",
      this.platform.is("ios")
    );

    if (this.platform.is("android") || this.platform.is("ios")) {
      console.log("if discord");
      audioConfig.assetPath = "public/assets/sounds/Discord.mp3";
    } else {
      console.log("else discord");
      audioConfig.assetPath = "Discord.mp3";
    }

    NativeAudio.preload(audioConfig).then((value) => {
      NativeAudio.play({
        assetId: "discord",
        time: 0,
      });
      NativeAudio.loop({
        assetId: "discord",
      });
    });
  }

  getInitials() {
    this.nameInitials = this.commonService.getInitials(
      this.commonService.callingAthleteDetails.athleteName
    );
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
    console.log(
      "details ",
      this.commonService.callingAthleteDetails.remainingTime
    );
    if (this.bidId != undefined) {
      this.id = this.bidId;
    }
    let request: Request = {
      path: "core/video/updateCall/" + this.id,
      data: {
        remainingTime: this.commonService.callingAthleteDetails.remainingTime,
      },
      isAuth: true,
    };
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
    });
    this.router.navigate(["/tabs/schedule"]);
  }

  async callDisconnectSocket() {
    console.log("called");
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
          let msg = JSON.parse(responseData);
          let value = localStorage.getItem("authDetails");
          this.userDetails = JSON.parse(value);
          //this.commonService.callingAthleteDetails = JSON.parse(responseData);
          if (this.userDetails.id == msg.userId) {
            this.router.navigate(["/tabs/schedule"]);
            if (
              msg.disconnectedByPersonRole == "ATHLETE" &&
              userRole == "fan" &&
              msg.bidState !== "COMPLETED"
            ) {
              this.core.showToastMessage(
                "Athlete is busy. He/She will connect after sometime",
                this.core.TOAST_ERROR
              );
            }
          } else {
            console.log("no");
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
  ionViewWillLeave() {
    NativeAudio.stop({
      assetId: "discord",
    });

    NativeAudio.unload({
      assetId: "discord",
    });
  }
  ngOnDestroy(): void {
    NativeAudio.stop({
      assetId: "discord",
    });

    NativeAudio.unload({
      assetId: "discord",
    });
  }
}
