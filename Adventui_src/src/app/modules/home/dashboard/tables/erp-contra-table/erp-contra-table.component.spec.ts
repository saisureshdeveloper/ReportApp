import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpContraTableComponent } from './erp-contra-table.component';

describe('ErpContraTableComponent', () => {
  let component: ErpContraTableComponent;
  let fixture: ComponentFixture<ErpContraTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpContraTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpContraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
