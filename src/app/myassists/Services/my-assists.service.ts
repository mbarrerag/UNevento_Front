import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
export class MyAssistsService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'https://uneventoback-production-58ed.up.railway.app/MisAsistencias';

  getMyAssists(userId: number, token: string, page:number): Observable<Page<any>>{
    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });

    const params = new HttpParams().set('page', page.toString());

    const userUrl = `${this.apiUrl}/${userId}`;
    return this.http.get(userUrl, {headers: headers, params:params}).pipe(
      map((response:any) => response)
    );
  }
}
