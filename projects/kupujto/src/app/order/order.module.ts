import { NgModule } from '@angular/core';

import { OrderRouting } from './order.routing';
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./containers/order/order.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { OrderDetailItemModule } from "../../../../ui/src/lib/order-detail-item/order-detail-item.module";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrderRouting,
    CommonModule,
    OrderDetailItemModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [OrderComponent]
})
export class OrderModule { }
