import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgIf],
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
