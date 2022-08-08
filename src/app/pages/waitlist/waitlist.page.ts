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
  constructor(private socket: Socket, private coreService: CoreService) {}
  ngOnInit() {
    this.getUserRole();
    // // this.socket.emit("fan-connect", "alok");
    // this.getConnectedAthletes();
  }

  async getUserRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    console.log(this.userRole);
  }

  getConnectedAthletes() {
    this.socket.fromEvent("fans").subscribe((response) => {
      console.log(response);
    });
  }
}
