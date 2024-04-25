import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { CardCommunityeventsComponent } from '../card-communityevents/card-communityevents.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommunityeventsService } from './Services/communityevents.service';

@Component({
  selector: 'app-communityevents',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardCommunityeventsComponent,NgFor,NgIf],
  templateUrl: './communityevents.component.html',
  styleUrl: './communityevents.component.css'
})
export class CommunityeventsComponent {

  constructor(private communityeventsService: CommunityeventsService) { }

  events: any = [];

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

    this.communityeventsService.getCommunityEvents(userID, token).subscribe((response: any) => {
      this.events = response.content;
      console.log(this.events);
    });
  
  }
}
