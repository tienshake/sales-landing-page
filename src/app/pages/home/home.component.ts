import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { AboutComponent } from './components/about/about.component';
import { FqaComponent } from './components/fqa/fqa.component';
import { CardComponent } from '../../components/card/card.component';
import { SoundstepComponent } from '../../components/soundstep/soundstep.component';
import { WorkstepComponent } from '../../components/workstep/workstep.component';
import { CardworkComponent } from '../../components/cardwork/cardwork.component';
import { PaymentplanComponent } from '../../components/paymentplan/paymentplan.component';
import { EndingComponent } from './components/ending/ending.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    ParallaxDirective,
    AboutComponent,
    FqaComponent,
    CardComponent,
    SoundstepComponent,
    WorkstepComponent,
    CardworkComponent,
    PaymentplanComponent,
    EndingComponent,
  ],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
