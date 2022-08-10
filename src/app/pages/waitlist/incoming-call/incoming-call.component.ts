import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-incoming-call",
  templateUrl: "./incoming-call.component.html",
  styleUrls: ["./incoming-call.component.scss"],
})
export class IncomingCallComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  joinCall() {
    console.log("clicked");
    this.router.navigate(["/waitlist/call"]);
  }
}
