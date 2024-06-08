import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureAnnonce1Component } from './voiture-annonce1.component';

describe('VoitureAnnonce1Component', () => {
  let component: VoitureAnnonce1Component;
  let fixture: ComponentFixture<VoitureAnnonce1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureAnnonce1Component]
    });
    fixture = TestBed.createComponent(VoitureAnnonce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
