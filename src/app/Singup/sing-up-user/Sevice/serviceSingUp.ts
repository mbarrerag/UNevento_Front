import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class serviceSingUp {

  constructor(private http: HttpClient) { }

  getCode(): Observable<any> {
    return this.http.get<any>('http://localhost:8180/SendCode');
  }
}
