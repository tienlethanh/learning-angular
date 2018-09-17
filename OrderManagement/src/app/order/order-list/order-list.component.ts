import { Component, OnInit } from '@angular/core';
import { Order} from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService ) { }
  getOrderfromService(): void{
    this.orderService.getOrderFromData().subscribe(orders => this.orders =orders);
  }

  ngOnInit() {
    this.getOrderfromService();
  }

}
