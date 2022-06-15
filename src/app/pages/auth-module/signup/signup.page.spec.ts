import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { SignupPage } from './signup.page';
import { HttpClient } from "@angular/common/http";
describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignupPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignupPage);
      component = fixture.componentInstance;

      fixture.detectChanges();
    })
  );

  function signUpForm(userEmail, userPhone) {
    component.signUpForm.controls["email"].patchValue(userEmail);
    component.signUpForm.controls["phone"].patchValue(userPhone);
  }
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("component initial state", () => {
    expect(component.isFormSubmitted).toBeFalse;
    expect(component.signUpForm).toBeDefined();
    expect(component.signUpForm.invalid).toBeTruthy();
  });
  it("signUp invalid should be true when email is invalid", () => {
    signUpForm(null,null);
    expect(component.signUpForm.invalid).toBeTruthy();
  });
  it("form value should update from when you change the input", () => {
    signUpForm("someUser@gmail.com", 1234567890);
    expect(component.signUpForm.value).toEqual({
      email: "someUser@gmail.com",
      phone: 1234567890,
      termCondition:false
    });
  });
  it("display useremail error msg when useremail is blank", () => {
    signUpForm(null, "1234567890");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const userEmailErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#userEmailRequiredError"
    );
    expect(userEmailErrorMsg).toBeDefined();
    expect(userEmailErrorMsg.innerHTML).toContain("Email address is required");
  });
  it("display email invalid Error Msg when email is invalid", () => {
    signUpForm("user@","123456789");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#userEmailInvalid"
    );
    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain("Email address is invalid");
  });
  it("display phone invalid Error Msg when phone is invalid", () => {
    signUpForm("dummyUser@.com","1234");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    button.click();
    fixture.detectChanges();
    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector(
      "#userPhoneInvalid"
    );
    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain("Phone number is invalid");
  });
  it("display signup button disable when term and condition is unchecked",()=>{
    const button= fixture.debugElement.nativeElement.querySelector(
      "#submitBtn"
    );
    console.log(button.nativeElement)
      expect(button.attributes.getNamedItem('ng-reflect-disabled').value).toBeTruthy()
  })
  
});
