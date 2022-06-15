import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";

import { ResetPasswordPage } from "./reset-password.page";

describe("ResetPasswordPage", () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ResetPasswordPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(ResetPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create initial state of component ", () => {
    expect(component.isPasswordStrong).toBeFalsy;
    expect(component.isShowingPassword).toBeFalsy;
    expect(component.isShowingConfirmPassword).toBeFalsy;
    expect(component.isShowingPasswordHint).toBeFalsy;
    expect(component.passwordFormGroup).toBeDefined();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
