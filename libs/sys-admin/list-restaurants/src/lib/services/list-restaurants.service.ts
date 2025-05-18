import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SysAdminListRestaurantResponse } from '@common/models/sys-admin/restaurants';
import { PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class ListRestaurantsService {
  private apiUrl = '/api/sys-admin/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<PmoResponse<SysAdminListRestaurantResponse[]>> {
    return this.http.get<PmoResponse<SysAdminListRestaurantResponse[]>>(
      this.apiUrl,
    );
  }

  deleteRestaurant(id: string): Observable<PmoResponse<null>> {
    return this.http.delete<PmoResponse<null>>(`${this.apiUrl}/${id}`);
  }
}
