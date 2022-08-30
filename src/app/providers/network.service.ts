import { Injectable } from "@angular/core";
import { Network } from "@capacitor/network";

import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  private readonly _didInternetWentOffline: BehaviorSubject<
    boolean
  > = new BehaviorSubject<boolean>(true);

  private readonly _didInternetWentOffline$: Observable<
    boolean
  > = this._didInternetWentOffline.asObservable();
  constructor() {
    this._networkInit();
    this.logCurrentNetworkStatus();
  }

  private _networkInit(): void {
    Network.addListener("networkStatusChange", (status) => {
      this._didInternetWentOffline.next(status.connected);
    });
  }
  async logCurrentNetworkStatus() {
    const status = await Network.getStatus();

    this._didInternetWentOffline.next(status.connected);
  }

  networkListener(): Observable<boolean> {
    return this._didInternetWentOffline$.pipe(distinctUntilChanged());
  }

  get isOnline(): boolean {
    return this._didInternetWentOffline.value;
  }
}
