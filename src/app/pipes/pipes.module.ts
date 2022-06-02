import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HumanReadablePipe } from "./humanReadable/human-readable.pipe";
@NgModule({
  declarations: [HumanReadablePipe],
  exports: [HumanReadablePipe],
  imports: [CommonModule],
})
export class PipesModule {}
