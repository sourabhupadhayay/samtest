import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanWaitlistPageRoutingModule } from './fan-waitlist-routing.module';

import { FanWaitlistPage } from './fan-waitlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanWaitlistPageRoutingModule
  ],
  declarations: [FanWaitlistPage]
})
export class FanWaitlistPageModule {}
