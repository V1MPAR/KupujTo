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
import { ProductDetailsDialogComponent } from './shared/dialogs/product-details-dialog/product-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProductDetailsDialogComponent,
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
    ProductItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
