import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DashboardService } from '../../../shared/services/dashboard.service';
import { RecordStatus } from '../../../shared/enums/record-status.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('message') message: ElementRef;
  @ViewChild('postmessage') postmessage: ElementRef;
  public alertMessage = '';
  public RecordStatus = RecordStatus;
  public selectedStatus: RecordStatus = RecordStatus.UNKNOWN;
  private subscriptions: Subscription[] = [];
  public openStats: {
    internalRows: number,
    internalAmount: number,
    externalRows: number,
    externalAmount: number,
    canUnGroup: boolean,
    description:string,
    data: any
  };

  private DefaultOpenStats = {
    internalRows: 0,
    internalAmount: 0,
    externalRows: 0,
    externalAmount: 0,
    canUnGroup: false,
    description:"",
    data: {}
  };
  public onlyOpenRecords: boolean;
  public globalFilter = '';
  public rowData: any[] = [];
  public datesRel: {};
  public showHideAllGrids: boolean = false;
  // public majorSearchClick: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getGridColumn();
    this.dashboardService.showSpinner();
    

    this.subscriptions.push(this.dashboardService.refreshDataSubject.subscribe(data => {
      if (data.go && this.selectedStatus !== RecordStatus.UNKNOWN) {
        // this.majorSearchClick = data.majorSearchClick;
        this.getRecordsByStatus(data.toastrOpen);
      }
    }));

    this.subscriptions.push(this.dashboardService.dataSourceSubject.subscribe(data => {
      this.rowData = data.data;
    }));

    this.subscriptions.push(this.dashboardService.genericMessageSubject.subscribe(message => {
      if (message) {
        this.alertMessage = message;
        this.modalService.open(this.message, { ariaLabelledBy: 'modal-basic-title', centered: true });
      }
    }));

    this.subscriptions.push(this.dashboardService.genericMessagePostSubject.subscribe(link => {
      if (link) {
        this.alertMessage = link;
        this.modalService.open(this.postmessage, { ariaLabelledBy: 'modal-basic-title', centered: true });
      }
    }));

    this.subscriptions.push(this.dashboardService.showHideAllGridsSubject.subscribe(flag => {
      (flag) ? this.showHideAllGrids = true : this.showHideAllGrids = false;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getDatesAndRelation(datesRel: object) {
    this.datesRel = datesRel;
  }

  getRecordsByRecoStatus(val: RecordStatus) {
    this.selectedStatus = val;
    this.globalFilter = '';
    this.getRecordsByStatus();
  }

  openGridSelectedRows(data) {
    if (this.openStats && data) {
      this.openStats.internalRows = data.internalRows.length;
      this.openStats.externalRows = data.externalRows.length;
      this.openStats.internalAmount = data.internalRows.reduce((p, c) => p + Number(c.intDatacreditAmount)+ Number(c.intDatadebitAmount), 0)  ;
      this.openStats.externalAmount = data.externalRows.reduce((p, c) => p + Number(c.extdebitAmount)+Number (c.extcreditAmount), 0) ;
      this.openStats.canUnGroup = (data.unGroup) ? data.unGroup.canUnGroup : false;
      this.openStats.data = data;
      this.openStats.description= data.internalRows.length <=0 ? "":
                                  data.internalRows[data.internalRows.length-1].intDatareferenceText_11;
      this.dashboardService.setAppData(this.openStats, 'openStats');
    }
  }

  showColumnModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  displayOpenRecords() {
    this.getRecordsByRecoStatus(this.RecordStatus.OPEN);
    this.onlyOpenRecords = true;
  }

  showOnlyOpenRecords() {
    this.getRecordsByRecoStatus(this.RecordStatus.OPEN);
    this.onlyOpenRecords = true;
  }

  showOnlyMatchedRecords() {
    this.getRecordsByRecoStatus(this.RecordStatus.MATCHED);
  }

  private getRecordsByStatus(msg?: string) {
    this.openStats = Object.assign({}, this.DefaultOpenStats);
    this.onlyOpenRecords = false;
    this.dashboardService.showSpinner();
    this.dashboardService.getRecordsByStatus(this.selectedStatus, this.datesRel).subscribe(data => {
      if(msg) {
        this.toastr.success(msg);
      }
      this.dashboardService.hideSpinner();
      this.dashboardService.updatedGridData({
        data: data, 
        flag: msg ? 'filtering' : 'not'
      });
    });
  }

  private getGridColumn() {
    this.dashboardService.getGridInfo().subscribe((columns: Array<any>) => {
      const cols = {};
      columns.forEach(c => {
        cols[c.TableColName] = { 'title': c.GridColName };
      });
      this.dashboardService.setGridColumns(cols);
    });
  }
}
