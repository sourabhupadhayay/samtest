import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService,Request,Response } from "src/app/providers/data.service";
import { CommonService } from "src/app/providers/common.service";
@Component({
  selector: "app-terms-conditions",
  templateUrl: "./terms-conditions.component.html",
  styleUrls: ["./terms-conditions.component.scss"],
})
export class TermsConditionsComponent implements OnInit {
  constructor(public modalCtrl: ModalController, private coreService: CoreService,  public commonService: CommonService, private constantService: ConstantService,private apiService: DataService) {}
  term:any;
  ngOnInit() {
  }
 
  onclick_cancel() {
    this.modalCtrl.dismiss();
  }
  
}
