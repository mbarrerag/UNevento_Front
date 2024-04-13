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

  getImage(nombrearchivo:string): any {

    const getUserDataUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getUserDataUrl, { responseType: 'blob' });
  }

  editData(userData: any,file: File,userID:number, token:string){
    const formData: FormData = new FormData();

    const headers = new HttpHeaders({
      'Authorization': `${userID}, ${token}`,
    });
    const updateDataUrl = `${this.apiUrl}/updateuser`;

    formData.append('userData',new Blob([JSON.stringify(userData)], { type: 'application/json' }))
    formData.append('file', file);

    return this.http.put(updateDataUrl, formData, {headers: headers});
  }

  
}
