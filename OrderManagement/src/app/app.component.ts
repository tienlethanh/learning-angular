import { Component } from '@angular/core';
import { OrderListComponent } from "./order/order-list/order-list.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OrderManagement';
  selectedOrder:boolean = true;
}

