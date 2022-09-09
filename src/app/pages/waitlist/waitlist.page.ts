import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { NavParams } from "@ionic/angular";

import { CoreService, userRole } from "src/app/providers/core.service";

@Component({
  selector: "app-waitlist",
  templateUrl: "./waitlist.page.html",
  styleUrls: ["./waitlist.page.scss"],
})
export class WaitlistPage implements OnInit {
  userRole: userRole;
  userData: any;
  eventId: string;

  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getUserDataAndRole();
    this.getEventIdFromParam();
  }

  getEventIdFromParam() {
    this.route.params.subscribe((param) => {
      this.eventId = param.id;
    });
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();
  }
}
