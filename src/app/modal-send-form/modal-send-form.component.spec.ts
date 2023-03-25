import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSendFormComponent } from './modal-send-form.component';

describe('ModalSendFormComponent', () => {
  let component: ModalSendFormComponent;
  let fixture: ComponentFixture<ModalSendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSendFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
