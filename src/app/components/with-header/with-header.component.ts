import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-with-header',
  templateUrl: './with-header.component.html',
  styleUrls: ['./with-header.component.scss'],
})
export class WithHeaderComponent implements OnInit {
  @Input() heroBg = '';

  constructor() {}

  ngOnInit(): void {}
}
