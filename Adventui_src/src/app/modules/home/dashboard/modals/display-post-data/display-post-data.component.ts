import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';
import { IneternalAccount } from '../../../../../shared/models/ineternal-account';

@Component({
  selector: 'app-display-post-data',
  templateUrl: './display-post-data.component.html',
  styleUrls: ['./display-post-data.component.css']
})
export class DisplayPostDataComponent implements OnInit {
  @Input() data: any[];
  @Output() dismiss: EventEmitter<void> = new EventEmitter();
  public ineternalAccounts: Array<IneternalAccount> = [];
  public refnum:string;
  public comments: string;
  private selectedInternalAccount: number = null;
  constructor(private dashboardService: DashboardService) {
    this.dashboardService.getIneternalAccount().subscribe(data => {
      this.ineternalAccounts = data.IneternalAccounts;
      this.refnum=data.RefNum; 
      if (data &&  this.ineternalAccounts.length > 0) {
        this.selectedInternalAccount =  this.ineternalAccounts[0].Id;
      }
    });
  }

  ngOnInit() {

  }

  onSelectedInternalAccountId(val) {
    this.selectedInternalAccount = val;
  }

  save() {
    if (this.selectedInternalAccount) {
      this.dashboardService.postData(this.data['externalRows'], this.selectedInternalAccount, this.comments)
        .subscribe(x => {
          this.close();
          this.dashboardService.genericMessagePostSubject.next(this.dashboardService.filedownload(x.FileUrl));
          // this.dashboardService.filedownload(x.FileUrl);
          this.dashboardService.refreshData();
        });
    }
  }

  close() {
    this.dismiss.emit();
  }
}
