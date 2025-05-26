import { inject, Injectable } from '@angular/core';
import {
  RestaurantLoginRequest,
  RestaurantLoginResponse,
} from '@common/models/restaurants/auth';
import { PmoHttpStatus, PmoResponse } from '@common/models/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsAuthService {
  private readonly apiUrl = '/api/restaurants/auth';
  private readonly httpCLient = inject(HttpClient);

  login(
    restaurantLoginRequest: RestaurantLoginRequest,
  ): Observable<PmoResponse<RestaurantLoginResponse>> {
    return this.httpCLient.post<PmoResponse<RestaurantLoginResponse>>(
      `${this.apiUrl}/login`,
      restaurantLoginRequest,
    );
  }
}
