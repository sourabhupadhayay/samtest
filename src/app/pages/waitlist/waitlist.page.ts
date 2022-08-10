import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { CoreService, userRole } from "src/app/providers/core.service";

@Component({
  selector: "app-waitlist",
  templateUrl: "./waitlist.page.html",
  styleUrls: ["./waitlist.page.scss"],
})
export class WaitlistPage implements OnInit {
  userRole: userRole;
  userData: any;
  connectedFans: any[] = [];
  constructor(private socket: Socket, private coreService: CoreService) {}
  ngOnInit() {
    this.getUserDataAndRole();
    this.getConnectedFans();
  }

  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();

    // this.socket.emit("connect-event", this.userData);
    this.socket.emit("connect-event", this.userData);
  }

  getConnectedFans() {
    this.socket.fromEvent("fans").subscribe((response) => {
      this.connectedFans = response as [];
    });
  }
}
