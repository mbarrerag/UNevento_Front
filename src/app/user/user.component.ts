import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgFor,NgIf } from '@angular/common';
import { UserserviceService,Page } from './Services/userservice.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CardUserEventsComponent } from '../card-user-events/card-user-events.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,NgFor,NgIf,CardUserEventsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  constructor(private userService: UserserviceService,private cookieService:CookieService, private route:ActivatedRoute, private sanitizer:DomSanitizer) { 

    this.userevents = {} as Page<any>;
    this.userID = parseInt(this.cookieService.get('id') || '0'); // Usar CookieService
    this.token = this.cookieService.get('token') || ''; // Usar CookieService

  }
  user:number=0;
  userData:any={};
  userImage:any={};
  userevents: Page<any>;
  currentPage: number = 0;
  userID:number=0;
  token:string='';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const iduser = params.get('userId');
      this.user = iduser ? +iduser : 0;
    });

    this.userService.getUserData(this.user, this.userID, this.token).subscribe((response: any) => {
      this.userData = response;
      console.log(this.userData);
      this.userService.getImage(this.userData.imageUrl).subscribe((response: Blob) => {
        const objectUrl = URL.createObjectURL(response);
        this.userImage = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        console.log(this.userImage);
      });
    });

    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.userService.getUserEvents(this.user,this.userID, this.token, page).subscribe(
      data => {
        this.userevents = data;
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
    if (this.currentPage < this.userevents.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }

}
