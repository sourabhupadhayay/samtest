import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { LoginPage } from "./login.page";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );
  function updateForm(userEmail, userPassword) {
    component.loginForm.controls["userName"].patchValue(userEmail);
    component.loginForm.controls["password"].patchValue(userPassword);
  }
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("component initial state", () => {
    expect(component.isFormSubmitted).toBeFalse;
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it("Form invalid should be true when form is invalid", () => {
    updateForm(null, null);
    expect(component.loginForm.invalid).toBeTruthy();
  });
  it("form value should update from when u change the input", () => {
    updateForm("someUser@gmail.com", 123456);
    expect(component.loginForm.value).toEqual({
      userName: "someUser@gmail.com",
      password: 123456,
    });
  });
});
