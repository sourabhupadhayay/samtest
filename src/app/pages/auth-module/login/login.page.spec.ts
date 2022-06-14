import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { LoginPage } from "./login.page";
import { HttpClient } from "@angular/common/http";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
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

  it("Display Username Error Msg when Username is blank", () => {
    updateForm(null, "1234");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#userNameError"
    );
    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain("Email address is required");
  });

  it("Display password Error Msg when password is blank", () => {
    updateForm("xyz@gmail.com", null);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#passwordError"
    );
    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain(" Password is required");
  });
  it("When username is blank, username field should display red outline ", () => {
    updateForm(null, "1234");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const userNameInput = fixture.debugElement.nativeElement.querySelector(
      "#userNameInputContainer"
    );
    console.log(userNameInput);
    expect(userNameInput.classList).toContain("error-border");
  });
  it("When password is blank, password field should display red outline ", () => {
    updateForm("xyz@gmail.com", null);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const userNameInput = fixture.debugElement.nativeElement.querySelector(
      "#passwordInputContainer"
    );
    console.log(userNameInput);
    expect(userNameInput.classList).toContain("error-border");
  });
});
