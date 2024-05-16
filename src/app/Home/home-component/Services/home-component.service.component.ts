import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../../myevents/Services/get-user-info.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OficialEventService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://uneventoback-production-3c28.up.railway.app';

  getOficialEvents(facultyName: string, page: number): Observable<Page<any>> { // Corrige la declaración del método
    const getUserDataUrl = `${this.apiUrl}/home/${facultyName}`;
    console.log(getUserDataUrl)
    // const params = new HttpParams().set('page', page.toString());

    return this.http.get(getUserDataUrl).pipe(
      map((response: any) => response as Page<any>)
    );
  }
}