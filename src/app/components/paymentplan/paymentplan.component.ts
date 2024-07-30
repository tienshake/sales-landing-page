import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-paymentplan',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './paymentplan.component.html',
  styleUrl: './paymentplan.component.scss',
})
export class PaymentplanComponent {
  @Input() emotion: string = '';
  @Input() title: string = '';
  @Input() btnName: string = '';
}
