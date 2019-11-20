import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../../../shared/services/dashboard.service';
import { RecordStatus } from '../../../../shared/enums/record-status.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExortFileService } from '../../../../shared/services/export-file.service';
import { ExportType } from '../../../../shared/enums/export-type.enum';

@Component({
  selector: 'app-table-control',
  templateUrl: './table-control.component.html',
  styleUrls: ['./table-control.component.css']
})
export class TableControlComponent implements OnInit {
  public globalFilter: string;
  @Input() set globalFilterInp(value: string) {
    this.globalFilter = value;
  }
  @Input() rowDataInp: any[];
  @Input() displayedIntData: any[];
  @Input() displayedExtData: any[];
  @Input() selectedStatusInp: RecordStatus;
  public RecordStatus = RecordStatus;
  public openStats: {
    internalRows: number,
    internalAmount: number,
    externalRows: number,
    externalAmount: number,
    canUnGroup: boolean,
    data: any
  };

  private DefaultOpenStats = {
    internalRows: 0,
    internalAmount: 0,
    externalRows: 0,
    externalAmount: 0,
    canUnGroup: false,
    data: {}
  };

  constructor(private dashboardService: DashboardService,
    private modalService: NgbModal,
    private exortFileService: ExortFileService,
  ) { }

  ngOnInit() {
    this.dashboardService.globalFilterResetSubject.subscribe(data => {
      this.globalFilter = '';
    });
  }

  changePageSize(val: number) {
    this.dashboardService.changeGridPageSize(val);
  }

  showColumnModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.globalFilter = '';
    this.dashboardService.globalFilterResetSubject.next('');
  }

  onGlobalFilterChanged(val) {
    this.globalFilterInp = val;
    this.dashboardService.globalFilterSubject.next(val);
  }

  exportAsXLSX() {
    if (this.rowDataInp || this.displayedIntData || this.displayedExtData) {
      if(this.selectedStatusInp.toLowerCase() === 'open' || this.selectedStatusInp.toLowerCase() === 'matched') {
        this.exortFileService.exportTypeExcel(this.displayedIntData, this.displayedExtData, this.selectedStatusInp);
      } else {
        this.dashboardService.downloadFile(this.selectedStatusInp, ExportType.Excel);
      }
      this.globalFilter = '';
      this.dashboardService.globalFilterResetSubject.next('');
    }

  }

  exportAsPDF() {
    if (this.rowDataInp) {
      this.exortFileService.exportTypePdf(this.rowDataInp, this.selectedStatusInp);
      this.globalFilter = '';
      this.dashboardService.globalFilterResetSubject.next('');
    }
  }

  clearSearch() {
    this.dashboardService.clearSearchSubject.next(true);
  }

}
