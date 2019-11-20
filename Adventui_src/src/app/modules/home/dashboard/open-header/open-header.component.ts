import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DashboardService } from '../../../../shared/services/dashboard.service';
import _ from 'lodash';


@Component({
  selector: 'app-open-header',
  templateUrl: './open-header.component.html',
  styleUrls: ['./open-header.component.css']
})
export class OpenHeaderComponent implements OnInit, AfterViewChecked {
  @Input() openStats: any;
  constructor(
    private toastr: ToastrService,
    private dashboardService: DashboardService,
    private modalService: NgbModal,
    public smartModalService: NgxSmartModalService
  ) { }

  ngOnInit() {
    
  }

  private checkForMatch() {
    return this.dashboardService.checkForMatch(this.openStats.internalAmount, this.openStats.externalAmount);
  }

  ngAfterViewChecked() {
    if (this.openStats.data.internalRows.length > 0) {
      const getObj = this.openStats.data.internalRows[0];
      let InternalIds = [], ExternalIds = [];
      this.openStats.data.internalRows.map(obj => {
        InternalIds.push(Number(obj.intDataRecordsId));
      });
      this.openStats.data.externalRows.map(obj => {
        ExternalIds.push(Number(obj.extRecordsId));
      });
      const sendObj: Object = {
        txnDate: getObj.intDatareferenceDateTime_1,
        description: getObj.intDatareferenceText_11,
        JobId: getObj.intDatajobId,
        JobExecutionId: getObj.JobExecutionId,
        JobImportId: getObj.intDatajobImportId,
        OrganizationId: getObj.intDataorganizationId,
        RelationshipId: getObj.intDatarelationshipId,
        SourceRowId: getObj.SourceRowId,
        CurrencyId: getObj.intDatacurrencyId,
        RecordType: getObj.intDatarecordType,
        CreditAmount: 0,
        DebitAmount: 0,
        amount: this.openStats.externalAmount - this.openStats.internalAmount,
        comments: '',
        InternalIds: InternalIds,
        ExternalIds: ExternalIds
      };
      this.dashboardService.sendAutoPostData(sendObj);
      this.smartModalService.setModalData(sendObj, 'autoPostingModal');
    }
    const sendTextObj: Object = {
      text: 'Amounts are not matching for the selected group of records. Do you want to Auto Post the missing records into ERP?'
    };
    const confirmMatchObj: Object = {
      text: 'Do you want to Match the selected records?'
    };
    const confirmUnGroupObj: Object = {
      text: 'Do you want to Un-group the selected records?'
    };
    const confirmContraObj: Object = {
      text: 'Do you want to Contra the selected records?'
    };
    const confirmPostRecordsObj: Object = {
      text: 'Do you want to Post the selected records?'
    };
    this.smartModalService.setModalData(sendTextObj, 'confirmAutoPostModal');
    this.smartModalService.setModalData(confirmMatchObj, 'confirmMatch');
    this.smartModalService.setModalData(confirmContraObj, 'confirmContra');
    this.smartModalService.setModalData(confirmPostRecordsObj, 'confirmPostRecords');
  }

  close() {
    this.modalService.dismissAll();
  }

  resetGridsSmall() {
    this.dashboardService.globalFilterResetSubject.next('');
    this.dashboardService.refreshOpenTablesAsync('Open', 'Reset Successfully!');
  }

  enableContraBtn() {
    if ((this.openStats.externalRows === 2 && this.openStats.internalRows === 0) ||
        (this.openStats.externalRows === 0 && this.openStats.internalRows === 2)) {
      
      if (this.openStats.internalRows === 2) {
        var erpCredit1 = Math.abs(this.openStats.data.internalRows[0].intDatacreditAmount);
        var erpCredit2 = Math.abs(this.openStats.data.internalRows[1].intDatacreditAmount);
        var erpDebit1 = Math.abs(this.openStats.data.internalRows[0].intDatadebitAmount);
        var erpDebit2 = Math.abs(this.openStats.data.internalRows[1].intDatadebitAmount);

        if(erpCredit1 === erpDebit2 || erpCredit2 === erpDebit1) {
          const postContra = {
            ID1: this.openStats.data.internalRows[0].intDataRecordsId,
            ID2: this.openStats.data.internalRows[1].intDataRecordsId,
            Type: 'erp'
          };
          this.dashboardService.setAppData(postContra, 'postContra');
          return false;
        }

      }
      
      if (this.openStats.externalRows === 2) {        
        var bankCredit1 = Math.abs(this.openStats.data.externalRows[0].extcreditAmount);
        var bankCredit2 = Math.abs(this.openStats.data.externalRows[1].extcreditAmount);
        var bankDebit1 = Math.abs(this.openStats.data.externalRows[0].extdebitAmount);
        var bankDebit2 = Math.abs(this.openStats.data.externalRows[1].extdebitAmount);
      
        if(bankCredit1 === bankDebit2 || bankCredit2 === bankDebit1) {
          const postContra = {
            ID1: this.openStats.data.externalRows[0].extRecordsId,
            ID2: this.openStats.data.externalRows[1].extRecordsId,
            Type: 'bank'
          };
          this.dashboardService.setAppData(postContra, 'postContra');
          return false;
        }

      }

    }
    return true;
  }
}
