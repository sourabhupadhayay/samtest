import { Location } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs/operators";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";

@Component({
  selector: "app-bubble-screen-list",
  templateUrl: "./bubble-screen-list.page.html",
  styleUrls: ["./bubble-screen-list.page.scss"],
})
export class BubbleScreenListPage implements OnInit {
  @ViewChild("popover") popover;
  athleteList: any[] = [];
  audio = new Audio();
  searchControl: FormControl = new FormControl("");
  pageNumber: number = 0;
  totalElements: number = 0;
  isScrollDisabled: boolean = false;
  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    private router: Router,
    private location: Location
  ) {}
  isOpen = false;
  ngOnInit() {
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
    this.getAthletes();
    this.searchAthlete();
  }
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  searchAthlete() {
    this.searchControl.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.pageNumber = 0;
        this.isScrollDisabled = false;
        this.totalElements = 0;
        console.log("working");
        this.searchControl.patchValue(value);
        this.getAthletes();
      });
  }

  goBack() {
    this.location.back();
  }

  getAthletes() {
    let request: Request = {
      path: "auth/users/manage/filter",
      data: {
        filter: {
          roles: ["ATHLETE"],

          search: this.searchControl.value,
        },
        page: {
          pageLimit: 10,
          pageNumber: this.pageNumber,
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME",
        },
      },
      isAuth: false,
    };
    this.coreService.presentLoader(this.constant.WAIT);
    this.apiService.post(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code == this.constant.STATUS_OK) {
        if (this.pageNumber == 0) {
          this.athleteList = response.data.content;
        } else {
          response.data.content.forEach((element) => {
            this.athleteList.push(element);
          });
        }

        this.totalElements = response.data.totalElements;
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }

  loadData(event) {
    this.pageNumber++;
    this.getAthletes();
    event.target.complete();

    if (this.totalElements <= this.athleteList.length) {
      console.log("disabled");
      this.isScrollDisabled = true;
    }
  }

  navigateToAthlete(id: string) {
    this.audio.play().then(() => {
      this.router.navigate(["/profile/athlete/" + id]);
    });
  }

  isShowingSeparator(index: number): boolean {
    if (
      this.athleteList[index].universityName !== "" &&
      this.athleteList[index].teamName !== ""
    ) {
      return true;
    } else {
      false;
    }
  }
}