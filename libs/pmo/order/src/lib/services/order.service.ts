import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PmoCreateOrderRequest } from '@common/models/pmo/orders';
import { OrderModel, PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);
  private apiUrl = '/api/orders';

  createOrder(
    order: PmoCreateOrderRequest,
  ): Observable<PmoResponse<OrderModel>> {
    return this.http.post<PmoResponse<OrderModel>>(`${this.apiUrl}/add`, order);
  }
}
