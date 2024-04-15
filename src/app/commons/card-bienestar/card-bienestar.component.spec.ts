import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBienestarComponent } from './card-bienestar.component';

describe('CardBienestarComponent', () => {
  let component: CardBienestarComponent;
  let fixture: ComponentFixture<CardBienestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBienestarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
