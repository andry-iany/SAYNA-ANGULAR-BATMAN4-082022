import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { concatMap } from 'rxjs/operators';

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

  article$!: ReturnType<typeof this.productService.getArticleById>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.article$ = this.productService.getArticleById(
        params.get('productId') || ''
      );
    });
  }
}
