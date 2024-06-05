import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleIFrameComponent } from './toggle-iframe.component';

describe('ToggleIFrameComponent', () => {
  let component: ToggleIFrameComponent;
  let fixture: ComponentFixture<ToggleIFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleIFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleIFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
