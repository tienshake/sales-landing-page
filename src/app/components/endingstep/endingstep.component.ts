import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-endingstep',
  standalone: true,
  imports: [],
  templateUrl: './endingstep.component.html',
  styleUrl: './endingstep.component.scss',
})
export class EndingstepComponent {
  @Input() content: string = '';
}
