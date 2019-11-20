import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobePostedTableComponent } from './tobe-posted-table.component';

describe('TobePostedTableComponent', () => {
  let component: TobePostedTableComponent;
  let fixture: ComponentFixture<TobePostedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobePostedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobePostedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
