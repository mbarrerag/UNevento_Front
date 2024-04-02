import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteEventServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8180/deletedevent';

  deleteUserEvent(userId: number, token: string, eventId: Number): any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    console.log(eventId);
    const eventUrl = `${this.apiUrl}/${eventId}`;
    console.log(eventUrl)
    const result = this.http.delete(eventUrl, {headers: headers});
    console.log(result);
    return result;
   }
}
