import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardMisEventosService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8180';
  
  getImage(nombrearchivo:string): any {

    const getImageUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getImageUrl, { responseType: 'blob' });
  }
}
