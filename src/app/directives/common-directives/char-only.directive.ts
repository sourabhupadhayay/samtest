import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appCharOnly]",
})
export class CharOnlyDirective {
  constructor() {}
  removeNonNumerics = (str: string) => str.replace(/[0-9]/g, "");
  @HostListener("ionInput", ["$event"])
  onInput(event: any) {
    const pattern = /[A-Za-z ]/; //
    let inputChar = event.detail.data;

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input

      event.target.value = this.removeNonNumerics(event.target.value);
      return false;
    }
    return true;
  }
}
