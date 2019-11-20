import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GridOptions } from 'ag-grid-community';
import { ExcelService } from 'src/app/shared/services/jsonTOExcel';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import * as moment from 'moment';

export interface DialogData {
  ERP: Array<ERPDATA>;
  Bank:Array<any>;
  key:string
 
}
export interface ERPDATA {
  credit: string;
  debit:string;
  document_text: string;
  documnet_date: string;
  documnet_id: string;
  vendor_name: string;
 
}

export interface BankDATA
{
  bank_statement_id: string;
  creditAmount:string;
  debitAmount:string;
  document_date:string;
  document_decription: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
public listERP:Array<ERPDATA>;
public listBank:Array<BankDATA>;
public gridOptions: GridOptions ;

name = 'Angular 6';
Exceldata: any = [{
  eid: 'e101',
  ename: 'ravi',
  esal: 1000
},
{
  eid: 'e102',
  ename: 'ram',
  esal: 2000
},
{
  eid: 'e103',
  ename: 'rajesh',
  esal: 3000
}];

exportAsXLSX(data,name):void {
  var i;
   this.dashboardService.showSpinner();
for(i = 0; i < data.length; i++){
  if(name == 'ERP Statement')
  {
    data[i]["ERP_ID "] = data[i]["referencetext_2"];
    data[i]["ERP Doc.Date "] = new Date(data[i]["referenceDateTime_1"]);
    data[i]["ERP Text"] = data[i]["referenceText_11"];
    data[i]["ERP Debit Amount "] = parseFloat(data[i]["debitAmount"])?parseFloat(data[i]["debitAmount"]):parseFloat('0');
    data[i]["ERP Credit Amount "] =parseFloat(data[i]["creditAmount"])?parseFloat(data[i]["creditAmount"]):parseFloat('0');
    data[i]["ERP Document Header Text "] = data[i]["referenceText_3"];
    data[i]["ERP Assignment "] = data[i]["referenceText_4"];
    data[i]["ERP Reference "] = data[i]["referenceText_5"];
    data[i]["ERP Vendor "] = data[i]["referenceText_6"];
    data[i]["ERP Vendor Name"] = data[i]["referenceText_8"];
    data[i]["ERP Check number "] = data[i]["referenceText_9"];
    data[i]["ERP Amount in local cur. "] = data[i]["amount_1"];
    data[i]["ERP Clrng doc. "] = data[i]["referenceText_10"];
    data[i]["ERP User name "] = data[i]["referenceText_12"];
    data[i]["ERP Entry Date "] =new Date( data[i]["referenceDateTime_3"]);
    delete data[i]["referencetext_2"];
    delete data[i]["referenceDateTime_1"];
    delete data[i]["referenceText_11"];
    delete data[i]["debitAmount"];
    delete data[i]["creditAmount"];
    delete data[i]["referenceText_3"];
    delete data[i]["referenceText_4"];
    delete data[i]["referenceText_5"];
    delete data[i]["referenceText_6"];
    delete data[i]["referenceText_8"];
    delete data[i]["referenceText_9"];
    delete data[i]["amount_1"];
    delete data[i]["referenceText_10"];
    delete data[i]["referenceText_12"];
    delete data[i]["referenceDateTime_3"];
  }
  else if('Bank Statement'){
   
    data[i]["Bank Date	"]= new Date(data[i]["referenceDateTime_1"]);
    data[i]["Bank Description	"]= data[i]["referenceText_1"];
    data[i]["Bank Debit	"]= parseFloat( data[i]["debitAmount"])?parseFloat(data[i]["debitAmount"]):parseFloat('0');
    data[i]["Bank Credit	"]=parseFloat( data[i]["creditAmount"])?parseFloat(data[i]["creditAmount"]):parseFloat('0');
    data[i]["Bank Branch Code	"]= data[i]["referenceText_3"];
    data[i]["Bank Value Date	"]= new Date(data[i]["referenceDateTime_2"]);
    data[i]["Bank Balance	"]= data[i]["amount_1"];
    data[i]["Bank Bank Stmt ID	"]= data[i]["referenceText_4"];
    data[i]["Bank Tag	"]= data[i]["referenceText_5"];
    data[i]["Bank Doc #	"]= data[i]["referenceText_6"];
    data[i]["Bank FC	"]= data[i]["amount_2"];
    data[i]["Bank FC amount"]= data[i]["referenceText_8"];
    data[i]["Bank NR Payee"]= data[i]["referenceText_9"];
delete data[i]["referenceDateTime_1"];
delete data[i]["referenceText_1"];
delete data[i]["debitAmount"];
delete data[i]["creditAmount"];
delete data[i]["referenceText_3"];
delete data[i]["referenceDateTime_2"];
delete data[i]["amount_1"];
delete data[i]["referenceText_4"];
delete data[i]["referenceText_5"];
delete data[i]["referenceText_6"];
delete data[i]["amount_2"];
delete data[i]["referenceText_8"];
delete data[i]["referenceText_9"];

  }
     
    
}
let str=name+'_'+this.keyname;
setTimeout(()=>{    //<<<---    using ()=> syntax
  this.dashboardService.hideSpinner();
  this.excelService.exportAsExcelFile(data, str);
}, 3000);
  
}
 
ERPcolumnDefs = [
  {headerName: 'ERP_ID	', field: 'referencetext_2', sort: true, filter: "agNumberColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Doc.Date', field: 'referenceDateTime_1',  sort: true, 
  cellRenderer: (data) => {
    return moment(data.value).format('DD/MM/YYYY')
},
filter: "agDateColumnFilter",suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Text', field: 'referenceText_11', sort: true, filter: "agTextColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Debit Amount', field: 'debitAmount', sort: true, filter: "agNumberColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Credit Amount', field: 'creditAmount', sort: true, filter: "agNumberColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Document Header Text', field: 'referenceText_3', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true},
  {headerName: 'ERP Assignment	', field: 'referenceText_4', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Reference', field: 'referenceText_5',  sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Vendor', field: 'referenceText_6', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Vendor Name', field: 'referenceText_8', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Check number', field: 'referenceText_9', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Amount in local cur.', field: 'amount_1', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true},
  {headerName: 'ERP Clrng doc.	', field: 'referenceText_10', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP User name', field: 'referenceText_12',  sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'ERP Entry Date ', field: 'referenceDateTime_3',
  cellRenderer: (data) => {
    return moment(data.value).format('DD/MM/YYYY')
},
  sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true }
];
BankcolumnDefs = [
  {headerName: 'Bank Date', field: 'referenceDateTime_1',
  cellRenderer: (data) => {
    return moment(data.value).format('DD/MM/YYYY')
},
  sort: true, filter: "agDateColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Description', field: 'referenceText_1', sort: true, filter: "agTextColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Debit', field: 'debitAmount', sort: true, filter: "agNumberColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'Bank Credit', field: 'creditAmount',sort: true, filter: "agNumberColumnFilter" ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Branch Code', field: 'referenceText_3', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Value Date	', field: 'referenceDateTime_2', 
  cellRenderer: (data) => {
    return moment(data.value).format('DD/MM/YYYY')
},
  sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Balance', field: 'amount_1', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'Bank Bank Stmt ID', field: 'referenceText_4',sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Tag', field: 'referenceText_5', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank Doc #', field: 'referenceText_6', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank FC	', field: 'amount_2', sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true },
  {headerName: 'Bank FC amount', field: 'referenceText_8',sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  },
  {headerName: 'Bank NR Payee', field: 'referenceText_9',sort: true, filter: true ,suppressSizeToFit: true,suppressAutoSize: true  }
];
public defaultColDef;
public keyname:string;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private excelService:ExcelService,
    private dashboardService: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
   ) {
     
   
    // console.log("listERP",this.listERP)
   }
   onGridReadyERP(params) {
    this.listERP=this.data.ERP;
    // this.listBank=this.data.Bank;
    this.keyname=this.data.key;
    this.defaultColDef = { suppressAutoSize: true };
    this.gridOptions = <GridOptions>{
     defaultColDef: {
       suppressAutoSize: true
     },
     enableSorting: true,
     enableFilter: true,
     
   };
   }
   onGridReadyBank(params) {
    // this.listERP=this.data.ERP;
    this.listBank=this.data.Bank;
    this.keyname=this.data.key;
    this.defaultColDef = { suppressAutoSize: true };
    this.gridOptions = <GridOptions>{
     defaultColDef: {
       suppressAutoSize: true
     },
     enableSorting: true,
     enableFilter: true,
     
   };
   }

  ngOnInit() {
    this.gridOptions = {
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
  }

}
