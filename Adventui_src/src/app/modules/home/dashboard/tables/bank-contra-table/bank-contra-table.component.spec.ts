import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankContraTableComponent } from './bank-contra-table.component';

describe('BankContraTableComponent', () => {
  let component: BankContraTableComponent;
  let fixture: ComponentFixture<BankContraTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankContraTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankContraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
