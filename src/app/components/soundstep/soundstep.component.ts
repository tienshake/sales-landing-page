import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soundstep',
  standalone: true,
  imports: [],
  templateUrl: './soundstep.component.html',
  styleUrl: './soundstep.component.scss',
})
export class SoundstepComponent {
  @Input() numerical: string = '';
  @Input() content: string = '';
}
