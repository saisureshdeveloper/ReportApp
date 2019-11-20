import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest.service';
export interface series {
  series1:string;
series2: string;
series3: string;
series4: string;
series5: string;
series6: string;
total:string;
}
@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit ,OnChanges {

  @Input() bankid:string;
  @Input() fromdate;
  @Input() todate;
public chartType="line";
public listOfTransaction;
public collections=[]; 
public arrayfilter=[];
public filteroption:any={
  bankid:false,
  fromdate:false,
  todate:false,
  
}  
erp:any=[];
bank:any=[];
flag:boolean=false;
public openItemsageingLabels = ['0-15','15-30','30-45','45-60','60-90','90-above'];

  constructor(private service:RestService) { 
   
  }
  gettransaction(val)
  {
   
    this.service.getTransactionAgingERPdata(val)
    .subscribe(res=>{
      //console.log("erp transaction",res);
      this.erp=res; 
      
    })
    this.service.getTransactionAgingBankdata(val)
      .subscribe(res=>{
        this.bank=res;
        //console.log("Bank transaction",res);
      
        this.flag = true;
      
        // this.collections.push(processedData);
      })
   
   
    // return processedData;
  }
  getkpidata(index)
  {
    //console.log("index",index);
    let data=[
      { data:
        [this.erp[index].series1,this.erp[index].series2,this.erp[index].series3,this.erp[index].series4,this.erp[index].series5,this.erp[index].series6],
        label: 'ERP Open Items  agingStatement' 
      },
      { data:
        [this.bank[index].series1,this.bank[index].series2,this.bank[index].series3,this.bank[index].series4,this.bank[index].series5,this.bank[index].series6],
        label: 'Bank Open Items  aging Statement' 
      }
    ]
    return data;
  }
  changeLog:any;
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = chng.currentValue;
      let prev = JSON.stringify(chng.previousValue);
      if ((propName == "bankid") )
      {
        if(cur == "0")
        {
        this.filteroption.bankid=false;

        }
        else{
        this.filteroption.bankid=cur

        }
      }
      if (propName == "todate")
      {
        this.filteroption.todate= new Date(cur.year, cur.month - 1, cur.day+1); 
      }
      if (propName == "fromdate")
      {
        this.filteroption.fromdate=new Date(cur.year, cur.month - 1, cur.day+1); 
      }
      //console.log("change",this.filteroption)
      this.getclassification(this.filteroption);
     this.gettransaction(this.filteroption);

    }
   
  }

  ngOnInit() {
    //console.log("MESSAGE",this.bankid)

    this.getclassification(this.filteroption);
    this.gettransaction(this.filteroption);
    
  }
  getclassification(val)
  {
    this.service.getTransactionList(val)
    .subscribe(res=>{
      //console.log("data",res);
      this.listOfTransaction=res;
      
    })
  }

}
