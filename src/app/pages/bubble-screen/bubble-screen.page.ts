import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { AuthenticationService } from "src/app/providers/authentication.service";

import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

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
  constructor(
    public modalCtrl: ModalController,
    public routerOutLet: IonRouterOutlet,
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAthletes();
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
  }

  getAthletes() {
    let request: Request = {
      path: "auth/users/manage/filter/list",
      data: {
        filter: {
          roles: ["ATHLETE"],
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
