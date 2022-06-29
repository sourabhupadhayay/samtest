import { Pipe, PipeTransform } from "@angular/core";
import { configuration } from "../../configuration";

@Pipe({
  name: "profile",
})
export class ProfilePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const slug = value.split("//");
    if (slug[0] !== "https") {
      return (
        configuration.BASE_URL +
        "auth/file/view?fileKey=" +
        encodeURIComponent(value)
      );
    } else {
      return value;
    }
  }
}
