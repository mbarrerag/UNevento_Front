import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
export class CommunityeventsService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://uneventoback-production-58ed.up.railway.app';

  getCommunityEvents(userID:number, token:string, page:number): Observable<Page<any>> {
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    const params = new HttpParams().set('page', page.toString());

    const getUserDataUrl = `${this.apiUrl}/publicevents`;

    return this.http.get(getUserDataUrl, {headers: headers, params: params}).pipe(
      map((response:any) => response as Page<any>)
    );
  }

}
