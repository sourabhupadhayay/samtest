import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { fanPageRoutingModule } from "./fan-routing.module";

import { fanPage } from "./fan.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, fanPageRoutingModule],
  declarations: [fanPage],
})
export class fanPageModule {}
