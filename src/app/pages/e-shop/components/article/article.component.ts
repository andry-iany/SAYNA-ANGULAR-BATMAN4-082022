import { Component, Input, OnInit } from '@angular/core';

type Price = {
  prev: number;
  next: number;
};

type Article = {
  src: string;
  title: string;
  price: Price;
  id: string | number;
};

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Input() isSale = false;

  constructor() {}

  ngOnInit(): void {}
}
