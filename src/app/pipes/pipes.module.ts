import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HumanReadablePipe } from "./humanReadable/human-readable.pipe";
import { ProfilePipe } from "./profile/profile.pipe";
@NgModule({
  declarations: [HumanReadablePipe, ProfilePipe],
  exports: [HumanReadablePipe, ProfilePipe],
  imports: [CommonModule],
})
export class PipesModule {}
