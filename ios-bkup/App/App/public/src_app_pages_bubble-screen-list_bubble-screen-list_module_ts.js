(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bubble-screen-list_bubble-screen-list_module_ts"],{

/***/ 87800:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/bubble-screen-list/bubble-screen-list-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BubbleScreenListPageRoutingModule": () => (/* binding */ BubbleScreenListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bubble_screen_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble-screen-list.page */ 14606);




const routes = [{
  path: '',
  component: _bubble_screen_list_page__WEBPACK_IMPORTED_MODULE_0__.BubbleScreenListPage
}];
let BubbleScreenListPageRoutingModule = class BubbleScreenListPageRoutingModule {};
BubbleScreenListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BubbleScreenListPageRoutingModule);


/***/ }),

/***/ 53140:
/*!***********************************************************************!*\
  !*** ./src/app/pages/bubble-screen-list/bubble-screen-list.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BubbleScreenListPageModule": () => (/* binding */ BubbleScreenListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _bubble_screen_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble-screen-list-routing.module */ 87800);
/* harmony import */ var _bubble_screen_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble-screen-list.page */ 14606);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 35503);








let BubbleScreenListPageModule = class BubbleScreenListPageModule {};
BubbleScreenListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _bubble_screen_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.BubbleScreenListPageRoutingModule, src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
  declarations: [_bubble_screen_list_page__WEBPACK_IMPORTED_MODULE_1__.BubbleScreenListPage]
})], BubbleScreenListPageModule);


/***/ }),

/***/ 14606:
/*!*********************************************************************!*\
  !*** ./src/app/pages/bubble-screen-list/bubble-screen-list.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BubbleScreenListPage": () => (/* binding */ BubbleScreenListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bubble_screen_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble-screen-list.page.html?ngResource */ 51740);
/* harmony import */ var _bubble_screen_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble-screen-list.page.scss?ngResource */ 37830);
/* harmony import */ var _bubble_screen_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bubble_screen_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/constant.service */ 52764);
/* harmony import */ var src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/core.service */ 53003);
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.service */ 93142);
/* harmony import */ var _providers_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/common.service */ 33507);












let BubbleScreenListPage = class BubbleScreenListPage {
  constructor(apiService, coreService, constant, router, location, commonService, cd) {
    this.apiService = apiService;
    this.coreService = coreService;
    this.constant = constant;
    this.router = router;
    this.location = location;
    this.commonService = commonService;
    this.cd = cd;
    this.athleteList = [];
    this.audio = new Audio();
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("");
    this.pageNumber = 0;
    this.totalElements = 0;
    this.isScrollDisabled = false;
    this.selection = "All";
    this.isOpen = false;
  }
  ngOnInit() {
    this.audio.src = "assets/audio/bubble-bursting.mp3";
    this.audio.load();
    this.getAthletes();
    this.searchAthlete();
  }
  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }
  searchAthlete() {
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => value.trim()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(value => {
      this.pageNumber = 0;
      this.isScrollDisabled = false;
      this.totalElements = 0;
      console.log("working");
      this.searchControl.patchValue(value);
      this.getAthletes();
    });
  }
  goBack() {
    //this.location.back();
    this.router.navigate(["/bubble-screen"]);
  }
  getAthletes() {
    let request = {
      path: "auth/users/manage/filter",
      data: {
        filter: {
          roles: ["ATHLETE"],
          search: this.searchControl.value
        },
        page: {
          pageLimit: 30,
          pageNumber: this.pageNumber
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME"
        }
      },
      isAuth: false
    };
    this.coreService.presentLoader(this.constant.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.coreService.dismissLoader();
      if (response.status.code == this.constant.STATUS_OK) {
        if (this.pageNumber == 0) {
          this.athleteList = response.data.content;
        } else {
          response.data.content.forEach(element => {
            this.athleteList.push(element);
          });
        }
        this.athleteList.forEach((element, index) => {
          this.athleteList[index]["nameInitials"] = this.commonService.getInitials(element.fullName);
        });
        this.totalElements = response.data.totalElements;
      } else {
        this.coreService.showToastMessage(response["status"]["description"], this.coreService.TOAST_ERROR);
      }
    });
  }
  checkValue(e) {
    let data;
    let myBool = e.detail.value === 'true';
    if (e.detail.value == "true") {
      e.detail.value = Boolean("true");
    }
    this.cd.detectChanges();
    if (e.detail.value != "All") {
      data = {
        roles: ["ATHLETE"],
        online: myBool,
        search: this.searchControl.value
      };
    } else {
      data = {
        roles: ["ATHLETE"],
        search: this.searchControl.value
      };
    }
    let request = {
      path: "auth/users/manage/filter",
      data: {
        filter: data,
        page: {
          pageLimit: 30,
          pageNumber: 0
        },
        sort: {
          orderBy: "ASC",
          sortBy: "FIRST_NAME"
        }
      },
      isAuth: false
    };
    this.coreService.presentLoader(this.constant.WAIT);
    this.apiService.post(request).subscribe(response => {
      this.athleteList = response.data.content;
      this.athleteList.forEach((element, index) => {
        this.athleteList[index]["nameInitials"] = this.commonService.getInitials(element.fullName);
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
  navigateToAthlete(id) {
    this.audio.play().then(() => {
      this.router.navigate(["/profile/athlete/" + id], {
        queryParams: {
          listing: 'true'
        }
      });
    });
  }
  isShowingSeparator(index) {
    if (this.athleteList[index].universityName !== "" && this.athleteList[index].teamName !== "") {
      return true;
    } else {
      false;
    }
  }
};
BubbleScreenListPage.ctorParameters = () => [{
  type: src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
}, {
  type: src_app_providers_core_service__WEBPACK_IMPORTED_MODULE_3__.CoreService
}, {
  type: src_app_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__.ConstantService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
}, {
  type: _providers_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
}];
BubbleScreenListPage.propDecorators = {
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: ["popover"]
  }]
};
BubbleScreenListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-bubble-screen-list",
  template: _bubble_screen_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_bubble_screen_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BubbleScreenListPage);


/***/ }),

