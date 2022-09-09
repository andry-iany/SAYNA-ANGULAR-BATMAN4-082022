import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'red-blue' | 'red' | 'blue' = 'blue';

  constructor() {}

  ngOnInit(): void {}
}
