import { NgModule } from '@angular/core';

import { CategoryRouting } from './category.routing';
import { CommonModule } from "@angular/common";
import { ProductItemModule } from "../../../../ui/src/lib/product-item/product-item.module";
import { CategoryComponent } from "./containers/category/category.component";

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CategoryRouting,
    CommonModule,
    ProductItemModule
  ],
  providers: [],
  bootstrap: [CategoryComponent]
})
export class CategoryModule { }
