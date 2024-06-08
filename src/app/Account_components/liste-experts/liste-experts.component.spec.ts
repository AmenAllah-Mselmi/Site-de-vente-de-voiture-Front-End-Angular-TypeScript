import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExpertsComponent } from './liste-experts.component';

describe('ListeExpertsComponent', () => {
  let component: ListeExpertsComponent;
  let fixture: ComponentFixture<ListeExpertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeExpertsComponent]
    });
    fixture = TestBed.createComponent(ListeExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
