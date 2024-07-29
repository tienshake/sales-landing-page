import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardwork',
  standalone: true,
  imports: [],
  templateUrl: './cardwork.component.html',
  styleUrl: './cardwork.component.scss',
})
export class CardworkComponent {
  @Input() imageSrc: string = '';
  @Input() name: string = '';
  @Input() subTitle: string = '';
  @Input() content: string = '';
  @Input() desc: string = '';
}
