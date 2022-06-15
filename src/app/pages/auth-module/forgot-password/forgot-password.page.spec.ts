import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ForgotPasswordPage } from "./forgot-password.page";
import { HttpClient } from "@angular/common/http";

describe("ForgotPasswordPage", () => {
  let component: ForgotPasswordPage;
  let fixture: ComponentFixture<ForgotPasswordPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForgotPasswordPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(ForgotPasswordPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  function forgotEmailForm(userEmail) {
    component.emailController.patchValue(userEmail);
  }
  it("component initial state", () => {
    expect(component.isFormSubmitted).toBeFalse;
    expect(component.emailController).toBeDefined();
    expect(component.emailController.invalid).toBeTruthy();
  });
  it("emailController invalid should be true when emailController is invalid", () => {
    forgotEmailForm(null);
    expect(component.emailController.invalid).toBeTruthy();
  });
  it("form value should update from when you change the input", () => {
    forgotEmailForm("dummyUser@gmail.com");
    expect(component.emailController.value).toEqual(
     {
      emailController:"dummyUser@gmail.com",
    }
    );
  });
  it("Display email Error Msg when email is blank", () => {
    forgotEmailForm(null);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#emailRequiredError"
    );
    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain("Email address is required");
  });

  it("Display email invalid Error Msg when email is invalid", () => {
    forgotEmailForm("user@");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#emailInvalidError"
    );
    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain("Email address is invalid");
  });


});
