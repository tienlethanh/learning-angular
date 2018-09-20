import { Order } from './../order';
import { Component, OnInit, Input } from '@angular/core';

//Router

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { OrderService } from "../order.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOrderFromRoute();
  }
  getOrderFromRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    //call service to get order from id
    this.orderService.getOrderFromId(id).subscribe( order =>this.order = order);
  }
  save():void{
    this.orderService.updateOrder(this.order).subscribe(() => this.goBack());
  }
  goBack():void{
    this.location.back();
  }

}
