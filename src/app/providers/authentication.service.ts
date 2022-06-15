import { Injectable, OnInit } from "@angular/core";
import { configuration } from "../configuration";
import { Storage } from "@capacitor/storage";
const AUTH = configuration.AUTH_KEY;
export class AuthData {
  isLoggedIn = false;
  token: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService implements OnInit {
  private data: AuthData = new AuthData();
  constructor() {}

  async ngOnInit() {
    let extractedData = await Storage.get({ key: "AUTH" });
    if (extractedData.value) {
      let { value } = await Storage.get({ key: "AUTH" });
      this.data = JSON.parse(value);
    }
  }

  // getToken() {
  //   if (localStorage.getItem(AUTH) != null) {
  //     this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
  //   }
  //   return this.data.token;
  // }

  async getAuthDetail() {
    let extractedData = await Storage.get({ key: "AUTH" });
    if (extractedData.value != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
    }
    return this.data;
  }
  async setAuth(data) {
    this.data = data;

    await Storage.set({ key: "Auth", value: JSON.stringify(this.data) });
    this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
    this.getAuthDetail();
  }
  async logout() {
    await Storage.remove({ key: "AUTH" });

    location.reload();
  }
  async isAuthenticated() {
    let extractedData = await Storage.get({ key: "AUTH" });

    if (extractedData.value != null) {
      // this.data = await JSON.parse(localStorage.getItem(AUTH)) as any;
      let { value } = await Storage.get({ key: "AUTH" });
      this.data = JSON.parse(value);
    }
    return this.data.isLoggedIn;
  }
  async setNewAuthDetail(data) {
    this.data = data;

    await Storage.set({ key: "Auth", value: JSON.stringify(this.data) });
    this.getAuthDetail();
    //location.reload();
  }
}