/***/ 24443:
/*!************************************************************!*\
  !*** ./src/app/pipes/humanReadable/human-readable.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HumanReadablePipe": () => (/* binding */ HumanReadablePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let HumanReadablePipe = class HumanReadablePipe {
  transform(value, ...args) {
    return null;
  }
};
HumanReadablePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'humanReadable'
})], HumanReadablePipe);


/***/ }),

/***/ 35503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humanReadable/human-readable.pipe */ 24443);
/* harmony import */ var _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.pipe */ 10133);





let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__.HumanReadablePipe, _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePipe],
  exports: [_humanReadable_human_readable_pipe__WEBPACK_IMPORTED_MODULE_0__.HumanReadablePipe, _profile_profile_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
})], PipesModule);


/***/ }),

/***/ 10133:
/*!***********************************************!*\
  !*** ./src/app/pipes/profile/profile.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePipe": () => (/* binding */ ProfilePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configuration */ 78345);



let ProfilePipe = class ProfilePipe {
  transform(value, ...args) {
    if (!value) {
      return;
    }
    const slug = value.split("//");
    if (slug[0] !== "https:") {
      return _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration.BASE_URL + "auth/file/view?fileKey=" + encodeURIComponent(value);
    } else {
      return value;
    }
  }
};
ProfilePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: "profile"
})], ProfilePipe);


/***/ }),

