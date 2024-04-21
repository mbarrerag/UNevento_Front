import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommunityeventsComponent } from './card-communityevents.component';

describe('CardCommunityeventsComponent', () => {
  let component: CardCommunityeventsComponent;
  let fixture: ComponentFixture<CardCommunityeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCommunityeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCommunityeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
