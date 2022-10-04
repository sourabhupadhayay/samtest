import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import {
  initPublisher,
  initSession,
  Publisher,
  Session,
  Subscriber,
} from "@opentok/client";

import {
  CoreService,
  userRole,
  UserRole,
} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { switchMap } from "rxjs/operators";
import { ConstantService } from "src/app/providers/constant.service";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "src/app/configuration";
import { CommonService } from "src/app/providers/common.service";

@Component({
  selector: "app-call",
  templateUrl: "./call.component.html",
  styleUrls: ["./call.component.scss"],
})
export class CallComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("athleteContainer") athleteElement: ElementRef;
  @ViewChild("fanContainer") fanElement: ElementRef;
  isAudioMuted: boolean = false;
  isVideoOn: boolean = true;
  publisher: Publisher;
  userRole: userRole;
  userData: any;
  session: Session;
  subscribe: Subscriber;
  apiKey: string = "47513031";
  sessionId: string;
  token: string;
  timeLeft: number;
  interval: any;
  id: string;
  bidId: string;
  isBiddingEvent: boolean;
  socket:any;

  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private constantService: ConstantService,
    private core: CoreService,
    public commonService: CommonService,
  ) {}

  ngOnInit() {
    this.keepDeviceAwake();
    this.callDisconnectSocket();
  }

  ngAfterViewInit(): void {
    this.getUserDataAndRole();
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      if (!params.isBidEvent) {
        this.router.navigate(["tabs/home"]);
      }
      if (params.isBidEvent === "true") {
        this.isBiddingEvent = true;
        this.connectCall(true);
      } else {
        this.isBiddingEvent = false;
        this.connectCall(false);
      }
    });
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();
    this.getQueryParams();
    // this.connectCall();
  }

  async keepDeviceAwake() {
    KeepAwake.keepAwake();
  }

  async allowDeviceToSleep() {
    KeepAwake.allowSleep();
  }

  getVideoSessionAndToken(path: string) {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = params.get("id");
          let request: Request = {
            path: path + params.get("id"),
          };
          return this.apiService.get(request);
        })
      )
      .subscribe((response) => {
        if (response.status.code === this.constantService.STATUS_OK) {
          this.sessionId = response.data.sessionId;
          this.token = response.data.token;
          this.timeLeft = response.data.remainingTime;
          this.bidId = response.data.bidId;
          this.getSession();
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }

  connectCall(isBiddingEvent: boolean) {
    if (isBiddingEvent) {
      if (this.userRole == "athlete") {
        this.getVideoSessionAndToken("core/video/call/");
      } else {
        this.getVideoSessionAndToken("core/video/receive/");
      }
    } else {
      this.getVideoSessionAndToken("core/video/call/now/");
    }
  }

  getSession() {
    this.session = initSession(this.apiKey, this.sessionId);

    this.session.connect(this.token, (error) => {
      if (error) {
        console.log(error);
      } else {
        this.createPublisher();

        this.session.publish(this.publisher, (error) => {});
      }
    });
    let element = this.fanElement.nativeElement;
    this.session.on("streamCreated", (event) => {
      this.startTimer();
      this.subscribe = this.session.subscribe(event.stream, element, {
        width: "100%",
        height: "100%",
        insertMode: "replace",
      });

      // this.session.signal({ type: "String", data: "heyyyy" }, (err) => {
      //   console.log("heyyyyy", err.message, err.name);
      // });
    });

    this.session.on("streamDestroyed", (event) => {
      this.session.disconnect();
      this.stopTimer();
      this.router.navigate(["/tabs/home"]);
    });
  }

  createPublisher() {
    this.publisher = initPublisher(this.athleteElement.nativeElement, {
      width: "100%",
      height: "100%",
      insertMode: "replace",
      name: this.userData.fullName,
    });

    this.publisher.on("streamDestroyed", (event) => {
      console.log("Stream stopped. Reason: " + event.reason);
    });
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  toggleMuteButton() {
    this.isAudioMuted = !this.isAudioMuted;
    this.publisher.publishAudio(!this.isAudioMuted);
  }
  toggleVideoButton() {
    this.isVideoOn = !this.isVideoOn;
    this.publisher.publishVideo(this.isVideoOn);
  }

  async switchCameraSource() {
    await this.publisher.cycleVideo();
  }

  disconnectCall() {
    let request: Request = {
      path: "core/video/updateCall/" + this.bidId,
      data: {
        remainingTime: this.timeLeft,
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.session.disconnect();
        console.log("a ",this.isBiddingEvent,response.data.eventId)
        if (this.isBiddingEvent) {
          this.router.navigate(["/waitlist/event/" + response.data.eventId]);
        } else {
          this.router.navigate(["tabs/home"]);
        }
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft == 0) {
        if (this.userRole == "athlete") {
          this.disconnectCall();
        }
      }
      this.cd.detectChanges();
    }, 1000);
  }

  secondsToHms(d: number) {
    d = Number(d);

    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? "" : "  ") : "0";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "0";

    if (s < 10) {
      sDisplay = "0" + sDisplay;
    }

    return `0${mDisplay}: ${sDisplay}s`;
  }

  stopTimer() {
    clearInterval(this.interval);
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
          console.log("response ",responseData)

          if (
            userDetails.id == this.commonService.callingAthleteDetails.athleteId
          ) {
            console.log("b ",this.isBiddingEvent, responseData.eventId)
            if (this.isBiddingEvent) {
              this.router.navigate(["/waitlist/event/" + this.commonService.callingAthleteDetails.eventId]);
            } else {
              this.router.navigate(["tabs/schedule"]);
            }
            // if(userRole =='athlete') {
            //   this.core.showToastMessage(
            //     "Fan is busy. Please connect after sometime",
            //     this.core.TOAST_ERROR
            //   );
            // }
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

  ngOnDestroy(): void {
    this.stopTimer();
    this.allowDeviceToSleep();
  }
}
