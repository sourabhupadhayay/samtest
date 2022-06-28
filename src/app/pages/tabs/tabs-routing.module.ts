import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home-page/home-page.module").then(
            (m) => m.HomePagePageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../home/profiles/fan/view-profile/view-profile.module").then(
            (m) => m.ViewProfilePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
