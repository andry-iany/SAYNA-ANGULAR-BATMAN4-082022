import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/types';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  recommendations: Article[] = [
    {
      id: 1,
      src: '../../../../../assets/articles/article_1.png',
      title: 'Produit',
      price: {
        prev: 150,
        next: 75,
      },
    },
    {
      id: 2,
      src: '../../../../../assets/articles/article_1.png',
      title: 'Produit',
      price: {
        prev: 150,
        next: 75,
      },
    },
    {
      id: 3,
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
