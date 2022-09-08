import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './pages/e-shop/e-shop.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/e-shop' },
  { path: 'e-shop', component: EShopComponent },
  { path: 'e-shop/:productId', component: ProductDetailComponent },
  { path: 'game', component: ProductDetailComponent },
  { path: 'compte', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
