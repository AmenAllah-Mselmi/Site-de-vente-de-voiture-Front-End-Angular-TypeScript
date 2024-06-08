import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVoitureComponent } from './account-voiture.component';

describe('AccountVoitureComponent', () => {
  let component: AccountVoitureComponent;
  let fixture: ComponentFixture<AccountVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountVoitureComponent]
    });
    fixture = TestBed.createComponent(AccountVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
