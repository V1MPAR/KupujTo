import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from "./product-item/product-item.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
})
export class ProductItemModule { }
