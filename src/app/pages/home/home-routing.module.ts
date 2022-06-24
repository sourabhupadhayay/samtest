import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "home",
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
            path: "user",
            loadChildren: () =>
              import("./profiles/user/user.module").then(
                (m) => m.UserPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class homeRoutingModule {}
