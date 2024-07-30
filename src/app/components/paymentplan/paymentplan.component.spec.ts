import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentplanComponent } from './paymentplan.component';

describe('PaymentplanComponent', () => {
  let component: PaymentplanComponent;
  let fixture: ComponentFixture<PaymentplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
