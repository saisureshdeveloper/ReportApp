import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../../../../shared/services/dashboard.service';
import * as moment from 'moment';
import { Relationships } from '../../../../shared/models/relationships';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // @Output() openGridSelectedRows: EventEmitter<{ internalRows: any[], externalRows: any[], unGroup: any }> = new EventEmitter();
  @Output() getDatesAndRelation: EventEmitter<{ 
    fromDate: {}, 
    toDate: {},
    selectedRelationshipId: number,
    selectedrelationshipName: string
  }> = new EventEmitter<any>();
  public fromDate = null;
  public toDate = null;
  public selectedRelationshipId = -1;
  public selectedrelationshipName = '';
  public relationships: Array<Relationships> = [];
  constructor(
    private dashboardService: DashboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const date = moment().subtract(60, 'days');
    this.fromDate = { year: date.year(), month: date.month() + 1, day: date.date() };
    this.toDate = { year: moment().year(), month: moment().month() + 1, day: moment().date() };

    this.dashboardService.getRelationships().subscribe(val => {
      this.relationships = val;
      if (val) {
        this.selectedRelationshipId = val[0].Id;
        this.selectedrelationshipName = val[0].RelationShipName;
        this.dashboardService.setAppData({
          internalAccountName: val[0].InternalAccounName,
          referenceNum: val[0].ReferenceNum,
          id: Number(val[0].Id)
        }, 'relationshipDataforEditToBePosted');
        this.search();
      }
    });
  }

  dateChange(getDate: any, key: string) {
    let diffDays: number;    
    const formated = `${getDate.day}-${getDate.month}-${getDate.year}`;
    const momformated = moment(formated, 'DD-MM-YYYY');
    if(key === 'fromDate') {
      const fToDate = `${this.toDate.day}-${this.toDate.month}-${this.toDate.year}`;
      const momToDate = moment(fToDate, 'DD-MM-YYYY');
      diffDays = momToDate.diff(momformated, 'days');
    } else {
      const fFromDate = `${this.fromDate.day}-${this.fromDate.month}-${this.fromDate.year}`;
      const momFromDate = moment(fFromDate, 'DD-MM-YYYY');
      diffDays = momformated.diff(momFromDate, 'days');
    }
    if (diffDays < 60) {
      this.toastr.error('Dates difference should not be greater than 60');
      return;
    } else if (diffDays <= 0) {
      this.toastr.error('To Date should be greater than From Date');
      return;
    }
    (key === 'fromDate') ? this.fromDate = getDate : this.toDate = getDate;
    const datesAndRelation = {
      fromDate : this.fromDate,
      toDate : this.toDate,
      selectedRelationshipId: this.selectedRelationshipId,
      selectedrelationshipName: this.selectedrelationshipName
    };
    this.getDatesAndRelation.emit(datesAndRelation);
  }

  search(showLoader?: boolean) {
    (showLoader) ? this.dashboardService.showSpinner() : '';
    this.dashboardService.setDateFilter(this.fromDate, this.toDate, <number>this.selectedRelationshipId, this.selectedrelationshipName);
    this.dashboardService.showHideAllGridsSubject.next(true);
    this.dashboardService.refreshData();
  }

  onSelectedRelationshipId(obj) {
    this.selectedRelationshipId = obj.value;
    this.selectedrelationshipName = obj.options[obj.selectedIndex].text;
    this.dashboardService.setAppData({
      internalAccountName: this.relationships[Number(obj.value)-1].InternalAccounName,
      referenceNum: this.relationships[Number(obj.value)-1].ReferenceNum,
      id: Number(this.relationships[Number(obj.value)-1].Id)
    }, 'relationshipDataforEditToBePosted');
    const datesAndRelation = {
      fromDate : this.fromDate,
      toDate : this.toDate,
      selectedRelationshipId: this.selectedRelationshipId,
      selectedrelationshipName: this.selectedrelationshipName
    };
    this.getDatesAndRelation.emit(datesAndRelation);
  }

  // commented as of now.may require in future

  /* reset() {
    this.fromDate = null;
    this.toDate = null;
    this.search();
  } */
}
