import { Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WaitlistPageRoutingModule } from "./waitlist-routing.module";
import { FanWaitlistPage } from "./fan-waitlist/fan-waitlist.page";
import { AthleteWaitlistPage } from "./athlete-waitlist/athlete-waitlist.page";
 import { IncomingCallComponent } from "./incoming-call/incoming-call.component";
import { PipesModule } from "src/app/pipes/pipes.module";
import { WaitlistPage } from "./waitlist.page";
import { CallComponent } from "./call/call.component";

// const config: SocketIoConfig = {
//   url: "http://localhost:7010/",
//   options: {},
// };

@NgModule({
 
  declarations: [
    WaitlistPage,
    FanWaitlistPage,
    AthleteWaitlistPage,
    IncomingCallComponent,
    CallComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitlistPageRoutingModule,
   PipesModule,  
  ]
  
})
export class WaitlistPageModule {}
