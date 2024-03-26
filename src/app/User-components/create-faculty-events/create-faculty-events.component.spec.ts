import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacultyEventsComponent } from './create-faculty-events.component';

describe('CreateFacultyEventsComponent', () => {
  let component: CreateFacultyEventsComponent;
  let fixture: ComponentFixture<CreateFacultyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFacultyEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFacultyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
