import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '@common/models/common';
import { PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private apiUrl = '/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<PmoResponse<Restaurant[]>> {
    return this.http.get<PmoResponse<Restaurant[]>>(this.apiUrl);
  }
}
