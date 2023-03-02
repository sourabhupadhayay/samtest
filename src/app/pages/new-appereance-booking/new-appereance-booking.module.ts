import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAppereanceBookingPageRoutingModule } from './new-appereance-booking-routing.module';

import { NewAppereanceBookingPage } from './new-appereance-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAppereanceBookingPageRoutingModule
  ],
  declarations: [NewAppereanceBookingPage]
})
export class NewAppereanceBookingPageModule {}
