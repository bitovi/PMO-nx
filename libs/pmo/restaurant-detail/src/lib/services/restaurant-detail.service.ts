import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel, PmoResponse, Restaurant } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class RestaurantDetailService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}/restaurants/${id}`);
  }

  placeOrder(orderData: {
    restaurantId: string;
    customer: {
      name: string;
      email: string;
      phoneNumber: string;
      address: string;
    };
    items: {
      id: string;
      name: string;
      quantity: number;
      price: number;
    }[];
  }): Observable<PmoResponse<OrderModel>> {
    return this.http.post<PmoResponse<OrderModel>>(
      `${this.apiUrl}/orders/add`,
      orderData,
    );
  }
}
