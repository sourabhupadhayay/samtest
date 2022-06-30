import { Component, OnInit } from "@angular/core";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  userData: any | null = null;
  nameInitials: string;
  constructor(
    private coreService: CoreService,
    private apiService: DataService,
    private constantService: ConstantService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails() {
    let request: Request = {
      path: "auth/users/currentUser",
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
        this.userData = response.data;
        this.getInitials(this.userData.fullName);
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  getInitials(fullName: String) {
    let splitName = fullName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    if (lastName) {
      this.nameInitials = firstName[0] + lastName[0];
    } else {
      this.nameInitials = firstName[0];
    }
  }
}