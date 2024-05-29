import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { MyAssistsService, Page } from './Services/my-assists.service';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CardMyAssistsComponent } from '../card-my-assists/card-my-assists.component';

@Component({
  selector: 'app-myassists',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgIf, NgFor, FormsModule, CardMyAssistsComponent],
  templateUrl: './myassists.component.html',
  styleUrl: './myassists.component.css'
})
export class MyassistsComponent {

  eventsassist: Page<any>;
  userId: number;
  token: string;
  currentPage: number = 0;
  OptionFilterCategoria: string;

  constructor(private myAssistsService: MyAssistsService, private cookieService: CookieService) {
    this.eventsassist = {} as Page<any>;
    this.userId = parseInt(this.cookieService.get('id') || '0'); // Usar CookieService
    this.token = this.cookieService.get('token') || ''; // Usar CookieService
    this.OptionFilterCategoria = "";
   }

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.myAssistsService.getMyAssists(this.userId, this.token, page).subscribe(
      data => {
        this.eventsassist = data;
        console.log(this.eventsassist);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }

  nextPage() {
    if (this.currentPage < this.eventsassist.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }

}
