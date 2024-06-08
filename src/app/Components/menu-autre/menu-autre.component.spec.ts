import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAutreComponent } from './menu-autre.component';

describe('MenuAutreComponent', () => {
  let component: MenuAutreComponent;
  let fixture: ComponentFixture<MenuAutreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAutreComponent]
    });
    fixture = TestBed.createComponent(MenuAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
