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
// import { Socket } from "ngx-socket-io";
import {
  CoreService,
  userRole,
  UserRole,
} from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { switchMap } from "rxjs/operators";
import { ConstantService } from "src/app/providers/constant.service";

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
  timeLeft: number = 180;
  interval: any;
  bidId: string;

  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private constantService: ConstantService
  ) {}

  ngOnInit() {}

  getVideoSessionAndToken(path: string) {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.bidId = params.get("id");
          let request: Request = {
            path: path + params.get("id"),
          };
          return this.apiService.get(request);
        })
      )
      .subscribe((response) => {
        this.sessionId = response.data.sessionId;
        this.token = response.data.token;
        this.getSession();
      });
  }

  ngAfterViewInit(): void {
    this.getUserDataAndRole();
  }

  connectCall() {
    if (this.userRole == "athlete") {
      this.getVideoSessionAndToken("core/video/call/");
    } else {
      this.getVideoSessionAndToken("core/video/receive/");
    }
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();
    this.connectCall();
  }

  getSession() {
    this.session = initSession(this.apiKey, this.sessionId);
    console.log(this.session);
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
        videoCompleted: true,
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.router.navigate(["/waitlist/event/" + response.data.eventId]);
        this.session.disconnect();
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

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
