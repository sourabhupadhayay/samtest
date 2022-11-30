import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
// import { Socket } from "ngx-socket-io";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "fan-waitlist",
  templateUrl: "./fan-waitlist.page.html",
  styleUrls: ["./fan-waitlist.page.scss"],
})
export class FanWaitlistPage implements OnInit, OnDestroy {
  @Input() eventId: null | string = null;
  @Input() connectedFans: any[] = [];
  @Input() calledFans: any[] = [];
  @Input() pendingCallFans: any[] = [];
  @ViewChild("videos") videos: ElementRef;
  videoElement: HTMLVideoElement;
  userData;
  eventData;
  currentPosition: number = 0;
  maxBid: number;
  nameInitials: string;
  eventTime;
  interval;
  userIndex: number = 0;
  sponsorList: any;
  connectedFanDetails = null;
  creatorPersona: string;
  highestBid: any;
  eventVideoData:any;
  urls:any;
  videourl:any;
  slideOpts: any = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    // loop: true,
    autoplay: {
      delay: 2000,
    },
  };

  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private router: Router,
    private constantService: ConstantService,
    public commonService: CommonService,
    private cd: ChangeDetectorRef,
    private constant: ConstantService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.getEventDetails();
    this.getUserData();
    this.getSponsor();
    console.log("public info",this.commonService.publicInfo);
   
      this.video(); 
    
   
  }

  ngDoCheck() {
    if (this.connectedFans.length !== 0) {
      this.calculateUserPosition();
    }
  }

  getSponsor() {
    let request: Request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          roles: ["SPONSOR"],
        },
        page: {
          pageLimit: 1,
          pageNumber: 0,
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME",
        },
      },
      isAuth: false,
    };

    this.apiService.post(request).subscribe((response: Response) => {
      if (response.status.code == this.constant.STATUS_OK) {
        this.sponsorList = response.data;
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  video(){
    let request: Request = {
      path: "core/configuration/publicInfo",
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventVideoData = response.data.videoUrls;
        console.log("aa",this.eventVideoData);
        
        for (let i = 0; i < this.eventVideoData.length; i++) {
       
          this.urls = Math.floor(Math.random()*this.eventVideoData.length); 
          console.log(this.urls);
          this.videourl= this.eventVideoData[ this.urls]; 
          console.log("video urls",this.videourl);
          this.cd.detectChanges()
       return;
        }
        // this.creatorPersona = response.data.videoUrls;
        // console.log(this.eventVideoData);
       
        // var myVideo = document.getElementsByTagName('video')[0];
        // myVideo.innerHTML = ''; // fast way to empty children
        // this.eventVideoData[0].forEach(url => {
        //   const source = document.createElement('source');
        //   source.src = url;
        //   myVideo.appendChild(source);
        //   console.log(source.src);
        // });
        // this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });

    
  }

  calculateUserPosition() {
    //pending fans
    console.log("fsdg,this.pendin", this.pendingCallFans);
    const bid = this.pendingCallFans.map((object) => {
      return object.totalAmount;
    });
    console.log(bid);

    this.highestBid = Math.max(...bid);
    console.log("highest ",this.highestBid)

    for (let index = 0; index < this.pendingCallFans.length; index++) {
      if (this.pendingCallFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.currentPosition = index;
        console.log("index ",this.userIndex,this.currentPosition)

        this.connectedFanDetails = this.pendingCallFans[index];
      }
    }
    //completedFans
    for (let index = 0; index < this.calledFans.length; index++) {
      if (this.calledFans[index].userId == this.userData.id) {
        this.userIndex = index;
        this.connectedFanDetails = this.calledFans[index];
      }
    }
    console.log("fan details", this.connectedFanDetails);
  }

  getEventDetails() {
    let request: Request = {
      path: "core/event/details/" + this.eventId,
      isAuth: true,
    };

    this.coreService.presentLoader(this.constantService.WAIT);
    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.eventData = response.data;
        this.creatorPersona = response.data.creatorPersona;
        console.log(this.creatorPersona);
        this.calculateTime();

        this.cd.detectChanges();
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  async getUserData() {
    this.userData = await this.coreService.getUserDataFromStorage();
    this.nameInitials = this.commonService.getInitials(this.userData.fullName);
  }

  updateBid() {
    // this.router.navigate(["bid-payment/" + this.eventId]);
    this.navController.navigateBack(["bid-payment/" + this.eventId]);
  }

  compare_bid(a, b) {
    if (a.bid > b.bid) {
      return -1;
    }
    if (a.bid < b.bid) {
      return 1;
    }
    return 0;
  }

  calculateTime() {
    this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    this.interval = setInterval(() => {
      this.eventTime = this.commonService.dateFormat(this.eventData.startDate);
    }, 60000);
  }

  soundOnOff() {
    let audio = document.getElementById("muteSound") as HTMLMediaElement;
    audio.muted = true;
  }

  ionViewDidLeave() {
    this.soundOnOff();
    clearInterval(this.interval);
  }

  routeBackToSchedule() {
    console.log("called");
    this.navController.navigateBack(["/tabs/schedule"]);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
