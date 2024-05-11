import { Injectable } from '@angular/core';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { response } from 'express';

export interface Page<T> { // Define la interfaz Page
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8180/getuserevents'; 


  getUserEvents(userId: number, token: string, page:number): Observable<Page<any>> {
    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });

    const params = new HttpParams().set('page', page.toString());

    const userUrl = `${this.apiUrl}/${userId}`;
    return this.http.get(userUrl, {headers: headers, params:params}).pipe(
      map((response:any) => response as Page<any>)
    );
  }
}
