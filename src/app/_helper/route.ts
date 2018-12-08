import { ProductFormComponent } from './../admin/product-form/product-form.component';
import { AdminGuard } from './../_guards/admin.guard';
import { AuthGuard } from './../_guards/auth.guard';
import { AdminOrdersComponent } from './../admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { CheckOutComponent } from './../check-out/check-out.component';

import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ShopingCartComponent } from '../shoping-cart/shoping-cart.component';
import { ProductsComponent } from '../products/products.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';

export const appRoute: Routes = [

    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'my-orders', component: MyOrdersComponent },
            { path: 'shoping-cart', component: ShopingCartComponent },
            { path: 'check-out', component: CheckOutComponent },
            { path: 'order-success', component: OrderSuccessComponent },
            { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminGuard]},
            { path: 'admin/product-form', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] }
        ]
    }
]