import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopFooterComponent } from './components/shop-footer/shop-footer.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { ShopLepninaComponent } from './components/shop-lepnina/shop-lepnina.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopSculptureComponent } from './components/shop-sculpture/shop-sculpture.component';
import { ShopExclusiveComponent } from './components/shop-exclusive/shop-exclusive.component';
import { ShopContentComponent } from './components/shop-content/shop-content.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopErrorComponent } from './components/shop-error/shop-error.component';
import { ShopAdminComponent } from './components/shop-admin/shop-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopFooterComponent,
    ShopMainComponent,
    ShopLepninaComponent,
    ShopSculptureComponent,
    ShopExclusiveComponent,
    ShopContentComponent,
    ShopCartComponent,
    ShopErrorComponent,
    ShopAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
