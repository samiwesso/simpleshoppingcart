import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path:'cart-product', component: CartProductComponent},
  { path:'product', component: ProductComponent},
  { path:'product-list', component: ProductListComponent},
  { path:'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
