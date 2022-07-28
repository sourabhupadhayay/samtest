import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BubbleScreenListPage } from './bubble-screen-list.page';

const routes: Routes = [
  {
    path: '',
    component: BubbleScreenListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BubbleScreenListPageRoutingModule {}
