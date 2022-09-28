import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CallComponent } from "./call/call.component";

import { IncomingCallComponent } from "./incoming-call/incoming-call.component";

import { WaitlistPage } from "./waitlist.page";

const routes: Routes = [
  {
    path: "event/:id",
    component: WaitlistPage,
  },
  {
    path: "incoming-call/:id",
    component: IncomingCallComponent,
  },
  {
    path: "call/:id",
    component: CallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitlistPageRoutingModule {}
