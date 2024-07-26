import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleClick() {
    console.log('sdsad')
  }
}
