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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
