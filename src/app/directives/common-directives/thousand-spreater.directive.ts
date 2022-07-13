import { DecimalPipe } from "@angular/common";
import { Directive } from "@angular/core";
import { NgControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Directive({
  selector: "[appThousandSeparateDirective]",
  providers: [DecimalPipe],
})
export class ThousandSeparateDirective {
  private subscription: Subscription;
  constructor(private ngControl: NgControl, private decimal: DecimalPipe) {}
  ngOnInit() {
    const control = this.ngControl.control;
    if (control) {
      this.subscription = control.valueChanges
        .pipe(
          map((value) => {
            if (value) {
              const parts = value.toString().split(".");
              parts[0] = this.decimal.transform(parts[0].replace(/,/g, ""));
              return parts.join(".");
            }
          })
        )
        .subscribe((v) => control.patchValue(v, { emitEvent: false }));
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
