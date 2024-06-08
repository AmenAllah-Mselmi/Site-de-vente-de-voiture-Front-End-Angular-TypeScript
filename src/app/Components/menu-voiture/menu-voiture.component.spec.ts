import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVoitureComponent } from './menu-voiture.component';

describe('MenuVoitureComponent', () => {
  let component: MenuVoitureComponent;
  let fixture: ComponentFixture<MenuVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuVoitureComponent]
    });
    fixture = TestBed.createComponent(MenuVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
