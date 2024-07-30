import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundstepComponent } from './soundstep.component';

describe('SoundstepComponent', () => {
  let component: SoundstepComponent;
  let fixture: ComponentFixture<SoundstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
