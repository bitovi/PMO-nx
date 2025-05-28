import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel, PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'any',
})
export class PmoMyOrderHistoryService {
  private baseUrl = '/api/orders-history';

  constructor(private http: HttpClient) {}

  /**
   * Get order history for a specific user by email
   * @param email The email of the user
   * @returns Observable of the order history response
   */
  getOrderHistory(email: string): Observable<PmoResponse<OrderModel[]>> {
    return this.http.get<PmoResponse<OrderModel[]>>(
      `${this.baseUrl}?email=${email}`,
    );
  }
}
