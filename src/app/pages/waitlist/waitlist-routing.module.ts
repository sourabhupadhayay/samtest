import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FanWaitlistPage } from "./fan-waitlist/fan-waitlist.page";

import { WaitlistPage } from "./waitlist.page";

const routes: Routes = [
  {
    path: "",
    component: WaitlistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitlistPageRoutingModule {}
