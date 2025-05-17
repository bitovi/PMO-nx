import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SysAdminAddRestaurantRequest,
  SysAdminListRestaurantResponse,
} from '@common/models/sys-admin/restaurants';
import { PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class AddRestaurantService {
  private readonly API_URL = 'api/restaurants';
  private http = inject(HttpClient);

  addRestaurant(
    restaurant: SysAdminAddRestaurantRequest,
  ): Observable<PmoResponse<SysAdminListRestaurantResponse[]>> {
    return this.http.post<PmoResponse<SysAdminListRestaurantResponse[]>>(
      `${this.API_URL}/add`,
      restaurant,
    );
  }
}
