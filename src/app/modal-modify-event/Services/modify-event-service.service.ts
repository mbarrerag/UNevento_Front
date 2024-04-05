import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyEventServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8180/updatetevent'; 

  

  updateEvent(modifiedEvent: any, userId: number, token: string): any {
    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });
    console.log(modifiedEvent.id);

    const eventUrl = `${this.apiUrl}`;
    return this.http.put(eventUrl, modifiedEvent, {headers: headers})
  }
}
