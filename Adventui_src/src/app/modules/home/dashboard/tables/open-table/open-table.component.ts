import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
// import { AgGridNg2 } from 'ag-grid-angular';
import { ToastrService } from 'ngx-toastr';
import { GridOptions, GridApi } from 'ag-grid-community';
import * as _ from 'lodash';

@Component({
  selector: 'app-open-table',
  templateUrl: './open-table.component.html',
  styleUrls: ['./open-table.component.css']
})
export class OpenTableComponent implements OnInit {
  // @ViewChild('intGrid') intGrid: AgGridNg2;
  // @ViewChild('extGrid') extGrid: AgGridNg2;
  @Input() onlyOpenRecords: boolean;
  @Output() openGridSelectedRows: EventEmitter<{ internalRows: any[], externalRows: any[], unGroup: any }> = new EventEmitter();
  gridOptions: GridOptions;
  gridOptionsSmall: GridOptions;
  externalGridApi: GridApi;
  internalGridApi: GridApi;
  internalGridApiSmall: GridApi;
  externalGridApiSmall: GridApi;

  externalColumnDefs = [];
  externalRowData = [];

  internalColumnDefs = [];
  internalRowData = [];

  externalColumnDefsSmall = [];
  internalColumnDefsSmall = [];

  private dataSource = [];
  private globalFilter: string = '';
  private selectedIntRows = [];
  private selectedExtRows = [];
  private visibleSmallGrids: boolean = false;
  private displayedIntData = [];
  private displayedExtData = [];

  constructor(
    private dashboardService: DashboardService,
    private toastr: ToastrService) {

  }

