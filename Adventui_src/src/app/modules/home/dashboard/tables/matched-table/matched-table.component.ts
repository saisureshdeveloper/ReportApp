import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { GridOptions, GridApi } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as _ from 'lodash';

@Component({
  selector: 'app-matched-table',
  templateUrl: './matched-table.component.html',
  styleUrls: ['./matched-table.component.css']
})
export class MatchedTableComponent implements OnInit, AfterViewChecked {
  public gridOptions: GridOptions;
  public gridOptionsSmall: GridOptions;
  public externalGridApi: GridApi;
  public internalGridApi: GridApi;
  public internalGridApiSmall: GridApi;
  public externalGridApiSmall: GridApi;

  public externalColumnDefs = [];
  public externalRowData = [];

  public internalColumnDefs = [];
  public internalRowData = [];

  public externalColumnDefsSmall = [];
  public internalColumnDefsSmall = [];

  public dataSource = [];
  public selectedIntRows = [];
  public selectedExtRows = [];
  public visibleSmallGrids: boolean = false;
  public displayedIntData = [];
  public displayedExtData = [];

  constructor(
    private dashboardService: DashboardService, 
    public smartModalService: NgxSmartModalService,   
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {

    this.gridOptions = this.dashboardService.getGridOptions();
    this.gridOptionsSmall = this.dashboardService.getGridOptionsSmall();

    this.selectedIntRows = [];
    this.selectedExtRows = [];

    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.dataSource = data.data;
      this.selectedIntRows = [];
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
      if (this.externalGridApi) {
        this.externalGridApi.setQuickFilter(val);
      }
      if (this.internalGridApi) {
        this.internalGridApi.setQuickFilter(val);
      }
    });
  }

  ngAfterViewChecked() {
    const confirmUnMatchObj: Object = {
      text: 'Do you want to Un-Match the selected records?'
    };
    this.smartModalService.setModalData(confirmUnMatchObj, 'confirmUnMatch');
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

    this.internalColumnDefs = this.dashboardService.getGridColumnByType('int');
    this.internalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn());
    this.internalRowData = this.dataSource.filter(x => !!x.intDataRecordsId);

    this.externalColumnDefs = this.dashboardService.getGridColumnByType('ext');
    this.externalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn());
    this.externalRowData = this.dataSource.filter(x => !!x.extRecordsId);

    this.internalColumnDefsSmall = this.dashboardService.getGridColumnByType('int');

    this.externalColumnDefsSmall = this.dashboardService.getGridColumnByType('ext');

    if (!showFlag) {
      this.emptyFilteredGrids();
    }

    this.displayedIntData = [];
    this.displayedExtData = [];

    this.displayedIntData = this.internalRowData;
    this.displayedExtData = this.externalRowData;
  }

  private emptyFilteredGrids() {
    if (this.internalGridApiSmall) {
      this.internalGridApiSmall.setRowData([]);
    }
    if (this.externalGridApiSmall) {
      this.externalGridApiSmall.setRowData([]);
    }
  }

  private checkFIlteredGridsEmpty() {
    let counts, c1, c2;
    if (this.internalGridApiSmall) {
      c1 = this.internalGridApiSmall.getDisplayedRowCount();
    }
    if (this.externalGridApiSmall) {
      c2 = this.externalGridApiSmall.getDisplayedRowCount();
    }
    return counts = c1 + c2;
  }

  

  onExternalGridReady(params) {
    this.externalGridApi = params.api;
  }

  onInternalGridReady(params) {
    this.internalGridApi = params.api;
  }

  onExternalGridReadySmall(params) {
    this.externalGridApiSmall = params.api;
  }

  onInternalGridReadySmall(params) {
    this.internalGridApiSmall = params.api;
  }

  changePageSizeInt(newPageSize: number) {
    if (this.internalGridApi) {
      this.internalGridApi.paginationSetPageSize(newPageSize);
    }
  }

  changePageSizeExt(newPageSize: number) {
    if (this.externalGridApi) {
      this.externalGridApi.paginationSetPageSize(newPageSize);
    }
  }

  public onExternalRowSelected(e) {
    this.selectedRow(e.data, 'external');
  }

  public onInternalRowSelected(e) {
    this.selectedRow(e.data, 'internal');
  }

  private removeDuplicates(filterdIntRes, filterdExtRes): void {
    let getIntRowData = [], getExtRowData = [];
    let IntArrayId = [], ExtArrayId = [];
    if (filterdIntRes.length > 0) {
      filterdIntRes.map(o1 => {
        IntArrayId.push(o1.intDataRecordsId);
      });
      this.internalGridApi.forEachNode(node => getIntRowData.push(node.data));
      this.internalGridApi.updateRowData({ remove: getIntRowData });
      const newIntRowData = getIntRowData.filter(obj => !_.includes(IntArrayId, obj.intDataRecordsId));
      this.internalGridApi.updateRowData({ add: newIntRowData });
    }
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

  private selectedRow(data, gridId) {
    if (data) {
      this.visibleSmallGrids = true;
      if (gridId === 'internal') {
        this.selectedIntRows = this.internalGridApi.getSelectedRows();
        if (this.selectedIntRows.length > 0) {
            // service call
            this.dashboardService.showSpinner();
            

            this.dashboardService.postGroupId(data.Groupid,data.intDataRecordsId, data.extRecordsId).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdIntRes = response.filter(x => !!x.intDataRecordsId);
              const filterdExtRes = response.filter(x => !!x.extRecordsId);

              this.removeDuplicates(filterdIntRes, filterdExtRes);
              this.updateSmallGrids(filterdIntRes, filterdExtRes);
              
            });
        }
      }

      if (gridId === 'external') {
        this.selectedExtRows = this.externalGridApi.getSelectedRows();
        if (this.selectedExtRows.length > 0) {
            // service call
            this.dashboardService.showSpinner();
            this.dashboardService.postGroupId(data.Groupid,data.intDataRecordsId, data.extRecordsId).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdIntRes = response.filter(x => !!x.intDataRecordsId);
              const filterdExtRes = response.filter(x => !!x.extRecordsId);
              
              this.removeDuplicates(filterdIntRes, filterdExtRes);
              this.updateSmallGrids(filterdIntRes, filterdExtRes);
              
            });
        }
      }
      this.displayedRowDataBig();
    }
  }

  private updateSmallGrids(filterdIntRes, filterdExtRes): void {
    let getExtRowDataSmall = [], getIntRowDataSmall = [];

    this.internalGridApiSmall.forEachNode(node => getIntRowDataSmall.push(node.data));
    this.externalGridApiSmall.forEachNode(node => getExtRowDataSmall.push(node.data));
    
    this.internalGridApiSmall.updateRowData({ remove: getIntRowDataSmall });
    this.externalGridApiSmall.updateRowData({ remove: getExtRowDataSmall });

    this.internalGridApiSmall.updateRowData({ add: filterdIntRes });
    this.externalGridApiSmall.updateRowData({ add: filterdExtRes });
    this.internalGridApiSmall.selectAll();
    this.externalGridApiSmall.selectAll();
    this.visibleSmallGrids = true;
  }

  private displayedRowDataBig() {
    this.displayedIntData = [];
    this.displayedExtData = [];
    this.internalGridApi.forEachNode(node => this.displayedIntData.push(node.data));
    this.externalGridApi.forEachNode(node => this.displayedExtData.push(node.data));
  }

  resetGridsSmall() {
    let internalRowDataSmall = [], externalRowDataSmall = [];
    this.internalGridApiSmall.forEachNode(node => internalRowDataSmall.push(node.data));
    this.externalGridApiSmall.forEachNode(node => externalRowDataSmall.push(node.data));
    this.internalGridApi.updateRowData({ add: internalRowDataSmall });
    this.externalGridApi.updateRowData({ add: externalRowDataSmall });
    this.displayedRowDataBig();
    this.emptyFilteredGrids();
    this.visibleSmallGrids = false;
    this.toastr.success('Reset Successfully!');
  }

  unMatch() {
    let internalRowDataSmall = [], externalRowDataSmall = [];
    this.internalGridApiSmall.forEachNode(node => internalRowDataSmall.push(node.data));
    this.externalGridApiSmall.forEachNode(node => externalRowDataSmall.push(node.data));
    const postUnMatch = {
      GroupId: externalRowDataSmall[0].Groupid,
      t_intRecordId: internalRowDataSmall[0].intDataRecordsId,
      t_extRecordId: externalRowDataSmall[0].extRecordsId
    };
    this.dashboardService.setAppData(postUnMatch, 'postUnMatch');
  }

}
