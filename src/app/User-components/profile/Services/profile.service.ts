import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://uneventoback-production.up.railway.app';
  constructor(private http:HttpClient) { }

  getUserData(userID:number, token:string): any {
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    const getUserDataUrl = `${this.apiUrl}/getuser/${userID}`;

    return this.http.get(getUserDataUrl, {headers: headers});
  }


  getImage(nombrearchivo:string): any {

    const getUserDataUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getUserDataUrl, { responseType: 'blob' });
  }

}
