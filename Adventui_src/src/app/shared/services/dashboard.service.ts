import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RestService } from './rest.service';
import { Routes } from '../constants/routes.const';
import { PieChart } from '../models/pie-chart';
import { RecordStatus } from '../enums/record-status.enum';
import { AuthService } from './auth.service';
import * as moment from 'moment';
import { UserRole } from '../enums/user-roles.enum';
import { GridOptions } from 'ag-grid-community';
import { Relationships } from '../models/relationships';
import { IneternalAccount, IneternalAccountRecord } from '../models/ineternal-account';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExportType } from '../enums/export-type.enum';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = environment.baseUrl;

  private availableColumns = {};
 
  private defaultColumns = [  'intDatareferenceText_1',
  'intDatareferenceText_2',
  'intDatareferenceDateTime_1',
  'intDatareferenceDateTime_2',
  'intDatareferenceDateTime_3',
  'intDatareferenceText_3',
  'intDatareferenceText_4',
  'intDatareferenceText_5',
  'intDatareferenceText_6',
  'intDatareferenceText_8',
  'intDatareferenceText_9',
  'intDataamount_1',
  'intDatareferenceText_10',
  'intDatareferenceText_11',
  'intDatareferenceText_12',
  'intDatat_intRecordId',
  'intDatacreditAmount',
  'intDatadebitAmount',
 
  'extreferenceDateTime_1',
'extreferenceDateTime_2',
'extreferenceText_1',
'extreferenceText_2',
'extreferenceText_3',
'extdebitAmount',
'extcreditAmount',
'extamount_1',
'extreferenceText_4',
'extreferenceText_5',
'extreferenceText_6',
'extamount_2',
'extreferenceText_8',
'extreferenceText_9'];
private selectedColumns = [];
  private gridOptions: GridOptions = {
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    animateRows: true,
    enableRangeSelection: true,
    rowData: null,
    suppressRowClickSelection: true,
    rowSelection: 'single',
    onGridReady: (params) => {
      // params.api.sizeColumnsToFit();
    }
  };
  private gridOptionsSmall: GridOptions = {
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    animateRows: true,
    enableRangeSelection: true,
    rowData: null,
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  public downlodedfile = false;
  public setAppDatum: any = {};
  private relationshipId = -1;
  private relationshipName = 'All';
  private datesRel: {};
  private dateFilter: {
    fromDate,
    toDate
  } = {
      fromDate: {
        year: moment().subtract(60, 'days').year(), 
        month: moment().subtract(60, 'days').month() + 1,
        day: moment().subtract(60, 'days').date()
      },
      toDate: { year: moment().year(), month: moment().month() + 1, day: moment().date() }
    };

  public dataSourceSubject = new BehaviorSubject<any>({data: [], flag: 'not'}); 
  public refreshGridSubject = new BehaviorSubject<boolean>(false);
  public refreshGridOnColumnFilterSubject = new BehaviorSubject<boolean>(false);
  public refreshDataSubject = new BehaviorSubject<any>({ go: true, flag: true, toastrOpen: '' });
  public sendAutoPostDataSubject = new BehaviorSubject<any>({});
  public sendConfirmViewPostSubject = new BehaviorSubject<any>({});
  public globalFilterSubject = new BehaviorSubject<string>('');
  public globalFilterResetSubject = new BehaviorSubject<any>(''); 
  public genericMessageSubject = new BehaviorSubject<string>('');
  public genericMessagePostSubject = new BehaviorSubject<string>('');
  public changeGridPageSizeSubject = new BehaviorSubject<number>(25);
  public resetGridsSmallSubject = new BehaviorSubject<boolean>(false);
  public callMatchSubject = new BehaviorSubject<boolean>(false);
  public showHideAllGridsSubject = new BehaviorSubject<boolean>(false);
  public clearSearchSubject = new BehaviorSubject<boolean>(false);
  public callPostRecordsSubject = new BehaviorSubject<boolean>(false);
  public downloadFileSubject = new BehaviorSubject<{ name: string, type: ExportType }>(null);

  constructor(private restService: RestService,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.selectedColumns = [...this.defaultColumns];
  }

  filedownload(filename: string) {
    // console.log(this.baseUrl + filename);
    // window.open(this.baseUrl + filename);
    return this.baseUrl + filename;
  }  

  public postContraId(type: string, id: number): Observable<any> {
    return this.restService.get(`${this.baseUrl}${Routes.getContra}?ContraType=${type}&Contraid=${id}&Relationshipid=${this.relationshipId}`)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public getPieChart(): Observable<Array<PieChart>> {
    const isApprover: boolean = this.authService.userDetails.Role === UserRole.APPROVER;
    return this.restService.post(this.addFilter(this.baseUrl + Routes.getPieChart + '?IsApprover=' + isApprover), {})
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public postGroupId(gid: number, iid: number, eid: number): Observable<Array<any>> {
    if (gid==null)gid=0;
    if (iid==null || gid>0)iid=0;
    if (eid==null || gid>0)eid=0;
    return this.restService.get(this.baseUrl + Routes.groupRecord + '?groupid=' + gid + "&internalid="+iid + "&externalid="+ eid)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public postAutoPosting(postObj) {
    postObj.processedBy = this.authService.userDetails.Name;
    this.restService.post(this.baseUrl + Routes.autoPost, postObj)
      .pipe(
      map((res: Response) => {
        this.refreshData(false, 'Auto Posted Successfully!');
      }),
      catchError(e => of([]))
      ).pipe(first()).subscribe();
  }

  public postUnGroup(id: number) {    
    const postObj = { 
      GroupId: id, 
      ProcessedDt: moment().format('YYYY-MM-DD HH:mm:ss'), 
      ProcessedBy: this.authService.userDetails.Name 
    };
    this.restService.post(this.baseUrl + Routes.unGroup, postObj)
      .pipe(
      map((res: Response) => {
        this.refreshOpenTablesAsync('Open', 'Un-grouped Successfully!');
      }),
      catchError(e => of([]))
      ).pipe(first()).subscribe();
  }

  public postUnGroupContra(postObj) {    
    postObj.ProcessedBy = this.authService.userDetails.Name;

    this.restService.post(this.baseUrl + Routes.unGroupContra, postObj)
      .pipe(
      map((res: Response) => {
        this.refreshData(false, 'Un-grouped Successfully!');
      }),
      catchError(e => of([]))
      ).pipe(first()).subscribe();
  }

  public postContra(postObj) {    
    postObj.ProcessedBy = this.authService.userDetails.Name;
    this.restService.post(this.baseUrl + Routes.postContra, postObj)
      .pipe(
      map((res: Response) => {
        this.refreshData(false, 'Contra Successfully!');
      }),
      catchError(e => of([]))
      ).pipe(first()).subscribe();
  }  

  public postUnMatch(postObj) {    
    postObj.ProcessedBy = this.authService.userDetails.Name;
    this.restService.post(this.baseUrl + Routes.postUnMatch, postObj)
      .pipe(
      map((res: Response) => {
        this.refreshData(false, 'Un-Matched Successfully!');
      }),
      catchError(e => of([]))
      ).pipe(first()).subscribe();
  }

  public getRecordsByStatus(recordStatus, datesRel): Observable<any> {
    if(datesRel) {
      this.datesRel = datesRel;
      this.relationshipId = datesRel.selectedRelationshipId;
      this.relationshipName = datesRel.selectedrelationshipName;
      this.dateFilter = Object.assign({}, { fromDate: datesRel.fromDate, toDate: datesRel.toDate });
    }
    return this.restService.post(this.addFilter(this.baseUrl + Routes.getRecordsByStatus + '?DataBy=' + recordStatus), {})
      .pipe(
        map(x => x),
        catchError(e => of([])) 
      );
  }

  public getMatchedChartData(): Observable<any> {
    return this.restService.get(this.addFilter(this.baseUrl + Routes.getMatchedChart + '?ReportType=' + RecordStatus.MATCHED))
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public getPieChartContra(): Observable<any> {
    const isApprover: boolean = this.authService.userDetails.Role === UserRole.APPROVER;
    return this.restService.post(this.addFilter(this.baseUrl + Routes.getPieChart + '?IsApprover=' + isApprover + '&isContra=true'), {})
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public getGridInfo() {
    return this.restService.post(this.baseUrl + Routes.getGridInfo, {})
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  private checkForIsPostedFlag(params: any) {
    if (params.data.isPosted) {
      return false;
   }
   return true;
  }

  public getCheckBoxColumn(checkBox?: boolean) {
    return Object.assign({}, {
      headerName: '',
      field: '',
      filter: false,
      headerCheckboxSelection: (checkBox) ? true : false,
      headerCheckboxSelectionFilteredOnly: (checkBox) ? true : false,
      checkboxSelection: this.checkForIsPostedFlag,
      suppressSizeToFit: false,
      width: 55,
      fixedWidth: true,
      lockPinned: true,
      pinned: "left"
    });
  }

  public getCheckBoxColumnSmall() {
    return Object.assign({}, {
      headerName: '',
      field: '',
      headerCheckboxSelection: false,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      suppressSizeToFit: false,
      width: 55,
      fixedWidth: true,
      lockPinned: true,
      pinned: "left"
    });
  }
  public setGridColumns(columns) {
    this.availableColumns = Object.assign({}, columns);
  }

  public setSelectedColumns(selectedColumns: Array<string>) {
    this.selectedColumns = [...selectedColumns];
    this.refreshGridOnColumnFilter();
  }

  public getDefaultColumns() {
    return this.defaultColumns;
  }

  public getAvailableGridColumns() {
    return this.availableColumns;
  }

  public getAvailableToBePostedColumns() {
    return {
      Narration: {
        title: 'Narration'
      },
      Amount: {
        title: 'Amount'
      },
      TransactionType: {
        title: 'Transaction Type'
      },
      ERPInternalAccountNumber: {
        title: 'Internal Account Number (ERP)'
      },
      BankInternalAccountNumber: {
        title: 'Internal Account Number (Bank)'
      },
      Comments: {
        title: 'Comments'
      },
      PostedOn: {
        title: 'Posted On'
      },
      Posteby: {
        title: 'Posted By'
      }
    }
  }

  public getRelationships(): Observable<Array<Relationships>> {
    return this.restService.post(this.baseUrl + Routes.relationships, {})
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  public getIneternalAccount(isRelationshipId?: boolean): Observable<IneternalAccountRecord> {
    const appendUrl = (isRelationshipId) ? '?Relationshipid=' + this.relationshipId : '';
    return this.restService.get(this.baseUrl + Routes.ineternalAccount + appendUrl)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  private getSelectedColumns() {
    return Object.keys(this.availableColumns).filter(x => this.selectedColumns.indexOf(x) > -1);
  }

  private textCustomComparator(filter, value, filterText) {
    var filterTextLoweCase = filterText.toLowerCase();
    var valueLowerCase = value.toString().toLowerCase();
    if(filterTextLoweCase==="@" && valueLowerCase === "") {
      return true;
    }
    switch (filter) {
      case 'contains':
          return valueLowerCase.indexOf(filterTextLoweCase) >= 0;
      case 'notContains':
          return valueLowerCase.indexOf(filterTextLoweCase) === -1;
      case 'equals':
          return valueLowerCase === filterTextLoweCase;
      case 'notEqual':
          return valueLowerCase != filterTextLoweCase;
      case 'startsWith':
          return valueLowerCase.indexOf(filterTextLoweCase) === 0;
      case 'endsWith':
          var index = valueLowerCase.lastIndexOf(filterTextLoweCase);
          return index >= 0 && index === (valueLowerCase.length - filterTextLoweCase.length);
      }
  }
  
  public tobePostedGridColumntoDisplay() {
    const names = this.tobePostedGridColumn();
    return names.map(x => {
      return {
        headerName: x.title,
        field: x.key,
        headerClass: 'grid-header-1',
        filter: x.title.toLowerCase().indexOf("date") >=0 ? 'agDateColumnFilter': 'agTextColumnFilter',
        filterParams: {
          suppressAndOrCondition: true,
          textCustomComparator: this.textCustomComparator,
          comparator: this.dateComparator,
          browserDatePicker: true
        },
        width: 150,
        suppressSizeToFit: false,
        icons: {
          menu: '<i class="fa fa-bars"/>'
        },
        valueFormatter: this.currencyFormatter,
        tooltip: (params) => params.value
      };
    });
  }

  private tobePostedGridColumn() {
    return [
      {
        title: 'Narration',
        key: 'Narration'
      },
      {
        title: 'Amount',
        key: 'Amount'
      },
      {
        title: 'Transaction Type',
        key: 'TransactionType'
      },
      {
        title: 'Internal Account Number (ERP)',
        key: 'ERPInternalAccountNumber'
      },
      {
        title: 'Internal Account Number (Bank)',
        key: 'BankInternalAccountNumber'
      },
      {
        title: 'Comments',
        key: 'Comments'
      },
      {
        title: 'Posted On',
        key: 'PostedOn'
      },
      {
        title: 'Posted By',
        key: 'Posteby'
      }
    ]
  }

  private dateComparator(filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
    var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
    if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }

  public getGridColumntoDisplay() {
    const names = this.getSelectedColumns();
    return names.map(x => {
      return {
        headerName: this.availableColumns[x].title,
        field: x,
        filter: this.availableColumns[x].title.toLowerCase().indexOf("date") >=0 ? 'agDateColumnFilter': 'agTextColumnFilter',
        filterParams: {
          suppressAndOrCondition: true,
          textCustomComparator: this.textCustomComparator,          
          comparator: this.dateComparator,
          browserDatePicker: true
        },
        headerClass: this.getHeaderStyle(x),
        suppressSizeToFit: false,
        width: 150,
        icons: {
          menu: '<i class="fa fa-bars"/>'
        },
        valueFormatter: this.currencyFormatter,
        tooltip: (params) => params.value
      };
    });
  }

  private currencyFormatter(params): any {
  return !( params.colDef.field.indexOf('Amount') >=0 || params.colDef.field.indexOf('amount') >=0 || params.colDef.field.indexOf('debit') >=0  || params.colDef.field.indexOf('credit') >=0  ) || params.value === null || isNaN(params.value) 
  ? params.value
  : params.value.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  getGridColumnByType(prefix) {
    return this.getGridColumntoDisplay().filter(x => x.field.startsWith(prefix));
  }

  private getHeaderStyle(field) {
    return (field.startsWith('int')) ? 'grid-header-1' : 'grid-header-2';
  }

  public getGridColumntoDisplayV2() {
    const names = Object.keys(this.availableColumns).filter(x => this.selectedColumns.indexOf(x) > -1);
    const cols = {};
    names.forEach(x => {
      cols[x] = this.availableColumns[x];
    });
    return cols;
  }

  getGridOptions() {
    return { ...this.gridOptions };
  }

  getGridOptionsSmall() {
    return { ...this.gridOptionsSmall };
  }

  updatedGridData(data) {
    this.dataSourceSubject.next(data);
  }

  resetGridsSmall() {
    this.resetGridsSmallSubject.next(true);
  }

  refreshGrid() {
    this.refreshGridSubject.next(true);
  }

  refreshGridOnColumnFilter() {
    this.refreshGridOnColumnFilterSubject.next(true);
  }

  refreshData(flag: boolean = true, toastrOpen?: string) {
    this.refreshDataSubject.next({
      go: true, flag: flag, toastrOpen: toastrOpen
    });
  }

  changeGridPageSize(val: number) {
    this.changeGridPageSizeSubject.next(val);
  }

  public updateStatusOnMatch(arrayData: any, currentStatus: string) {
    const status = this.getNextStatus(currentStatus);
    if (status) {
      this.restService.post(this.baseUrl + Routes.postMatch, this.getPayloadOnMatch(arrayData, status))
        .pipe(
        map((res: Response) => {
          this.refreshData(false, 'Data matched Successfully!');
        }),
        catchError(e => of([]))
        ).pipe(first()).subscribe();
    }
  }

  public updateStatus(row: any, currentStatus: string) {
    const status = this.getNextStatus(currentStatus);
    if (status) {
      this.restService.post(this.baseUrl + Routes.recoresults, this.getUpdateStatusRequest(row, status))
        .pipe(
        map((res: Response) => {
          this.refreshData();
        }),
        catchError(e => of([]))
        ).pipe(first()).subscribe();
    }
  }

  private postToBePostedObj(obj): any {
    return {
      processedBy: this.authService.userDetails.Name,
      ExternalIds: obj.extRecordsId,
      Groupid: obj.Groupid
    }
  }

  public tobePosted(row: any, currentStatus: string) {
    const status = this.getNextStatus(currentStatus);
    if (status) {
      this.restService.post(this.baseUrl + Routes.manualPosting, this.postToBePostedObj(row))
        .pipe(
        map((res: Response) => {
          this.refreshData(false, 'Selected records have been marked for Posting!');
        }),
        catchError(e => of([]))
        ).pipe(first()).subscribe();
    }
  }

  private getNextStatus(currentStatus) {
    switch (currentStatus) {
      case 'match': // group
        return this.authService.userDetails.Role === UserRole.APPROVER ? RecordStatus.MATCHED : RecordStatus.FORMATCHING;
      case 'approve':
        return RecordStatus.MATCHED;
      case 'open':
        return this.authService.userDetails.Role === UserRole.APPROVER ? RecordStatus.MATCHED : RecordStatus.FORMATCHING;
      case 'reject':
        return RecordStatus.GROUPED;
      case 'tobeposted':
        return RecordStatus.TOBEPOSTED;
      // if current is post then post
    }
  }

  private getPayloadOnMatch(data, status) {
    let postArray = [];
    _.map(data, obj => {
      postArray.push({
        recoResultId: obj.RecordId || 0,
        t_intRecordId: obj.intDataRecordsId || 0,
        t_extRecordId: obj.extRecordsId || 0,
        recoStatus: status,
        recoCategory: 'USER-MATCHED',
        recoSubCategory: null,
        isActive: 'Y',
        processedDt: moment().format('YYYY-MM-DD HH:mm:ss'),
        processedBy: this.authService.userDetails.Name,
        ruleReference: 'RECO_R1',
        RelationId: this.relationshipId,
        Groupid: obj.Groupid,
        RecordId: obj.RecordId
      });
    });
    return { pRecoDatas: postArray }
  }

  private getUpdateStatusRequest(row, status) {
    return {
      recoResultId: row.RecordId || 0,
      t_intRecordId: row.intDataRecordsId || 0,
      t_extRecordId: row.extRecordsId || 0,
      recoStatus: status,
      recoCategory: 'USER-MATCHED',
      recoSubCategory: null,
      isActive: 'Y',
      processedDt: moment().format('YYYY-MM-DD HH:mm:ss'),
      processedBy: this.authService.userDetails.Name,
      ruleReference: 'RECO_R1',
      RelationId: this.relationshipId
    };
  }

  public setDateFilter(fromDate: Date, toDate: Date, selectedRelationshipId: number, selectedrelationshipName) {
    this.dateFilter = Object.assign({}, { fromDate: fromDate, toDate: toDate });
    this.relationshipId = selectedRelationshipId;
    this.relationshipName = selectedrelationshipName;
  }

  private addFilter(url: string, x?: boolean) {
    if (this.dateFilter.fromDate) {
      url = url + `&fromDate=${this.dateFilter.fromDate.day}-${this.dateFilter.fromDate.month}-${this.dateFilter.fromDate.year}`;
    }
    if (this.dateFilter.toDate) {
      url = url + `&toDate=${this.dateFilter.toDate.day}-${this.dateFilter.toDate.month}-${this.dateFilter.toDate.year}`;
    }
    if (this.relationshipId && this.relationshipId > 0) {
      url = url + '&Relationshipid=' + this.relationshipId;
    }
    /* if (x) {
      url = url + '&limit=' + 151;
    } */
    return url;
  }

  postData(data: any[], internalAccountNumber, comments): Observable<any> {
    const records = [];
    data.forEach(row => {
      records.push(this.getUpdateStatusRequest(row, 'post'));
    });

    const request = {
      RRecords: records,
      InternalAccountNumber: internalAccountNumber,
      Comments: comments,
      RelationShipName: this.relationshipName,
      RelationId: this.relationshipId
    };
    return this.restService.post(this.baseUrl + Routes.addPost, request)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  postEditToBePosted(postObj: any): Observable<any> {
    postObj.processedBy = this.authService.userDetails.Name;
    return this.restService.post(this.baseUrl + Routes.postEdit, postObj)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  postSplitToBePosted(postObj: any): Observable<any> {
    postObj.Relationshipid = this.relationshipId;
    postObj.lastUpdatedBy = this.authService.userDetails.Name;
    return this.restService.post(this.baseUrl + Routes.postSplit, postObj)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  tobePostedPost(postObj: any): Observable<any> {
    postObj.processedBy = this.authService.userDetails.Name;
    return this.restService.post(this.baseUrl + Routes.addPost, postObj)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  splitData(data: any[], extRecordsId): Observable<any> {
    const records = [];
    let index = 0;
    data.forEach((row) => {
      if (parseFloat(Number(row.amount).toString()) > 0) {
        records.push({
          SplitId: 0,
          SplitAmount: row.amount,
          InternalAccountNumber: row.type,
          Sequence: ++index,
          Comment: row.comments
        });
      }
    });
    const request = {
      SplitDatas: records,
      IntRecordId: 0,
      ExtRecordId: extRecordsId,
      lastUpdatedBy: this.authService.userDetails.Name,
    };
    return this.restService.post(this.baseUrl + Routes.addSplit, request)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  getSplittedData(id: number): Observable<Array<any>> {
    return this.restService.get(this.baseUrl + Routes.getSplit + id)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  deleteSplit(id: number): Observable<Array<any>> {
    return this.restService.delete(this.baseUrl + Routes.getSplit + id)
      .pipe(
      map(x => x),
      catchError(e => of([]))
      );
  }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  downloadFile(name: string, type: ExportType) {
    this.downlodedfile = false;
    this.downloadFileSubject.next({ name: name, type: type });
  }

  refreshOpenTablesAsync(tableType: string, msg: string) {
    this.showSpinner();
    this.getRecordsByStatus(tableType, this.datesRel).subscribe(data => {
      this.updatedGridData({
        data: data, 
        flag: (msg == 'Reset Successfully!') ? 'not' : 'filtering'
      });
      this.hideSpinner();
      this.toastr.success(msg);
    });
  }

  setAppData(data: any, id: string) {
    if(data && id) {
      if(_.isArray(data)) {
        this.setAppDatum[id] = Object.assign([], data);
      } else if (_.isObject(data)) {
        this.setAppDatum[id] = Object.assign({}, data);
      } else {
        this.setAppDatum[id] = data;
      }
      
    }
  }

  getAppData() {
    return this.setAppDatum;
  }

  sendAutoPostData(data: any) {
    this.sendAutoPostDataSubject.next(data);
  }

  sendConfirmViewPost(data: any) {
    this.sendConfirmViewPostSubject.next(data);
  }

  callMatch(data: boolean) {
    this.callMatchSubject.next(data);
  }

  callPostRecords(data: boolean) {
    this.callPostRecordsSubject.next(data);
  }

  checkForMatch(iA, eA) {
    const canMatch = (iA === eA) || _.inRange(iA - eA, -0.99, 0.99);
    return canMatch;
  }

  convertToIndianCurrency(num: any): string {
    return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

}
