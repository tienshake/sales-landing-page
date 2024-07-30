import { Component, OnInit } from '@angular/core';
import { LazyLoadDirective } from '../../../../directives/lazy-load.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [LazyLoadDirective],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
