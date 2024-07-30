import { Component, Input } from '@angular/core';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

@Component({
  selector: 'app-cardwork',
  standalone: true,
  imports: [LazyLoadDirective],
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
