import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketItemComponent } from "./basket-item/basket-item.component";

@NgModule({
  declarations: [BasketItemComponent],
  exports: [BasketItemComponent],
  imports: [
    CommonModule,
  ],
})
export class BasketItemModule { }
