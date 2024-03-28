import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8182'; 
  private isAuthenticatedKey = 'isAuthenticated';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { 
    // Al inicializar el servicio, verificar si el usuario está autenticado y actualizar el BehaviorSubject
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  login(correo: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<any>(loginUrl, { correo, password }).pipe(
      tap(() => {
        localStorage.setItem(this.isAuthenticatedKey, 'true'); // Establece la autenticación en true después de iniciar sesión
        this.isAuthenticatedSubject.next(true); // Notifica a los suscriptores que el usuario ha iniciado sesión
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.isAuthenticatedKey); // Elimina el estado de autenticación al cerrar sesión
    this.isAuthenticatedSubject.next(false); // Notifica a los suscriptores que el usuario ha cerrado sesión
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












// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = 'http://localhost:8182'; 
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

//   constructor(private http: HttpClient) { }

//   login(correo: string, password: string): Observable<any> {
//     const loginUrl = `${this.apiUrl}/login`;
//     return this.http.post<any>(loginUrl, { correo, password }).pipe(
//       tap(() => {
//         this.isAuthenticatedSubject.next(true); // Establece el estado de autenticación a true después de iniciar sesión
//       })
//     );
//   }

//   logout(): void {

//     this.isAuthenticatedSubject.next(false); // Establece el estado de autenticación a false al cerrar sesión
//   }

//   isLoggedIn(): Observable<boolean> {
//     return this.isAuthenticatedSubject.asObservable();
//   }
// }
