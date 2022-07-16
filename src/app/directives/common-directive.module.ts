import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneMaskDirective } from "./common-directives/phone-mask.directive";
import { CharOnlyDirective } from "./common-directives/char-only.directive";
import { ThousandSeparateDirective } from "./common-directives/thousand-spreater.directive";
import { ConvertStringToIntDirective } from "./common-directives/conver-string-to-int.directive";

@NgModule({
  declarations: [
    PhoneMaskDirective,
    CharOnlyDirective,
    ThousandSeparateDirective,
    ConvertStringToIntDirective,
  ],
  imports: [CommonModule],
  exports: [
    PhoneMaskDirective,
    CharOnlyDirective,
    ThousandSeparateDirective,
    ConvertStringToIntDirective,
  ],
})
export class CommonDirectiveModule {}
