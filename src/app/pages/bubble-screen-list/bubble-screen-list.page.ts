import { Location } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { IonModal, ModalController } from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { el } from "date-fns/locale";

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from "rxjs/operators";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService, userRole } from "src/app/providers/core.service";
import { DataService, Request, Response } from "src/app/providers/data.service";
import { CommonService } from "../../providers/common.service";
export type online = "true" | "false";
@Component({
  selector: "app-bubble-screen-list",
  templateUrl: "./bubble-screen-list.page.html",
  styleUrls: ["./bubble-screen-list.page.scss"],
})
export class BubbleScreenListPage implements OnInit {
  @ViewChild("popover") popover;
  @ViewChild(IonModal) modal: IonModal;
  selectedIndex: string = "All";
  athleteList: any[] = [];
  audio = new Audio();
  searchControl: FormControl = new FormControl("");
  categoriesSearchControl: FormControl = new FormControl();
  pageNumber: number = 0;
  totalElements: number = 0;
  isScrollDisabled: boolean = false;
  nameInitials: string;
  athleteListstatus:any;
  online: string;
  selection:any="All";
  sportCategories: any;
  showSelectedCategoriesInDetail : boolean = false;
  selectedCategories: any[] = [];
  teams: any[] = [];
  userRole: any;
  selectedTeams : any[] = [];
  showSportCategories : boolean = true;
  allAthletes : boolean = false;
  onlineAthletes : boolean = false;
  offlineAthletes : boolean = false;
  allSportsAthletes : boolean = false;
  isOnline : boolean = false;
  teamObj : any = {};
  athleteCount: any;
  
  constructor(
    private apiService: DataService,
    private coreService: CoreService,
    private constant: ConstantService,
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private cd:ChangeDetectorRef,
    public modalCtrl: ModalController,
    public platform : Platform
  ) {}
  isOpen = false;
  ngOnInit() {
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
    this.getAthletes();
    this.getAthleteCounts();
    this.getSubCategoriesList();
    this.searchAthlete();
    // this.getAuthPublicInfo();
    this.serachListFromCategories();
  }

