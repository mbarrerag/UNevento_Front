import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCommentsInfo{

    private getcommentsurl: string = 'https://uneventoback-production-3c28.up.railway.app/comments';
    private replyurl: string = 'https://uneventoback-production-3c28.up.railway.app/response';
    private addcommentUrl : string = 'https://uneventoback-production-3c28.up.railway.app/addcomment';
    private imageUrl: string = 'https://uneventoback-production-3c28.up.railway.app/images/';



    
    constructor(private http: HttpClient) { }


    getcomment(userId: number, token: string, idEvent: number): any {
        const headers = new HttpHeaders ({
          'Authorization': `${userId}, ${token}`,
        });
        const urlRequest = `${this.getcommentsurl}/${idEvent}`;
        return this.http.get(urlRequest, {headers: headers});
      }

      

      addcomments(userId: number, token: string, idEvent: number, comment: string): Observable<any> {
        const headers = new HttpHeaders({
          'Authorization': `${userId}, ${token}`,
        });
      
        const body = {
          id_usuario: userId,
          id_evento: idEvent,
          comentario: comment
        };
      
        return this.http.post(this.addcommentUrl, body, { headers: headers });
      }


      replycomment(commentId: number, token: string, userId: number, newAnswer: string):Observable <any> {
        const headers = new HttpHeaders ({
          'Authorization': `${userId}, ${token}`,
        });

        const body = {
          commentId: commentId,
          userId: userId,
          answer: newAnswer
        };

        return this.http.post(this.replyurl, body, { headers: headers });
      }
      

      getImage(nombrearchivo:string): any {
        const getImageUrl = `${this.imageUrl}${nombrearchivo}`;
        return this.http.get(getImageUrl, { responseType: 'blob' });
      
      }
}