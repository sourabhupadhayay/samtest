import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "bubble-screen",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/auth-module/login/login.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'bubble-screen',
    loadChildren: () => import('./pages/bubble-screen/bubble-screen.module').then( m => m.BubbleScreenPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/auth-module/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
