import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { EndingstepComponent } from '../endingstep/endingstep.component';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { ParallaxCenterDirective } from '../../directives/parallax-center.directive';

@Component({
  selector: 'app-ending',
  standalone: true,
  imports: [
    ButtonComponent,
    EndingstepComponent,
    ParallaxDirective,
    ParallaxCenterDirective,
  ],
  templateUrl: './ending.component.html',
  styleUrl: './ending.component.scss',
})
export class EndingComponent {}
