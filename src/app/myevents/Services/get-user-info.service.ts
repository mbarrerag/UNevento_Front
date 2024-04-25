import { Injectable } from '@angular/core';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://uneventoback-production.up.railway.app/getuserevents'; 


  getUserEvents(userId: number, token: string): any {
    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });

    const userUrl = `${this.apiUrl}/${userId}`;
    return this.http.get(userUrl, {headers: headers});
  }
}
