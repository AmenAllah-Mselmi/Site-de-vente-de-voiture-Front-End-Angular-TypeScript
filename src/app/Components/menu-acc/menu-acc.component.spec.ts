import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAccComponent } from './menu-acc.component';

describe('MenuAccComponent', () => {
  let component: MenuAccComponent;
  let fixture: ComponentFixture<MenuAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAccComponent]
    });
    fixture = TestBed.createComponent(MenuAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
