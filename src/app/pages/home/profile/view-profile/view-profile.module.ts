import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ViewProfilePageRoutingModule } from "./view-profile-routing.module";

import { ViewProfilePage } from "./view-profile.page";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProfilePageRoutingModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [ViewProfilePage, ChangePasswordComponent],
})
export class ViewProfilePageModule {}
