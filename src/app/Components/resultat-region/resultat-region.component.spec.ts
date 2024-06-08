import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatRegionComponent } from './resultat-region.component';

describe('ResultatRegionComponent', () => {
  let component: ResultatRegionComponent;
  let fixture: ComponentFixture<ResultatRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatRegionComponent]
    });
    fixture = TestBed.createComponent(ResultatRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
