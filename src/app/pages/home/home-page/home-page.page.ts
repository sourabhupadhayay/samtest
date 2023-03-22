import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonRouterOutlet, ModalController, Platform } from "@ionic/angular";
import { AppComponent } from "src/app/app.component";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import {CommonService} from "../../../providers/common.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.page.html",
  styleUrls: ["./home-page.page.scss"],
})
export class HomePagePage implements OnInit {
  athleteList: any[] = [];
  audio = new Audio();
  nameInitials:any;
  constructor(
    public modalCtrl: ModalController,
    public routerOutLet: IonRouterOutlet,
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    public authenticationService: AuthenticationService,
    private router: Router,
    private commonService: CommonService,
    private  app:AppComponent,
    public platform:Platform

  ) {}

  ngOnInit() {
    this.getAthletes();
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
  }
  ionViewDidEnter(){
    this.app.callingAthlete()
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
        this.athleteList.forEach((element,index) => {
          this.athleteList[index]['nameInitials']= this.commonService.getInitials(element.fullName
          );
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
    this.audio.play();

    setTimeout(() => {
      this.router.navigate(["/profile/athlete/" + id]);
    }, 500);
  }
}
