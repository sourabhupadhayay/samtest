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
  commonData:any;
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
      console.log("param ",this.id)
    });
    this.route.queryParams.subscribe((params) => {
      this.bidId = params.bidId;
      console.log("bid id ",this.bidId);
    });
  }

 async ngOnInit() {
  this.commonData = await this.commonService.callingAthleteDetails;
  if(!this.commonData) {
    this.commonData = localStorage.getItem('voip-data')
  }
    if (!this.commonService.callingAthleteDetails) {
      // this.router.navigate(["/tabs/home"]);
    }
    this.getInitials();
    this.getBidIdFromRoute();
    this.callDisconnectSocket();
    this.loadAndPlayRingtone();
  }

 
 async ionViewDidEnter() {
  this.commonData = await this.commonService.callingAthleteDetails;
    this.loadAndPlayRingtone();
    this.getInitials();
    this.getBidIdFromRoute();
    this.callDisconnectSocket();
    this.loadAndPlayRingtone();
  }

  async ionViewWillEnter() {
    this.commonData = await this.commonService.callingAthleteDetails;
  }

  loadAndPlayRingtone() {
    console.log("working", this.platform.is);
    let audioConfig = {
      assetId: "discord",
      assetPath: "assets/sounds/Discord.mp3",
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
     // NativeAudio.stop(audioConfig)
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

  async getInitials() {
    this.nameInitials = await this.commonService.getInitials(
      this.commonData.athleteName
    );
  }

  async joinCall() {
    console.log("joinCall ",this.commonData)
    await this.router.navigate(["/waitlist/call/" + this.id], {
      queryParams: {
        isBidEvent:
        this.commonData.creatorPersona == "USER"
            ? false
            : true,
      },
    });
  }
 async disconnectCall() {
  console.log("fan diconnect called",this.commonData)
   let leftTime = await this.commonData.remainingTime;
    console.log(
      "remaining time ",
      this.commonData.remainingTime
    );
      if (this.bidId != undefined) {
        this.id = this.bidId;
      }
      console.log("api ",this.id)
      let request: Request = {
        path: "core/video/updateCall/" + this.commonData.id,
        data: {
          remainingTime: leftTime,
        },
        isAuth: true,
      };
      this.apiService.post(request).subscribe((response: Response) => {
        this.coreService.dismissLoader();
      });
      this.router.navigate(["/tabs/schedule"]);
  }

  async callDisconnectSocket() {
    console.log("fan disconnect socket called");
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
    console.log("fan send cut video ",data)
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
