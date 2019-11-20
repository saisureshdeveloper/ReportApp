import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHeaderComponent } from './open-header.component';

describe('OpenHeaderComponent', () => {
  let component: OpenHeaderComponent;
  let fixture: ComponentFixture<OpenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
