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



  CreateFacEvent(newEvent: any, file:File, token:string, userID:number): Observable<any> {
    const formData: FormData = new FormData();

    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    formData.append('newEvent', JSON.stringify(newEvent));

    // Agrega el archivo de imagen

    formData.append('file', file, file.name);
    
    /* let emptyFile = new Blob([''], { type: 'image/jpeg' });
    formData.append('file', emptyFile, 'empty.jpg'); */


    console.log(formData.get('newEvent'),formData.get('file'));



    const createFacEventUrl = `${this.apiUrl}/newevent`;//URL del endpoint para crear un nuevo evento

    
    return this.http.post(createFacEventUrl,formData,{headers: headers});
  }
}
