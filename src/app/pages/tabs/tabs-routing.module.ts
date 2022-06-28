import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guard/auth.guard";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuard],
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
          import("../home/profile/view-profile/view-profile.module").then(
            (m) => m.ViewProfilePageModule
          ),
      },
      {
        path: "profile-edit",
        loadChildren: () =>
          import("../home/profiles/fan/edit-profile/edit-profile.module").then(
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
