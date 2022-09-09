import { Component, Input, OnInit } from '@angular/core';

type Review = {
  reviewer: string;
  rating: number;
  content: string;
};

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss'],
})
export class ProductCommentsComponent implements OnInit {
  @Input() reviews: Review[] = [];

  constructor() {}

  ngOnInit(): void {}
}
