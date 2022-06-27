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
          import("../home-page/home-page.module").then(
            (m) => m.HomePagePageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../edit-profile/edit-profile.module").then(
            (m) => m.EditProfilePageModule
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
