import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { fanPage } from "./fan.page";

const routes: Routes = [
  {
    path: ":id",
    component: fanPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class fanPageRoutingModule {}
