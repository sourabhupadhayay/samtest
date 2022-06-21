import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SignupDetailsPageRoutingModule } from "./signup-details-routing.module";

import { SignupDetailsPage } from "./signup-details.page";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupDetailsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupDetailsPage],
})
export class SignupDetailsPageModule {}
