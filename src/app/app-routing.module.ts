import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
