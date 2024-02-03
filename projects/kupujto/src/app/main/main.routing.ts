import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./containers/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'kategoria/:category',
    loadChildren: () => import('../category/category.module').then(m => m.CategoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouting { }
