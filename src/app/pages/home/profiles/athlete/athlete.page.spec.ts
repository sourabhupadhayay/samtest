import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { AthletePage } from "./athlete.page";

describe("AthletePage", () => {
  let component: AthletePage;
  let fixture: ComponentFixture<AthletePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AthletePage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(AthletePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
