import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SignupDetailsPage } from "./signup-details.page";

describe("SignupDetailsPage", () => {
  let component: SignupDetailsPage;
  let fixture: ComponentFixture<SignupDetailsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignupDetailsPage],
        imports: [
          IonicModule.forRoot(),
          FormsModule,
          ReactiveFormsModule,
          HttpClientTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignupDetailsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
