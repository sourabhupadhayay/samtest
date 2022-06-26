import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule, IonRouterOutlet } from "@ionic/angular";

import { BubbleScreenPage } from "./bubble-screen.page";

describe("BubbleScreenPage", () => {
  let component: BubbleScreenPage;
  let fixture: ComponentFixture<BubbleScreenPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BubbleScreenPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
        providers: [
          {
            provide: IonRouterOutlet,
            useValue: {
              //add whatever property of IonRouterOutlet you're using in component class
              nativeEl: "",
            },
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(BubbleScreenPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
