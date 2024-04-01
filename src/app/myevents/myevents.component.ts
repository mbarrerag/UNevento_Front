import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { CardMisEventosComponent } from '../card-mis-eventos/card-mis-eventos.component'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../commons/footer/footer.component'
import { NgFor } from '@angular/common';
import { GetUserInfoService } from './Services/get-user-info.service';

@Component({
  selector: 'app-myevents',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, NavbarComponent, CardMisEventosComponent,NgFor],
  templateUrl: './myevents.component.html',
  styleUrl: './myevents.component.css'
})
export class MyeventsComponent implements OnInit {
  
  constructor(private getUserInfoService: GetUserInfoService) {}
  result: any;
  events = [];

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';


    this.getUserInfoService.getUserEvents(userId, token).subscribe((response: any) => {
      this.events = response.content;
      console.log(this.events);
    });
  }
}
