import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BubbleScreenPageRoutingModule } from "./bubble-screen-routing.module";

import { BubbleScreenPage } from "./bubble-screen.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BubbleScreenPageRoutingModule,
    PipesModule,
  ],
  declarations: [BubbleScreenPage],
})
export class BubbleScreenPageModule {}
