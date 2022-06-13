import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { VerifyOTPPage } from "./verify-otp.page";

describe("VerifyOTPPage", () => {
  let component: VerifyOTPPage;
  let fixture: ComponentFixture<VerifyOTPPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VerifyOTPPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(VerifyOTPPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
