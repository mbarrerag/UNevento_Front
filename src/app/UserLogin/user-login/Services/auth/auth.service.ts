import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8180'; 
  private isAuthenticatedKey = 'isAuthenticated';
  private tokenKey = 'token'; 
  private idKey = 'id'; 
  private rolkey = 'rol'; 
  // private fotokey = 'foto'; 

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { 
    // Al inicializar el servicio, verificar si el usuario está autenticado y actualizar el BehaviorSubject
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  login(correo: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<any>(loginUrl, { correo, password }).pipe(
      tap((response) => {
        localStorage.setItem(this.isAuthenticatedKey, 'true');
        localStorage.setItem(this.tokenKey, response.token); 
        localStorage.setItem(this.idKey, response.id); 
        localStorage.setItem(this.rolkey, response.rol); 
        // localStorage.setItem(this.fotokey, response.foto); 
        localStorage.setItem(this.tokenKey, response.token); // Guardar el token en el localStorage
        localStorage.setItem(this.idKey, response.id); // Guardar el id en el localStorage
        this.isAuthenticatedSubject.next(true);
      })
    );
  }



  logout(): void {
    localStorage.removeItem(this.isAuthenticatedKey);
    localStorage.removeItem(this.tokenKey); 
    localStorage.removeItem(this.idKey); 
    localStorage.removeItem(this.rolkey); 
    // localStorage.removeItem(this.fotokey); 
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


