import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { PieChart } from '../../../../../shared/models/pie-chart';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import _ from 'lodash';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvas: ElementRef;
  @Output() getRecordsByRecoStatus: EventEmitter<string> = new EventEmitter<string>();
  private subscriptions: Subscription[] = [];
  public chart: Chart;
  private checkLoader: boolean = false;

  constructor(private dashboardService: DashboardService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.subscriptions.push(this.dashboardService.refreshDataSubject.subscribe(isRefreshed => {
      if (isRefreshed.go) {
        this.getChartData();
        if(!isRefreshed.flag) {
          this.checkLoader = true;
        }
      }
    }));
  }

  ngAfterViewInit() {
    this.canvas.nativeElement.onclick = (evt) => {
      const firstPoint = this.chart.getElementAtEvent(evt)[0];
      if (firstPoint) {
        this.dashboardService.showHideAllGridsSubject.next(false);
        // console.log(this.chart.data.labels[firstPoint._index]);
        // // console.log(this.chart.data.datasets[0].data[firstPoint._index]);
        // const val = this.chart.data.labels[firstPoint._index].toLowerCase();
        // this.getRecordsByRecoStatus.emit(val.charAt(0).toUpperCase() + val.slice(1));
      }
    };
  }


  private getChartData() {
    this.dashboardService.getPieChart().subscribe(data => this.bindChart(data));
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private bindChart(data: Array<PieChart>) {    
    if(_.isArray(data) && data.length === 0) {
      this.toastr.error('No Data Available in Pie Chart!');
    }
    if (this.chart) {
      this.chart.destroy();
      if(!this.checkLoader) {
        this.dashboardService.hideSpinner();
        this.checkLoader = false;
      }
      
    }
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: data.map(x => x.recoStatus),
        datasets: [{
          data: data.map(x => x.dataCount),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 54, 235, 0.5)',
            'rgba(75, 206, 132, 0.5)',
            'rgba(235, 206, 54, 0.5)',
          ],
          // borderColor: [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 54, 235, 1)',
          //   'rgba(75, 206, 132, 1)',
          //   'rgba(235, 206, 54, 1)',
          // ],
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          position: 'right'
        }
      }
    });
  }
}
