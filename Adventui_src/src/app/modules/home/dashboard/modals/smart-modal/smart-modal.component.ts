import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import _ from 'lodash';

@Component({
  selector: 'app-smart-modal',
  templateUrl: './smart-modal.component.html',
  styleUrls: ['./smart-modal.component.css']
})
export class SmartModalComponent implements OnInit, AfterViewInit {
  
  public txnDate = null;
  public description = null;
  public comments = null;
  public amount = null;
  public text = null;
  public InternalIds = [];
  public ExternalIds = [];
  public autoPostingOtherObj:any;
  public ineternalAccounts = [];
  public refnum;
  public selectedInternalAccount;
  private editERPAccountName: string;
  private editERPSelectDCFlag: string;
  private requiredModalEditData: any;
  private dcFlagArray: Array<string>;
  private splitedRows: any[];

  constructor(
    private dashboardService: DashboardService,
    private toastr: ToastrService,
    private smartModalService: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const postObj = {
      Amount: this.amount,
      Description: this.description,
      Comment: this.comments,
      InternalIds: this.InternalIds,
      ExternalIds: this.ExternalIds,
      JobId: this.autoPostingOtherObj.JobId,
      JobExecutionId: this.autoPostingOtherObj.JobExecutionId,
      JobImportId: this.autoPostingOtherObj.JobImportId,
      OrganizationId: this.autoPostingOtherObj.OrganizationId,
      RelationshipId: this.autoPostingOtherObj.RelationshipId,
      SourceRowId: this.autoPostingOtherObj.SourceRowId,
      CurrencyId: this.autoPostingOtherObj.CurrencyId,
      RecordType: this.autoPostingOtherObj.RecordType,
      CreditAmount: this.autoPostingOtherObj.CreditAmount,
      DebitAmount: this.autoPostingOtherObj.DebitAmount
    }
    this.dashboardService.postAutoPosting(postObj);
  }

