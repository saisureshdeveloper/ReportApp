import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedTableComponent } from './matched-table.component';

describe('MatchedTableComponent', () => {
  let component: MatchedTableComponent;
  let fixture: ComponentFixture<MatchedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
