import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserEventsComponent } from './card-user-events.component';

describe('CardUserEventsComponent', () => {
  let component: CardUserEventsComponent;
  let fixture: ComponentFixture<CardUserEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUserEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardUserEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
