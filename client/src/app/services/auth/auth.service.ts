import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api';
  private registerUrl = `${this.baseUrl}/register`;
  private loginUrl = `${this.baseUrl}/login`;

  constructor(private http: HttpClient) {}

  register(firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<any>(this.registerUrl, { firstName, lastName, email, password });
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.loginUrl, { email, password });
  }
}
