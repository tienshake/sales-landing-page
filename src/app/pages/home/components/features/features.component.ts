import { Component } from '@angular/core';
import { SoundstepComponent } from '../../../../components/soundstep/soundstep.component';
import { WorkstepComponent } from '../../../../components/workstep/workstep.component';
import { CardworkComponent } from '../../../../components/cardwork/cardwork.component';
import { PaymentplanComponent } from '../../../../components/paymentplan/paymentplan.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../components/card/card.component';
import { EndingComponent } from '../../../../components/ending/ending.component';
import { ParallaxDirective } from '../../../../directives/parallax.directive';
import { ParallaxCenterDirective } from '../../../../directives/parallax-center.directive';
import { LazyLoadDirective } from '../../../../directives/lazy-load.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    ButtonComponent,
    ParallaxDirective,
    CardComponent,
    SoundstepComponent,
    WorkstepComponent,
    CardworkComponent,
    PaymentplanComponent,
    EndingComponent,
    ParallaxCenterDirective,
    LazyLoadDirective,
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
