import { NgModule } from '@angular/core';
import { OrderListComponent } from "./order/order-list/order-list.component";
import { Order } from "./order/order";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { DashboardComponent } from "./order/dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'orders', component: OrderListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: OrderDetailComponent}
];
@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
