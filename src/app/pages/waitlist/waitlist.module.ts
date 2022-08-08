import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WaitlistPageRoutingModule } from "./waitlist-routing.module";

import { WaitlistPage } from "./waitlist.page";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { FanWaitlistPage } from "./fan-waitlist/fan-waitlist.page";
import { AthleteWaitlistPage } from "./athlete-waitlist/athlete-waitlist.page";
const config: SocketIoConfig = { url: "http://localhost:7010", options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitlistPageRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  declarations: [WaitlistPage, FanWaitlistPage, AthleteWaitlistPage],
})
export class WaitlistPageModule {}
