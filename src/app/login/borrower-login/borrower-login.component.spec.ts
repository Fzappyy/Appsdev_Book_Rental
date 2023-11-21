import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerLoginComponent } from './borrower-login.component';

describe('BorrowerLoginComponent', () => {
  let component: BorrowerLoginComponent;
  let fixture: ComponentFixture<BorrowerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowerLoginComponent]
    });
    fixture = TestBed.createComponent(BorrowerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
