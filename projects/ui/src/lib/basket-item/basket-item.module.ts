import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketItemComponent } from "./basket-item/basket-item.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [BasketItemComponent],
  exports: [BasketItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class BasketItemModule { }
