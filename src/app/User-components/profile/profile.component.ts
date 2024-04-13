import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { ProfileService } from './Services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private sanitizer: DomSanitizer, private profileService: ProfileService) { }

  userData: any = {};
  userImage: any = {};

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

    this.profileService.getUserData(userID, token).subscribe((response: any) => {
      this.userData = response;
      console.log(this.userData);
      this.profileService.getImage(this.userData.imageUrl).subscribe((response: Blob) => {
        const objectUrl = URL.createObjectURL(response);
        this.userImage = objectUrl
        console.log(this.userImage);
      });
    });

    
  }

}
