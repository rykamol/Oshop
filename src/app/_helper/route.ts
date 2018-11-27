import { AdminOrdersComponent } from './../admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { CheckOutComponent } from './../check-out/check-out.component';
 import { HomeComponent } from './../home/home.component';

import {Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ShopingCartComponent } from '../shoping-cart/shoping-cart.component';
import { ProductsComponent } from '../products/products.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';

export const appRoute: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'my-orders', component: MyOrdersComponent},
    {path: 'shoping-cart', component: ShopingCartComponent},
    {path: 'check-out', component: CheckOutComponent},
    {path: 'order-success', component: OrderSuccessComponent},
    {path: 'login', component: LoginComponent},

    {path: 'admin/products', component: AdminProductsComponent},
    {path: 'admin/orders', component: AdminOrdersComponent},
]