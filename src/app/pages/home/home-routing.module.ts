import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "home",
    canActivate: [AuthGuard],
    children: [
      {
        path: "profile",
        children: [
          {
            path: "athlete",
            loadChildren: () =>
              import("./profiles/athlete/athlete.module").then(
                (m) => m.AthletePageModule
              ),
          },
          {
            path: "fan",
            loadChildren: () =>
              import("./profiles/fan/fan.module").then((m) => m.fanPageModule),
          },
        ],
      },
    ],
  },
  {
    path: "view-profile",
    loadChildren: () =>
      import("./view-profile/view-profile.module").then(
        (m) => m.ViewProfilePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class homeRoutingModule {}
