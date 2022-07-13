import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneMaskDirective } from "./common-directives/phone-mask.directive";
import { CharOnlyDirective } from "./common-directives/char-only.directive";
import { ThousandSeparateDirective } from "./common-directives/thousand-spreater.directive";

@NgModule({
  declarations: [
    PhoneMaskDirective,
    CharOnlyDirective,
    ThousandSeparateDirective,
  ],
  imports: [CommonModule],
  exports: [PhoneMaskDirective, CharOnlyDirective, ThousandSeparateDirective],
})
export class CommonDirectiveModule {}
