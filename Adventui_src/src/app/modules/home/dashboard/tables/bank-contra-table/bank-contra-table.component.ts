import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { GridOptions, GridApi } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as _ from 'lodash';

@Component({
  selector: 'app-bank-contra-table',
  templateUrl: './bank-contra-table.component.html',
  styleUrls: ['./bank-contra-table.component.css']
})
export class BankContraTableComponent implements OnInit, AfterViewChecked {

  gridOptions: GridOptions;
  gridOptionsSmall: GridOptions;
  externalGridApi: GridApi;
  externalGridApiSmall: GridApi;

  externalColumnDefs = [];
  externalRowData = [];

  externalColumnDefsSmall = [];

  private dataSource = [];
  private selectedExtRows = [];
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
    this.selectedExtRows = [];

    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.dataSource = data.data;
      this.selectedExtRows = [];
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
        if (this.externalGridApi) {
          this.dashboardService.globalFilterResetSubject.next('');
          this.externalGridApi.setQuickFilter('');
        }
      }
    });

    this.dashboardService.resetGridsSmallSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.globalFilterSubject.subscribe(val => {
      if (this.externalGridApi) {
        this.externalGridApi.setQuickFilter(val);
      }
    });

    this.dashboardService.downlodedfile = false;
    this.dashboardService.downloadFileSubject.subscribe(val => {


      if (this.dashboardService.downlodedfile === false) {

        if (this.externalGridApi && val.name.toLowerCase() === "bankcontra") {
          this.dashboardService.downlodedfile = true;
          this.externalGridApi.exportDataAsCsv({ fileName: val.name + '_export_' + new Date().getTime() });
        }

      }

    });
  }

  

  sizeToFit() {

    this.externalGridApi.sizeColumnsToFit();
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

    this.externalColumnDefs = this.dashboardService.getGridColumnByType('ext');
    this.externalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn());
    this.externalRowData = this.dataSource.filter(x => !!x.extRecordsId);

    this.externalColumnDefsSmall = this.dashboardService.getGridColumnByType('ext');

    if (!showFlag) {
      this.emptyFilteredGrids();
    }

  }

  private emptyFilteredGrids() {
    if (this.externalGridApiSmall) {
      this.externalGridApiSmall.setRowData([]);
    }
  }

  private checkFIlteredGridsEmpty() {
    let counts;
    if (this.externalGridApiSmall) {
      counts = this.externalGridApiSmall.getDisplayedRowCount();
    }
    return counts;
  }  

  onExternalGridReady(params) {
    this.externalGridApi = params.api;
  }

  onExternalGridReadySmall(params) {
    this.externalGridApiSmall = params.api;
  }

  changePageSizeExt(newPageSize: number) {
    if (this.externalGridApi) {
      this.externalGridApi.paginationSetPageSize(newPageSize);
    }
  }

  public onExternalRowSelected(e) {
    this.selectedRow(e.data);
  }

  private removeDuplicates(filterdExtRes): void {
    let getExtRowData = [], ExtArrayId = [];

    if (filterdExtRes.length > 0) {
      filterdExtRes.map(o1 => {
        ExtArrayId.push(o1.extRecordsId);
      });
      this.externalGridApi.forEachNode(node => getExtRowData.push(node.data));
      this.externalGridApi.updateRowData({ remove: getExtRowData });
      const newExtRowData = getExtRowData.filter(obj => !_.includes(ExtArrayId, obj.extRecordsId));
      this.externalGridApi.updateRowData({ add: newExtRowData });
    }
  }

  private selectedRow(data) {
    if (data) {
      this.visibleSmallGrids = true;     

        this.selectedExtRows = this.externalGridApi.getSelectedRows();
        if (this.selectedExtRows.length > 0) {
            // service call
            this.dashboardService.showSpinner();
            this.dashboardService.postContraId('Bankcontra', data.ContraId).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdExtRes = response.filter(x => !!x.extRecordsId);
              
              this.removeDuplicates(filterdExtRes);
              let getExtRowDataSmall = [];
              this.externalGridApiSmall.forEachNode(node => getExtRowDataSmall.push(node.data));
              this.externalGridApiSmall.updateRowData({ remove: getExtRowDataSmall });
              this.externalGridApiSmall.updateRowData({ add: filterdExtRes });
              this.externalGridApiSmall.selectAll();
              this.visibleSmallGrids = true;
            });
        }
    }
  }

  resetGridsSmall() {
    let externalRowDataSmall = [];
    this.externalGridApiSmall.forEachNode(node => externalRowDataSmall.push(node.data));
    this.externalGridApi.updateRowData({ add: externalRowDataSmall });
    this.emptyFilteredGrids();
    this.visibleSmallGrids = false;
    this.toastr.success('Reset Successfully!');
  }

  unGroupContra() {
    let externalRowDataSmall = [];
    this.externalGridApiSmall.forEachNode(node => externalRowDataSmall.push(node.data));
    const postUnGroupContra = {
      Contraid: externalRowDataSmall[0].ContraId,
      Type: 'bank'
    };
    this.dashboardService.setAppData(postUnGroupContra, 'postUnGroupContra');
  }

}
