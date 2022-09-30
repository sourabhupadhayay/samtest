import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/providers/authentication.service";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";


@Component({
  selector: "athlete-waitlist",
  templateUrl: "./athlete-waitlist.page.html",
  styleUrls: ["./athlete-waitlist.page.scss"],
})
export class AthleteWaitlistPage implements OnInit, DoCheck {
  @Input() eventId: string;
  @Input() connectedFans: any[] = [];
  fanImagesList: any[] = [];
  athleteList: any;
  sponsorList: any;
   slideOpts:any = {
    slidesPerView: 3,
    initialSlide: 1,
    speed: 400,
    // loop: true,
    autoplay: {
          delay: 2000
    }
  }
  constructor(private router: Router, 
              private commonService: CommonService,
              private apiService: DataService,
              private coreService: CoreService,
              private constant: ConstantService,
              public authenticationService: AuthenticationService
              ) {}

  ngOnInit() {
    console.log(this.connectedFans);
    this.getSponsor();
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
        this.athleteList = response.data;
        console.log("ath ",this.athleteList)
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

 



  ngDoCheck() {
    let fansList = [];

    if (this.connectedFans.length <= 3) {
      this.connectedFans.forEach((data) => {
        fansList.push(data);
      });
    } else {
      for (let index = 0; index < 4; index++) {
        fansList.push(this.connectedFans[index]);
      }
    }

    this.fanImagesList = fansList;
  }

  getInitials(name: string): String {
    return this.commonService.getInitials(name);
  }

  callFan(id: string) {
    this.router.navigate(["waitlist/call/" + id]);
  }
  // compare_bid(a, b) {
  //   if (a.bid > b.bid) {
  //     return -1;
  //   }
  //   if (a.bid < b.bid) {
  //     return 1;
  //   }
  //   return 0;
  // }
}
