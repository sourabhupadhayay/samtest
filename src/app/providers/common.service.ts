import { Injectable } from "@angular/core";
import { format, parseISO } from "date-fns";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public $profileSubject: Subject<any> = new Subject();
  profileUrl: string = "";

  constructor() {}

  public _calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getInitials(fullName: String): string {
    let trimmedName = fullName.trim();
    let splitName = trimmedName.split(" ");
    let firstName = splitName[0];
    let lastName = splitName[1];
    if (lastName) {
      return firstName[0] + lastName[0];
    } else {
      return firstName[0];
    }
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  formatDateTime(value: string) {
    return format(parseISO(value), " MMM dd,yyyy, hh:mm aaaaa'm'");
  }
  formatTime(value: string) {
    return format(parseISO(value), "HH:mm ");
  }

  getUserType(userRole: string[]): "athlete" | "fan" {
    let isAthlete = userRole.some((role) => role === "ATHLETE");
    if (isAthlete) {
      return "athlete";
    } else {
      return "fan";
    }
  }

  removeCommaFromString(value: string) {
    let converted = parseFloat(value.replace(/,/g, ""));

    return converted;
  }
  convertTimeToMinute(hour: string, min: string) {
    return Number(hour) * 60 + Number(min);
  }
}
