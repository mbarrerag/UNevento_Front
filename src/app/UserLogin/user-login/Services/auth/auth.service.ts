import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NavbarComponent } from '../../../../commons/navbar/navbar.component';
import { blob } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://uneventoback-production.up.railway.app'; 
  private isAuthenticatedKey = 'isAuthenticated';
  private tokenKey = 'token'; 
  private idKey = 'id'; 
  private rolkey = 'rol'; 
  private imagekey = 'imagekey'; 

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();


  private imageSubject = new BehaviorSubject<string>(''); // BehaviorSubject para la imagen
  image$: Observable<string> = this.imageSubject.asObservable();

  constructor(private http: HttpClient) { 
    const storedImage = localStorage.getItem(this.imagekey);
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
        localStorage.setItem(this.isAuthenticatedKey, 'true');
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.idKey, response.id);
        this.isAuthenticatedSubject.next(true);

        const jwtTokenString = response.jwtToken.toString(); // Convertir token a string
  
        console.log('Datos enviados a userinformation:', `${response.userId} ${jwtTokenString}`);
        const userInfoUrl = `${this.apiUrl}/userinformation`;
        const headers = new HttpHeaders({
          'Authorization': `${response.userId}, ${jwtTokenString}` // Concatenar las cadenas de texto
        });
  
        this.http.post<any>(userInfoUrl, { email: correo }, { headers }).subscribe(userInfoResponse => {
          console.log(userInfoResponse);
          localStorage.setItem(this.rolkey, userInfoResponse.rol);
          localStorage.setItem(this.imagekey, userInfoResponse.imageUrl);
  
          const imageName = userInfoResponse.imageUrl.split('/').pop(); 
          const imageUrl = `${this.apiUrl}/images/${imageName}`; 

          console.log("imagen:", imageUrl)
          localStorage.setItem(this.imagekey, imageUrl);

        });

      })
    );
    
  }
  
  


      









  logout(): void {
    localStorage.removeItem(this.isAuthenticatedKey);
    localStorage.removeItem(this.tokenKey); 
    localStorage.removeItem(this.idKey); 
    localStorage.removeItem(this.rolkey); 
    localStorage.removeItem(this.imagekey); 
    this.isAuthenticatedSubject.next(false);
  }

  isLoggedIn(): boolean {
    // Verifica si localStorage está definido antes de intentar acceder a él
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.isAuthenticatedKey) === 'true';
    } else {
      // Si localStorage no está definido, devuelve false
      return false;
    }
  }
}
