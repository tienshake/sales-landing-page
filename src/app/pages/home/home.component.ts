import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ParallaxDirective, CardComponent],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
