import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAppereanceBookingPage } from './new-appereance-booking.page';

describe('NewAppereanceBookingPage', () => {
  let component: NewAppereanceBookingPage;
  let fixture: ComponentFixture<NewAppereanceBookingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppereanceBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAppereanceBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
