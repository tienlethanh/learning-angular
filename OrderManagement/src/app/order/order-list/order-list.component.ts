import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [OrderService]
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(){
    this.getOrderFromService();
  }
  getOrderFromService():void{
    this.orderService.getOrderFromData().subscribe(
      updatedOrders => this.orders = this.orders =updatedOrders
    );
  }

  add(
    id: number, 
    userID:string, 
    address:string,
    dateOrder:string,
    totalPrice:number,
    status:boolean
  ){
    
  }


}
