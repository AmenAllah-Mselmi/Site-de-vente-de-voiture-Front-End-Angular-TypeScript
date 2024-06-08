import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNavbarSearchComponent } from './result-navbar-search.component';

describe('ResultNavbarSearchComponent', () => {
  let component: ResultNavbarSearchComponent;
  let fixture: ComponentFixture<ResultNavbarSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultNavbarSearchComponent]
    });
    fixture = TestBed.createComponent(ResultNavbarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
