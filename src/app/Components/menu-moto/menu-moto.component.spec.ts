import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMotoComponent } from './menu-moto.component';

describe('MenuMotoComponent', () => {
  let component: MenuMotoComponent;
  let fixture: ComponentFixture<MenuMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMotoComponent]
    });
    fixture = TestBed.createComponent(MenuMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
