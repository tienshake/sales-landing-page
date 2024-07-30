import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [MatButtonModule, NgIf],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() showArrow: boolean = true;

  @Input() color: 'primary' | 'secondary' | 'white' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'small' | 'large' = 'small';
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit() {}

  onClickButton(event: MouseEvent | undefined) {
    this.onClick.emit(event);
  }
}
