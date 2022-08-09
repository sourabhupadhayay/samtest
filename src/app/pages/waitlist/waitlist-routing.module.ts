import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallComponent } from "./call/call.component";

import { IncomingCallComponent } from "./incoming-call/incoming-call.component";

import { WaitlistPage } from "./waitlist.page";

const routes: Routes = [
  {
    path: "",
    component: WaitlistPage,
  },
  {
    path: "incoming-call",
    component: IncomingCallComponent,
  },
  {
    path: "call",
    component: CallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitlistPageRoutingModule {}
