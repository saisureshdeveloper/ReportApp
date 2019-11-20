import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { GridOptions, GridApi } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as _ from 'lodash';

@Component({
  selector: 'app-erp-contra-table',
  templateUrl: './erp-contra-table.component.html',
  styleUrls: ['./erp-contra-table.component.css']
})
export class ErpContraTableComponent implements OnInit, AfterViewChecked {
  gridOptions: GridOptions;
  gridOptionsSmall: GridOptions;
  internalGridApi: GridApi;
  internalGridApiSmall: GridApi;

  internalColumnDefs = [];
  internalRowData = [];
  internalColumnDefsSmall = [];

  private dataSource = [];
  private selectedIntRows = [];
  private visibleSmallGrids: boolean = false;

  constructor(
    private dashboardService: DashboardService,  
    public smartModalService: NgxSmartModalService,   
    private toastr: ToastrService
  ) {
  }

  ngAfterViewChecked() {
    const confirmUnGroupContraObj: Object = {
      text: 'Do you want to Un-Group the selected records?'
    };
    this.smartModalService.setModalData(confirmUnGroupContraObj, 'confirmUnGroupContra');
  }

  ngOnInit() {

    this.gridOptions = this.dashboardService.getGridOptions();
    this.gridOptionsSmall = this.dashboardService.getGridOptionsSmall();

    this.selectedIntRows = [];

    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.dataSource = data.data;
      this.selectedIntRows = [];
      this.bindGrid();
    });

    this.dashboardService.refreshGridSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.refreshGridOnColumnFilterSubject.subscribe(data => {
      if (data) {
        this.bindGrid(true);
      }
    });

    this.dashboardService.clearSearchSubject.subscribe(flag => {
      if (flag) {
        if (this.internalGridApi) {
          this.dashboardService.globalFilterResetSubject.next('');
          this.internalGridApi.setQuickFilter('');
        }
      }
    });

    this.dashboardService.resetGridsSmallSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.globalFilterSubject.subscribe(val => {
      if (this.internalGridApi) {
        this.internalGridApi.setQuickFilter(val);
      }
    });

    this.dashboardService.downlodedfile = false;
    this.dashboardService.downloadFileSubject.subscribe(val => {


      if (this.dashboardService.downlodedfile === false) {
        if (this.internalGridApi && val.name.toLowerCase() === "erpcontra") {
          this.dashboardService.downlodedfile = true;
          this.internalGridApi.exportDataAsCsv({ fileName: val.name + '_export_' + new Date().getTime() });
        }

      }

    });
  }  

  
  bindGrid(showFlag: boolean = false) {
    
    if(showFlag) {
      if(this.checkFIlteredGridsEmpty()) {
        this.visibleSmallGrids = true;
      } else {
        this.visibleSmallGrids = false;
      }
    }
    if(!showFlag) {
      this.visibleSmallGrids = false;
    }

    this.internalColumnDefs = this.dashboardService.getGridColumnByType('int');
    this.internalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn());
    this.internalRowData = this.dataSource.filter(x => !!x.intDataRecordsId);

    this.internalColumnDefsSmall = this.dashboardService.getGridColumnByType('int');

    if (!showFlag) {
      this.emptyFilteredGrids();
    }
  }

  

  private emptyFilteredGrids() {
    if (this.internalGridApiSmall) {
      this.internalGridApiSmall.setRowData([]);
    }
  }

  private checkFIlteredGridsEmpty() {
    let counts;
    if (this.internalGridApiSmall) {
      counts = this.internalGridApiSmall.getDisplayedRowCount();
    }
    return counts;
  }

  onInternalGridReady(params) {
    this.internalGridApi = params.api;
  }

  onInternalGridReadySmall(params) {
    this.internalGridApiSmall = params.api;
  }

  changePageSizeInt(newPageSize: number) {
    if (this.internalGridApi) {
      this.internalGridApi.paginationSetPageSize(newPageSize);
    }
  }
  
  public onInternalRowSelected(e) {
    this.selectedRow(e.data);
  }

  private removeDuplicates(filterdIntRes): void {
    let getIntRowData = [], IntArrayId = [];

    if (filterdIntRes.length > 0) {
      filterdIntRes.map(o1 => {
        IntArrayId.push(o1.intDataRecordsId);
      });
      this.internalGridApi.forEachNode(node => getIntRowData.push(node.data));
      this.internalGridApi.updateRowData({ remove: getIntRowData });
      const newIntRowData = getIntRowData.filter(obj => !_.includes(IntArrayId, obj.intDataRecordsId));
      this.internalGridApi.updateRowData({ add: newIntRowData });
    }
  }

  private selectedRow(data) {
    if (data) {
      this.visibleSmallGrids = true;
        this.selectedIntRows = this.internalGridApi.getSelectedRows();
        if (this.selectedIntRows.length > 0) {
            // service call
            this.dashboardService.showSpinner();            

            this.dashboardService.postContraId('Erpcontra', data.ContraId).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdIntRes = response.filter(x => !!x.intDataRecordsId);

              this.removeDuplicates(filterdIntRes);
              let getIntRowDataSmall = [];
              this.internalGridApiSmall.forEachNode(node => getIntRowDataSmall.push(node.data));
              this.internalGridApiSmall.updateRowData({ remove: getIntRowDataSmall });
              this.internalGridApiSmall.updateRowData({ add: filterdIntRes });
              this.internalGridApiSmall.selectAll();
              this.visibleSmallGrids = true;
            });
        }
    }
  }

  resetGridsSmall() {
    let internalRowDataSmall = [], externalRowDataSmall = [];
    this.internalGridApiSmall.forEachNode(node => internalRowDataSmall.push(node.data));
    this.internalGridApi.updateRowData({ add: internalRowDataSmall });
    this.emptyFilteredGrids();
    this.visibleSmallGrids = false;
    this.toastr.success('Reset Successfully!');
  }

  unGroupContra() {
    let internalRowDataSmall = [];
    this.internalGridApiSmall.forEachNode(node => internalRowDataSmall.push(node.data));
    const postUnGroupContra = {
      Contraid: internalRowDataSmall[0].ContraId,
      Type: 'erp'
    };
    this.dashboardService.setAppData(postUnGroupContra, 'postUnGroupContra');
  }

}
