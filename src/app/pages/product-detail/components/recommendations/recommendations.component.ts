import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  recommendations = [
    {
      src: '../../../../../assets/articles/article_1.png',
      title: 'Produit',
      price: {
        prev: 150,
        next: 75,
      },
    },
    {
      src: '../../../../../assets/articles/article_1.png',
      title: 'Produit',
      price: {
        prev: 150,
        next: 75,
      },
    },
    {
      src: '../../../../../assets/articles/article_1.png',
      title: 'Produit',
      price: {
        prev: 150,
        next: 75,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
