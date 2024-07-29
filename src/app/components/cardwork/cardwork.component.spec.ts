import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardworkComponent } from './cardwork.component';

describe('CardworkComponent', () => {
  let component: CardworkComponent;
  let fixture: ComponentFixture<CardworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
