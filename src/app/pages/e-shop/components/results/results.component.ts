import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor() {}

  articles = [
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Sweat “why so serious”',
      id: 1,
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Horloge',
      id: 2,
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Mug',
      id: 3,
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Mug voyage',
      id: 4,
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'T Shirt bat mobile',
      id: 5,
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Horloge',
      id: 6,
    },
  ];

  ngOnInit(): void {}
}
