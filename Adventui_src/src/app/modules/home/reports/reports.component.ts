import {Component,OnInit,ChangeDetectorRef}from '@angular/core';
import {RestService}from 'src/app/shared/services/rest.service';
import {NgbDate}from '@ng-bootstrap/ng-bootstrap';
import {toDate}from '@angular/common/src/i18n/format_date';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA}from '@angular/material';
import {PopupComponent}from './dialog/popup/popup.component';
import {DashboardService}from 'src/app/shared/services/dashboard.service';
import {ExcelService}from 'src/app/shared/services/jsonTOExcel';
import {Observable,Subscription}from 'rxjs';// import 'rxjs/add/observable/forkJoin';
import {forkJoin,of}from 'rxjs';
export interface series {
  series1: string;
  series2: string;
  series3: string;
  series4: string;
  series5: string;
  series6: string;
  total: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
  public ERPdetails: any;
  public Bankdetails: any;
  public listbank: any;
  public ERPopendetails: any;
  public Bankopendetails: any;
  public ERPopenAgingdetails: any;
  public BankopenAgingdetails: any;
  public gettingbalancesheet: any;
  public ERPOpenIndividualAging: any;
  public BankOpenIndividualAging: any;
  public BankName = 0;
  public relationshipId: any = false;
  public doughnutChartLabels = ['ERP', 'BANK', ];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  public chartType: string = 'bar';
  public piechart: string = 'pie';
  public linechart: string = 'line';
  public listtransactioncount: any;
  public getJobExecutionPercentage;
  public arrpercentage = [];
  public canvasWidth = 300
  public needleValue = 65
  public ERPneedleValue = 0;
  public BANKneedleValue = 0
  public centralLabel = ''
  public content = ['ERP', 'BANK']
  public ERPNAME = "ERP (%)";
  public BANKNAME = "BANK (%)";
  public bottomLabel = '65';
  public BANKbottomLabel = '0';
  public ERPbottomLabel = '0';
  public flag: boolean = true;
  public erptransactioncount = [];
  public erptransactionname = [];
  public banktransactioncount = [];
  public banktransactionname = [];
  public erprulecount = [];
  public erprulename = [];
  public bankrulecount = [];
  public bankrulename = [];
  public RecoMatchedSideBySide = [];
  public datadiffer: any;
  public TransactionERPcount: any = [];
  public TransactionERPname: any = [];
  public TransactionBANKcount: any = [];
  public TransactionBANKname: any = [];
  public BRSCountData: any;
  public BRSData: any = [];
  public BRSlabel: any = [];
  public listopenbalance: any;
  public openbalancelabel: any = [];
  public openbalancedata: any = []
  public listclosebalance: any;
  public closebalancelabel: any = [];
  public closebalancedata: any = [];
  public balancesummary:any;
  public IndividualageingTransaction: any = {
    erp: [],
    bank: []
  };
  public barChartOptions: any = {
    legend: {
      position: 'bottom'
    }
  }
  public fromdate;
  public todate;

