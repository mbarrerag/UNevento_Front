import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyassistsComponent } from './myassists.component';

describe('MyassistsComponent', () => {
  let component: MyassistsComponent;
  let fixture: ComponentFixture<MyassistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyassistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyassistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