/***/ 37830:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bubble-screen-list/bubble-screen-list.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-content {\n  position: relative;\n  --background: url('background-new.png') no-repeat center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: sticky;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: #2586ba;\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.5rem;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content .search-bar {\n  position: sticky;\n  top: 68px;\n  background: #2586ba;\n  z-index: 99;\n  margin: 0;\n  padding: 10px 15px 10px;\n}\nion-content .search-bar ion-searchbar {\n  width: 100%;\n  color: var(--black-clr);\n  --background: rgba(var(--white-bg-rgb), 0.7);\n  height: 36px;\n  background: transparent;\n  padding: 10px 15px;\n  --padding-start: 0;\n  --padding-end: 0;\n  border-radius: 0;\n  margin: 0;\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n}\nion-content .search-bar ion-searchbar .searchbar-input {\n  font-size: 0.875rem;\n}\nion-content ion-grid.bubble-list {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 9;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details {\n  text-align: center;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img {\n  cursor: pointer;\n  position: relative;\n  height: 144px;\n  width: 144px;\n  border-radius: 144px;\n  text-align: center;\n  margin: 8px auto;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img .img-set {\n  height: 144px;\n  width: 144px;\n  border-radius: 144px;\n  overflow: hidden;\n  border: 2px solid var(--black-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img .img-set img {\n  width: 100%;\n  height: auto;\n  border-radius: 144px;\n  min-height: 144px;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status {\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  position: absolute;\n  top: 11px;\n  right: 11px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.online {\n  background: var(--online);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.busy {\n  background: #ff2929;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.offline {\n  background: var(--offline);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info {\n  border-radius: 9px;\n  padding: 5px 10px;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info h5 {\n  margin: 0 0 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--white-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info p {\n  margin: 0;\n  font-size: 0.625rem;\n  font-weight: 400;\n  color: var(--white-clr);\n}\nion-content .bg-images {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background: url('background-new.png') no-repeat center;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n}\nion-content .bg-bubble .dots-bubble {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\nion-content .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n}\nion-content .bg-bubble .dots:nth-child(1) {\n  width: 30px;\n  height: 30px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(3) {\n  width: 40px;\n  height: 40px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(4) {\n  width: 45px;\n  height: 45px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(7) {\n  width: 50px;\n  height: 50px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(10) {\n  width: 40px;\n  height: 40px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(19) {\n  width: 40px;\n  height: 40px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.text-center {\n  text-align: center;\n}\n\n.inital {\n  width: 100%;\n  height: 100%;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  object-position: center;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 2.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 2px solid var(--black-clr);\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/bubble-screen-list/bubble-screen-list.page.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,wDAAA;EACA,sBAAA;AACF;AAAE;EACE,gBAAA;EACA,MAAA;EACA,WAAA;AAEJ;AADI;EAME,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;AAFN;AARM;EACE,eAAA;EACA,uBAAA;EACA,iBAAA;AAUR;AAFM;EACE,eAAA;AAIR;AACE;EACE,gBAAA;EACA,SAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;AACJ;AAAI;EACE,WAAA;EACA,uBAAA;EACA,4CAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,SAAA;EACA,uBAAA;EACA,qBAAA;AAEN;AADM;EACE,mBAAA;AAGR;AAEE;EACE,SAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;AAAJ;AAGQ;EACE,kBAAA;AADV;AAEU;EACE,eAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;AAAZ;AACY;EACE,aAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,kCAAA;AACd;AAAc;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;AAEhB;AACY;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,qBAAA;EACA,WAAA;EACA,kCAAA;AACd;AAAc;EACE,yBAAA;AAEhB;AAAc;EACE,mBAAA;AAEhB;AAAc;EACE,0BAAA;AAEhB;AAEU;EACE,kBAAA;EACA,iBAAA;AAAZ;AACY;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;AACd;AACY;EACE,SAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AACd;AAOE;EACE,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,sDAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;AALJ;AASI;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,MAAA;EACA,OAAA;AAPN;AASI;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mCAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,wEAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,wEAAA;AAPN;AASI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAPN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,wEAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AARN;AAUI;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,wEAAA;AARN;AAUI;EACE,UAAA;EACA,WAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,wEAAA;AARN;AAUI;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AARN;AAWI;EACE;IACE,cAAA;IACA,wBAAA;EATN;EAWI;IACE,2BAAA;EATN;EAWI;IACE,cAAA;IACA,6BAAA;EATN;AACF;;AAaA;EACE,kBAAA;AAVF;;AAcA;EAAQ,WAAA;EACN,YAAA;AAVF;;AAWA;EACE,kBAAA;AARF;AASE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,yBAAA;EACA,gBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kCAAA;EACA,SAAA;AAPJ","sourcesContent":["ion-content {\n  position: relative;\n  --background: url(../../../assets/images/background-new.png) no-repeat center;\n  background-size: cover;\n}\nion-content ion-header {\n  position: sticky;\n  top: 0;\n  z-index: 99;\n}\nion-content ion-header ion-toolbar {\n  --background: #2586ba;\n  text-align: center;\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\nion-content ion-header ion-toolbar ion-icon {\n  cursor: pointer;\n  color: var(--white-clr);\n  font-size: 1.5rem;\n}\nion-content ion-header ion-toolbar img {\n  max-width: 100%;\n}\nion-content .search-bar {\n  position: sticky;\n  top: 68px;\n  background: #2586ba;\n  z-index: 99;\n  margin: 0;\n  padding: 10px 15px 10px;\n}\nion-content .search-bar ion-searchbar {\n  width: 100%;\n  color: var(--black-clr);\n  --background: rgba(var(--white-bg-rgb), 0.7);\n  height: 36px;\n  background: transparent;\n  padding: 10px 15px;\n  --padding-start: 0;\n  --padding-end: 0;\n  border-radius: 0;\n  margin: 0;\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n}\nion-content .search-bar ion-searchbar .searchbar-input {\n  font-size: 0.875rem;\n}\nion-content ion-grid.bubble-list {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 9;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details {\n  text-align: center;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img {\n  cursor: pointer;\n  position: relative;\n  height: 144px;\n  width: 144px;\n  border-radius: 144px;\n  text-align: center;\n  margin: 8px auto;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img .img-set {\n  height: 144px;\n  width: 144px;\n  border-radius: 144px;\n  overflow: hidden;\n  border: 2px solid var(--black-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img .img-set img {\n  width: 100%;\n  height: auto;\n  border-radius: 144px;\n  min-height: 144px;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status {\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  position: absolute;\n  top: 11px;\n  right: 11px;\n  display: inline-block;\n  z-index: 99;\n  border: 1px solid var(--white-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.online {\n  background: var(--online);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.busy {\n  background: #ff2929;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-img span.status.offline {\n  background: var(--offline);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info {\n  border-radius: 9px;\n  padding: 5px 10px;\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info h5 {\n  margin: 0 0 5px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--white-clr);\n}\nion-content ion-grid.bubble-list ion-row ion-col .athlete-details .athlete-info p {\n  margin: 0;\n  font-size: 0.625rem;\n  font-weight: 400;\n  color: var(--white-clr);\n}\nion-content .bg-images {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background: url(../../../assets/images/background-new.png) no-repeat center;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n}\nion-content .bg-bubble .dots-bubble {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\nion-content .bg-bubble .dots {\n  position: absolute;\n  bottom: -100px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  opacity: 0.5;\n  animation: rise 2s infinite ease-in;\n}\nion-content .bg-bubble .dots:nth-child(1) {\n  width: 30px;\n  height: 30px;\n  left: 10%;\n  animation-duration: 9s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(2) {\n  width: 15px;\n  height: 15px;\n  left: 20%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(3) {\n  width: 40px;\n  height: 40px;\n  left: 35%;\n  animation-duration: 12s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(4) {\n  width: 45px;\n  height: 45px;\n  left: 50%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(5) {\n  width: 25px;\n  height: 25px;\n  left: 55%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(6) {\n  width: 30px;\n  height: 30px;\n  left: 65%;\n  animation-duration: 12s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(7) {\n  width: 50px;\n  height: 50px;\n  left: 70%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(8) {\n  width: 20px;\n  height: 20px;\n  left: 80%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(9) {\n  width: 10px;\n  height: 10px;\n  left: 70%;\n  animation-duration: 9s;\n  animation-delay: 3s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(10) {\n  width: 40px;\n  height: 40px;\n  left: 25%;\n  animation-duration: 13s;\n  animation-delay: 4s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(20) {\n  width: 10px;\n  height: 10px;\n  left: 20%;\n  animation-duration: 12s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(19) {\n  width: 40px;\n  height: 40px;\n  left: 50%;\n  animation-duration: 9s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(18) {\n  width: 25px;\n  height: 25px;\n  left: 17%;\n  animation-duration: 11s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(17) {\n  width: 20px;\n  height: 20px;\n  left: 25%;\n  animation-duration: 15s;\n  animation-delay: 0s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(16) {\n  width: 10px;\n  height: 10px;\n  left: 27%;\n  animation-duration: 10s;\n  animation-delay: 1s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(15) {\n  width: 5px;\n  height: 5px;\n  left: 32%;\n  animation-duration: 12s;\n  animation-delay: 1s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(14) {\n  width: 20px;\n  height: 20px;\n  left: 35%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(13) {\n  width: 8px;\n  height: 8px;\n  left: 40%;\n  animation-duration: 10s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\nion-content .bg-bubble .dots:nth-child(12) {\n  width: 27px;\n  height: 27px;\n  left: 35%;\n  animation-duration: 9s;\n  animation-delay: 2s;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), inset 0px 0px 14px 5px white;\n}\nion-content .bg-bubble .dots:nth-child(11) {\n  width: 32px;\n  height: 32px;\n  left: 10%;\n  animation-duration: 14s;\n  animation-delay: 3s;\n  border: 2px solid #f1f1f1;\n}\n@keyframes rise {\n  0% {\n    bottom: -100px;\n    transform: translateX(0);\n  }\n  50% {\n    transform: translate(100px);\n  }\n  100% {\n    bottom: 1080px;\n    transform: translateX(-200px);\n  }\n}\n\n.text-center {\n  text-align: center;\n}\n\n.inital {\n  width: 100%;\n  height: 100%;\n}\n\n.initial {\n  position: relative;\n}\n.initial__span {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  object-position: center;\n  background-color: #1b4b64;\n  margin-left: 9px;\n  color: var(--white-clr);\n  display: grid;\n  place-items: center;\n  font-size: 2.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  border: 2px solid var(--black-clr);\n  margin: 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 51740:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bubble-screen-list/bubble-screen-list.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-header  mode=\"md\">\n    <ion-toolbar  mode=\"md\">\n      <ion-icon (click)=\"goBack()\" class=\"back-arow\"\n      slot=\"start\"\n      name=\"arrow-back-outline\"\n      routerLink=\"/bubble-screen\" mode=\"md\"\n    ></ion-icon>\n    <img src=\"assets/images/single-logo.svg\" />\n      <span class=\"filter-icon\" slot=\"end\">\n        <img \n          (click)=\"presentPopover($event)\"\n          src=\"assets/icon/filter-icon.svg\"\n        />\n        <ion-popover\n          #popover\n          [isOpen]=\"isOpen\"\n          interface=\"popover\"\n          (didDismiss)=\"isOpen = false\"\n          class=\"list-options\"\n          mode=\"ios\"\n        >\n          <ng-template>\n            <ion-radio-group [(ngModel)]=\"selection\"  (ionChange)=\"checkValue($event)\" value=\"biff\">\n              <ion-item mode=\"ios\" lines=\"none\">\n                <ion-radio slot=\"start\" value=\"All\"></ion-radio>\n                <ion-label>All</ion-label>\n              </ion-item>\n              <ion-item mode=\"ios\" lines=\"none\">\n                <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n                <ion-label>Online Athlete</ion-label>\n              </ion-item>\n              <ion-item mode=\"ios\" lines=\"none\">\n                <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n                <ion-label>Offline Athlete</ion-label>\n              </ion-item>\n            </ion-radio-group>\n          </ng-template>\n        </ion-popover>\n      </span>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"search-bar\">\n    <ion-searchbar\n      [formControl]=\"searchControl\"\n      mode=\"ios\"\n      placeholder=\"Search your favorite\"\n    ></ion-searchbar>\n  </ion-grid>\n  <ion-grid class=\"bubble-list\">\n    <ion-row>\n      <ion-col *ngIf=\"athleteList.length == 0\" size=\"12\">\n        <h6 class=\"text-center\">Athlete not found</h6>\n      </ion-col>\n\n      <ion-col *ngFor=\"let athlete of athleteList ;let i = index\" size=\"6\">\n        <div (click)=\"navigateToAthlete(athlete.id)\" class=\"athlete-details\">\n          <div class=\"athlete-img\">\n            <div class=\"img-set\" *ngIf=\"athlete.profileUrl !== '' \">\n              <img [src]=\"athlete.profileUrl | profile\" />\n            </div>\n            <ng-container *ngIf=\"athlete.profileUrl == '' \">\n              <div class=\"inital\">\n              <span class=\"initial__span\">\n                {{athlete.nameInitials}}\n              </span>\n              </div>\n            </ng-container>\n            <span\n              [ngClass]=\"athlete.online ? 'online' :'offline'\"\n              class=\"status\"\n            ></span>\n          </div>\n          <div class=\"athlete-info\">\n            <h5>{{athlete?.fullName}}</h5>\n            <p>\n              {{athlete.universityName}}\n              <span *ngIf=\"isShowingSeparator(i)\">||</span> {{athlete.teamName}}\n            </p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"bg-bubble\">\n    <div class=\"dots-bubble\">\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n      <div class=\"dots\"></div>\n    </div>\n  </ion-grid>\n\n  <!-- <div class=\"bg-images\"></div> -->\n\n  <ion-infinite-scroll\n    threshold=\"50px\"\n    [disabled]=\"isScrollDisabled\"\n    (ionInfinite)=\"loadData($event)\"\n  >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bubble-screen-list_bubble-screen-list_module_ts.js.map