  ngOnInit() {

    this.gridOptions = this.dashboardService.getGridOptions();
    this.gridOptionsSmall = this.dashboardService.getGridOptionsSmall();

    this.selectedIntRows = [];
    this.selectedIntRows = [];

    this.dashboardService.dataSourceSubject.subscribe(data => {
      this.dataSource = data.data;
      this.selectedIntRows = [];
      this.selectedExtRows = [];
      this.bindGrid(false, data.flag);
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

    this.dashboardService.resetGridsSmallSubject.subscribe(data => {
      if (data) {
        this.bindGrid();
      }
    });

    this.dashboardService.clearSearchSubject.subscribe(flag => {
      if (flag) {
        this.quickFilterClear();
      }
    });

    this.dashboardService.globalFilterResetSubject.subscribe((val) => {
      if (this.externalGridApi) {
        this.globalFilter = '';
        this.externalGridApi.setQuickFilter('');
      }
      if (this.internalGridApi) {
        this.globalFilter = '';
        this.internalGridApi.setQuickFilter('');
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

    this.dashboardService.changeGridPageSizeSubject.subscribe(newPageSize => this.changePageSize(newPageSize));
  }

  private quickFilterClear() {
    if (this.externalGridApi) {
      this.dashboardService.globalFilterResetSubject.next('');
      this.externalGridApi.setQuickFilter('');
    }
    if (this.internalGridApi) {
      this.dashboardService.globalFilterResetSubject.next('');
      this.internalGridApi.setQuickFilter('');
    }
  }

  sizeToFit() {
    this.externalGridApi.sizeColumnsToFit();
  }

  bindGrid(showFlag: boolean = false, filterFlag?: string) {
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
    const getData = this.dashboardService.getAppData();

    if(filterFlag === 'filtering') {
      let getIntData = [];
      this.internalGridApi.forEachNode(node => getIntData.push(node.data));
      this.internalGridApi.updateRowData({ remove: getIntData });
      this.internalGridApi.updateRowData({ add: this.dataSource.filter(x => !!x.intDataRecordsId) });
    } else {
      this.internalColumnDefs = this.dashboardService.getGridColumnByType('int');
      this.internalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn(true));
      this.internalRowData = this.dataSource.filter(x => !!x.intDataRecordsId);
      this.internalColumnDefsSmall = this.dashboardService.getGridColumnByType('int');
      this.internalColumnDefsSmall.unshift(this.dashboardService.getCheckBoxColumnSmall());
    }
    
    if(filterFlag === 'filtering') {
      let getExtData = [];
      this.externalGridApi.forEachNode(node => getExtData.push(node.data));
      this.externalGridApi.updateRowData({ remove: getExtData });
      this.externalGridApi.updateRowData({ add: this.dataSource.filter(x => !!x.extRecordsId) });
    } else {
      this.externalColumnDefs = this.dashboardService.getGridColumnByType('ext');
      this.externalColumnDefs.unshift(this.dashboardService.getCheckBoxColumn(true)); 
      this.externalRowData = this.dataSource.filter(x => !!x.extRecordsId); 
      this.externalColumnDefsSmall = this.dashboardService.getGridColumnByType('ext');
      this.externalColumnDefsSmall.unshift(this.dashboardService.getCheckBoxColumnSmall());

    }
    
    if (!showFlag) {
      if (this.internalGridApiSmall) {
        this.internalGridApiSmall.setRowData([]);
      }
      if (this.externalGridApiSmall) {
        this.externalGridApiSmall.setRowData([]);
      }
      this.openGridSelectedRows.emit({ internalRows: [], externalRows: [], unGroup: { canUnGroup: false } });
    }

    this.displayedIntData = [];
    this.displayedExtData = [];

    this.displayedIntData = this.internalRowData;
    this.displayedExtData = this.externalRowData; 
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

  changePageSize(newPageSize: number) {
    if (this.externalGridApi) {
      this.externalGridApi.paginationSetPageSize(newPageSize);
    }
    if (this.internalGridApi) {
      this.internalGridApi.paginationSetPageSize(newPageSize);
    }
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

  public onExternalRowSelectedSmall(e) {
    this.selectedRowSmall(e.data, 'externalSmall');
  }

  public onInternalRowSelectedSmall(e) {
    this.selectedRowSmall(e.data, 'internalSmall');
  }

  private selectedRowSmall(data, gridId) {
    if (data) {
      if (gridId === 'internalSmall') {
        let getData = [];
        this.internalGridApiSmall.forEachNode(node => {
          if (!node.isSelected()) {
            getData = [node.data];
          }
        });
        if (getData.length > 0) {
          this.internalGridApiSmall.updateRowData({ remove: getData });
          this.internalGridApi.updateRowData({ add: getData });
        }
      }

      if (gridId === 'externalSmall') {
        let getData = [];
        this.externalGridApiSmall.forEachNode(node => {
          if (!node.isSelected()) {
            getData = [node.data];
          }
        });
        if (getData.length > 0) {
          this.externalGridApiSmall.updateRowData({ remove: getData });
          this.externalGridApi.updateRowData({ add: getData });
        }
      }
      this.getAllRowsDataSmall();
    }
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

  private commonCodeIntSelected() {
    this.internalGridApi.updateRowData({ remove: this.selectedIntRows });
    this.internalGridApiSmall.updateRowData({ add: this.selectedIntRows });
    this.internalGridApiSmall.selectAll();
    this.getAllRowsDataSmall();
  }

  private commonCodeExtSelected() {
    this.externalGridApi.updateRowData({ remove: this.selectedExtRows });
    this.externalGridApiSmall.updateRowData({ add: this.selectedExtRows });
    this.externalGridApiSmall.selectAll();
    this.getAllRowsDataSmall();
  }

  private selectedRow(data, gridId) {
    if (data) {
      this.visibleSmallGrids = true;
      if (gridId === 'internal') {
        this.selectedIntRows = this.internalGridApi.getSelectedRows();
        if (this.selectedIntRows.length === 1) {
          if (data.Groupid && data.Groupid !== 0) {
            // service call
            this.dashboardService.showSpinner();
            this.dashboardService.postGroupId(data.Groupid,0,0).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdIntRes = response.filter(x => !!x.intDataRecordsId);
              const filterdExtRes = response.filter(x => !!x.extRecordsId);

              this.removeDuplicates(filterdIntRes, filterdExtRes);
              this.internalGridApiSmall.updateRowData({ add: filterdIntRes });
              this.externalGridApiSmall.updateRowData({ add: filterdExtRes });
              this.internalGridApiSmall.selectAll();
              this.externalGridApiSmall.selectAll();
              this.getAllRowsDataSmall();
            });
          } else {            
            this.commonCodeIntSelected();
          }
        } else if(this.selectedIntRows.length > 1) {
          this.commonCodeIntSelected();
        }
      }

      if (gridId === 'external') {
        this.selectedExtRows = this.externalGridApi.getSelectedRows();
        if (this.selectedExtRows.length === 1) {
          if (data.Groupid && data.Groupid !== 0) {
            // service call
            this.dashboardService.showSpinner();
            this.dashboardService.postGroupId(data.Groupid,0,0).subscribe(response => {
              this.dashboardService.hideSpinner();
              const filterdIntRes = response.filter(x => !!x.intDataRecordsId);
              const filterdExtRes = response.filter(x => !!x.extRecordsId);
              
              this.removeDuplicates(filterdIntRes, filterdExtRes);
              this.internalGridApiSmall.updateRowData({ add: filterdIntRes });
              this.externalGridApiSmall.updateRowData({ add: filterdExtRes });
              this.internalGridApiSmall.selectAll();
              this.externalGridApiSmall.selectAll();
              this.getAllRowsDataSmall();
            });   
          } else {
            this.commonCodeExtSelected();
          }
        } else if(this.selectedExtRows.length > 1) {
          this.commonCodeExtSelected();
        }
      }


    }
  }

  private checkForUpGroup(intArray, extArray) {
    let returnObj: any = { canUnGroup: false };
    let intGroupArray = [], extGroupArray = [];
    _.map(intArray, obj => {
      intGroupArray.push(obj.Groupid);
    });
    _.map(extArray, obj => {
      extGroupArray.push(obj.Groupid);
    });
    const canIntUngroup = intGroupArray.every((val, i, arr) => val === arr[0]);
    const canExtUngroup = extGroupArray.every((val, i, arr) => val === arr[0]);
    if (true && canIntUngroup === true && canExtUngroup === true &&
      intGroupArray[0] !== 0 && extGroupArray[0] !== 0 &&
      (intArray.length > 0 || extArray.length > 0)) {
      returnObj.canUnGroup = true;
      returnObj.groupid = intGroupArray[0] || extGroupArray[0];
    }
    return returnObj;
  }

  private getAllRowsDataSmall() {
    this.displayedIntData = [];
    this.displayedExtData = [];
    this.internalGridApi.forEachNode(node => this.displayedIntData.push(node.data));
    this.externalGridApi.forEachNode(node => this.displayedExtData.push(node.data));
    let internalRowDataSmall = [], externalRowDataSmall = [];
    this.internalGridApiSmall.forEachNode(node => internalRowDataSmall.push(node.data));
    this.externalGridApiSmall.forEachNode(node => externalRowDataSmall.push(node.data));
    const returnUnGroup = this.checkForUpGroup(internalRowDataSmall, externalRowDataSmall);
    this.openGridSelectedRows.emit({ internalRows: internalRowDataSmall, externalRows: externalRowDataSmall, unGroup: returnUnGroup });
    if (internalRowDataSmall.length === 0 && externalRowDataSmall.length === 0) {
      this.visibleSmallGrids = false;
    }
  }
}
