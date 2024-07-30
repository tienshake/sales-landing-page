import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstepComponent } from './workstep.component';

describe('WorkstepComponent', () => {
  let component: WorkstepComponent;
  let fixture: ComponentFixture<WorkstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkstepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
