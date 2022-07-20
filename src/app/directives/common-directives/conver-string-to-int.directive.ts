import { Directive, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { map } from "rxjs/operators";

@Directive({
  selector: "[appConverStringToInt]",
})
export class ConvertStringToIntDirective implements OnInit {
  constructor(private ngControl: NgControl) {}

  ngOnInit(): void {
    const control = this.ngControl.control;

    if (!control) {
      return;
    }

    control.valueChanges
      .pipe(
        map((value) => {
          const pattern = /[A-Za-z ]/; //
          if (pattern.test(value)) {
            return;
          }

          return +value;
        })
      )
      .subscribe((v) => control.patchValue(v, { emitEvent: false }));
  }
}
