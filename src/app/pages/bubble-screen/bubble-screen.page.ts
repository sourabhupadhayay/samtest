import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from "@angular/core";
import { IonRouterOutlet, ModalController } from "@ionic/angular";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { NetworkService } from "src/app/providers/network.service";

@Component({
  selector: "app-bubble-screen",
  templateUrl: "./bubble-screen.page.html",
  styleUrls: ["./bubble-screen.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubbleScreenPage implements OnInit, AfterViewInit {
  bubble1: boolean = false;
  bubble2: boolean = false;
  athleteList: any[] = [];
  constructor(
    public modalCtrl: ModalController,
    public routerOutLet: IonRouterOutlet,
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    private cd: ChangeDetectorRef,
    private htmlElement: ElementRef
  ) {}

  ngOnInit() {
    this.getAthletes();
  }
  ngAfterViewInit(): void {}

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
    };
    this.coreService.presentLoader("Please wait");
    this.apiService.post(request).subscribe((response: Response) => {
      if (response.status.code == this.constant.STATUS_OK) {
        this.coreService.dismissLoader();
        this.athleteList = response.data;
        this.cd.detectChanges();
        console.log(this.athleteList);
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
        this.coreService.dismissLoader();
      }
    });
  }

  playAudio(e: string) {
    let audio = new Audio();
    audio.src = "assets/audio/buble-sound.mp3";
    audio.load();
    audio.play();
    console.log("clicked", e);
    if (e == "1") {
      this.bubble1 = true;
    } else if (e == "2") {
      this.bubble2 = true;
    }
  }
  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }
}
