import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AthleteWaitlistPageRoutingModule } from "./athlete-waitlist-routing.module";
import { AthleteWaitlistPage } from "./athlete-waitlist.page";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteWaitlistPageRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  declarations: [AthleteWaitlistPage],
})
export class AthleteWaitlistPageModule {}
