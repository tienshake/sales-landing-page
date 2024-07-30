import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgIf, LazyLoadDirective],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() altText: string = '';
  @Input() featureTitle: string = '';
  @Input() description: string = '';
  @Input() isReverse: boolean = false;
}
