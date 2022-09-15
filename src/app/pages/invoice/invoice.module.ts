import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicePageRoutingModule } from './invoice-routing.module';

import { InvoicePage } from './invoice.page';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicePageRoutingModule
  ],
  declarations: [InvoicePage, TermsOfServiceComponent]
})
export class InvoicePageModule {}