  public ERPoptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [parseInt('10')],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  }
  public Bankoptions = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [parseInt('10')],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  }
  // GaugeChartModule end
  public input1 = 0;
  public input2 = 0;
  private subscriptions: Subscription[] = [];
  public filteroption: any = {
    bankid: false,
    fromdate: false,
    todate: false,
    key: "",
    input1: this.input1,
    input2: this.input2
  } // Decalre filter option variable in objects
  public chartDatasets = [{
    data: [300, 50, 100, 40, 120],
    label: 'My First dataset'
  }];

  public chartLabels = ['Loaded', 'Matched', 'Grouped Matched', 'Manually Matched', 'Opened', 'Grouped Opened', 'Contra'];
  public openItemsLabels = ['Open Items', 'Debit', 'Credit', 'cheque Debit', 'Cheque Credit'];
  public openItemsageingLabels = ['0-15', '15-30', '30-45', '45-60', '60-90', '90-above'];
  public balancesheetlabel = [];
  public balancesheetdata = [];
  public chartColors = [{
    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
    borderWidth: 2,
  }];

  public chartOptions: any = {
    responsive: true
  };

  public showdiffer() {
    this.key = "Credit _&_ Debit Difference";

    this.service.getdifferBankdata(this.filteroption)
      .subscribe(res => {
        //////console.log("data ",res)
        this.BankOpenIndividualAging = res;

      })
    this.service.getdifferERPdata(this.filteroption)
      .subscribe(res => {
        //////console.log("data ",res)
        this.ERPOpenIndividualAging = res;
        this.openDialog();
      })
  }
  public key: string;
  public chartClicked(e: any): void {
    this.IndividualageingTransaction={};
    this.TransactionERPcount = [];
    this.TransactionERPname = [];
    this.TransactionBANKcount = []
    this.TransactionBANKname = [];
    //////console.log("chartClicked",e.active[0]._model.label);
    //////console.log("c tClicked",e)
    this.key = "Open_Ageing";
    let getval = e.active[0]._model.label;
    let processedVal = getval.split("-");

    if (processedVal.length > 0) {
      this.filteroption.input1 = parseInt(processedVal[0]);
      if (processedVal[1] == "above") {
        this.filteroption.input2 = 10000;
      } else {
        this.filteroption.input2 = parseInt(processedVal[1]);
      }
      console.log("processing date",this.filteroption,processedVal);
      this.service.listIndividualOpenAgingtransaction(this.filteroption)
        .subscribe(res => {
          console.log("listIndividualOpenAgingtransaction", res);
          this.IndividualageingTransaction = res;
          for (let i = 0; i < this.IndividualageingTransaction.erp.length; i++) {
  
            this.TransactionERPcount.push(this.IndividualageingTransaction.erp[i].erp_count);
            this.TransactionERPname.push(this.IndividualageingTransaction.erp[i].classification_1)
  
          }
          for (let i = 0; i < this.IndividualageingTransaction.bank.length; i++) {
  
            this.TransactionBANKcount.push(this.IndividualageingTransaction.bank[i].bank_count);
            this.TransactionBANKname.push(this.IndividualageingTransaction.bank[i].classification_1)
  
          }
          // this.dashboardService.hideSpinner();
  
  
        })
    }
    
    // this.service.getIndividualOpenitemsAgingBankdata(this.filteroption)
    //   .subscribe(res => {
    //     ////console.log("data ",res)
    //     this.BankOpenIndividualAging = res;

    //   })
    // this.service.getIndividualOpenitemsAgingERPdata(this.filteroption)
    //   .subscribe(res => {
    //     //////console.log("data ",res)
    //     this.ERPOpenIndividualAging = res;
    //     this.openDialog();
    //   })

  }
  public chartHovered(e: any): void {
    // //////console.log("chartHovered",e);

  }
  constructor(private service: RestService, private excelService: ExcelService, public dialog: MatDialog, private cd: ChangeDetectorRef, private dashboardService: DashboardService) {

  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '1220px',
      height: '520px',
      data: {
        ERP: this.ERPOpenIndividualAging,
        Bank: this.BankOpenIndividualAging,
        key: this.key
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //////console.log('The dialog was closed');

    });
  }
  public exportExcel(e: any): void {
    console.log("exportExcel", e);
    let getval = e.active[0]._model.label;
    let processedVal = getval.split("-");
    this.key = getval;
    this.filteroption.key = this.key;
    console.log("this.filteroption", this.filteroption)
    if (processedVal.length > 0) {
      if (getval) {
        this.dashboardService.showSpinner();

        this.service.listEXCELBankdata(this.filteroption)
          .subscribe(res => {
            //  console.log("data ",res)
            this.BankOpenIndividualAging = res;

          })
        this.service.listEXCELERPdata(this.filteroption)
          .subscribe(res => {
            //  console.log("data ",res)
            this.ERPOpenIndividualAging = res;
            setTimeout(()=>{    //<<<---    using ()=> syntax
              this.dashboardService.hideSpinner();
              this.openDialog();
              // this.excelService.exportAsExcelFile(data, str);
            }, 3000);
            // this.dashboardService.hideSpinner();/

          })
      }

    }
    // console.log("processing date",this.filteroption,getval);
    // this.service.getIndividualOpenitemsAgingBankdata(this.filteroption)
    //   .subscribe(res => {
    //     //////console.log("data ",res)
    //     this.BankOpenIndividualAging = res;

    //   })
    // this.service.getIndividualOpenitemsAgingERPdata(this.filteroption)
    //   .subscribe(res => {
    //     //////console.log("data ",res)
    //     this.ERPOpenIndividualAging = res;
    //     this.openDialog();
    //   })

  }
  getBankname() {
    this.service.getBankName()
      .subscribe(res => {
        this.listbank = res;
        //////console.log("listbank", this.listbank)
      })
  }
  onChange(deviceValue) {
    this.filteroption.bankid = deviceValue;
    this.cd.detectChanges();
    //////console.log("filter option",this.filteroption)
    if (this.filteroption.bankid == 0) {
      this.filteroption.bankid = 0;
      this.filteroption.fromdate = 0;

      this.filteroption.todate = 0;
      this.fromdate = null;
      this.todate = null;
      this.BANKNAME = " All BANK (%)";
    } else {
      let strval: string = this.listbank[deviceValue - 1].relationshipName;
      let str = strval.slice(4)

      this.BANKNAME = str.replace("RECONCILIATION", "") + " BANK (%)";

    }
    this.processingdate();
  }
  fromdateSelection(date: NgbDate) {
    this.filteroption.fromdate = new Date(date.year, date.month - 1, date.day + 1);
    if (this.todate) {
      this.filteroption.todate = new Date();
    }
    this.processingdate();
    //////console.log("filter option",this.filteroption)
  }
  todateSelection(date: NgbDate) {
    this.filteroption.todate = new Date(date.year, date.month - 1, date.day + 1);
    if (this.filteroption.fromdate == false) {
      //////console.log("filter option",this.filteroption)

      alert("Please select From Date")
    } else {
      this.processingdate();
    }
  }


  processingdate() {
    this.dashboardService.showSpinner();

    // this.flag=false;
    this.subscriptions.forEach(s => s.unsubscribe());
    this.erptransactioncount = [];
    this.erptransactionname = [];
    this.banktransactioncount = [];
    this.banktransactionname = [];
    this.erprulecount = [];
    this.erprulename = [];
    this.bankrulecount = [];
    this.bankrulename = [];
    this.IndividualageingTransaction.erp = [];
    this.IndividualageingTransaction.bank = []
    this.TransactionERPcount = [];
    this.TransactionERPname = [];
    this.TransactionBANKcount = []
    this.TransactionBANKname = [];
    this.listopenbalance = {};
    this.openbalancelabel = [];
    this.openbalancedata = [];
    this.listclosebalance = {};
    this.closebalancelabel = [];
    this.closebalancedata = [];

    let service1 = this.service.getJobExecutionPercentage(this.filteroption)
      .subscribe(res => {


        this.getJobExecutionPercentage = res;
        let erpkey = this.getJobExecutionPercentage[0].recoPercentageERP;
        let erparr = [];
        this.ERPbottomLabel = String(erpkey);
        this.ERPneedleValue = parseInt(erpkey);
        erparr.push(this.ERPneedleValue)
        this.ERPoptions.arcDelimiters = erparr;

        let bankkey = this.getJobExecutionPercentage[0].recoPercentageBank;
        let bankarr = [];
        this.BANKbottomLabel = String(bankkey);
        this.BANKneedleValue = parseInt(bankkey);
        bankarr.push(this.BANKneedleValue)
        this.Bankoptions.arcDelimiters = bankarr;


      })
    let service2 = this.service.listtransactioncount(this.filteroption)
      .subscribe(res => {
        this.listtransactioncount = res;
        for (let i = 0; i < this.listtransactioncount.length; i++) {
          if (i == 0) {
            for (let item of this.listtransactioncount[i]) {
              this.erptransactionname.push(item.name)

              this.erptransactioncount.push(item.data_count);

            }
          } else if (i == 1) {
            for (let item of this.listtransactioncount[i]) {
              this.banktransactionname.push(item.name);
              this.banktransactioncount.push(item.data_count);


            }
          }


        }
        ////console.log("listtransactioncount", res)
      })

    let service3 = this.service.listIndividualOpenAgingtransaction(this.filteroption)
      .subscribe(res => {
        console.log("listIndividualOpenAgingtransaction", res);
        this.IndividualageingTransaction = res;
        for (let i = 0; i < this.IndividualageingTransaction.erp.length; i++) {

          this.TransactionERPcount.push(this.IndividualageingTransaction.erp[i].erp_count);
          this.TransactionERPname.push(this.IndividualageingTransaction.erp[i].classification_1)

        }
        for (let i = 0; i < this.IndividualageingTransaction.bank.length; i++) {

          this.TransactionBANKcount.push(this.IndividualageingTransaction.bank[i].bank_count);
          this.TransactionBANKname.push(this.IndividualageingTransaction.bank[i].classification_1)

        }
        // this.dashboardService.hideSpinner();


      })
    let service4 = this.service.BRSData(this.filteroption)
      .subscribe(res => {
        this.BRSCountData = res;
        this.BRSData = this.BRSCountData.data;
        this.BRSlabel = this.BRSCountData.label;
        console.log("BRSCountData", this.BRSCountData);
      })
    let service5 = this.service.getERPdata(this.filteroption)
      .subscribe(res => {
        this.ERPdetails = res;
        //////console.log("GetErp", res)
      })
    let service6 = this.service.getBankdata(this.filteroption)
      .subscribe(res => {
        this.Bankdetails = res;
        //////console.log("getbank", res)
      })
    let service7 = this.service.getOPenitemsERPdata(this.filteroption)
      .subscribe(res => {
        this.ERPopendetails = res;
        //////console.log("GetErp", res)
      })
    let service8 = this.service.getOPenItemsBankdata(this.filteroption)
      .subscribe(res => {
        this.Bankopendetails = res;
        //////console.log("getbank", res)
      })

    let service9 = this.service.getOPenitemsAgingERPdata(this.filteroption)
      .subscribe(res => {
        this.ERPopenAgingdetails = res;
        //////console.log("ERPopenAgingdetails", res)
      })
    let service10 = this.service.getOPenItemsAgingBankdata(this.filteroption)
      .subscribe(res => {

        this.BankopenAgingdetails = res;
        //////console.log("BankopenAgingdetails", res)
      })
    let service11 = this.service.openbalance(this.filteroption)
      .subscribe(res => {
        this.listopenbalance = res;
        this.openbalancelabel = this.listopenbalance.label;
        this.openbalancedata = this.listopenbalance.data;




        // }
        console.log("this.listopenbalance", this.listopenbalance, )
        // this.flag=true;


      })
    let service12 = this.service.closebalace(this.filteroption).subscribe(res => {
      this.listclosebalance = res;
      this.closebalancelabel = this.listclosebalance.label;
      this.closebalancedata = this.listclosebalance.data;
      console.log("this.listclosebalance", this.listclosebalance)

      this.dashboardService.hideSpinner();


    });
    //balancesummary
    let service13 = this.service.balancesummary(this.filteroption).subscribe(res => {
      this.balancesummary = res;
      
      console.log("this.balancesummary", this.balancesummary)

      // this.dashboardService.hideSpinner();


    });
    // this.dashboardService.hideSpinner();
    let listservice = [service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12]

    // for(let i of listservice)
    // {
    //   // this.subscriptions.push(i);
    // }
    return forkJoin(listservice);

  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit() {

    this.getBankname();
    this.processingdate();

  }
  exportAsXLSX() {
    let data = this.RecoMatchedSideBySide;
    for (let i = 0; i < data.length; i++) {
      // ERP CREDIT AMOUNT
      data[i]["ERP_DEBIT_AMOUNT"] = (parseFloat(data[i]["ERP DEBIT AMOUNT"]) ? parseFloat(data[i]["ERP DEBIT AMOUNT"]) : 0);
      data[i]["ERP_Credit_Amount "] = (parseFloat(data[i]["ERP CREDIT AMOUNT"]) ? parseFloat(data[i]["ERP CREDIT AMOUNT"]) : 0);
      data[i]["BANK_DEBIT_AMOUNT"] = (parseFloat(data[i]["BANK DEBIT AMOUNT"]) ? parseFloat(data[i]["BANK DEBIT AMOUNT"]) : 0);
      data[i]["BANK_CREDIT_AMOUNT "] = (parseFloat(data[i]["BANK CREDIT AMOUNT"]) ? parseFloat(data[i]["BANK CREDIT AMOUNT"]) : 0);

      delete data[i]["ERP DEBIT AMOUNT"];
      delete data[i]["ERP CREDIT AMOUNT"];
      delete data[i]["BANK DEBIT AMOUNT"];
      delete data[i]["BANK CREDIT AMOUNT"];
      if (i == (data.length - 1)) {
        this.excelService.exportAsExcelFile(data, " Export Matched Records");

      }
    }

  }
  BRSexportAsXLSX()
  {
    console.log("BRSexportAsXLSX");
    this.service.ExcelBRSData(this.filteroption)
      .subscribe(res => {

        this.dashboardService.showSpinner();
       console.log("ExcelBRSData", res);
       let obj:any=res;
  
      //  Cheques_Issued', 'Credits_IN_GL', 'Debits_IN_GL', 'Bank_Debits', 'Bank_Credits'
       this.excelService.BRSexportAsExcelFile(obj.CheckIssued,obj.GLCredits,obj.GLDebits,obj.BankDebits,obj.BankCredits,'BRS EXCEL DATA');
       this.dashboardService.hideSpinner();
      })
  }

}
