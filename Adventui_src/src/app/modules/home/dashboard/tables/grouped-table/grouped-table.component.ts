import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { RecordStatus } from '../../../../../shared/enums/record-status.enum';
import { GridOptions, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-grouped-table',
  templateUrl: './grouped-table.component.html',
  styleUrls: ['./grouped-table.component.css']
})
export class GroupedTableComponent implements OnInit {
  @Input() RecordStatus: RecordStatus;
  columnDefs = [];
  rowData = [];
  gridOptions: GridOptions;
  gridApi: GridApi;

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
      }*/
    });

    this.dashboardService.changeGridPageSizeSubject.subscribe(newPageSize => this.changePageSize(newPageSize));
  }

  bindGrid() {
    this.gridOptions = this.dashboardService.getGridOptions();
    this.columnDefs = Object.assign([], this.dashboardService.getGridColumntoDisplay());
    if (this.RecordStatus === RecordStatus.FORMATCHING) {
      this.columnDefs.push({
        headerName: 'Actions',
        suppressMenu: true,
        suppressSorting: true,
        template:
          `<button type="button" data-action-type="approve" class="btn btn-sm btn-primary "> Approve </button>
         <button type="button" data-action-type="reject" class="btn btn-sm btn-primary "> Reject </button>`
      });
    } else {
      this.columnDefs.push({
        headerName: 'Actions',
        suppressMenu: true,
        suppressSorting: true,
        template:
          `<button type="button" data-action-type="match" class="btn btn-sm btn-primary my-1 ml-3"> Match </button>`
      });
    }
  }

  public onRowClicked(e) {
    if (e.event.target !== undefined) {
      const data = e.data;
      const actionType = e.event.target.getAttribute('data-action-type');
      this.dashboardService.updateStatus(data, actionType);
    }
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
