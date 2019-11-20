import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieContraChartComponent } from './pie-contra-chart.component';

describe('PieContraChartComponent', () => {
  let component: PieContraChartComponent;
  let fixture: ComponentFixture<PieContraChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieContraChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieContraChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
