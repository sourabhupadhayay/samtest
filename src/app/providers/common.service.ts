import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { format, parseISO } from "date-fns";
import { Subject } from "rxjs";
import { DataService, Request, Response } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public publicInfo: any;
  public $profileSubject: Subject<any> = new Subject();
  profileUrl: string = "";

  constructor(private apiService: DataService) {}

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
  getPublicInfo() {
    let request: Request = {
      path: "core/configuration/publicInfo",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      this.publicInfo = response.data;
    });
  }

  removeCommaFromString(value: string) {
    let converted = parseFloat(value.replace(/,/g, ""));

    return converted;
  }
  convertTimeToMinute(hour: string, min: string) {
    return Number(hour) * 60 + Number(min);
  }

  dateFormat(startDate: Date) {
    var countDownDate = new Date(startDate).getTime();
    let days;
    let hours;
    let minutes;
    let seconds;
    let now;
    let timeleft;

    now = new Date().getTime();
    timeleft = countDownDate - now;
    days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    let counter;
    if (days >= 1) {
      counter = {
        days: days,
        title_days: "days",
        hours: hours,
        title_hours: "hours",
        minutes: minutes,
        title_min: "mins",
        sec: seconds,
        title_sec: "S",
      };
    } else {
      if (days < 1 && hours < 1) {
        counter = {
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S",
        };
      } else {
        counter = {
          hours: hours,
          title_hours: "hours",
          minutes: minutes,
          title_min: "mins",
          sec: seconds,
          title_sec: "S",
        };
      }
    }

    return counter;
  }
}
