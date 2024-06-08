import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLocationComponent } from './menu-location.component';

describe('MenuLocationComponent', () => {
  let component: MenuLocationComponent;
  let fixture: ComponentFixture<MenuLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLocationComponent]
    });
    fixture = TestBed.createComponent(MenuLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
