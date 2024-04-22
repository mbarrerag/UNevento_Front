import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalForgotPassword } from './modalForgotPassword.component';

describe('modalForgotPassword', () => {
  let component: ModalForgotPassword;
  let fixture: ComponentFixture<ModalForgotPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalForgotPassword]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalForgotPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
