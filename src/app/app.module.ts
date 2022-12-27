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
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { NativeAudio } from "@awesome-cordova-plugins/native-audio/ngx";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from '../environments/environment';
import {ServiceWorkerModule } from'@angular/service-worker'
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    ServiceWorkerModule.register('combined-sw.js', {enabled: environment.production})
  ],
  providers: [
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    Badge
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
 
}
