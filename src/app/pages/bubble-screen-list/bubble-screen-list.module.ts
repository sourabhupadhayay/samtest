import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BubbleScreenListPageRoutingModule } from "./bubble-screen-list-routing.module";

import { BubbleScreenListPage } from "./bubble-screen-list.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BubbleScreenListPageRoutingModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  declarations: [BubbleScreenListPage],
})
export class BubbleScreenListPageModule {}
