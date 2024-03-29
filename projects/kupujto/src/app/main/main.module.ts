import { NgModule } from '@angular/core';

import { MainRouting } from './main.routing';
import { CommonModule } from "@angular/common";
import { MainComponent } from './containers/main/main.component';
import { ProductItemModule } from "../../../../ui/src/lib/product-item/product-item.module";
import { BasketItemModule } from "../../../../ui/src/lib/basket-item/basket-item.module";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRouting,
    CommonModule,
    ProductItemModule,
    BasketItemModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
