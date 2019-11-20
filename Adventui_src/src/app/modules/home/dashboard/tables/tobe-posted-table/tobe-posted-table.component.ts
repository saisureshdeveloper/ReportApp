import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionsColumnRendererComponent } from '../actions-column-renderer/actions-column-renderer.component';

@Component({
  selector: 'app-tobe-posted-table',
  templateUrl: './tobe-posted-table.component.html',
  styleUrls: ['./tobe-posted-table.component.css']
})
export class TobePostedTableComponent implements OnInit {
  @Output() tobePostGridSelectedRows: EventEmitter<{ internalRows: any[], externalRows: any[] }> = new EventEmitter();

  columnDefs = [];
  rowData = [];
  internalRowData = [];
  frameworkComponents;
  context;
  gridOptions: GridOptions;
  gridApi: GridApi;
  private selectedRows = [];
  private paginationPageSize: number = 25;
  selectedSplitRow: any;
  @ViewChild('content') content: ElementRef;

  constructor(private dashboardService: DashboardService,
    private modalService: NgbModal) {
  }

  ngOnInit() {

    this.gridOptions = this.dashboardService.getGridOptions();
    this.gridOptions.suppressRowClickSelection = true;
  //  this.gridOptions.suppressCellSelection = true;
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
        if (this.gridApi && val.name.toLowerCase() === "tobeposted") {
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
   this.columnDefs = this.dashboardService.tobePostedGridColumntoDisplay();
    this.columnDefs.unshift({
      headerName: '',
      suppressMenu: true,
      suppressSorting: true,
      width: 135,
      fixedWidth: true,
      lockPinned: true,
      pinned: "left",
      cellRenderer: 'actionsColumnRendererComponent',
    });

    this.context = { componentParent: this };
    this.frameworkComponents = {
      actionsColumnRendererComponent: ActionsColumnRendererComponent
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  changePageSize(newPageSize: number) {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(newPageSize);
    }
  }

  public setRowData(e) {
    this.dashboardService.setAppData(e.data, 'rowDataToBePosted');
  }

  public deleteSplit(e) {
    this.selectedSplitRow = e.data;
    this.dashboardService.deleteSplit(e.data['extRecordsId']).subscribe(x => {
      this.dashboardService.genericMessageSubject.next('Successfully joined!');
      this.dashboardService.refreshData();
    });
  }


  showColumnModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
  }

  public onRowSelected(e) {
    this.selectedRow(e.data);
  }
  private selectedRow(data) {
    if (data) {
      const isRowExists = this.selectedRows.findIndex(x => x.extRecordsId === data.extRecordsId  && data.extRecordsId != null) ||
                        this.selectedRows.findIndex(x => x.intDataRecordsId === data.intDataRecordsId &&  data.intDataRecordsId != null);
     if (isRowExists > -1) {
        this.selectedRows = [...this.selectedRows.slice(0, isRowExists), ...this.selectedRows.slice(isRowExists + 1)];
      } else {
        this.selectedRows = [...this.selectedRows, data];
      }
      this.tobePostGridSelectedRows.emit({ internalRows: [], externalRows: this.selectedRows });
    }
  }
}
