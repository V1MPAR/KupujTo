import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { OrderDetailItemComponent } from "./order-detail-item/order-detail-item.component";

@NgModule({
  declarations: [OrderDetailItemComponent],
  exports: [OrderDetailItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class OrderDetailItemModule { }
