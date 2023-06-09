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
  {
    path: "profile",
    canActivate: [AuthGuard],
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
  {
    path: "welcome-screen",
    loadChildren: () =>
      import("./pages/welcome-screen/welcome-screen.module").then(
        (m) => m.WelcomeScreenPageModule
      ),
  },
  {
    path: "invoice",
    loadChildren: () =>
      import("./pages/invoice/invoice.module").then((m) => m.InvoicePageModule),
  },
  {
    path: "bid-payment",
    loadChildren: () =>
      import("./pages/profile-view/bid-payment/bid-payment.module").then(
        (m) => m.BidPaymentPageModule
      ),
  },

  {
    path: "waitlist",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/waitlist/waitlist.module").then(
        (m) => m.WaitlistPageModule
      ),
  },
  {
    path: "bubble-screen-list",
    loadChildren: () =>
      import("./pages/bubble-screen-list/bubble-screen-list.module").then(
        (m) => m.BubbleScreenListPageModule
      ),
  },
  {
    path: 'push-notification',
    loadChildren: () => import('./pages/push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  },
  {
    path: 'help-section',
    loadChildren: () => import('./pages/help-section/help-section.module').then( m => m.HelpSectionPageModule)
  },
  {
    path: 'new-appereance-booking',
    loadChildren: () => import('./pages/new-appereance-booking/new-appereance-booking.module').then( m => m.NewAppereanceBookingPageModule)
  },


 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}