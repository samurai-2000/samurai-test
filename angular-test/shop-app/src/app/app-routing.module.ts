import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopAdminComponent } from './components/shop-admin/shop-admin.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopContentComponent } from './components/shop-content/shop-content.component';
import { ShopErrorComponent } from './components/shop-error/shop-error.component';
import { ShopExclusiveComponent } from './components/shop-exclusive/shop-exclusive.component';
import { ShopLepninaComponent } from './components/shop-lepnina/shop-lepnina.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { ShopSculptureComponent } from './components/shop-sculpture/shop-sculpture.component';

const routes: Routes = [
  { path: '', component: ShopMainComponent },
  { path: 'lepnina', component: ShopLepninaComponent },
  { path: 'sculpture', component: ShopSculptureComponent },
  { path: 'exclusive', component: ShopExclusiveComponent },
  { path: 'content', component: ShopContentComponent },
  { path: 'cart', component: ShopCartComponent },
  { path: 'admin', component: ShopAdminComponent },
  { path: '**', component: ShopErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
