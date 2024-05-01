import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityeventsService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8180';

  getCommunityEvents(userID:number, token:string): any {
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    const getUserDataUrl = `${this.apiUrl}/publicevents`;

    return this.http.get(getUserDataUrl, {headers: headers});
  }

}
