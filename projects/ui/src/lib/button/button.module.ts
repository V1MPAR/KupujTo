import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./secondary-button/secondary-button.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [PrimaryButtonComponent, SecondaryButtonComponent],
  exports: [PrimaryButtonComponent, SecondaryButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class ButtonModule { }
