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
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Horloge',
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Mug',
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Mug voyage',
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'T Shirt bat mobile',
    },
    {
      price: { prev: 33, next: 20 },
      src: '../../../../../assets/articles/article_1.png',
      title: 'Horloge',
    },
  ];

  ngOnInit(): void {}
}
