import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class forgotPassword {

private http = inject(HttpClient)


  updateUser(userData: any, password: any): Observable<any> {
  console.log("la data enviada:",{"correo":userData.correo, "newPassword":password});
  
    return this.http.put<any>('http://localhost:8180/updatepassword', {"correo":userData.correo, "newPassword":password});

  }
}
