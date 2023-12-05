import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/register';
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post<any>(this.registerUrl, user);
  }

  login(user: any) {
    return this.http.post<any>(this.loginUrl, user);
  }
}
