import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardMisEventosService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://uneventoback-production-58ed.up.railway.app';
  
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
