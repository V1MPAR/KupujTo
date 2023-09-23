import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthGuard } from "./auth/guards/non-auth.guard";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'welcome',
  //   pathMatch: 'full',
  //   title: 'Ekoncept — konfigurator hotelowy'
  // },
  // {
  //   path: 'welcome',
  //   component: WelcomeComponent,
  //   canActivate: [NonAuthGuard],
  //   title: 'Ekoncept — konfigurator hotelowy'
  // },
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
