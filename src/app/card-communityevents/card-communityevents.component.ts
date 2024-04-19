import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-communityevents',
  standalone: true,
  imports: [],
  templateUrl: './card-communityevents.component.html',
  styleUrl: './card-communityevents.component.css'
})
export class CardCommunityeventsComponent {
  @Input() data: any;

}
