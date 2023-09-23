import { NgModule } from '@angular/core';

import { AuthRouting } from './auth.routing';
import { AuthComponent } from './containers/auth/auth.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRouting,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
