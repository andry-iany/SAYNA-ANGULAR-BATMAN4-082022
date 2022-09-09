import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  recommendations$ = this.productService.getAllArticles(3);

  ngOnInit(): void {}
}
