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
  apiKey: any;
  sessionId: string;
  token: string;
  timeLeft: number;
  intId: any;
  id: string;
  bidId: string;
  isBiddingEvent: boolean;
  socket: any;
  remainTime: any;
  color: any;
  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private constantService: ConstantService,
    private core: CoreService,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.keepDeviceAwake();
    this.callDisconnectSocket();
    this.apiKey = this.commonService.publicInfo.videoApiKey;
    console.log("api key", this.apiKey);
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

  getVideoSessionAndToken(path: string, isOneToOneCall = false) {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = params.get("id");
          let request: Request = {
            path: path + params.get("id"),
            isAuth: true,
          };
          if (isOneToOneCall) {
            if (this.userRole == "athlete") {
              console.log(isOneToOneCall, this.userRole);
              request.path = `core/video/call/now/${this.id}?receiveCall=false`;
            } else {
              request.path = `core/video/call/now/${this.id}?receiveCall=true`;
            }
          }

          return this.apiService.get(request);
        })
      )
      .subscribe((response) => {
        if (response.status.code === this.constantService.STATUS_OK) {
          this.sessionId = response.data.sessionId;
          console.log("sessionID", this.sessionId);
          this.token = response.data.token;
          this.timeLeft = response.data.remainingTime;
          this.remainTime = response.data.remainingTime;
          this.bidId = response.data.bidId;
          this.getSession();
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
          this.router.navigate(["tabs/schedule"]);
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
      this.getVideoSessionAndToken(`core/video/call/now/`, true);
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

      console.log("subscribee1", this.subscribe);
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
      //this.startTimer();
      console.log("Stream stopped. Reason: " + event.reason);
      clearInterval(this.intId);
      console.log("int", this.intId);
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

    this.apiService.post(request).subscribe((response: Response) => {
      if (response.status.code === this.constantService.STATUS_OK) {
        if (this.intId) {
          clearInterval(this.intId);
        }

        console.log("interval s", this.intId);
        this.intId = undefined;
        this.session.disconnect();
        this.session.unpublish(this.publisher);

        this.cd.detectChanges();
        console.log("asdfdg ", this.isBiddingEvent, this.intId);
        if (this.isBiddingEvent) {
          this.router.navigate(["/waitlist/event/" + response.data.eventId]);
        } else {
          this.router.navigate(["tabs/schedule"]);
        }
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
        this.router.navigate(["tabs/schedule"]);
      }
      return;
    });
  }

  startTimer() {
    console.log("start timer", this.timeLeft);
    this.intId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }

      if (this.timeLeft > 60) {
        this.color = "#55CD89";
      }
      if (this.timeLeft < 60) {
        this.color = "#FFA439";
      }
      if (this.timeLeft < 20) {
        this.color = " #F64444";
      }
      console.log("timerr", this.timeLeft);
      if (this.timeLeft == 0) {
        if (this.userRole == "athlete") {
          console.log("interval time left", this.timeLeft);
          this.disconnectCall();
          clearInterval(this.intId);
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
    clearInterval(this.intId);
  }

  async callDisconnectSocket() {
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

          if (
            userDetails.id == this.commonService.callingAthleteDetails.athleteId
          ) {
            if (this.isBiddingEvent) {
              this.router.navigate([
                "/waitlist/event/" +
                  this.commonService.callingAthleteDetails.eventId,
              ]);
            } else {
              this.router.navigate(["tabs/schedule"]);
            }

            if (
              this.commonService.callingAthleteDetails
                .disconnectedByPersonRole == "USER" &&
              userRole == "athlete" &&
              this.commonService.callingAthleteDetails.bidState !== "COMPLETED"
            ) {
              this.core.showToastMessage(
                "Fan is busy. Please connect after sometime",
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
    console.log("time left dis", this.timeLeft);
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
    this.session.disconnect();
    this.sessionId = "";
    this.apiKey = "";
  }
  ionViewDidLeave() {
    clearInterval(this.intId);
    this.cd.detectChanges();
  }
}
