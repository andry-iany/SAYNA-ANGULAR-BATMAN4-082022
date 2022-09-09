import { Component, OnInit } from '@angular/core';
import { TArticle } from 'src/app/types';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  recommendations: TArticle[] = [];

  constructor() {}

  ngOnInit(): void {}
}
