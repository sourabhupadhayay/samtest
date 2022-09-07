import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthModuleModule } from "./pages/auth-module/auth-module.module";
import { ErrorInterceptor } from "./interceptor/error.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { HomeModule } from "./pages/home/home.module";
// import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

// const config: SocketIoConfig = {
//   url: "http://localhost:7010",
//   options: {},
// };
// const config: SocketIoConfig = {
//   url: "https://dev-apis.bubbleapp.com",
//   options: {
//     path: "/core/greeting",
//   },
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthModuleModule,
    BrowserAnimationsModule,
    MatIconModule,
    HomeModule,
    // SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
