import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "home",
    canActivate: [AuthGuard],
    children: [
      {
        path: "user/edit-profile",
        loadChildren: () =>
          import("./profile/edit-profile/edit-profile.module").then(
            (m) => m.EditProfilePageModule
          ),
      },
      {
        path: "edit-profile",
        loadChildren: () =>
          import("./edit-profile/edit-profile.module").then(
            (m) => m.EditProfilePageModule
          ),
      },
    ],
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./profile/edit-profile/edit-profile.module").then(
        (m) => m.EditProfilePageModule
      ),
  },
  {
    path: "view-profile",
    loadChildren: () =>
      import("./profile/view-profile/view-profile.module").then(
        (m) => m.ViewProfilePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class homeRoutingModule {}
