import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Root/app.component';
import { ContainerComponent } from './components/container/container.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EShopComponent } from './pages/e-shop/e-shop.component';
import { AsideLinksComponent } from './components/aside-links/aside-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    LayoutComponent,
    EShopComponent,
    AsideLinksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
