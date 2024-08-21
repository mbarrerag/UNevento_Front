import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {

  constructor(private http: HttpClient) { }

  private url : string = 'https://uneventoback-production-58ed.up.railway.app/allusers';
  private imageUrl: string = 'https://uneventoback-production-58ed.up.railway.app/images/';
  private deleteUrl: string = 'https://uneventoback-production-58ed.up.railway.app/deletedUser/';

  getAllUsers(userId: number, token: string, page: number) : any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    const params = new HttpParams().set('page', page.toString()).set('size', '8');
    return this.http.get(this.url, {headers: headers, params: params})
  }

  getImage(nombrearchivo:string): any {

    const getImageUrl = `${this.imageUrl}${nombrearchivo}`;

    return this.http.get(getImageUrl, { responseType: 'blob' });
  }

  deleteUser(userId: number, token: string, deleteUserId: number) : any {
    const headers = new HttpHeaders({
      'Authorization': `${userId}, ${token}`
    });
    const urlRequest: string = `${this.deleteUrl}${deleteUserId}`;
    return this.http.delete(urlRequest,{headers: headers});
  }
}
