import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetParticularEventoService {

  private url: string = 'https://uneventoback-production.up.railway.app/getevent/'

  constructor(private http: HttpClient) { }

  getParticularEvent(userId: number, token: string, idEvent: number): any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    const urlRequest = `${this.url}${idEvent}`;
    return this.http.get(urlRequest, {headers: headers});
  }
}
