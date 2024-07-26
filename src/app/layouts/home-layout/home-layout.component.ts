import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
  standalone: true,
  imports: [RouterOutlet, HomeLayoutComponent, FooterComponent, HeaderComponent],
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