  ngAfterViewInit() {
    this.smartModalService.getModal('autoPostingModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const subs = this.dashboardService.sendAutoPostDataSubject.subscribe(data => {
        if (data) {        
          const date = data.txnDate.split('/');
          this.txnDate = { year: Number(date[2]), month: Number(date[1]), day: Number(date[0]) };
          this.amount = data.amount;
          this.description = data.description;
          this.comments = '';
          this.InternalIds = data.InternalIds;
          this.ExternalIds = data.ExternalIds;
          this.autoPostingOtherObj = {
            JobId: data.JobId,
            JobExecutionId: data.JobExecutionId,
            JobImportId: data.JobImportId,
            OrganizationId: data.OrganizationId,
            RelationshipId: data.RelationshipId,
            SourceRowId: data.SourceRowId,
            CurrencyId: data.CurrencyId,
            RecordType: data.RecordType,
            CreditAmount: data.CreditAmount,
            DebitAmount: data.DebitAmount
          }
        }
      });
      subs.unsubscribe();
    });

    this.smartModalService.getModal('confirmViewEdit').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      this.dashboardService.getIneternalAccount(true).subscribe(data => {
        this.ineternalAccounts = data.IneternalAccounts;
      });
      this.initDCFlagField();         
      const getAppData = this.dashboardService.getAppData();
      this.requiredModalEditData = {
        bankAccountName: getAppData.relationshipDataforEditToBePosted.internalAccountName,
        bankAccountNumber: getAppData.relationshipDataforEditToBePosted.referenceNum,
        internalAccountId_2: getAppData.relationshipDataforEditToBePosted.id,
        amountNum: getAppData.rowDataToBePosted.Amount,
        amount: this.dashboardService.convertToIndianCurrency(getAppData.rowDataToBePosted.Amount),
        narration: getAppData.rowDataToBePosted.Narration,
        extRecordsId: getAppData.rowDataToBePosted.extRecordsId,
        intRecordsId: getAppData.rowDataToBePosted.intRecordsId
      };
    });

    this.smartModalService.getModal('confirmViewSplit').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      this.resetSplitedRows();
      this.dashboardService.getIneternalAccount(true).subscribe(data => {
        this.ineternalAccounts = data.IneternalAccounts;
      });
      this.initDCFlagField();       
      const getAppData = this.dashboardService.getAppData();
      this.requiredModalEditData = {
        extRecordsId: getAppData.rowDataToBePosted.extRecordsId,
        intRecordsId: getAppData.rowDataToBePosted.intRecordsId,
        amountNum: getAppData.rowDataToBePosted.Amount,
        amount: this.dashboardService.convertToIndianCurrency(getAppData.rowDataToBePosted.Amount)
      };
    });
    
    this.smartModalService.getModal('confirmUnGroup').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmUnGroup');
      this.text = getData.text;
    });
    
    this.smartModalService.getModal('confirmContra').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmContra');
      this.text = getData.text;
    });
    
    this.smartModalService.getModal('confirmUnMatch').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmUnMatch');
      this.text = getData.text;
    });
    
    this.smartModalService.getModal('confirmUnGroupContra').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmUnGroupContra');
      this.text = getData.text;
    });

    this.smartModalService.getModal('confirmPostRecords').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmPostRecords');
      this.text = getData.text;
    });

    this.smartModalService.getModal('confirmMatch').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmMatch');
      this.text = getData.text;
    });

    this.smartModalService.getModal('confirmViewReject').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmViewReject');
      this.text = getData.text;
    });

    this.smartModalService.getModal('confirmViewPost').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmViewPost');
      this.text = getData.text;
    });

    this.smartModalService.getModal('confirmAutoPostModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      const getData = this.smartModalService.getModalData('confirmAutoPostModal');
      this.text = getData.text;
    });
  }

  onSelectedInternalAccountEdit(val, obj?: any, index?: number) {
    this.ineternalAccounts.map(x => {
      if (x.AccounName === val) {
        this.requiredModalEditData.internalAccountId_1 = x.Id;
      }
      if (obj) this.splitedRows[index].InternalAccountNumber = (val) ? x.Id : 0; 
    });
    this.editERPAccountName = val;
  } 

  onSelectedInternalAccountId(val) {
    this.selectedInternalAccount = val;
  } 

  onSelectedDCFlag(value, forSplit?: boolean) {
    this.editERPSelectDCFlag = value;
    if (forSplit) {
      this.splitedRows.map(o => o.DcFlag = value);
    }
  }

  callContra() {
    const data = this.dashboardService.getAppData();
    this.dashboardService.postContra(data.postContra);
  }

  callUnMatch() {
    const data = this.dashboardService.getAppData();
    this.dashboardService.postUnMatch(data.postUnMatch);
  }

  callUnGroup() {
    const data = this.dashboardService.getAppData();
    this.dashboardService.postUnGroup(data.openStats.data.unGroup.groupid);
  }

  callMatch() {
    const data = this.dashboardService.getAppData();
    if (data.openStats.data && this.dashboardService.checkForMatch(data.openStats.internalAmount, data.openStats.externalAmount)) {
      const extrows = data.openStats.data.externalRows;
      const introws = data.openStats.data.internalRows;
      this.dashboardService.updateStatusOnMatch([...extrows, ...introws], 'open');
    }
  }

  callPostRecords() {
    const data = this.dashboardService.getAppData();
    let postArray = { Groupid: [], extRecordsId: [] };
    data.openStats.data.externalRows.forEach(obj => {
      postArray.extRecordsId.push(obj.extRecordsId);
      postArray.Groupid.push(obj.Groupid);
    });
    this.dashboardService.tobePosted(postArray, 'tobeposted');
  }

  callViewPost() {    
    this.dashboardService.globalFilterResetSubject.next('');
    const getAppData = this.dashboardService.getAppData();
    const postObj = { PostRecordId: getAppData.rowDataToBePosted.PostRecordId };
    this.dashboardService.tobePostedPost(postObj).subscribe(response => {
      if(typeof response === 'number') {
        this.dashboardService.refreshOpenTablesAsync('tobeposted', 'Posted Successfully!');
      }
    });
  }

  callViewReject() {    
    this.dashboardService.globalFilterResetSubject.next('');
    const getAppData = this.dashboardService.getAppData();
    const postObj = {
      intRecordId: getAppData.rowDataToBePosted.intRecordsId,
      extRecordId: getAppData.rowDataToBePosted.extRecordsId,
      internalAccountId_1: 1,
      internalAccountId_2: 1,
      narration: getAppData.rowDataToBePosted.Narration,
      Confirmed: true,
      amount: getAppData.rowDataToBePosted.Amount,
      comments: getAppData.rowDataToBePosted.Comments 
    };
    this.dashboardService.postEditToBePosted(postObj).subscribe(response => {
      if(typeof response === 'number') {
        this.dashboardService.refreshOpenTablesAsync('tobeposted', 'Reject Successfully!');
      }
    });
  }

  callViewEditClose() {
    this.comments = '';
    this.editERPAccountName = '';    
    this.editERPSelectDCFlag = '';
    this.smartModalService.getModal('confirmViewEdit').close();
  }

  callViewEdit() {
    if(!this.editERPAccountName) {
      this.toastr.warning('Please select Account Number');
      return;
    }
    if(!this.editERPSelectDCFlag) {
      this.toastr.warning('Please select D/C Flag');
      return;
    }
    this.dashboardService.globalFilterResetSubject.next('');
    const postObj = {
      intRecordId: this.requiredModalEditData.intRecordsId,
      extRecordId: this.requiredModalEditData.extRecordsId,
      internalAccountId_1: this.requiredModalEditData.internalAccountId_1,
      internalAccountId_2: this.requiredModalEditData.internalAccountId_2,
      narration: this.requiredModalEditData.narration,
      Confirmed: false,
      amount: this.requiredModalEditData.amountNum,
      comments: this.comments
    };    
    this.comments = '';    
    this.editERPAccountName = '';    
    this.editERPSelectDCFlag = '';
    this.smartModalService.getModal('confirmViewEdit').close();
    this.dashboardService.postEditToBePosted(postObj).subscribe(response => {
      if(typeof response === 'number') {
        this.dashboardService.refreshOpenTablesAsync('tobeposted', 'Edit Successfully!');
      }
    });
  }

  private resetSplitedRows() : void {
    this.splitedRows = [
      { SplitAmount: 0, Comment: '', SplitId: 0 },
      { SplitAmount: 0, Comment: '', SplitId: 0 }
    ];
    this.editERPSelectDCFlag = '';
  }

  private initDCFlagField(): void {
    this.dcFlagArray = [];
    setTimeout(() => {
      this.dcFlagArray = ['Credit', 'Debit'];
    },100); 
  }

  callViewSplit() {
    let getAllSplitedAmount = [];
    this.splitedRows.map(obj => getAllSplitedAmount.push(obj.SplitAmount));
    const reducer = (total, val) => total + val;
    if (getAllSplitedAmount.reduce(reducer) !== this.requiredModalEditData.amountNum) {
      this.toastr.warning('Sum of Splited amounts is not equal of Displayed amount!');
      return;
    }
    if(!this.editERPSelectDCFlag) {
      this.toastr.warning('Please select D/C Flag');
      return;
    }
    let isAccNumSelected = false;
    this.splitedRows.map(obj => {
      if(!obj.InternalAccountNumber) {
        this.toastr.warning('Please select Account Number');
        isAccNumSelected = true;
      }
    });
    if (isAccNumSelected) return;
    let c = 0;
    this.splitedRows.map(obj => {
      obj.Sequence = ++c;
      obj.DcFlag = this.editERPSelectDCFlag;
    });
    let postObj: any = { SplitDatas: this.splitedRows };
    postObj.IntRecordId = this.requiredModalEditData.intRecordsId;
    postObj.ExtRecordId = this.requiredModalEditData.extRecordsId;
    this.smartModalService.getModal('confirmViewSplit').close();
    this.dashboardService.postSplitToBePosted(postObj).subscribe(response => {
      if(typeof response === 'string') {
        this.dashboardService.refreshOpenTablesAsync('tobeposted', 'Amount Splited Successfully!');
      }
    });
  }

  callViewSplitReset() {
    this.initDCFlagField();
    this.resetSplitedRows();
  }

  splitAddRow() {
    this.splitedRows.push({ SplitAmount: 0, Comment: '', SplitId: 0 });
  }

  splitDeleteRow(index) {
    if(this.splitedRows.length > 2) this.splitedRows.splice(index, 1);
  }

  callUnGroupContra() {
    const data = this.dashboardService.getAppData();
    this.dashboardService.postUnGroupContra(data.postUnGroupContra);
  }

}
