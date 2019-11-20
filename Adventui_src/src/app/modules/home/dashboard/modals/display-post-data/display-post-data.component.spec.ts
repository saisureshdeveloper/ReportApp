import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPostDataComponent } from './display-post-data.component';

describe('DisplayPostDataComponent', () => {
  let component: DisplayPostDataComponent;
  let fixture: ComponentFixture<DisplayPostDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPostDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPostDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
