import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  columnDefs = [];
  rowData = [];
  gridOptions: GridOptions;
  gridApi: GridApi;
  selectedRow: any = null;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.rowData = data.data;
      this.bindGrid();
    });

    this.dashboardService.refreshGridSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.refreshGridOnColumnFilterSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.globalFilterSubject.subscribe(val => {
      if (this.gridApi) {
        this.gridApi.setQuickFilter(val);
      }
    });

    this.dashboardService.downloadFileSubject.subscribe(val => {
    /*  if (this.gridApi) {
        this.gridApi.exportDataAsCsv({fileName: val.name + '_export_' + new Date().getTime()});
      */
    });

    this.dashboardService.changeGridPageSizeSubject.subscribe(newPageSize => this.changePageSize(newPageSize));
  }

  bindGrid() {
    this.gridOptions = this.dashboardService.getGridOptions();
    this.columnDefs = this.dashboardService.getGridColumnByType('ext');
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  changePageSize(newPageSize: number) {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(newPageSize);
    }
  }
}
