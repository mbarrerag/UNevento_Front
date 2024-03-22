import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class serviceSingUp {
  private baseUrl = 'http://localhost:8180/newuser'; // Reemplaza esto con la URL de tu backend



  // constructor(private http: HttpClient) { }
private http = inject(HttpClient)


  // createUser(userData: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl, userData);
  // }


  

  createUser(userData: any) {
  console.log(userData);
  
    return this.http.post<any>('http://localhost:8180/newuser', userData);
  }
}

