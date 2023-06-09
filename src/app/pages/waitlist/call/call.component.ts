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

import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { switchMap, withLatestFrom } from "rxjs/operators";
import { ConstantService } from "src/app/providers/constant.service";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { configuration } from "src/app/configuration";
import { CommonService } from "src/app/providers/common.service";
import { SafeExecution } from "../../../directives/models/safe-execution.decorator";
import { NavController, Platform } from "@ionic/angular";

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
  publisher: OT.Publisher;
  userRole: userRole;
  userData: any;
  session: OT.Session;
  subscribe: OT.Subscriber;
  apiKey: any;
  sessionId: string = "";
  token: string;
  timeLeft: number;
  intId: any;
  id: string;
  bidId: string;
  isBiddingEvent: boolean;
  socket: any;
  remainTime: any;
  color: any;
  streams: any = [];
  userDetail: any = [];
  nameInitials: string;
  OT: any;
  commonData: any;
  interval;
  predefinedTime: number = 60;
  paramsSub:any
  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private constantService: ConstantService,
    public commonService: CommonService,
    private navController: NavController,
    private platform: Platform
  ) {}

  async ngOnInit() {
    this.keepDeviceAwake();
    this.callDisconnectSocket();
    let request: Request = {
      path: "core/configuration/publicInfo",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      this.apiKey = response.data.videoApiKey;
    });
    this.apiKey = this.commonService.publicInfo.videoApiKey;
    console.log("api key", this.apiKey);
    let users = localStorage.getItem("authDetails");
    this.userDetail = JSON.parse(users);
    console.log("user detail", this.userDetail.profileUrl);
    this.nameInitials = this.commonService.getInitials(
      this.userDetail.fullName
    );
    this.callAutoCutTimer();
  }

  ngAfterViewInit(): void {
    this.getUserDataAndRole();
    console.log("c-afterview ", this.commonService.callingAthleteDetails);
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      if (!params.isBidEvent) {
        this.router.navigate(["tabs/home"]);
      }
      console.log("param ", params);
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

  async getVideoSessionAndToken(path: string, isOneToOneCall = false) {
    console.log("ANK"); 
    this.paramsSub=this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          console.log("param",params);
          
          this.id = params.get("id");
          console.log("fdsfsdg");
          
          let request: Request = {
            path: path + params.get("id"),
            isAuth: true,
          };
          if (isOneToOneCall) {
            if (this.userRole == "athlete") {
              console.log(isOneToOneCall, this.userRole);
              request.path = `core/video/call/now/${this.id}?receiveCall=false`;
            } else {
              console.log("else 121");
              
              request.path = `core/video/call/now/${this.id}?receiveCall=true`;
            }
          }

          return this.apiService.get(request);
        })
      )
      .subscribe((response) => {
      console.log("RESPONSE");
        
        if (response.status.code === this.constantService.STATUS_OK) {
          this.sessionId = response.data.sessionId;
          this.token = response.data.token;
          this.timeLeft = response.data.remainingTime;
          this.remainTime = response.data.remainingTime;
          this.bidId = response.data.bidId;
          if (this.sessionId) {
            this.getSession();
          }
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
    console.log("isBiddingEvent ", isBiddingEvent);
    if (isBiddingEvent) {
      console.log("1");

      if (this.userRole == "athlete") {
        console.log("2");
        this.getVideoSessionAndToken("core/video/call/");
      } else {
        console.log("3");
        this.getVideoSessionAndToken("core/video/receive/");
      }
    } else {
      console.log("4");
      this.getVideoSessionAndToken(`core/video/call/now/`, true);
    }
  }

  getSession() {
    console.log("session call");
    
    this.session = OT.initSession(this.apiKey, this.sessionId);
    this.session.connect(this.token, (error) => {
      if (error) {
        console.log(error);
        // this.session.connect(this.token, (error) => {});
      } else {
        this.createPublisher();

        this.session.publish(this.publisher, (error) => {});
      }
    });
    let element = this.fanElement?.nativeElement;
    this.session.on("streamCreated", (event) => {
      this.stopAutoCutTimer();
      this.startTimer();
    this.streams.on.videoEnabled((data)=>{
      console.log("VIDEO ENABLED",data);
      
    })
      this.subscribe = this.session.subscribe(event.stream, element, {
        width: "100%",
        height: "100%",
        insertMode: "replace",
      });

      // this.session.signal({ type: "String", data: "heyyyy" }, (err) => {
      //   console.log("heyyyyy", err.message, err.name);
      // });
    });

    this.session.once("streamDestroyed", (event) => {
      event.preventDefault();
      var subscribers = this.session.getSubscribersForStream(event.stream);
      this.session.disconnect();
      console.log("Reson" + event.reason);
      this.stopTimer();
      this.router.navigate(["/tabs/home"]);
    });
    //
  }
  private _streamOff(): void {
    // if ((<any>this.session).listenerCount("streamCreated") == 1) {
    (<any>this.session).off("streamCreated");
    (<any>this.session).off("streamDestroyed");
    (<any>this.session).off("sessionConnected");

    // }
  }
  createPublisher() {
    this.publisher = OT.initPublisher(this.athleteElement.nativeElement, {
      width: "100%",
      height: "100%",
      insertMode: "replace",
      name: this.userData.fullName,
    });

    this.publisher.off("streamDestroyed", (event) => {
      console.log("Stream stopped. Reason: " + event.reason);
      clearInterval(this.intId);
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
    console.log("athlete disconnect call ", this.bidId, this.timeLeft);
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
        this.intId = undefined;
        this._streamOff();
        this._cleanUp();
        clearInterval(this.interval);
        this.predefinedTime = 60;
        if (this.isBiddingEvent) {
          this.commonService.$navigateSubject.next();
          this.navController.navigateBack([
            "/waitlist/event/" + response.data.eventId,
          ]);
          //this.router.navigate(["/waitlist/event/" + response.data.eventId]);

          // this.router.navigate([]);
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

  callAutoCutTimer() {
    this.interval = setInterval(() => {
      if (this.predefinedTime > 0) {
        this.predefinedTime--;
        console.log("auto-cut timer ", this.predefinedTime);
        if (this.predefinedTime == 0) {
          this.stopAutoCutTimer();
          this.disconnectCall();
          this.session.disconnect();
        }
      }
    }, 1000);
  }

  stopAutoCutTimer() {
    clearInterval(this.interval);
    this.predefinedTime = 60;
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
      //console.log("timerr", this.timeLeft);
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
    if (m < 10) {
      mDisplay = "0" + mDisplay;
    }
    return `${mDisplay}: ${sDisplay}s`;
  }
  stopTimer() {
    clearInterval(this.intId);
  }

  async callDisconnectSocket() {
    let userRole: userRole = await this.coreService.getUserRoleFromStorage();
    let userDetails = await this.coreService.getUserDataFromStorage();
    console.log("athlete disconnect socket called ", userRole, userDetails);
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
          // this.commonService.callingAthleteDetails=JSON.parse(responseData);
          if (userDetails.id == msg.athleteId) {
            if (this.isBiddingEvent) {
              this.router.navigate(["/waitlist/event/" + msg.eventId]);
            } else {
              this.router.navigate(["tabs/schedule"]);
            }
            if (
              msg.disconnectedByPersonRole == "USER" &&
              userRole == "athlete" &&
              msg.bidState !== "COMPLETED"
            ) {
              this.session.disconnect();
              this.commonService.$navigateSubject.next();
              this.coreService.showToastMessage(
                "Fan is busy. Please connect after sometime",
                this.coreService.TOAST_ERROR
              );
            }
          } else {
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

  @SafeExecution()
  private _cleanUp(): void {
    /*
     * This.streams.forEach((str: Stream) => {
     * 	str = null;
     * });
     */
    Promise.resolve(this._sessionCleanUp())
      .then((): Promise<void> => Promise.resolve(this.hardRefresh()))
      .then((): void => {
        // this.distroyer$?.next();
        // this.distroyer$?.complete();
      });
    /*
     * This.subscriber = null;
     * this.publisher = null;
     * this.session = null; as any)
     */
  }

  private _sessionCleanUp(): void {
    console.log("clean up call");
    this.streams = [];
    this.stopTimer();
    // @advice Only 1 event dose things automatically.... don't add to munch disconnect stuff it breaks the code..
    this.session.disconnect();
    setTimeout(() => {
      this.publisher = undefined;
      this.subscribe = undefined;
    }, 2000);

    // this.updateViews();
  }
  async hardRefresh(): Promise<void> {
    // await this._navCtrl.navigateRoot("/home");
    // Window.location.reload();
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this._cleanUp();
    this.allowDeviceToSleep();
    this.session.disconnect();
    this.sessionId = "";
    this.apiKey = "";
    clearInterval(this.interval);
    this.paramsSub.unsubscribe()
  }
  ionViewDidLeave() {
    console.log("leave csll");
    this.session.disconnect();
    this._streamOff();
    this._cleanUp();
    clearInterval(this.intId);
    clearInterval(this.interval);
    this.cd.detectChanges();
    this.sessionId = "";
    this.paramsSub.unsubscribe()
  }
}
