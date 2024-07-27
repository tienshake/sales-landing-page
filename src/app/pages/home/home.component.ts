import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
