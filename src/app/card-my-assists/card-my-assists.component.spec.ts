import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyAssistsComponent } from './card-my-assists.component';

describe('CardMyAssistsComponent', () => {
  let component: CardMyAssistsComponent;
  let fixture: ComponentFixture<CardMyAssistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMyAssistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMyAssistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
