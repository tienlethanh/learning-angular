import { Order } from './../order';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

}
