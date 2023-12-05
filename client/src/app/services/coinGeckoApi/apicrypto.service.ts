import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicryptoService {
  private apiUrl = 'http://localhost:5000/api/cryptos';

  constructor(private http: HttpClient) { }

  getCryptos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
