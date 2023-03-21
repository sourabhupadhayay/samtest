import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { format, parseISO } from "date-fns";
import { Subject, Subscription } from "rxjs";
import { ConstantService } from "./constant.service";

import { AuthenticationService } from "./authentication.service";
import { DataService, Request, Response } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public publicInfo: any;
  public $profileSubject: Subject<any> = new Subject();
  profileUrl: string = "";
  callingAthleteDetails: any | null = null;
  callingFanDetail: any | null = null;
  athleteEarning: any;
  badgeCount: number = 0;
  privacypolicy: any;
  termconditions: any;
  athleteEarnings: number = 0;
  voipToken: any;
  VideoCallAnswer: boolean = false;
  bidAmount : any = 0;
  fanEventType: "VIDEO" | "IN_PERSON" = "VIDEO";
  public $socketSubject: Subject<null> = new Subject();
  public $navigateSubject: Subject<null> = new Subject();
  constructor(
    private apiService: DataService,
    private constantService: ConstantService,
    public authenticationService: AuthenticationService
  ) {}

  public _calculateAge(birthday: Date) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getInitials(fullName: String): string {
    let trimmedName = fullName?.trim();
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
  formatDateTimeUpdated(value: string) {
    return format(parseISO(value), " MMM dd,yyyy");
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
  async getAthleteEarnings() {
    // let userRole: userRole = await this.core.getUserRoleFromStorage();
    if (this.authenticationService.isAuthenticated()) {
      let request: any = {
        path: "core/event/athlete/cash",
        isAuth: true,
      };
      this.apiService.get(request).subscribe((response: any) => {
        if (response.status.code === this.constantService.STATUS_OK) {
          this.athleteEarnings = response?.data?.totalEarning;
          console.log("athleteEarnings", this.athleteEarnings);

          this.athleteEarning = this.athleteEarnings;
        }
      });
    }
  }
  athleteOnlineOfflineStatus() {
    let request: Request = {
      path: "auth/users/manage/status/change/true",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: Response) => {});
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
  secondsToHms(seconds: number) {
    seconds = Number(seconds);

    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? "" : "  ") : "0";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "0";

    if (s < 10) {
      sDisplay = "0" + sDisplay;
    }

    return `0${mDisplay}: ${sDisplay}s`;
  }

  getBadgeNotificationCount() {
    let request: any = {
      path: "notification/notification/check/v2",
      isAuth: true,
    };
    this.apiService.get(request).subscribe((response: any) => {
      this.badgeCount = response.data.unreadCount;
      console.log("c ", this.badgeCount);
      return this.badgeCount;
    });
  }
  async privacy() {
    let request: any = {
      path: "auth/configuration/getPrivacyPolicy",
    };
    this.apiService.get(request).subscribe((response: any) => {
      this.privacypolicy = response.data;
      return this.privacypolicy;
    });
  }
  termcondition() {
    let request: Request = {
      path: "auth/configuration/getTermsAndCondition",
    };
    this.apiService.get(request).subscribe((response: any) => {
      this.termconditions = response.data;
      return this.termconditions;
    });
  }
   //////////////////////////////////////////// FOR EVENT SUBSCRIPTION ////////////////////////////////////////////
  /**
   * Subscribe to a topic and provide a single handler/observer.........
   * @param topic The name of the topic to subscribe to.
   * @param observer The observer or callback function to listen when changes are published.
   *
   * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
   */
  private channels: { [key: string]: Subject<any> } = {};
  subscribe(topic: string, observer: (_: any) => void): Subscription {
    if (!this.channels[topic]) {
      // You can also use ReplaySubject with one concequence
      this.channels[topic] = new Subject<any>();
    }
    return this.channels[topic].subscribe(observer);
  }
  /**
   * Publish some data to the subscribers of the given topic.
   * @param topic The name of the topic to emit data to.
   * @param data data in any format to pass on.
   */
  publish(topic: string, data?: any): void {
    const subject = this.channels[topic];
    if (!subject) {
      // Or you can create a new subject for future subscribers
      return;
    }
    subject.next(data);
  }
  /**
   * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
   * destroy the observable of the topic using this method.
   * @param topic The name of the topic to destroy.
   */
  destroy(topic: string): null {
    const subject = this.channels[topic];
    if (!subject) {
      return;
    }
    subject.complete();
    delete this.channels[topic];
  }
  
}