  getAthleteCounts() {
    let request: Request = {
      path: "auth/dashboard/statistics/ATHLETE",
      isAuth: false,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      this.athleteCount = response?.data;
    });
  }

  async resetFilters() {
    this.allAthletes = false;
    this.onlineAthletes = false;
    this.offlineAthletes = false;
    this.selectedTeams = [];
    this.selectedCategories = [];
    this.selectedIndex = "All";
    await this.showHideContent();
    // this.getSubCategoriesList();
    this.categoriesSearchControl.reset();
  }

  getAuthPublicInfo() {
    let request: Request = {
      path: "auth/configuration/publicInfo",
      isAuth: false,
    };
    this.apiService.get(request).subscribe((response: Response) => {
      this.sportCategories = response.data.sportCategories;
    });
  }

  async getSelectedCategoryName(category:string) {
    this.selectedCategories = [];
    this.selectedTeams = [];
    await this.selectedCategories.push(category);
    this.categoriesSearchControl.reset();
    this.getSubCategoriesList();
    this.showSportCategories = false;
  }

  showHideContent() {
    this.sportCategories = [];
    this.selectedCategories = [];
    this.selectedTeams = [];
    this.getSubCategoriesList();
    this.showSportCategories = true;
    this.showSelectedCategoriesInDetail = false;
  }

  getSubCategoriesList() {
    let request: Request = {
      path: "auth/users/categories",
      data: {
       filter: {
        categories: this.selectedCategories,
        userRole: "ATHLETE",
        search: this.categoriesSearchControl.value,
       },
       sort: {
        orderBy: "ASC",
        sortBy: "FIRST_NAME"
       }
      },
      isAuth: true,
    };
    
      this.coreService.presentLoader(this.constant.WAIT);
      this.apiService.post(request).subscribe((response: Response) => {
        this.coreService.dismissLoader();
        if (response["status"]["code"] === this.constant.STATUS_OK) {
          this.sportCategories = response.data;
          this.teams = response.data[0]?.teamNames;
          this.teamObj = {};
          this.teamObj = this.teams;
          this.teamObj = this.teamObj.map((e) => {
            return { teamName: e , checked:false};
        });
          if(this.selectedCategories.length!=0) {
            this.showSelectedCategoriesInDetail= true;
          }
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
  }
  cancel() {
    this.modal.dismiss();
    this.selectedCategories = [];
    this.selectedTeams = [];
    this.selectedIndex = "All";
    this.onlineAthletes = false;
    this.offlineAthletes =  false;
    this.showHideContent();
    this.getSubCategoriesList();
    this.getAthletes();
  }
  selectTeams(team:any) {
    if(this.selectedTeams.includes(team)) {
      this.selectedTeams = this.selectedTeams.filter((value)=>value!=team);
    } else {
      this.selectedTeams.push(team)
    }
    // console.log("teamArr ",this.selectedTeams)
  }

  getFilterInputs(checked:any,value:string) {
    if(checked.detail.checked) {
      this.teamObj.forEach((element,index) => {
        this.teamObj[index]['checked']= true;
      });
    } else {
      this.teamObj.forEach((element,index) => {
        this.teamObj[index]['checked']= false;
      });
    }
    if(checked.detail.checked) {
      this.selectedCategories.push(value)
    } else {
      this.selectedCategories = [];
    }
    console.log("selected team",checked.detail.checked,value);
    console.log("selected category",this.selectedCategories);
  }

  onclick_cancel(): void {
    this.modalCtrl.dismiss();
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

  serachListFromCategories() {
    this.categoriesSearchControl.valueChanges
    .pipe(distinctUntilChanged(), debounceTime(1000))
    .subscribe((value) => {
      this.getSubCategoriesList();
    });
  }

  goBack() {
    //this.location.back();
    this.router.navigate(["/bubble-screen"]);
    this.selectedCategories = [];
    this.selectedTeams = [];
    this.isOnline = false;
    this.getAthletes();
  }

  getCategoriesData() {
    console.log("segment ",this.selectedIndex);
    this.allAthletes = false;
    this.onlineAthletes = false;
    this.offlineAthletes = false;
    this.selectedTeams = [];
    this.selectedCategories = [];
    this.categoriesSearchControl.reset();
  }

  getAthletes() {
    console.log("innn ")
    let request: Request = {
      path: "auth/users/manage/filter",
      data: {
        filter: {
          // roles: ["ATHLETE"],
          categories : this.selectedCategories,
          teamNames : this.selectedTeams,
          userRole : "ATHLETE",
          search: this.searchControl.value,
          userStatuses: [ "ACTIVE" ]
          // online: this.isOnline
        },
        page: {
          pageLimit: 30,
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
        this.athleteList.forEach((element, index) => {
          this.athleteList[index][
            "nameInitials"
          ] = this.commonService.getInitials(element.fullName);
        });
        this.totalElements = response.data.totalElements;
      } else {
        this.coreService.showToastMessage(
          response["status"]["description"],
          this.coreService.TOAST_ERROR
        );
      }
    });
  }
  checkValue(e:boolean){
    let data;
    // let myBool = (e.detail.value === 'true');
    // if(e.detail.value=="true"){
    // e.detail.value= Boolean("true");
    // }
     this.cd.detectChanges();
  
  
       data={
        userRole: "ATHLETE",
        online:e,
        userStatuses: [ "ACTIVE" ]
      }
    

    let request: Request = {
      path: "auth/users/manage/filter",
      data: {
        filter: data
        ,
        page: {
          pageLimit: 30,
          pageNumber: 0,
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
      this.athleteList = response.data.content;
       this.athleteList.forEach((element, index) => {
          this.athleteList[index][
            "nameInitials"
          ] = this.commonService.getInitials(element.fullName);
        });
      this.coreService.dismissLoader();
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
      this.router.navigate(["/profile/athlete/" + id],
      {queryParams: {listing: 'true' }});

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

  sortFilters() {
    console.log("sel catt ",this.selectedCategories)
    if(this.selectedCategories.length == 1 && this.selectedCategories.includes('ALL')) 
    {
     this.selectedTeams = [];
     this.selectedCategories = [];
     this.pageNumber = 0;
     this.getAthletes();
    }
    if(this.selectedCategories.length == 1 && this.selectedCategories.includes('ONLINE')) {
      this.isOnline=true;
      this.selectedTeams = [];
      this.selectedCategories = [];
      this.pageNumber = 0;
      this.checkValue(true);
    }
    if(this.selectedCategories.length == 1 && this.selectedCategories.includes('OFFLINE')) {
      this.isOnline = false;
      this.selectedTeams = [];
      this.selectedCategories = [];
      this.pageNumber = 0;
      this.checkValue(false);
    }
  }

 async applyFilters() {
    console.log("cat ",this.selectedCategories);
    console.log("teams ",this.selectedTeams);
    if(this.selectedIndex == 'Sports') {
      await this.getAthletes();
      this.modal?.dismiss();
    }else {
      await this.sortFilters();
      this.modal?.dismiss();
    }
  }
}
