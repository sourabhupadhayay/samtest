import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthleteWaitlistPageRoutingModule } from './athlete-waitlist-routing.module';

import { AthleteWaitlistPage } from './athlete-waitlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthleteWaitlistPageRoutingModule
  ],
  declarations: [AthleteWaitlistPage]
})
export class AthleteWaitlistPageModule {}
