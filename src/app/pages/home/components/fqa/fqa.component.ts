import { Component, OnInit } from '@angular/core';
import { ParallaxDirective } from '../../../../directives/parallax.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AboutComponent } from '../about/about.component';
import { LazyLoadDirective } from '../../../../directives/lazy-load.directive';

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.scss'],
  standalone: true,
  imports: [
    ParallaxDirective,
    ButtonComponent,
    AboutComponent,
    LazyLoadDirective,
  ],
})
export class FqaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
