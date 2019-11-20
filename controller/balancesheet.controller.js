const con = require('../config/connection').reco;

module.exports = {

    listBalancedata(req, res) {
        var kpibalancesheet=[];
        var listdate=[];
        var obj = req.body;
        var query = "select distinct referenceDateTime_1 as data from reco.t_extrecords WHERE DATE(referenceDateTime_1) > ('2019-03-01 00:00:00') order by referenceDateTime_1 asc limit 10 ;";

        con.query(query, function (error, results, fields) {
            if (error)
                //console.log("error#########", error);
                // // // //console.log("getting rows",results)
                listdate=results;
                for (let i = 0; i < listdate.length; i++) {
                    var innerquery1 ="SELECT extRecordsId,amount_2,DATE_FORMAT(referenceDateTime_1, '%M %d %Y') as referenceDateTime_1 FROM reco.t_extrecords where referenceDateTime_1='"+new Date(results[i].data).toISOString().split("T")[0]+"'";
                    var innerquery2 =" and jobid="+req.body.relationId ;
                    var innerquery3=" ORDER BY extRecordsId DESC LIMIT 1;"; 
                    var rawquery="";
                    if(req.body.relationId)
                    {
                        rawquery=innerquery1+innerquery2+innerquery3;
                    }
                    else{
                        rawquery=innerquery1+innerquery3;
                    }
                    // // // //console.log("query",rawquery)
                    con.query(rawquery, function (error, results, fields) {
                        // // // //console.log("kpi rows",results)

                        kpibalancesheet.push(results[0]);
                        if (i === (listdate.length - 1)) {
                            kpibalancesheet.sort(function(obj1, obj2) {
                                // Ascending: first age less than the previous
                                return obj1.referenceDateTime_1 - obj2.referenceDateTime_1;
                            });
                            res.send(kpibalancesheet);
                        }
                    });
                    
                }     
        });  
    },
   
     openBalance(req,res)
    {
        var startDate = new Date(); //YYYY-MM-DD
        var endDate = new Date(); 
        startDate.setDate(startDate.getDate() - 30);
        var kpibalancesheet=[];
        var str1="";
        var obj=req.body;
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " and relationshipId=" + obj.relationId
        }
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        //console.log("start date and end date",startDate,endDate);
        // var dateArr = getDateArray(startDate, endDate)
        var output={};
        var label=[];
        var data=[];
     const getDateArray=(start, end,callback)=> {
            var arr = [];
            var dt = new Date(start);
            var dtend=new Date(end);
            
            while (dt <= end) {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            callback(arr)
        }

        getDateArray(startDate, endDate,(result) => {
            // do something
            console.log(" result.length", result.length)
            con.getConnection(function(err, mysqlConn) {
            for (let i = 0; i < result.length; i++) {
                var innerquery1 ="SELECT extRecordsId,amount_2,DATE_FORMAT(referenceDateTime_1, '%M %d ') as referenceDateTime_1 FROM reco.t_extrecords where referenceDateTime_1='"+new Date(result[i]).toISOString().split("T")[0]+"'";
                var innerquery2 =str1
                var innerquery3=" ORDER BY extRecordsId ASC LIMIT 1;"; 
                var rawquery="";
                if(req.body.relationId)
                {
                    rawquery=innerquery1+innerquery2+innerquery3;
                }
                else{
                    rawquery=innerquery1+innerquery3;
                }
                 //console.log("query",rawquery)
               
                 mysqlConn.query(rawquery, function (error, results, fields) {
                    //console.log("kpi rows",results)
                    let obj={}
                    let d=new Date(result[i]);
                    obj.referenceDateTime_1=monthNames[d.getMonth()]+" "+d.getDate();
                    obj.amount_2=0;
                    kpibalancesheet.push(results[0]?results[0]:obj);
                    if (i === (result.length - 1)) {
                        // kpibalancesheet.sort(function(obj1, obj2) {
                        //     // Ascending: first age less than the previous
                        //     return obj1.referenceDateTime_1 - obj2.referenceDateTime_1;
                        // });
                        // res.send(kpibalancesheet);
                        for (var j = 0; j < kpibalancesheet.length; j++) {
                            label.push(kpibalancesheet[j].referenceDateTime_1);
                            data.push(kpibalancesheet[j].amount_2)
                            if (j === (kpibalancesheet.length - 1))
                            {
                             output.label=label;
                             output.data=data;
                             res.send(output);
                            }
                             
                         }
                        console.log(" kpibalancesheet.length", kpibalancesheet.length)
                       
                    }
                });
            
                
            }  
            
          
          })
        })
       
        // return res.send(dateArr);
        
        
       
    },
    closeBalance(req,res)
    {  var str1="";
        var obj=req.body;
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " and relationshipId=" + obj.relationId
        }
        var startDate = new Date(); //YYYY-MM-DD
        var endDate = new Date(); 
        startDate.setDate(startDate.getDate() - 30);
        var kpibalancesheet=[];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        //console.log("start date and end date",startDate,endDate);
        // var dateArr = getDateArray(startDate, endDate)
        var output={};
        var label=[];
        var data=[];
     const getDateArray=(start, end,callback)=> {
            var arr = [];
            var dt = new Date(start);
            var dtend=new Date(end);
            
            while (dt <= end) {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            callback(arr)
        }

        getDateArray(startDate, endDate,(result) => {
            // do something
            console.log(" result.length", result.length)
            con.getConnection(function(err, mysqlConn) {
            for (let i = 0; i < result.length; i++) {
                var innerquery1 ="SELECT extRecordsId,amount_2,DATE_FORMAT(referenceDateTime_1, '%M %d ') as referenceDateTime_1 FROM reco.t_extrecords where referenceDateTime_1='"+new Date(result[i]).toISOString().split("T")[0]+"'";
                var innerquery2 =str1;
                var innerquery3=" ORDER BY extRecordsId DESC LIMIT 1;"; 
                var rawquery="";
                if(req.body.relationId)
                {
                    rawquery=innerquery1+innerquery2+innerquery3;
                }
                else{
                    rawquery=innerquery1+innerquery3;
                }
                 //console.log("query",rawquery)
               
                 mysqlConn.query(rawquery, function (error, results, fields) {
                    //console.log("kpi rows",results)
                    let obj={}
                    let d=new Date(result[i]);
                    obj.referenceDateTime_1=monthNames[d.getMonth()]+" "+d.getDate();
                    obj.amount_2=0;
                    kpibalancesheet.push(results[0]?results[0]:obj);
                    if (i === (result.length - 1)) {
                        // kpibalancesheet.sort(function(obj1, obj2) {
                        //     // Ascending: first age less than the previous
                        //     return obj1.referenceDateTime_1 - obj2.referenceDateTime_1;
                        // });
                        // res.send(kpibalancesheet);
                        for (var j = 0; j < kpibalancesheet.length; j++) {
                            label.push(kpibalancesheet[j].referenceDateTime_1);
                            data.push(kpibalancesheet[j].amount_2)
                            if (j === (kpibalancesheet.length - 1))
                            {
                             output.label=label;
                             output.data=data;
                             res.send(output);
                            }
                             
                         }
                        console.log(" kpibalancesheet.length", kpibalancesheet.length)
                       
                    }
                });
            
                
            }  
            
          
          })
        })
       
        // return res.send(dateArr);
        
        
       
    },
    samplecloseBalance(req,res)
    {
        var startDate = new Date(); //YYYY-MM-DD
        var endDate = new Date(); 
        startDate.setDate(startDate.getDate() - 30);
        var kpibalancesheet=[];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        //console.log("start date and end date",startDate,endDate);

     function getDateArray(start, end) {
            var arr = [];
            var dt = new Date(start);
            var dtend=new Date(end);
            while (dt <= end) {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        }

        var dateArr = getDateArray(startDate, endDate)
        var output={};
        var label=[];
        var data=[];
        // return res.send(dateArr);
        
        for (let i = 0; i < dateArr.length; i++) {
            var innerquery1 ="SELECT extRecordsId,amount_2,DATE_FORMAT(referenceDateTime_1, '%M %d ') as referenceDateTime_1 FROM reco.t_extrecords where referenceDateTime_1='"+new Date(dateArr[i]).toISOString().split("T")[0]+"'";
            var innerquery2 =" and jobid="+1 ;
            var innerquery3=" ORDER BY extRecordsId DESC LIMIT 1;"; 
            var rawquery="";
            if(req.body.relationId)
            {
                rawquery=innerquery1+innerquery2+innerquery3;
            }
            else{
                rawquery=innerquery1+innerquery3;
            }
             //console.log("query",rawquery)
            con.query(rawquery, function (error, results, fields) {
                //console.log("kpi rows",results)
                let obj={}
                let d=new Date(dateArr[i]);
                obj.referenceDateTime_1=monthNames[d.getMonth()]+" "+d.getDate();
                obj.amount_2=0;
                kpibalancesheet.push(results[0]?results[0]:obj);
                if (i === (dateArr.length - 1)) {
                    // kpibalancesheet.sort(function(obj1, obj2) {
                    //     // Ascending: first age less than the previous
                    //     return obj1.referenceDateTime_1 - obj2.referenceDateTime_1;
                    // });
                    // res.send(kpibalancesheet);
                    for (var j = 0; j < kpibalancesheet.length; j++) {
                        label.push(kpibalancesheet[j].referenceDateTime_1);
                        data.push(kpibalancesheet[j].amount_2)
                        if (j === (kpibalancesheet.length - 1))
                        {
                         output.label=label;
                         output.data=data;
                         res.send(output);
                        }
                         
                     }
                }
            });
            
        }  
      
       
    },
    balancesummary(req,res)
    {  var str1="";
        var obj=req.body;
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " and relationshipId=" + obj.relationId
        }
        var query = "select( select sum(creditAmount) as Credit_Total from reco.t_intrecords where processingstatus is not null "+str1+") as erp_loaded_credit, (select sum(debitAmount) as Debit_Total from reco.t_intrecords where processingstatus is not null "+str1+") as erp_loaded_debit, (select sum(creditAmount) as Credit_Total from reco.t_intrecords where processingstatus='open'"+str1+") as erp_open_credit, (select sum(debitAmount) as Debit_Total from reco.t_intrecords where processingstatus='open' "+str1+") as erp_open_debit, (select sum(creditAmount) as Credit_Total from reco.t_intrecords where processingstatus='processed' "+str1+") as erp_processed_credit, (select sum(debitAmount) as Debit_Total from reco.t_intrecords where processingstatus='processed' "+str1+") as erp_processed_debit, ( select sum(creditAmount) as Credit_Total from reco.t_extrecords where processingstatus is not null "+str1+") as bank_loaded_credit, (select sum(debitAmount) as Debit_Total from reco.t_extrecords where processingstatus is not null "+str1+") as bank_loaded_debit, (select sum(creditAmount) as Credit_Total from reco.t_extrecords where processingstatus='open'"+str1+") as bank_open_credit, (select sum(debitAmount) as Debit_Total from reco.t_extrecords where processingstatus='open' "+str1+") as bank_open_debit, (select sum(creditAmount) as Credit_Total from reco.t_extrecords where processingstatus='processed' "+str1+") as bank_processed_credit, (select sum(debitAmount) as Debit_Total from reco.t_extrecords where processingstatus='processed' "+str1+") as bank_processed_debit;";
        con.getConnection(function(err, mysqlConn) {
            mysqlConn.query(query, function (error, results, fields) {
            if (error)
                console.log("error#########", error);
                // // // //console.log("getting rows",results)
                res.send(results[0])
        });  
    });
    }
}