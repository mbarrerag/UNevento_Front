import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetParticularEventoService{

  private url: string = 'http://localhost:8180/getevent/';
  private urlValidate: string = 'http://localhost:8180/validateEvent'
  private imageUrl: string = 'http://localhost:8180/';
  private assistUrl: string = 'http://localhost:8180/assistevent';
  private declineUrl: string = 'http://localhost:8180/deletedassistance';
  
  constructor(private http: HttpClient) { }

  getParticularEvent(userId: number, token: string, idEvent: number): any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    const urlRequest = `${this.url}${idEvent}`;
    return this.http.get(urlRequest, {headers: headers});
  }

  assistingEvent(userId: number, token: string, idEvent: number): any {
    const headers = {
      'Authorization': `${userId}, ${token}`,
    }
    const urlRequest: string = `${this.urlValidate}`;
    return this.http.post(urlRequest,{idUsuario: userId, idEvento: idEvent} ,{headers: headers});
  }

  getImage(nombrearchivo:string): any {

    const getImageUrl = `${this.imageUrl}images/${nombrearchivo}`;

    return this.http.get(getImageUrl, { responseType: 'blob' });
  }

  assistEvent(userId: number, token: string, idEvent: number): any {
    const headers = new HttpHeaders ({
      'Authorization': `${userId}, ${token}`,
    });
    const message: any  = {
      idusuario: userId,
      estado: 'CONFIRMADO',
      eventoid: idEvent
    }
    return this.http.post(this.assistUrl, message,{ headers: headers })
  }

  notAssistEvent(userId: number, token: string, idEvent: number): any {
    const headers = new HttpHeaders({
      'Authorization': `${userId}, ${token}`,
    });
    const message: any = {
      idusuario: userId,
      eventoid: idEvent
    }
    return this.http.post(this.declineUrl, message, {headers: headers})
  }
}
