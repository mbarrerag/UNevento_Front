import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityeventsComponent } from './communityevents.component';

describe('CommunityeventsComponent', () => {
  let component: CommunityeventsComponent;
  let fixture: ComponentFixture<CommunityeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
