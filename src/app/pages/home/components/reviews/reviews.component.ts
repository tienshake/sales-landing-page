import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ParallaxDirective } from '../../../../directives/parallax.directive';
import { ParallaxCenterDirective } from '../../../../directives/parallax-center.directive';
import { PaymentplanComponent } from '../../../../components/paymentplan/paymentplan.component';
import { LazyLoadDirective } from '../../../../directives/lazy-load.directive';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    ParallaxCenterDirective,
    PaymentplanComponent,
    LazyLoadDirective,
  ],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
