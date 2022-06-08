import { Component, OnInit } from "@angular/core";
import { IonRouterOutlet, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-bubble-screen',
  templateUrl: './bubble-screen.page.html',
  styleUrls: ['./bubble-screen.page.scss'],
})
export class BubbleScreenPage implements OnInit {

  bubble1: boolean = false;
  bubble2: boolean = false;
  constructor(
    public modalCtrl: ModalController,
    public routerOutLet: IonRouterOutlet
  ) {}

  ngOnInit() {
  }

  playAudio(e: string) {
    let audio = new Audio();
    audio.src = "assets/audio/buble-sound.mp3";
    audio.load();
    audio.play();
    console.log("clicked", e);
    if (e == "1") {
      this.bubble1 = true;
    } else if (e == "2") {
      this.bubble2 = true;
    }
  }
  onclick_cancel(): void {
    this.modalCtrl.dismiss();
  }

}
