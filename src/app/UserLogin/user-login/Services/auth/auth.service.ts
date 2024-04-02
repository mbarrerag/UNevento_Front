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
  private tokenKey = 'token'; // Agregar clave para el token
  private idKey = 'id'; // Agregar clave para el id
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