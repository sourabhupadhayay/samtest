import { Injectable } from "@angular/core";
import { Network } from "@capacitor/network";

import { BehaviorSubject, Observable, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  private readonly _didInternetWentOffline: Subject<boolean> = new Subject<
    boolean
  >();

  private readonly _didInternetWentOffline$: Observable<
    boolean
  > = this._didInternetWentOffline.asObservable();
  constructor() {
    this._networkInit();
  }

  private _networkInit(): void {
    Network.addListener("networkStatusChange", (status) => {
      this._didInternetWentOffline.next(status.connected);
    });
  }

  networkListener(): Observable<boolean> {
    return this._didInternetWentOffline$.pipe(distinctUntilChanged());
  }

  get isOnline(): boolean {
    let isOnline = false;
    this._didInternetWentOffline.subscribe((value) => {
      isOnline = value;
    });
    return isOnline;
  }
}
