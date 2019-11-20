import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedTableComponent } from './posted-table.component';

describe('PostedTableComponent', () => {
  let component: PostedTableComponent;
  let fixture: ComponentFixture<PostedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
