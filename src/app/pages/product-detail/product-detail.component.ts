import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  reviews = [
    {
      reviewer: 'Robert',
      rating: 4,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.',
    },
    {
      reviewer: 'John',
      rating: 4,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
