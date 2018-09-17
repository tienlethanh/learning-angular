import { Injectable } from '@angular/core';
import { Order } from "./order";

//get data asynchronously with Observable
import { Observable } from "rxjs";
import { map,tap, catchError } from "rxjs/operators";
import { of } from 'rxjs';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:3000/orders'
  constructor(private http: HttpClient) { }

  getOrderFromData(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url).pipe(
      tap(receivedOrders => console.log(`receivedOrders= ${JSON.stringify(receivedOrders)}`)),
      catchError(error =>of([]))
    );
  }
}
