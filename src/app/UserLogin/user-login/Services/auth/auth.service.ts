import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://uneventoback-production-3c28.up.railway.app'; 
  private isAuthenticatedKey = 'isAuthenticated';
  private tokenKey = 'token'; 
  private idKey = 'id'; 
  private rolkey = 'rol'; 
  private imagekey = 'imagekey'; 

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  private imageSubject = new BehaviorSubject<string>(''); // BehaviorSubject para la imagen
  image$: Observable<string> = this.imageSubject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) { 
    const storedImage = this.cookieService.get(this.imagekey);
    if (storedImage) {
      this.imageSubject.next(storedImage);
    }
    
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  getImage(): string {
    return this.imageSubject.value;
  }

  login(correo: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    
    return this.http.post<any>(loginUrl, { correo, password }).pipe(
      tap((response) => {
        this.cookieService.set(this.isAuthenticatedKey, 'true');
        this.cookieService.set(this.tokenKey, response.token);
        this.cookieService.set(this.idKey, response.id);
        this.isAuthenticatedSubject.next(true);

        const jwtTokenString = response.jwtToken.toString(); // Convertir token a string

        console.log('Datos enviados a userinformation:', `${response.userId} ${jwtTokenString}`);
        const userInfoUrl = `${this.apiUrl}/userinformation`;
        const headers = new HttpHeaders({
          'Authorization': `${response.userId}, ${jwtTokenString}` // Concatenar las cadenas de texto
        });

        this.http.post<any>(userInfoUrl, { email: correo }, { headers }).subscribe(userInfoResponse => {
          console.log(userInfoResponse);

          this.cookieService.set(this.rolkey, userInfoResponse.rol);
          this.cookieService.set(this.imagekey, userInfoResponse.imageUrl);


          const imageName = userInfoResponse.imageUrl.split('/').pop(); 
          const imageUrl = `${this.apiUrl}/images/${imageName}`; 

          console.log("imagen:", imageUrl);
          this.cookieService.set(this.imagekey, imageUrl);
          this.imageSubject.next(imageUrl); // Actualiza el BehaviorSubject con la URL de la imagen
        });
      })
    );
  }

  logout(): void {
    this.cookieService.delete(this.isAuthenticatedKey);
    this.cookieService.delete(this.tokenKey); 
    this.cookieService.delete(this.idKey); 
    this.cookieService.delete(this.rolkey); 
    this.cookieService.delete(this.imagekey); 
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.cookieService.get(this.isAuthenticatedKey) === 'true';
  }
}
