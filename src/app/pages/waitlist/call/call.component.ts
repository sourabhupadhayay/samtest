import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import {
  initPublisher,
  initSession,
  Publisher,
  Session,
  Subscriber,
} from "@opentok/client";
import { Socket } from "ngx-socket-io";
import {
  CoreService,
  userRole,
  UserRole,
} from "src/app/providers/core.service";
import { DataService } from "src/app/providers/data.service";

@Component({
  selector: "app-call",
  templateUrl: "./call.component.html",
  styleUrls: ["./call.component.scss"],
})
export class CallComponent implements OnInit, AfterViewInit {
  @ViewChild("athleteContainer") athleteElement: ElementRef;
  @ViewChild("fanContainer") fanElement: ElementRef;
  userRole: userRole;
  userData: any;
  session: Session;
  subscribe: Subscriber;
  apiKey: string = "47513031";
  sessionId: string =
    "2_MX40NzUxMzAzMX5-MTY2MDExMTA0MzYxOX4xd3VxMXhxRHFPR0M4OFhUNHl4YVg5cnd-fg";
  token: string =
    "T1==cGFydG5lcl9pZD00NzUxMzAzMSZzaWc9NWY0NDlkYTA5ZGZmOTdhMTY3ZDQ4NDY5ZTcxNWVlMjNiNjM0ZjUxZTpzZXNzaW9uX2lkPTJfTVg0ME56VXhNekF6TVg1LU1UWTJNREV4TVRBME16WXhPWDR4ZDNWeE1YaHhSSEZQUjBNNE9GaFVOSGw0WVZnNWNuZC1mZyZjcmVhdGVfdGltZT0xNjYwMTExMDQ0Jm5vbmNlPTAuNzQyNTk4ODA5OTExODExOSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjYwNzE1ODQ0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private router: Router,
    private socket: Socket
  ) {}

  ngOnInit() {
    this.getUserDataAndRole();
  }
  ngAfterViewInit(): void {
    this.getSession();
  }
  async getUserDataAndRole() {
    this.userRole = await this.coreService.getUserRoleFromStorage();
    this.userData = await this.coreService.getUserDataFromStorage();
  }

  getSession() {
    this.session = initSession(this.apiKey, this.sessionId);

    this.session.connect(this.token, (error) => {
      if (error) {
        console.log(error);
      } else {
        let publisher = this.createPublisher();
        this.session.publish(publisher, (error) => {});
      }
    });
    let element = this.fanElement.nativeElement;
    this.session.on("streamCreated", (event) => {
      this.subscribe = this.session.subscribe(event.stream, element, {
        width: "100%",
        height: "100%",
        insertMode: "replace",
      });

      // this.session.signal({ type: "String", data: "heyyyy" }, (err) => {
      //   console.log("heyyyyy", err.message, err.name);
      // });
    });

    this.session.on("streamDestroyed", (event) => {
      if (this.userRole == "fan") {
        this.socket.emit("cut-call", this.userData);
      }
      this.router.navigate(["/tabs/home"]);
      console.log("Stream stopped. Reason: " + event.reason);
    });
  }

  createPublisher(): Publisher {
    var publisher = initPublisher(this.athleteElement.nativeElement, {
      width: "100%",
      height: "100%",
      insertMode: "replace",
    });

    publisher.on("streamDestroyed", (event) => {
      if (this.userRole == "fan") {
        this.router.navigate(["/"]);
      }

      console.log("Stream stopped. Reason: " + event.reason);
    });

    return publisher;
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  disconnectCall() {
    this.session.disconnect();
    this.router.navigate(["/waitlist"]);
  }
}
