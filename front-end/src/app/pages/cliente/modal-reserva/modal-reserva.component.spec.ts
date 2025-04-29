import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservaComponent } from './modal-reserva.component';
import { CommonModule } from '@angular/common';

describe('ModalReservaComponent', () => {
  let component: ModalReservaComponent;
  let fixture: ComponentFixture<ModalReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReservaComponent, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
