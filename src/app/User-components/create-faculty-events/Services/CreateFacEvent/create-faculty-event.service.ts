import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateFacultyEventService {
  private apiUrl = 'http://localhost:8180';
  constructor(private http:HttpClient) {

   }



  CreateFacEventPhoto(newEvent: any, file:File, token:string, userID:number): Observable<any> {
    const formData: FormData = new FormData();

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${userID}, ${token}`,
      })
    };

    formData.append('newEvent', new Blob([JSON.stringify(newEvent)], { type: 'application/json' }));

    // Agrega el archivo de imagen

    formData.append('file', file);
    
    /* let emptyFile = new Blob([''], { type: 'image/jpeg' });
    formData.append('file', emptyFile, 'empty.jpg'); */


    const createFacEventUrl = `${this.apiUrl}/neweventun`;//URL del endpoint para crear un nuevo evento

    
    return this.http.post(createFacEventUrl,formData,httpOptions);
  }

  CreateFacEvent(newEvent: any, token:string, userID:number): Observable<any> {
    const formData: FormData = new FormData();
    //const boundary = 'boundary-' + Math.random().toString().substr(2);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `${userID}, ${token}`,
      })
    };

    formData.append('newEvent', new Blob([JSON.stringify(newEvent)], { type: 'application/json' }));


    const createFacEventUrl = `${this.apiUrl}/newevent`;//URL del endpoint para crear un nuevo evento

    
    return this.http.post(createFacEventUrl,formData,httpOptions);
  }
}
