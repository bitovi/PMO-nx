import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OrderModel, PmoResponse } from '@common/models/common';
import { OrdersByRestaurantsResponse } from '@common/models/restaurants/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsAdminOrdersService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = '/api/restaurants/orders';

  getOrdersByRestaurant(
    restaurantId: string,
  ): Observable<PmoResponse<OrdersByRestaurantsResponse[]>> {
    return this.httpClient.get<PmoResponse<OrdersByRestaurantsResponse[]>>(
      `${this.apiUrl}/${restaurantId}`,
    );
  }

  updateOrderStatus(
    orderId: string,
    newStatus: OrderModel['status'],
  ): Observable<PmoResponse<OrdersByRestaurantsResponse>> {
    return this.httpClient.put<PmoResponse<OrdersByRestaurantsResponse>>(
      `${this.apiUrl}/${orderId}/status`,
      {
        newStatus,
      },
    );
  }
}
