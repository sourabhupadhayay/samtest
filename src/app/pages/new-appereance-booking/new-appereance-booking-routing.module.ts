import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAppereanceBookingPage } from './new-appereance-booking.page';

const routes: Routes = [
  {
    path: '',
    component: NewAppereanceBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAppereanceBookingPageRoutingModule {}
