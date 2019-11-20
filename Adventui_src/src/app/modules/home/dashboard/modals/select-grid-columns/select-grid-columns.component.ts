import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../../../../../shared/services/dashboard.service';

@Component({
  selector: 'app-select-grid-columns',
  templateUrl: './select-grid-columns.component.html',
  styleUrls: ['./select-grid-columns.component.css']
})
export class SelectGridColumnsComponent implements OnInit {
  @Output() dismiss: EventEmitter<void> = new EventEmitter();

  public availableGridColumns = [];
  public allselected= false;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    const cols = this.dashboardService.getAvailableGridColumns();
    const gridCurrentColumns = Object.keys(this.dashboardService.getGridColumntoDisplayV2());
    const defualtCols = this.dashboardService.getDefaultColumns();

    this.availableGridColumns = Object.keys(cols).map(x => {
      const isSelected = gridCurrentColumns.indexOf(x);
      this.allselected = isSelected > -1;
      const isDefault = -1; // defualtCols.indexOf(x);
      return { key: x, title: cols[x].title, isSelected: isSelected > -1, isDefault: isDefault > -1 };

    });
  //  alert(this.dashboardService.selectedStatus);

  }

  save() {
    this.dashboardService.setSelectedColumns(this.availableGridColumns.filter(x => x.isSelected).map(x => x.key));
    this.close();
  }

  close() {
    this.dismiss.emit();
  }

  reset(selectedcolumn) {
  //  alert(selectedcolumn);
    const cols = this.dashboardService.getAvailableGridColumns();
    const defualtCols = this.dashboardService.getDefaultColumns();
    this.allselected =!this.allselected ;
    const gridCurrentColumns = Object.keys(this.dashboardService.getGridColumntoDisplayV2());

    this.availableGridColumns = Object.keys(cols).map(x => {
      const isDefault = -1; // defualtCols.indexOf(x);
        const isSelected = gridCurrentColumns.indexOf(x);;
      return { key: x, title: cols[x].title, isSelected: this.allselected ||isSelected > -1, isDefault: isDefault > -1 };
    });
  }
}
