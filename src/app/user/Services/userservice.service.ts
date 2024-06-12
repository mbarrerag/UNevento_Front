import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Page<T> { // Define la interfaz Page
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  private  apiUrl = 'https://uneventoback-production-3c28.up.railway.app';



  //user → Numero de usuario al cual se le hace la consulta, en general diferente que el que hace la consulta
  //Consultar Información del Usuario
  getUserData(user:number, userId:number, token:string): any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    const userUrl = `${this.apiUrl}/getuser/${user}`;
    const result = this.http.get(userUrl, {headers: headers});
    return result;
  }
  //Consultar Imagen del Usuario
  getImage(nombrearchivo:string): any {

    const getUserDataUrl = `${this.apiUrl}/images/${nombrearchivo}`;

    return this.http.get(getUserDataUrl, { responseType: 'blob' });
  }
  //Consultar Eventos del Usuario
  getUserEvents(user:number ,userId: number, token: string, page:number): Observable<Page<any>> {
    const headers =  new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });

    const params = new HttpParams().set('page', page.toString());

    const userUrl = `${this.apiUrl}/getuserevents/${user}`;
    return this.http.get(userUrl, {headers: headers, params:params}).pipe(
      map((response:any) => response as Page<any>)
    );
  }
}
