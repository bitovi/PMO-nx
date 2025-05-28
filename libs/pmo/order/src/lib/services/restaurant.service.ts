import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant, PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private http = inject(HttpClient);
  private apiUrl = '/api';

  getRestaurants(restaurantId: string): Observable<PmoResponse<Restaurant>> {
    return this.http.get<PmoResponse<Restaurant>>(
      `${this.apiUrl}/restaurants/${restaurantId}`,
    );
  }
}
