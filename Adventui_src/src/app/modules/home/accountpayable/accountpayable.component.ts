import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// import {FormControl} from '@angular/forms';


import { RestService } from 'src/app/shared/services/rest.service';
// import {  } from '../../../shared/mocks/testPO.json';


@Component({
  selector: 'app-accountpayable',
  templateUrl: './accountpayable.component.html',
  styleUrls: ['./accountpayable.component.css']
})

export class AccountpayableComponent implements OnInit {
    model;
    // ComapanynameList: any = [];
  public chart: Chart;
  show:boolean=false;
 
 public poSubDate:Array<any>=[];
 PoData:any=[]
//   PoData:any=[{
//    ComapnyName: "TVS",
//    location: "TamilNadu",
//    date: "04-01-2019",
//    url: "https://english.cdn.zeenews.com/sites/default/files/2016/05/02/484251-tvs.jpg",
//    Order: [{
//            poid: 1,
//            poName: "glass",
//            Quaninty: 100,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 2,
//            poName: "Tyers",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "Opened"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "Closed"
//         },
//         {
//            poid: 7,
//            poName: "Tool kit",
//            Quaninty: 50,
//            PODate: "2019-04-30",
//            Amount: "20000",
//            Status: "Closed"
//         },
//         {
//            poid: 8,
//            poName: "carpet",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 9,
//            poName: "FM Radio",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "Opened"
//         },
//         {
//            poid: 10,
//            poName: "Ac",
//            Quaninty: 60,
//            PODate: "2019-04-25",
//            Amount: "1334000",
//            Status: "Opened"
//         }
//     ]
// },
// {
//    ComapnyName: "Apollo",
//    location: "Bangalore",
//    date: "04-15-2019",
//    url: "http://www.arunfoot.com/wp-content/uploads/2017/12/Apollo-Tyres-600x330.jpg",
//    Order: [{
//            poid: 1,
//            poName: "glass",
//            Quaninty: 50,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "cancelled"
//         },
//         {
//            poid: 2,
//            poName: "Tyers",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "cancelled"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "Closed"
//         }
//     ]
// },
// {
//    ComapnyName: "MRF",
//    location: "Kerala",
//    date: "04-25-2019",
//    url: "http://www.adageindia.in/photo/51950174/agency/agency-news/Exclusive-Dentsu-Communications-Bags-Creative-Mandate-of-MRF-Two-Wheeler-Tyres.jpg?38571",
//    Order: [{
//            poid: 1,
//            poName: "glass",
//            Quaninty: 50,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Closed"
//         },
//         {
//            poid: 2,
//            poName: "Tyers",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "cancelled"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "Closed"
//         },
//         {
//            poid: 7,
//            poName: "Tool kit",
//            Quaninty: 50,
//            PODate: "2019-04-30",
//            Amount: "20000",
//            Status: "Closed"
//         },
//         {
//            poid: 8,
//            poName: "carpet",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 9,
//            poName: "FM Radio",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "cancelled"
//         },
//         {
//            poid: 10,
//            poName: "Ac",
//            Quaninty: 60,
//            PODate: "2019-04-25",
//            Amount: "1334000",
//            Status: "cancelled"
//         }
//     ]
// },
// {
//    ComapnyName: "Balkrishna Industries Ltd",
//    location: "TamilNadu",
//    date: "04-30-2019",
//    url: "https://www.tyremarket.com/tyremantra/wp-content/uploads/2016/12/Balkrishna-Tyres-e1481780658840.jpg",
//    Order: [{
//            poid: 1,
//            poName: "glass",
//            Quaninty: 50,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "cancelled"
//         },
//         {
//            poid: 2,
//            poName: "Tyers",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "Opened"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "OPened"
//         }
//     ]
// },
// {
//    ComapnyName: "Falken Tyre India Pvt. Ltd",
//    location: "Bangalore",
//    date: "05-01-2019",
//    url: "https://www.tyremarket.com/tyremantra/wp-content/uploads/2016/12/Falken-Tyres-e1481299311673.jpg",
//    Order: [{
//            poid: 1,
//            poName: "glass",
//            Quaninty: 50,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Closed"
//         },
//         {
//            poid: 2,
//            poName: "Tyers",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "cancelled"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "Closed"
//         },
//         {
//            poid: 7,
//            poName: "Tool kit",
//            Quaninty: 50,
//            PODate: "2019-04-30",
//            Amount: "20000",
//            Status: "Closed"
//         },
//         {
//            poid: 8,
//            poName: "carpet",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "13000",
//            Status: "Opened"
//         },
//         {
//            poid: 9,
//            poName: "FM Radio",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "cancelled"
//         },
//         {
//            poid: 10,
//            poName: "Ac",
//            Quaninty: 60,
//            PODate: "2019-04-25",
//            Amount: "1334000",
//            Status: "cancelled"
//         },
//         {
//            poid: 3,
//            poName: "Engine",
//            Quaninty: 60,
//            PODate: "2019-04-15",
//            Amount: "65000",
//            Status: "Opened"
//         },
//         {
//            poid: 4,
//            poName: "glass",
//            Quaninty: 20,
//            PODate: "2019-04-02",
//            Amount: "20000",
//            Status: "Opened"
//         },
//         {
//            poid: 5,
//            poName: "Oil",
//            Quaninty: 50,
//            PODate: "2019-04-12",
//            Amount: "1000",
//            Status: "Opened"
//         },
//         {
//            poid: 6,
//            poName: "Pillow",
//            Quaninty: 20,
//            PODate: "2019-04-22",
//            Amount: "15000",
//            Status: "OPened"
//         }
//     ]
// }




// ]
  
