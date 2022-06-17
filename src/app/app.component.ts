import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { CoreService } from "./providers/core.service";
import { DataService, Request } from "./providers/data.service";
import { NetworkService } from "./providers/network.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private apiservice: DataService,
    private _networkService: NetworkService,
    private platform: Platform,
    private core: CoreService
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {}

  initializeApp(): void {
    this.platform.ready().then((): void => {
      this._networkEventsListener();
    });
  }

  private _networkEventsListener(): void {
    this._networkService
      .networkListener()
      .subscribe((networkStatus: boolean): void => {
        const { msg, type }: { msg: string; type: string } = this._statsUpdate(
          networkStatus
        );

        this.core.showToastMessage(msg, type);
      });
  }
  private _statsUpdate(networkStatus: boolean): { msg: string; type: string } {
    const msg: string = networkStatus
        ? "Internet Status: ONLINE"
        : "Internet Status: OFFLINE",
      type: string = networkStatus
        ? this.core.TOAST_SUCCESS
        : this.core.TOAST_ERROR;

    return { msg, type };
  }
}
