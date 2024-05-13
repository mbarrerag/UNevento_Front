import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPremiumEventsComponent } from './card-premium-events.component';

describe('CardPremiumEventsComponent', () => {
  let component: CardPremiumEventsComponent;
  let fixture: ComponentFixture<CardPremiumEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPremiumEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPremiumEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
