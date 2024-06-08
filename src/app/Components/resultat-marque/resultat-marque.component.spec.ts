import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatMarqueComponent } from './resultat-marque.component';

describe('ResultatMarqueComponent', () => {
  let component: ResultatMarqueComponent;
  let fixture: ComponentFixture<ResultatMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultatMarqueComponent]
    });
    fixture = TestBed.createComponent(ResultatMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
