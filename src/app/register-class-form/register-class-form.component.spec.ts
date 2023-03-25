import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClassFormComponent } from './register-class-form.component';

describe('RegisterClassFormComponent', () => {
  let component: RegisterClassFormComponent;
  let fixture: ComponentFixture<RegisterClassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClassFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
