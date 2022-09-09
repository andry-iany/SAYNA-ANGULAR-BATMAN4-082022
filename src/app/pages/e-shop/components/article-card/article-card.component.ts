import { Component, Input, OnInit } from '@angular/core';

type Price = {
  prev: number;
  next: number;
};

type Article = {
  src: string;
  title: string;
  price: Price;
};

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: Article;

  constructor() {}

  ngOnInit(): void {}
}
