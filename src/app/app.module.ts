import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Root/app.component';
import { ContainerComponent } from './components/container/container.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EShopComponent } from './pages/e-shop/e-shop.component';
import { AsideLinksComponent } from './components/aside-links/aside-links.component';
import { ArrowDownComponent } from './components/arrow-down/arrow-down.component';
import { FilterComponent } from './pages/e-shop/components/filter/filter.component';
import { ResultsComponent } from './pages/e-shop/components/results/results.component';
import { ArticleComponent } from './pages/e-shop/components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductImageComponent } from './pages/product-detail/components/product-image/product-image.component';
import { ProductRatingComponent } from './pages/product-detail/components/product-rating/product-rating.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductCommentsComponent } from './pages/product-detail/components/product-comments/product-comments.component';
import { RecommendationsComponent } from './pages/product-detail/components/recommendations/recommendations.component';
import { ArticleCardComponent } from './pages/e-shop/components/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    LayoutComponent,
    EShopComponent,
    AsideLinksComponent,
    ArrowDownComponent,
    FilterComponent,
    ResultsComponent,
    ArticleComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductImageComponent,
    ProductRatingComponent,
    ButtonComponent,
    ProductCommentsComponent,
    RecommendationsComponent,
    ArticleCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
