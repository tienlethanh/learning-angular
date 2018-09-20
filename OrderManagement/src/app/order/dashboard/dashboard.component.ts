import { Component, OnInit } from '@angular/core';
import { Order } from "../order";
import { OrderService } from "../order.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrder();
  }
  getOrder():void{
    this.orderService.getOrderFromData().subscribe(orders => this.orders = orders.slice(1,5))
  }

}
