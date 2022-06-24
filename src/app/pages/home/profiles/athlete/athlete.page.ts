import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-athlete",
  templateUrl: "./athlete.page.html",
  styleUrls: ["./athlete.page.scss"],
})
export class AthletePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async getAmountOpened(event: any) {
    let number = await event.target.getOpenAmount();
  }
}
