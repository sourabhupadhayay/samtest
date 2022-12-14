import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ConstantService } from "src/app/providers/constant.service";
import { CoreService } from "src/app/providers/core.service";
import { DataService,Request,Response } from "src/app/providers/data.service";

@Component({
  selector: "app-terms-conditions",
  templateUrl: "./terms-conditions.component.html",
  styleUrls: ["./terms-conditions.component.scss"],
})
export class TermsConditionsComponent implements OnInit {
  constructor(public modalCtrl: ModalController, private coreService: CoreService,  private constantService: ConstantService,private apiService: DataService) {}
  term:any;
  ngOnInit() {
    this.policy();
  }
 
  onclick_cancel() {
    this.modalCtrl.dismiss();
  }
  policy(){
    let request: Request = {
      path: "auth/configuration/getTermsAndCondition",
      
    };

    this.coreService.presentLoader(this.constantService.WAIT);

    this.apiService.get(request).subscribe((response: Response) => {
      this.coreService.dismissLoader();
      if (response.status.code === this.constantService.STATUS_OK) {
     
       this.term=response.data.termsAndCondition;
       console.log(this.term);
     
      } else {
        this.coreService.showToastMessage(
          response.status.description,
          this.coreService.TOAST_ERROR
        );
      }
    });
    
  }
}
