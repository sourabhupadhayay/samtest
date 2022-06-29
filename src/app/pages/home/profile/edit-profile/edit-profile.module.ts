import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EditProfilePageRoutingModule } from "./edit-profile-routing.module";

import { EditProfilePage } from "./edit-profile.page";
import { CommonDirectiveModule } from "src/app/directives/common-directive.module";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    ReactiveFormsModule,
    CommonDirectiveModule,
    PipesModule,
  ],
  declarations: [EditProfilePage],
})
export class EditProfilePageModule {}
