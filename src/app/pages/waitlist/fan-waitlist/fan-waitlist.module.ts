import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FanWaitlistPageRoutingModule } from "./fan-waitlist-routing.module";

import { FanWaitlistPage } from "./fan-waitlist.page";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
const config: SocketIoConfig = { url: "http://localhost:7010", options: {} };
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocketIoModule.forRoot(config),
    FanWaitlistPageRoutingModule,
  ],
  declarations: [FanWaitlistPage],
})
export class FanWaitlistPageModule {}
