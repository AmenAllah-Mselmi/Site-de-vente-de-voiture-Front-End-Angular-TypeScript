import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCamionComponent } from './menu-camion.component';

describe('MenuCamionComponent', () => {
  let component: MenuCamionComponent;
  let fixture: ComponentFixture<MenuCamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCamionComponent]
    });
    fixture = TestBed.createComponent(MenuCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
