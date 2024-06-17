import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getAttendance(idEvento:number, userId:number, token:String){
    const getAttendanceUrl = `${this.apiUrl}/eventos/${idEvento}/asistentes`

    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });

    return this.http.get(getAttendanceUrl, {headers:headers});
  }
}
