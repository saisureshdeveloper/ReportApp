import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { RecordStatus } from '../../../../../shared/enums/record-status.enum';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import _ from 'lodash';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') canvas: ElementRef;
  @Output() showOnlyMatchedRecords: EventEmitter<boolean> = new EventEmitter(false);

  public label = RecordStatus.MATCHED;
  private _data = [];
  public barChart: Chart;

  private subscriptions: Subscription[] = [];
  private options = {
    maintainAspectRatio: true,
    spanGaps: false,
    elements: {
      line: {
        tension: 0.000001
      }
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxRotation: 0
        }
      }]
    }
  };

  constructor(private dashboardService: DashboardService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // this.geChartData();

    this.subscriptions.push(this.dashboardService.refreshDataSubject.subscribe(isRefreshed => {
      if (isRefreshed.go) {
        this.geChartData();
      }
    }));

    // this.canvas.nativeElement.onclick = (evt) => {
    //   this.showOnlyMatchedRecords.emit(true);
    // };
  }

  private geChartData() {
    this.subscriptions.push(this.dashboardService.getMatchedChartData().subscribe(data => {
      if(_.isArray(data) && data.length === 0) {
        this.toastr.error('No Data Available in Bar Chart!');
      }
      this._data = data;
      this.bindChart();
    }));
  }

  ngOnDestroy() {
    if (this.barChart) {
      this.barChart.destroy();
    }
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  bindChart() {
    if (this.barChart) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: this._data.map(x => x.RecordDate),
        datasets: [{
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 0.5)',
          data: this._data.map(x => x.dataCount),
          label: this.label,
          fill: 'start'
        }]
      },
      options: Chart.helpers.merge(this.options, {
        title: {
          text: 'fill: ' + 'start',
          display: false
        }
      })
    });
  }
}
