import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthGuard } from "./auth/guards/non-auth.guard";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { OrderLayoutComponent } from "./layouts/order-layout/order-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
      },
    ],
  },
  {
    path: 'zamowienie',
    component: OrderLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [NonAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
