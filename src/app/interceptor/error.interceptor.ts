import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { CoreService } from "../providers/core.service";
import { Storage } from "@capacitor/storage";
import { Router } from "@angular/router";

// import { coreService } from "../providers/coreService";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private coreService: CoreService, private router: Router) {} // private readonly coreService: coreService
  /***
   * description: http intercepter to handle API errors
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.coreService.dismissLoader();

        if (err.status === 401) {
          this.coreService.showToastMessage(
            '"Your session is expired."',
            this.coreService.TOAST_ERROR
          );
          localStorage.clear();
          Storage.clear();
          this.router.navigateByUrl("/auth/login");
        }
        return throwError(err);
      })
    );
  }
}
