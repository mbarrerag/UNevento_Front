import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  private apiUrl = 'http://localhost:8180';
  constructor(private http:HttpClient) { }

  getUserData(userID:number, token:string): any {
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });

    const getUserDataUrl = `${this.apiUrl}/getuser/${userID}`;

    return this.http.get(getUserDataUrl, {headers: headers});
  }

  editData(nombre:string,apellido:string,userID:number, token:string){
    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });
    const updateDataUrl = `${this.apiUrl}/updateuser`;
    const body = {
      id: userID,
      nombre: nombre,
      apellido: apellido
    };
    return this.http.put(updateDataUrl, body, {headers: headers});
  }
}
