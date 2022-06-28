import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "home",
    canActivate: [AuthGuard],
    children: [
      {
        path: "athlete/edit-profile",
        loadChildren: () =>
          import("./profiles/athlete/edit-profile/edit-profile.module").then(
            (m) => m.EditProfilePageModule
          ),
      },
      {
        path: "athlete/view-profile",
        loadChildren: () =>
          import("./profiles/athlete/view-profile/view-profile.module").then(
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
export class homeRoutingModule {}
