import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommunityEventsComponent } from './create-community-events.component';

describe('CreateCommunityEventsComponent', () => {
  let component: CreateCommunityEventsComponent;
  let fixture: ComponentFixture<CreateCommunityEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCommunityEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCommunityEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
