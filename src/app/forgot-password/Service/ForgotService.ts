import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http: HttpClient) { }

  getCode(email: string): Observable<any> {
    console.log(email);
    // Send userData.email in the request body
    return this.http.post<any>('https://uneventoback-production-58ed.up.railway.app/sendCode', {email: email });
  }
}
