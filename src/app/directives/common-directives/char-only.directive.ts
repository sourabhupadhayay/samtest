import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appCharOnly]",
})
export class CharOnlyDirective {
  constructor() {}
  @HostListener("keypress", ["$event"])
  onInput(event: any) {
    const pattern = /[A-Za-z ]/; //
    let inputChar = String.fromCharCode(
      event.which ? event.which : event.keyCode
    );

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }
}
