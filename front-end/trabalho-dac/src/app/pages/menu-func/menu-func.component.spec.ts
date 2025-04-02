import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncComponent } from './menu-func.component';

describe('MenuFuncComponent', () => {
  let component: MenuFuncComponent;
  let fixture: ComponentFixture<MenuFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFuncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
