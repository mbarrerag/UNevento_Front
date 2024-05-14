import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVistaEventosComponent } from './admin-vista-eventos.component';

describe('AdminVistaEventosComponent', () => {
  let component: AdminVistaEventosComponent;
  let fixture: ComponentFixture<AdminVistaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVistaEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVistaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
