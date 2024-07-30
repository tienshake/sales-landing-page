import { Component, OnInit } from '@angular/core';
import { ParallaxDirective } from '../../../../directives/parallax.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.scss'],
  standalone: true,
  imports: [ParallaxDirective, ButtonComponent, AboutComponent],
})
export class FqaComponent implements OnInit {
  constructor() {}
  
  ngOnInit() {}
}
