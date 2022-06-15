import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { VerifyOTPPage } from "./verify-otp.page";

describe("VerifyOTPPage", () => {
  let component: VerifyOTPPage;
  let fixture: ComponentFixture<VerifyOTPPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VerifyOTPPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(VerifyOTPPage);

      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", async () => {
    expect(component).toBeTruthy();
  });
});
