import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTreeModule } from "@angular/material/tree";
import { ProductItemModule } from "../../../ui/src/lib/product-item/product-item.module";
import { MatMenuModule } from "@angular/material/menu";
import { BasketItemModule } from "../../../ui/src/lib/basket-item/basket-item.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBadgeModule } from "@angular/material/badge";
import { ButtonModule } from "../../../ui/src/lib/button/button.module";
import { OrderLayoutComponent } from './layouts/order-layout/order-layout.component';
import { PaymentDialogComponent } from './shared/dialogs/payment-dialog/payment-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {
  ProductDetailsDialogComponent
} from "./shared/dialogs/product-details-dialog/product-details-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    OrderLayoutComponent,
    ProductDetailsDialogComponent,
    PaymentDialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatTreeModule,
        MatSnackBarModule,
        ProductItemModule,
        BasketItemModule,
        MatMenuModule,
        ButtonModule,
        MatBadgeModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
