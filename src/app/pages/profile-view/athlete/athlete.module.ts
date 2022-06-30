import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AthletePageRoutingModule } from "./athlete-routing.module";

import { AthletePage } from "./athlete.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthletePageRoutingModule,
    PipesModule,
  ],
  declarations: [AthletePage],
})
export class AthletePageModule {}
