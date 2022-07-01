import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneMaskDirective } from "./common-directives/phone-mask.directive";
import { CharOnlyDirective } from "./common-directives/char-only.directive";

@NgModule({
  declarations: [PhoneMaskDirective, CharOnlyDirective],
  imports: [CommonModule],
  exports: [PhoneMaskDirective, CharOnlyDirective],
})
export class CommonDirectiveModule {}
