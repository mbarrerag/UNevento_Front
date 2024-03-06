import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpUserComponent } from './sing-up-user.component';

describe('SingUpUserComponent', () => {
  let component: SingUpUserComponent;
  let fixture: ComponentFixture<SingUpUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingUpUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingUpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
