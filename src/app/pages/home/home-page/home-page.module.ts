import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePagePageRoutingModule } from "./home-page-routing.module";

import { HomePagePage } from "./home-page.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    PipesModule,
  ],
  declarations: [HomePagePage],
})
export class HomePagePageModule {}
