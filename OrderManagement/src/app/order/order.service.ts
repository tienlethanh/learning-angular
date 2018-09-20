import { Injectable } from '@angular/core';
import { Order } from "./order";

//get data asynchronously with Observable
import { Observable } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { of } from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:3000/orders'
  constructor(private http: HttpClient) { }

  getOrderFromData(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }
  getOrderFromId(id: number): Observable<Order> {
    const url = `${this.url}/${id}`;
    return this.http.get<Order>(url);
  }

  updateOrder(order: Order): Observable<any> {
    return this.http.put(`${this.url}/${order.id}`, order, httpOptions);
  }

  addOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>(this.url, newOrder, httpOptions)
  }
}

