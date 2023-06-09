
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Capacitor } from "@capacitor/core";
import { IonRouterOutlet, ModalController ,Platform} from "@ionic/angular";
import { AuthenticationService } from "src/app/providers/authentication.service";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { CommonService } from "../../providers/common.service";

@Component({
  selector: "app-bubble-screen",
  templateUrl: "./bubble-screen.page.html",
  styleUrls: ["./bubble-screen.page.scss"],
})
export class BubbleScreenPage implements OnInit {
  bubble1: boolean = false;
  bubble2: boolean = false;
  athleteList: any[] = [];
  audio = new Audio();
  isLoggedIn: boolean = false;
  nameInitials: any;
  constructor(
    public modalCtrl: ModalController,
    public routerOutLet: IonRouterOutlet,
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    public authenticationService: AuthenticationService,
    private router: Router,
    private commonService: CommonService,
    public platform:Platform
  ) {}

  ngOnInit() {
    // this.redirectToAppPlayStore();
    this.isUserLoggedIn();
    this.getAthletes();
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
  }
  ionViewDidEnter() {
    this.isUserLoggedIn();
  }
  redirectToAppPlayStore() {
       if(Capacitor.getPlatform() == "web" &&
        this.platform.platforms().includes('mobileweb') && 
        !this.platform.platforms().includes('desktop') && this.platform.is('android')) {
          console.log("in mobile chrome");
          document.getElementById('playstore').click();
        }
    }

  isUserLoggedIn() {
    if (this.commonService.VideoCallAnswer == false) {
      if (this.authenticationService.isAuthenticated()) {
        this.router.navigate(["/tabs/home"]);
      }
    }
  }

  getAthletes() {
    let request: Request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          userRole : "ATHLETE",
          userStatuses: [ "ACTIVE" ]

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
        this.athleteList = response.data;
        this.athleteList.forEach((element, index) => {
          this.athleteList[index][
            "nameInitials"
          ] = this.commonService.getInitials(element.fullName);
        });
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  navigateToAthlete(id: string) {
    this.audio.play().then(() => {
      this.router.navigate(["/profile/athlete/" + id]);
    });
  }
  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
}
