import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadable'
})
export class HumanReadablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
