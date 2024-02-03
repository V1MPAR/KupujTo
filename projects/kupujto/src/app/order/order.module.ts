import { NgModule } from '@angular/core';

import { OrderRouting } from './order.routing';
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./containers/order/order.component";
import { BasketItemModule } from "../../../../ui/src/lib/basket-item/basket-item.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrderRouting,
    CommonModule,
    BasketItemModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [OrderComponent]
})
export class OrderModule { }
