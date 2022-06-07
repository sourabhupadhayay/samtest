import { Component, OnInit } from "@angular/core";
import { DataService, Request } from "./providers/data.service";
import { initSession, initPublisher } from "@opentok/client";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  apiKey = "47513031";
  sessionId =
    "2_MX40NzUxMzAzMX5-MTY1NDU5MzA4OTExN35HS1Fqc05CSTNBWjRkQmdQYzlrVkdUTE5-fg";
  token =
    "T1==cGFydG5lcl9pZD00NzUxMzAzMSZzaWc9YmRlOTM5Mjc1NGU4MzlmMzQ3YzM2N2E3ZjU4Y2M1OTU5MTE5OTQ1NzpzZXNzaW9uX2lkPTJfTVg0ME56VXhNekF6TVg1LU1UWTFORFU1TXpBNE9URXhOMzVIUzFGcWMwNUNTVE5CV2pSa1FtZFFZemxyVmtkVVRFNS1mZyZjcmVhdGVfdGltZT0xNjU0NTkzMDg4Jm5vbmNlPTAuNjAxOTAzOTQ1MjMwODUzNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjU0Njc5NDg4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

  constructor(private apiservice: DataService) {}

  ngOnInit(): void {}

  getSession() {
    var session = initSession(this.apiKey, this.sessionId);

    var publisher = initPublisher();

    session.connect(this.token, (error) => {
      if (error) {
        console.log(error);
      } else {
        session.publish(publisher, (error) => {});
      }
    });

    session.on("streamCreated", function (event) {
      session.subscribe(
        event.stream,
        "subscriber",
        {
          insertMode: "append",
          width: "100%",
          height: "100%",
        },
        this.handleError
      );
    });
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
}
