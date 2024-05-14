import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVistaUsuariosComponent } from './admin-vista-usuarios.component';

describe('AdminVistaUsuariosComponent', () => {
  let component: AdminVistaUsuariosComponent;
  let fixture: ComponentFixture<AdminVistaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVistaUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVistaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
