import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BubbleScreenPage } from './bubble-screen.page';

const routes: Routes = [
  {
    path: '',
    component: BubbleScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BubbleScreenPageRoutingModule {}
