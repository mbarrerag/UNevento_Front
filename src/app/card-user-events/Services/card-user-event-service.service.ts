import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardUserEventServiceService {

  private apiUrl = 'https://uneventoback-production-3c28.up.railway.app';

  constructor(private http:HttpClient) { }

  getImage(nombrearchivo:string): any {

    const getImageUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getImageUrl, { responseType: 'blob' });
  }
}
