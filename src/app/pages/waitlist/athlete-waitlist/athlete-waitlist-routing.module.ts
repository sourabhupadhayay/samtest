import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleteWaitlistPage } from './athlete-waitlist.page';

const routes: Routes = [
  {
    path: '',
    component: AthleteWaitlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthleteWaitlistPageRoutingModule {}
