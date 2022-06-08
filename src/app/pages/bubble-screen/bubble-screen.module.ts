import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BubbleScreenPageRoutingModule } from './bubble-screen-routing.module';

import { BubbleScreenPage } from './bubble-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BubbleScreenPageRoutingModule
  ],
  declarations: [BubbleScreenPage]
})
export class BubbleScreenPageModule {}
