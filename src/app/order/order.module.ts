import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './order.route'
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    routing
  ],
  providers: [],
})
export class OrderModule { }