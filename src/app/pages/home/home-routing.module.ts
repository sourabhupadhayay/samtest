import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { AuthGuard } from "src/app/guard/auth.guard";

const routes: Routes = [
  {
    path: "profile",
    canActivate: [AuthGuard],
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
          import("./profiles/user/user.module").then((m) => m.UserPageModule),
      },
    ],
  },
];
=======

const routes: Routes = [];
>>>>>>> 5790f4d (code refactoring)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class homeRoutingModule {}
