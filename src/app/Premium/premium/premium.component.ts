
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-premium',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})



export class PremiumComponent {
constructor(private http: HttpClient, private authService: AuthService, private Router: Router){}



  async realizarPago(id: number, precio: number) {

  const url = "https://uneventoback-production-3c28.up.railway.app/create-preference";
  if (this.authService.isLoggedIn()) { // Corrige el acceso a isLoggedIn()


    try {
      console.log('Realizando pago por plan UNevento...');

      const response: any = await this.http.post(url, { id: id, title: "Pago por plan UNevento", unit_price: precio, quantity: 1 }).toPromise();
      
      console.log('Respuesta del backend:', response);

      const id_preference = response.id;    
      window.open(response.initPoint, '_blank');




    // const url2 = "https://uneventoback-production-3c28.up.railway.app/Succes-update";
    // const responsew: any = await this.http.post(url, { id:id}).toPromise();
    



    } catch (error) {
      console.error('Error al procesar el pago:', error);
    }
    } else {
      this.Router.navigate(['/login']);
    }
  }


}


  