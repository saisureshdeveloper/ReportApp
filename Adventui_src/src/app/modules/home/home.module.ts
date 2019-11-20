import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDatepickerModule, NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgbDateCustomParserFormatter } from '../../shared/services/date-custom-parser-formatter';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { PieChartComponent } from './dashboard/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';
import { PieContraChartComponent } from './dashboard/charts/pie-contra-chart/pie-contra-chart.component';
import { MatchedTableComponent } from './dashboard/tables/matched-table/matched-table.component';
import { GroupedTableComponent } from './dashboard/tables/grouped-table/grouped-table.component';
import { OpenTableComponent } from './dashboard/tables/open-table/open-table.component';
import { SearchFormComponent } from './dashboard/search-form/search-form.component';
import { SelectGridColumnsComponent } from './dashboard/modals/select-grid-columns/select-grid-columns.component';
import { OpenHeaderComponent } from './dashboard/open-header/open-header.component';
import { PostTableComponent } from './dashboard/tables/post-table/post-table.component';
import { PostedTableComponent } from './dashboard/tables/posted-table/posted-table.component';
import { TobePostedTableComponent } from './dashboard/tables/tobe-posted-table/tobe-posted-table.component';
import { DisplayPostDataComponent } from './dashboard/modals/display-post-data/display-post-data.component';
import { GenericMessageComponent } from './dashboard/modals/generic-message/generic-message.component';
import { ActionsColumnRendererComponent } from './dashboard/tables/actions-column-renderer/actions-column-renderer.component';
import { TableControlComponent } from './dashboard/table-control/table-control.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SmartModalComponent } from './dashboard/modals/smart-modal/smart-modal.component';
import { Formatter } from './dashboard/open-header/pipe/pipe';
import { BankContraTableComponent } from './dashboard/tables/bank-contra-table/bank-contra-table.component';
import { ErpContraTableComponent } from './dashboard/tables/erp-contra-table/erp-contra-table.component';
import { AccountpayableComponent } from './accountpayable/accountpayable.component';
import { MatCardModule } from '@angular/material/card';
import { PoTableComponent } from './dashboard/tables/po-table/po-table.component';
import { ChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReportsComponent } from './reports/reports.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './reports/dialog/popup/popup.component';
import { TransactionComponent } from './reports/transaction/transaction.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { GaugeChartModule } from 'angular-gauge-chart';
// import { ExportAsModule } from 'ngx-export-as';
import { ExcelService } from 'src/app/shared/services/jsonTOExcel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    GaugeChartModule,
    // ExportAsModule,
    // FlexLayoutModule,
    SharedModule,
    MatCardModule,
    NgbDatepickerModule,
    NgbModalModule,
    AgGridModule.withComponents([ActionsColumnRendererComponent]),
    HomeRoutingModule,
    NgxSmartModalModule.forChild()
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    PieChartComponent,
    BarChartComponent,
    PieContraChartComponent,
    MatchedTableComponent,
    GroupedTableComponent,
    OpenTableComponent,
    SearchFormComponent,
    SelectGridColumnsComponent,
    OpenHeaderComponent,
    PostTableComponent,
    PostedTableComponent,
    TobePostedTableComponent,
    DisplayPostDataComponent,
    GenericMessageComponent,
    ActionsColumnRendererComponent,
    TableControlComponent,
    GraphsComponent,
    SmartModalComponent,
    Formatter,
    BankContraTableComponent,
    ErpContraTableComponent,
    AccountpayableComponent,
    PoTableComponent,
    ReportsComponent,
    PopupComponent,
    TransactionComponent
  ],
  entryComponents: [PopupComponent],
  providers: [
    ExcelService,
    NgbActiveModal,
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }],
})
export class HomeModule { }
