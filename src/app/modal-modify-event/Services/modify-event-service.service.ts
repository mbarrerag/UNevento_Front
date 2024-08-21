import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyEventServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://uneventoback-production-58ed.up.railway.app'; 

  

  updateEvent(UpdateEvent: any,file:File, userId: number, token: string): any {
    const formData: FormData = new FormData();

    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });
    formData.append('UpdateEvent',new Blob([JSON.stringify(UpdateEvent)], { type: 'application/json' }));
    formData.append('file', file);

    const eventUrl = `${this.apiUrl}/updatetevent`;
    return this.http.put(eventUrl, formData, {headers: headers})
  }
  getImage(nombrearchivo:string): any {

    const getUserDataUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getUserDataUrl, { responseType: 'blob' });
  }
}
