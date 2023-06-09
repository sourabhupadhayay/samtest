import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guard/auth.guard";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home-page/home-page.module").then(
            (m) => m.HomePagePageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../home/profile/view-profile/view-profile.module").then(
            (m) => m.ViewProfilePageModule
          ),
      },
      {
        path: "schedule",
        loadChildren: () =>
          import("../schedule/schedule.module").then(
            (m) => m.SchedulePageModule
          ),
      },
      {
        path: "help",
        loadChildren: () =>
          import("../help-section/help-section.module").then(
            (m) => m.HelpSectionPageModule
          ),
      },
      {
        path: "new-appereance",
        loadChildren: () =>
          import("../new-appereance-booking/new-appereance-booking.page").then(
            (m) => m.NewAppereanceBookingPage
          ),
      },
      {
        path: 'new-booking',
        loadChildren: () => import('./new-booking/new-booking.module').then( m => m.NewBookingPageModule)
      },
    ],
    
  },
  // {
  //   path: 'new-booking',
  //   loadChildren: () => import('./new-booking/new-booking.module').then( m => m.NewBookingPageModule)
  // },
  {
    path: 'appereance',
    loadChildren: () => import('./appereance-booking/appereance-booking.component').then( m => m.AppereanceBookingComponent)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
