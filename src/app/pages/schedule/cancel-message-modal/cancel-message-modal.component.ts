import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CoreService } from "src/app/providers/core.service";

@Component({
  selector: "app-cancel-message-modal",
  templateUrl: "./cancel-message-modal.component.html",
  styleUrls: ["./cancel-message-modal.component.scss"],
})
export class CancelMessageModalComponent implements OnInit {
  cancelMessage: String;
  constructor(
    public modalCtrl: ModalController,
    private coreService: CoreService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.cancelMessage) {
      this.coreService.showToastMessage(
        "Please enter refusal reason",
        this.coreService.TOAST_ERROR
      );
      return;
    }

    this.modalCtrl.dismiss(this.cancelMessage);
  }
}
