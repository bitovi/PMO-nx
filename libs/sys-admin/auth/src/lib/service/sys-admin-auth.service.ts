import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SysAdminAuthLoginRequest,
  SysAdminAuthLoginResponse,
} from '@common/models/sys-admin/auth';
import { PmoResponse } from '@common/models/common';

@Injectable({
  providedIn: 'root',
})
export class SysAdminAuthService {
  private readonly API_URL = '/api'; // You can adjust this base URL as needed

  constructor(private http: HttpClient) {}

  login(request: SysAdminAuthLoginRequest) {
    return this.http.post<PmoResponse<SysAdminAuthLoginResponse>>(
      `${this.API_URL}/sys-admin/auth/login`,
      request,
    );
  }
}
