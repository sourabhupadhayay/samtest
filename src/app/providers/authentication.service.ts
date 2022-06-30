import { Injectable } from "@angular/core";
import { configuration } from "../configuration";
const AUTH = configuration.AUTH_KEY;
export class AuthData {
  isLoggedIn = false;
  token: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private data: AuthData = new AuthData();
  constructor() {
    if (localStorage.getItem(AUTH)) {
      this.data = <any>JSON.parse(localStorage.getItem(AUTH));
    }
  }

  getToken() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
    }
    return this.data.token;
  }
  getAuthDetail() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
    }
    return this.data;
  }
  setAuth(data) {
    this.data = data;
    localStorage.setItem(AUTH, JSON.stringify(data));
    this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
    this.getAuthDetail();
  }
  logout() {
    localStorage.removeItem("authDetail");
    location.reload();
  }
  isAuthenticated() {
    if (localStorage.getItem(AUTH) != null) {
      this.data = JSON.parse(localStorage.getItem(AUTH)) as any;
      return this.data.isLoggedIn;
    } else {
      return false;
    }
  }
  setNewAuthDetail(data) {
    this.data = data;
    localStorage.setItem(AUTH, JSON.stringify(this.data));
    this.getAuthDetail();
    //location.reload();
  }
}
