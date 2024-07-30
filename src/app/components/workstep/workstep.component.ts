import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workstep',
  standalone: true,
  imports: [],
  templateUrl: './workstep.component.html',
  styleUrl: './workstep.component.scss',
})
export class WorkstepComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
}
