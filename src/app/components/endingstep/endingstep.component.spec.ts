import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingstepComponent } from './endingstep.component';

describe('EndingstepComponent', () => {
  let component: EndingstepComponent;
  let fixture: ComponentFixture<EndingstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndingstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndingstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
