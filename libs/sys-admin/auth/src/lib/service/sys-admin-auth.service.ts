import { Injectable, resource } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthResponse {
  token?: string;
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SysAdminAuthService {
  private readonly API_URL = '/api'; // You can adjust this base URL as needed

  constructor(private http: HttpClient) {}

  login(name: string) {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, {
      name,
    });
  }
}
