import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CommonService } from "src/app/providers/common.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-incoming-call",
  templateUrl: "./incoming-call.component.html",
  styleUrls: ["./incoming-call.component.scss"],
})
export class IncomingCallComponent implements OnInit {
  bidId: string;
  nameInitials: string;
  constructor(
    private router: Router,
    public commonService: CommonService,
    private route: ActivatedRoute,
    private apiService: DataService,
    private constantService: ConstantService,
    private coreService: CoreService
  ) {}

  getBidIdFromRoute() {
    this.route.params.subscribe((params: Params) => {
      this.bidId = params.id;
    });
  }

  ngOnInit() {
    this.nameInitials = this.commonService.getInitials(
      this.commonService.callingAthleteDetails.athleteName
    );
    this.getBidIdFromRoute();
    if (!this.commonService.callingAthleteDetails) {
      this.router.navigate(["/tabs/home"]);
    }
  }

  joinCall() {
    this.router.navigate(["/waitlist/call/" + this.bidId]);
  }
  disconnectCall() {
    let request: Request = {
      path: "core/video/updateCall/" + this.bidId,
      data: {
        remainingTime: 180,
        videoCompleted: false,
      },
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      this.router.navigate(["/tabs/schedule"]);
      // if (response.status.code === this.constantService.STATUS_OK) {
      //   this.router.navigate(["/tabs/home"]);
      // } else {
      //   this.coreService.showToastMessage(
      //     response.status.description,
      //     this.coreService.TOAST_ERROR
      //   );
      // }
    });
  }
}
