import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBookingPageRoutingModule } from './new-booking-routing.module';

import { NewBookingPage } from './new-booking.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CommonDirectiveModule } from 'src/app/directives/common-directive.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ReactiveFormsModule,
    CommonDirectiveModule,
    MatAutocompleteModule,
    MatInputModule,
    NewBookingPageRoutingModule
  ],
  declarations: [NewBookingPage]
})
export class NewBookingPageModule {}
