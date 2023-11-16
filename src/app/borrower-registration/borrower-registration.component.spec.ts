import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerRegistrationComponent } from './borrower-registration.component';

describe('BorrowerRegistrationComponent', () => {
  let component: BorrowerRegistrationComponent;
  let fixture: ComponentFixture<BorrowerRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowerRegistrationComponent]
    });
    fixture = TestBed.createComponent(BorrowerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
