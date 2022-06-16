import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ResetPasswordPage } from "./reset-password.page";

describe("ResetPasswordPage", () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ResetPasswordPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(ResetPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );
  afterEach(() => {
    component.passwordFormGroup.reset();
  });
  function updateForm(password, confirmPassword) {
    component.passwordFormGroup.controls["password"].patchValue(password);
    component.passwordFormGroup.controls["confirmPassword"].patchValue(
      confirmPassword
    );
  }

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

  it("Form invalid should be true when form is invalid", () => {
    updateForm(null, null);
    expect(component.passwordFormGroup.invalid).toBeTruthy();
  });
  it("form value should update from when u change the input", () => {
    updateForm("someUser@gmail.com", 123456);
    expect(component.passwordFormGroup.value).toEqual({
      password: "someUser@gmail.com",
      confirmPassword: 123456,
    });
  });

  it("should check password to be weak", () => {
    updateForm("adasd", "dasdsa");

    expect(component.isPasswordStrong).toBe(false);
  });
  it("should check password strength to be strong", () => {
    updateForm("Test@123", "Test@123");
    component.onStrengthChanged(100);
    fixture.detectChanges();
    expect(component.isPasswordStrong).toBe(true);
  });

  it("should check passwords do not match", () => {
    updateForm("Test@123", "Test@122");
    fixture.detectChanges();
    expect(
      component.passwordFormGroup.controls["password"].value !==
        component.passwordFormGroup.controls["confirmPassword"].value
    ).toBe(true);
  });
  it("should check passwords  match", () => {
    updateForm("Test@123", "Test@123");
    fixture.detectChanges();
    expect(
      component.passwordFormGroup.controls["password"].value ==
        component.passwordFormGroup.controls["confirmPassword"].value
    ).toBe(true);
  });
});
