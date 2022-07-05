import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appCharOnly]",
})
export class CharOnlyDirective {
  constructor() {}
  @HostListener("textInput", ["$event"])
  onInput(event: any) {
    var keyCode = event.data.charCodeAt(0);
    const pattern = /[A-Za-z ]/; //
    let inputChar = String.fromCharCode(keyCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }
}
