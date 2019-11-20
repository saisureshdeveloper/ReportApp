import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posted-table',
  templateUrl: './posted-table.component.html',
  styleUrls: ['./posted-table.component.css']
})
export class PostedTableComponent implements OnInit {
  columnDefs = [];
  rowData = [];
  internalRowData = [];
  gridOptions: GridOptions;
  gridApi: GridApi;
  private paginationPageSize: number = 25;
  private selectedRows = [];

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal) {
  }

  ngOnInit() {

    this.gridOptions = this.dashboardService.getGridOptions();
    this.gridOptions.suppressRowClickSelection = true;
    this.gridOptions.rowSelection = 'multiple';

    this.selectedRows = [];
    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.internalRowData = data.data.filter(x => !!x.intDataRecordsId);

      this.rowData = data.data;
      this.selectedRows = [];
      this.bindGrid();
    });

    this.dashboardService.refreshGridSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.downlodedfile = false;
    this.dashboardService.downloadFileSubject.subscribe(val => {

      if (this.dashboardService.downlodedfile === false) {
        if (this.gridApi && val.name.toLowerCase() === "posted") {
          this.dashboardService.downlodedfile = true;
          this.gridApi.exportDataAsCsv({ fileName: val.name + '_export_' + new Date().getTime() });
        }

      }

    });

    this.dashboardService.refreshGridOnColumnFilterSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });


    this.dashboardService.clearSearchSubject.subscribe(flag => {
      if (flag) {
        if (this.gridApi) {
          this.dashboardService.globalFilterResetSubject.next('');
          this.gridApi.setQuickFilter('');
        }
      }
    });

    this.dashboardService.globalFilterSubject.subscribe(val => {
      if (this.gridApi) {
        this.gridApi.setQuickFilter(val);
      }
    });

  }

  bindGrid() {
    // this.gridOptions = this.dashboardService.getGridOptions();
    this.columnDefs = this.dashboardService.tobePostedGridColumntoDisplay();
    this.columnDefs.unshift(this.dashboardService.getCheckBoxColumn(true));
    
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
