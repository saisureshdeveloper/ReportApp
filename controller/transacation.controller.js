const con = require('../config/connection').reco;
const async=require('async');

module.exports = {

    gettingClassification1(req, res) {
        var obj = req.body;
        var str1="";
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " And relationshipId=" + obj.relationId
        }
        var query1 = "SELECT distinct classification_1 as data FROM reco.t_intrecords where  classification_1 is not null"+str1 +" ";
        var union="union distinct"
        var query2 = " SELECT distinct classification_1 as data FROM reco.t_extrecords where  classification_1 is not null"+str1 +" ;";
        var query=query1+union+query2;
        // console.log("gettingClassification1 query",query)
        con.getConnection(function(err, mysqlConn) {
            mysqlConn.query(query1, function (error, results, fields) {
            if (error)
                console.log("error#########", error)
            res.send(JSON.stringify(results));
        });
    })
    },
    listTransactionAgingERPdata(req, res) {

        var obj = req.body;
        var key="";
        if ((obj.relationId) && (obj.relationId != 0) && (obj.relationId != "0")) {
            key = " And relationshipId=" + obj.relationId
        }
        var query = "SELECT distinct classification_1 as data FROM reco.t_intrecords where  classification_1 is not null"+key +";";
        // console.log("dsndsdnsdn",query)

        var listclassification1 = [];
        const kpidata = [];
        con.query(query, function (error, results, fields) {
            if (error)
                console.log("error#########", error)
            listclassification1 = results;
            // // console.log("classifcixtion", listclassification1, listclassification1.length)
            for (let i = 0; i < listclassification1.length; i++) {
                // // console.log("iteration", listclassification1[i].data)
                var keytext = "'" + listclassification1[i].data + "'";
                // var keytext ="'"+ req.body.transaction_name +"'";

                var ERP = "SELECT count(*) as total , sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >0 and(datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 15 ,1, 0)) 'series1', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >15 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 30 ,1, 0)) 'series2', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >30 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 45 ,1, 0)) 'series3', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >45 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 60 ,1, 0)) 'series4', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >60 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 90 ,1, 0)) 'series5', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1))> 90 ,1, 0)) 'series6' FROM reco.t_intrecords where classification_1=" + keytext;
                var str = "";
                var str1 = "";
                var str2 = "";
                var str3 = "";
                var obj = req.body;
                var dt = new Date().toISOString();

                // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
                if ((obj.relationId) && (obj.relationId != 0)) {
                    str1 = "relationshipId=" + obj.relationId
                }
                if ((obj.todate) && (obj.todate != 0)) {
                    dt = obj.todate;
                }
                if ((obj.fromdate) && (obj.fromdate != 0)) {
                    str2 = "referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
                }
                var query = ERP + ";";
                if ((str1 != "") || (str2 != "") || (str3 != "")) {
                    if ((str1 != "") && (str2 != "")) {
                        str = " and " + str1 + " and " + str2;

                    } else {
                        str = " and " + str1 + str2;

                    }
                    query = ERP + str + ";";

                }
                // // console.log("query 3", query)
                con.getConnection(function(err, mysqlConn) {
                    mysqlConn.query(query, function (error, results, fields) {
                    if (error) throw error;
                    
                //  console.log("result", kpidata)
                    kpidata.push(results[0]);
                    if (i === (listclassification1.length - 1)) {
                        res.send(kpidata);
                    }
                });
            })
            }

            // res.send(JSON.stringify(kpidata));
        });

    },
    listTransactionAgingBankdata(req, res) {
        var obj = req.body;
        var key="";
        if ((obj.relationId) && (obj.relationId != 0)&& (obj.relationId != "0")) {
            key = " And relationshipId=" + obj.relationId
        }
        var query = "SELECT distinct classification_1 as data FROM reco.t_intrecords where  classification_1 is not null"+key +";";
// console.log("dsndsdnsdn",query)
        var listclassification1 = [];
        const kpidata = [];
        con.query(query, function (error, results, fields) {
            if (error)
                console.log("error#########", error)
            listclassification1 = results;
            // // console.log("classifcixtion", listclassification1, listclassification1.length)
            for (let i = 0; i < listclassification1.length; i++) {
                // // console.log("iteration", listclassification1[i].data)
                var keytext = "'" + listclassification1[i].data + "'";
                // var keytext ="'"+ req.body.transaction_name +"'";


                var bank = "SELECT count(*) as total , sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >0 and(datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 15 ,1, 0)) 'series1', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >15 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 30 ,1, 0)) 'series2', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >30 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 45 ,1, 0)) 'series3', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >45 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 60 ,1, 0)) 'series4', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1)) >60 and (datediff('2019-04-13 00:00:00',referenceDateTime_1))<= 90 ,1, 0)) 'series5', sum(IF((datediff('2019-04-13 00:00:00',referenceDateTime_1))> 90 ,1, 0)) 'series6' FROM reco.t_extrecords where classification_1=" + keytext;
                var str = "";
                var str1 = "";
                var str2 = "";
                var str3 = "";
                var obj = req.body;
                var dt = new Date().toISOString();

                // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
                if ((obj.relationId) && (obj.relationId != 0)) {
                    str1 = "relationshipId=" + obj.relationId
                }
                if ((obj.todate) && (obj.todate != 0)) {
                    dt = obj.todate;
                }
                if ((obj.fromdate) && (obj.fromdate != 0)) {
                    str2 = "referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
                }
                var query = bank + ";";
                if ((str1 != "") || (str2 != "") || (str3 != "")) {
                    if ((str1 != "") && (str2 != "")) {
                        str = " and " + str1 + " and " + str2;

                    } else {
                        str = " and " + str1 + str2;

                    }
                    query = bank + str + ";";

                }
                // // console.log("query 4", query)
                con.getConnection(function(err, mysqlConn) {
                    mysqlConn.query(query, function (error, results, fields) {
                    if (error) throw error;
                    // // console.log("result", kpidata)
                    kpidata.push(results[0]);
                    if (i === (listclassification1.length - 1)) {
                        res.send(kpidata);
                    }
                });
            })
            }

            // res.send(JSON.stringify(kpidata));
        });


    },
    
    gettingCountOfClassification1(req, res) {
        var arrresult=[];
        var obj = req.body;
        var str1="";
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " and relationshipId=" + obj.relationId
        }
        var query1 = "SELECT classification_1 as name ,count(*) as data_count FROM reco.t_intrecords as ERP where classification_1 is not null"+str1 +" GROUP BY classification_1;";
        var query2 = "SELECT classification_1 as name,count(*) as data_count FROM reco.t_extrecords as Bank where classification_1 is not null"+str1 +" GROUP BY classification_1;";
        var query3="SELECT  transactionSubType as name,count(*) AS data_count FROM reco.t_intrecords where transactionSubType is not null"+str1 +" group by transactionSubType";
        var query4="SELECT transactionSubType as name,count(*) AS data_count FROM reco.t_extrecords where transactionSubType is not null"+str1 +" group by transactionSubType";

        async.parallel([
            function one(callback)
            {
                con.getConnection(function(err, mysqlConn) {
                    mysqlConn.query(query1, function (error, results, fields) {
                    if (error)
                        console.log("error#########", error)
                    // res.send(JSON.stringify(results));
                        arrresult.push(results)
                        callback(null, 'one');
                   
                })
            })
            },
            function two(callback)
            {
                con.getConnection(function(err, mysqlConn) {
                    mysqlConn.query(query2, function (error, results, fields) {
                    if (error)
                        console.log("error#########", error)
                    // res.send(JSON.stringify(results));

                    arrresult.push(results);
                    callback(null, 'one');
                     res.send(arrresult);
                });
            })
            }
            
        ],
            function (error) {
                if (error) {
                    //handle readFile error or processFile error here
                }
            })
        
        
    },


}