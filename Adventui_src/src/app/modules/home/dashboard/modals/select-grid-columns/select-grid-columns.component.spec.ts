import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGridColumnsComponent } from './select-grid-columns.component';

describe('SelectGridColmunsComponent', () => {
  let component: SelectGridColumnsComponent;
  let fixture: ComponentFixture<SelectGridColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGridColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGridColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
