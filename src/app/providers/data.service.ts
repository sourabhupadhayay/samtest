import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry, finalize, takeWhile } from "rxjs/operators";
import { configuration } from "../configuration";
import { AuthenticationService } from "./authentication.service";
import { NetworkService } from "./network.service";
import { ConstantService } from "./constant.service";

export interface Request {
  path: string;
  data?: any;
  isAuth?: boolean;
}
export interface Response {
  data: any;
  status: {
    code: string;
    description: string;
    status: string;
  };
  token: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  BASE_URL = configuration.BASE_URL;
  response: any[] = [];
  headers: any;
  constructor(
    public http: HttpClient,
    public router: Router,
    private authService: AuthenticationService,
    private _networkService: NetworkService,
    private constant: ConstantService
  ) {}
  get isConnected(): boolean {
    return this._networkService.isOnline;
  }
  private _isOffline(val: any): boolean {
    return !val || !this._networkService.isOnline;
  }

  get(request: Request) {
    return this.http
      .get<any>(`${this.BASE_URL + "" + request.path}`, {
        headers: this.getHeader(request.isAuth),
      })
      .pipe(
        takeWhile((): boolean => this._isOnline()),
        catchError((err) => {
          return err;
        }),
        map((res: any) => {
          if (res["token"]) {
            let data = this.authService.getAuthDetail();
            data = {
              ...data,
              token: res["token"],
              isLoggedIn: true,
            };
            this.authService.setAuth(data);
          }
          return res;
        }),
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  getWithParam(requestUrl: string, isByPass = false, ...params: any[]) {
    return this.http
      .get<any>(`${requestUrl}/${params}`, {
        headers: this.getHeader(isByPass),
      })
      .pipe(
        takeWhile((): boolean => this._isOnline()),
        catchError((err) => {
          return err;
        }),
        map((res: any) => {
          if (res["token"]) {
            localStorage.setItem(this.constant.ACCESS_TOKEN, res.token);
          }
          return res;
        }),
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  // delete(request: Request, isByPass = false): Observable<any> {
  //   console.log(request);
  //   return this.http
  //     .delete(this.BASE_URL + request.path, {
  //       headers: this.getHeader(isByPass),
  //     })
  //     .pipe(
  //       takeWhile((): boolean => this._isOnline()),
  //       catchError((err) => {
  //         return err;
  //       }),
  //       map((res: any) => {
  //         if (res["token"]) {
  //           localStorage.setItem(this.constant.ACCESS_TOKEN, res.token);
  //         }
  //         return res;
  //       })
  //     );
  // }
  post(request: Request) {
    return this.http
      .post<any>(`${this.BASE_URL + "" + request.path}`, request.data, {
        headers: this.getHeader(request.isAuth),
      })
      .pipe(
        takeWhile((): boolean => this._isOnline()),
        catchError((err) => {
          return err;
        }),
        map((res: any) => {
          if (res["token"]) {
            let data = this.authService.getAuthDetail();
            data = {
              ...data,
              token: res["token"],
              isLoggedIn: true,
            };
            this.authService.setAuth(data);
          }
          return res;
        }),
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  postwithURL(requestUrl: string, isByPass = false, params) {
    return this.http
      .post<any>(`${this.BASE_URL + "" + requestUrl}`, params, {
        headers: this.getHeader(isByPass),
      })
      .pipe(
        takeWhile((): boolean => this._isOnline()),
        catchError((err) => {
          return err;
        }),
        map((res: any) => {
          if (res["token"]) {
            let data = this.authService.getAuthDetail();
            data = {
              ...data,
              token: res["token"],
              isLoggedIn: true,
            };
            this.authService.setAuth(data);
          }
          return res;
        }),
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  // put(request: Request, isByPass = false): Observable<any> {
  //   return this.http
  //     .put(this.BASE_URL + request.path, request.data, {
  //       headers: this.getHeader(isByPass),
  //     })
  //     .pipe(
  //       takeWhile((): boolean => this._isOnline()),
  //       catchError((err) => {
  //         return err;
  //       }),
  //       map((res: any) => {
  //         if (res["token"]) {
  //           localStorage.setItem(this.constant.ACCESS_TOKEN, res.token);
  //         }
  //         return res;
  //       })
  //     );
  // }

  downLoadFile(data: any, type: string, filename: string, fileExe: string) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename + fileExe;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  postImage(request: Request) {
    return this.http
      .post<any>(`${this.BASE_URL + "" + request.path}`, request.data, {
        headers: this.getHeaderImage(request.isAuth),
      })
      .pipe(
        takeWhile((): boolean => this._isOnline()),
        catchError((err) => {
          return err;
        }),
        map((res: any) => {
          return res;
        }),
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  getHeader(isByPass = true): HttpHeaders {
    const currentTimeZone = new Date()
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];
    const version = "1";
    let token = "";
    if (!isByPass) {
      token = this.authService.getToken();
    }
    let header: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    header = header.append("timezone", currentTimeZone);
    header = header.append("Api-Version", version);
    if (!isByPass) {
      // header = header.append("Authentication", token);
      //if (this.authService.isAuthenticated()) {
      header = header.append("TOKEN", token);
      // }
    }

    return header;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  getHeaderImage(isByPass = true): HttpHeaders {
    const currentTimeZone = new Date()
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];
    const version = "1";
    let token = "";
    if (!isByPass) {
      token = this.authService.getToken();
    }
    let header: HttpHeaders = new HttpHeaders({
      "Content-Type": "multipart/form-data;",
      Accept: "application/json, text/plain, */*",
    });
    header = header.append("timezone", currentTimeZone);
    header = header.append("Api-Version", version);
    if (!isByPass) {
      // header = header.append("Authentication", token);
      //if (this.authService.isAuthenticated()) {
      header = header.append("TOKEN", token);
      // }
    }

    return header;
  }

  handleError(error) {
    if (error["error"] != undefined) {
      ///this.spinner.hide();
      // this.toastrService.error(error['error']['status']['description']); TODO Implemnet This
    }
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // this.toastrService.error(error['error']['error']);
      // client-side error
      errorMessage = error; //`Error: ${error.error.message}`;
    } else {
      // this.toastrService.error(error['error']['error']);
      // server-side error
      errorMessage = error; //`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  private _isOnline(): boolean {
    return this._networkService.isOnline;
  }
  public _headerInit(): HttpHeaders {
    let headers: any = new HttpHeaders();
    if (window.localStorage.getItem(this.constant.ACCESS_TOKEN) != null) {
      headers = headers.append(
        "TOKEN",
        window.localStorage.getItem(this.constant.ACCESS_TOKEN)
      );
    }
    return headers;
  }
}
