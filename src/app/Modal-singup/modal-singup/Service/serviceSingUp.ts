import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class serviceSingUp {

private http = inject(HttpClient)


  createUser(userData: any) {
  console.log(userData);
  
    return this.http.post<any>('http://localhost:8182/newuser', userData);
  }
}
