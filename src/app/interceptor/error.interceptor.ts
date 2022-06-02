import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

// import { coreService } from "../providers/coreService";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() // private readonly coreService: coreService
  {}
  /***
   * description: http intercepter to handle API errors
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        console.log("error comes", err, request);
        console.log(
          "err.status",
          err.status,
          " err.statusText",
          err.statusText
        );
        // this.coreService.dismissLoader();
        // if (err.status === 401) {
        // } else {
        //   this.coreService.showToastMessage(
        //     '"Your session is expired."',
        //     this.coreService.TOAST_ERROR
        //   );
        // }
        return throwError(err);
      })
    );
  }
}
