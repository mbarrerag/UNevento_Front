import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFacultiesComponent } from './card-faculties.component';

describe('CardFacultiesComponent', () => {
  let component: CardFacultiesComponent;
  let fixture: ComponentFixture<CardFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFacultiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
