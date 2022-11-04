import { Component, OnInit, ViewChild } from "@angular/core";
import { IonModal, ModalController } from "@ionic/angular";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";
import { PopoverController } from '@ionic/angular';
import { PushNotificationPage } from "../push-notification/push-notification.page";
import { HttpClient } from "@angular/common/http";
import { CoreService } from "src/app/providers/core.service";
import { DataService } from "src/app/providers/data.service";
import { ConstantService } from "src/app/providers/constant.service";
import { CommonService } from "src/app/providers/common.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.page.html",
  styleUrls: ["./invoice.page.scss"],
})
export class InvoicePage implements OnInit {
  ipAddress :string;
  bankDetails :any;
  bankDetailsForm : FormGroup;
  transferAmountForm : FormGroup;
  selectedBankId:string;
  isTermsAndConditionAccepted: boolean = false;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild("transferModal") transferModal: IonModal;
  constructor(
               public modalCtrl: ModalController,
               public popoverController: PopoverController, 
               public http : HttpClient,
               private coreService: CoreService,
               private apiService: DataService,
               private constantService: ConstantService,
               public commonService: CommonService,
               private formBuilder: FormBuilder,
               ) {
               }

  ngOnInit() {
    this.getIpAddresss();
    this.initForm();
  }

  initForm() {
    this.bankDetailsForm = this.formBuilder.group({
      name : ['', Validators.required],
      accountHolderName : ['', Validators.required],
      accountNumber : [null, Validators.required],
      routingNumber : [null, Validators.required],
      accountType : ['', Validators.required]
    });

    this.transferAmountForm = this.formBuilder.group({
      amount : [null, Validators.required],
      details : ['', Validators.required]
    })
  }

  onClickCancel() {
    this.modalCtrl.dismiss();
    this.bankDetailsForm.reset();
    this.transferAmountForm.reset();
  }

  async presentTermsAndServices() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: TermsOfServiceComponent,
      cssClass: "tandc-modal-new",
    });
    modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PushNotificationPage,
      cssClass: 'notification-pop',
      event: ev,
      translucent: false,
      side: 'bottom',
      alignment: 'start',
      size:'auto'
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getToFixedDigits(event:any){
    if(event.target.value !== '')
     event.target.value = parseFloat(event.target.value).toFixed(2)
    }


  getIpAddresss() {
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('ip ', data.ip);
      this.ipAddress = data.ip;
    })
  }

  getBankListing() {
    let request: any = {
      path: "core/payment/bank/list?ipAddress=" + this.ipAddress,
      isAuth: true,
    };
    this.coreService.presentLoader(this.constantService.WAIT).then(() => {
      this.apiService.get(request).subscribe((response: any) => {
        this.coreService.dismissLoader();
        if (response.status.code === this.constantService.STATUS_OK) {
          this.bankDetails = response.data;
          this.bankDetails.forEach((element, index) => {
            this.bankDetails[index][
              "nameInitials"
            ] = this.commonService.getInitials(element.name);
          });
        } else {
          this.coreService.showToastMessage(
            response.status.description,
            this.coreService.TOAST_ERROR
          );
        }
      });
    });
  }

  addBankAccount() {
    let data =  this.bankDetailsForm.value;
    if(this.bankDetailsForm.valid) {
      let request: any = {
        path: "core/payment/bank/add?ipAddress=" + this.ipAddress,
        data: {
            ...this.bankDetailsForm.value
        },
        isAuth: true,
      };
  
      this.apiService.post(request).subscribe((response: any) => {
        if (response.status.code == this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_SUCCESS
          );
            let bankAddResponse = response.data;
            this.bankDetailsForm.reset();
            this.onClickCancel();
        } else {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_ERROR
          );
        }
      });
    } else {
      this.coreService.showToastMessage(
        "Please fill all required details",
        this.coreService.TOAST_ERROR
      );
    }
  }

  openTransferModal(id:string) {
    this.selectedBankId = id;
    this.transferModal.present();
  }

  convertStringToNum(value:any) {
     let amount = Number(value);
     return amount;
  }

  transferAmount() {
    if(this.transferAmountForm.valid) {
      // var amount = Number(this.transferAmountForm.value.amount);
      let request: any = {
        path: "core/payment/bank/transfer?ipAddress=" + this.ipAddress,
        data: {
            ...this.transferAmountForm.value,
            "amount" : this.convertStringToNum(this.transferAmountForm.value.amount),
            "toBankAccountId" : this.selectedBankId
        },
        isAuth: true,
      };
  
      this.apiService.post(request).subscribe((response: any) => {
        if (response.status.code == this.constantService.STATUS_OK) {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_SUCCESS
          );
            let bankAddResponse = response;
            console.log(bankAddResponse);
            this.onClickCancel();
            this.transferAmountForm.reset();
            
        } else {
          this.coreService.showToastMessage(
            response["status"]["description"],
            this.coreService.TOAST_ERROR
          );
        }
      });
    } else {
      this.coreService.showToastMessage(
        "Please fill all required details",
        this.coreService.TOAST_ERROR
      );
    }
  }
}
