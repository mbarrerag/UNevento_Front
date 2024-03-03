import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMisEventosComponent } from './card-mis-eventos.component';

describe('CardMisEventosComponent', () => {
  let component: CardMisEventosComponent;
  let fixture: ComponentFixture<CardMisEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMisEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMisEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
