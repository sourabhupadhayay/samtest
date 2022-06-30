import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "bubble-screen",
    pathMatch: "full",
  },
  {
    path: "bubble-screen",
    loadChildren: () =>
      import("./pages/bubble-screen/bubble-screen.module").then(
        (m) => m.BubbleScreenPageModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth-module/auth-module.module").then(
        (m) => m.AuthModuleModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "profile",
    children: [
      {
        path: "athlete",
        loadChildren: () =>
          import("./pages/profile-view/athlete/athlete.module").then(
            (m) => m.AthletePageModule
          ),
      },
      {
        path: "fan",
        loadChildren: () =>
          import("./pages/profile-view/fan/fan.module").then(
            (m) => m.fanPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