  constructor(private service:RestService) {
    
        this.service.getPOJSON()
        .subscribe(res=>{
            this.PoData=res;
            this.processingData();
            // this.ComapanynameList=res;
            
            // this.showgraph();
            console.log("po sub data",this.poSubDate)
        })
 
   }
   public pieChartLabels = [new Date("2019-4-1").toLocaleString(), new Date("2019-4-25").toLocaleString(), new Date("2019-4-25 14:12").toLocaleString()]
//    Opened', 'Closed', 'Cancelled','Total
//   public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'line';

   
  ngOnInit() {

  }
  selectedvalue:any=0;
  location:any=0;
  onChange(deviceValue,com) {
    console.log(deviceValue);
    if(com == 'companyName')
    {
        this.selectedvalue=deviceValue;

    }
    if(com == 'location')
    {
    this.location=deviceValue;

    }
    console.log(this.selectedvalue);

}
// fromdate:any;
 parseDateapi(dateStr) {
     console.log("api date",dateStr)
    var date = dateStr.split('-');
    var day = date[1];
    var month = date[0] - 1; //January = 0
    var year = date[2];
    return new Date(year, month, day); 
}
parseDate(dateStr) {
   
    if(dateStr)
    {
        return new Date(dateStr.year, dateStr.month - 1, dateStr.day); 
    }
    else
    {
        return false;
    }

    console.log("date", dateStr);
}
getDateprocessing(dt)
{   let dtformat=new Date(dt);
    console.log("dt",dtformat.getDate())
    return dtformat;
}
public pushData:any=[];

  processingData()
  {

    for (let i = 0; i < this.PoData.length; i++) {
       
        let poClosed:number=0;
        let poOpened:number=0;
        let poCancelled:number=0;
        let arropendata:any=[];
        let arrclosedata:any=[];
        let arrcanceldata:any=[];
        for (let index = 0; index < this.PoData[i].Order.length; index++) {
        
            if(this.PoData[i].Order[index].Status == "Closed")
            {
                let innerobj={ t: new Date(this.PoData[i].Order[index].PODate),y:this.PoData[i].Order[index].Quaninty}
                arrclosedata.push(innerobj);
                poClosed++;
                // console.log("closed",poClosed)
            }
            if(this.PoData[i].Order[index].Status == "cancelled")
            {
                let innerobj={ t: new Date(this.PoData[i].Order[index].PODate),y:this.PoData[i].Order[index].Quaninty}
                arrcanceldata.push(innerobj);
                poCancelled++;
                // console.log("poCancelled",poCancelled)
            }
            if(this.PoData[i].Order[index].Status == "Opened")
            {
                let innerobj={ t: new Date(this.PoData[i].Order[index].PODate),y:this.PoData[i].Order[index].Quaninty}
                arropendata.push(innerobj);
                poOpened++;
                // console.log("poOpened",poOpened)
            }
            
        }
        let obj={
            Closed:poClosed,
            Opened:poOpened,
            Cancelled:poCancelled,
            Total:this.PoData[i].Order.length
        }
        let result=[
            {
            label:'Opened',
            data: arropendata
            },
            {
                label:'Closed',
                data: arrclosedata
                },
                
                {
                    label:'Cancelled',
                    data:arrcanceldata
                    }
        ]
        this.pushData.push(result)
        this.poSubDate.push(obj)
        // this.showgraph(this.PoData[i].Order)
        // this.pieChartLabels.push(this.parseDate(this.PoData.date))
    }
    console.log("data push to array",this.pushData)
  }
  

  public GettingSelectedRow(val:any):void {
    console.log('Parent Compnent trigger', val);
    this.show=true;
}



}
