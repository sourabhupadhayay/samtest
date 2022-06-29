import { Pipe, PipeTransform } from "@angular/core";
import { configuration } from "../../configuration";

@Pipe({
  name: "profile",
})
export class ProfilePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return (
      configuration.BASE_URL +
      "auth/file/view?fileKey=" +
      encodeURIComponent(value)
    );
  }
}
