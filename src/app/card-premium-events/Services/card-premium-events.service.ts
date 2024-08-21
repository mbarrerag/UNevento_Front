import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardPremiumEventsService {

  private apiUrl = 'https://uneventoback-production-58ed.up.railway.app';

  constructor(private http:HttpClient) { }

  getCreatorData(userID:number, token:string,creatorID:number): any {
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    const getUserDataUrl = `${this.apiUrl}/getuser/${creatorID}`;

    return this.http.get(getUserDataUrl, {headers: headers});
  }

  getImage(nombrearchivo:string): any {

    const getImageUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getImageUrl, { responseType: 'blob' });
  }
}
