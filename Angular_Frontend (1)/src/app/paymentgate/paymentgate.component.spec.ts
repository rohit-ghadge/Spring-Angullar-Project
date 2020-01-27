import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentgateComponent } from './paymentgate.component';

describe('PaymentgateComponent', () => {
  let component: PaymentgateComponent;
  let fixture: ComponentFixture<PaymentgateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentgateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
