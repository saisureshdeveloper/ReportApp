const con = require('../config/connection').reco
const async=require('async');
module.exports = {

    listERPdata(req, res) {
        var ERP = "SELECT count(*) as loaded_ERP , sum(ERP.creditAmount) ' Credit_loaded_ERP', sum(ERP.debitAmount) ' Debit_loaded_ERP', sum(IF(ERP.processingStatus = 'Open',1, 0)) 'open_ERP', sum(IF(ERP.processingStatus = 'Open',ERP.creditAmount, 0)) ' Credit_open_ERP', sum(IF(ERP.processingStatus = 'Open',ERP.debitAmount, 0)) ' Debit_open_ERP', sum(IF(ERP.processingStatus = 'Processed',1, 0)) 'Matched_ERP', sum(IF(ERP.processingStatus = 'Processed',ERP.creditAmount, 0)) ' Credit_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed',ERP.debitAmount, 0)) ' Debit_Matched_ERP', sum(IF(ERP.processingStatus = 'Contra',1, 0)) 'Contra_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,1, 0)) 'Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,ERP.creditAmount, 0)) ' Credit_Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,ERP.debitAmount, 0)) ' Debit_Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,1, 0)) 'Grouped_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,ERP.creditAmount, 0)) ' Credit_Grouped_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,ERP.debitAmount, 0)) ' Debit_Grouped_Matched_ERP', sum(IF(ERP.lastUpdatedBy = 'RE Approver 1' ,1, 0)) 'Manual_Match_ERP' , sum(IF(ERP.processingStatus = 'RE Approver 1',ERP.creditAmount, 0)) ' Credit_Manual_Match_ERP', sum(IF(ERP.processingStatus = 'RE Approver 1',ERP.debitAmount, 0)) ' Debit_Manual_Match_ERP' from reco.t_intrecords as ERP ";
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
                str = " where " + str1 + " and " + str2;

            } else {
                str = " where " + str1 + str2;

            }
            query = ERP + str + ";";

        }

        // // console.log("query 1", obj, query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({
                "response": results[0]
            }));
        });
    },
    listBankdata(req, res) {
        var bank = "SELECT count(*) as loaded_Bank , sum(IF(Bank.processingStatus = 'Open',1, 0)) 'open_Bank', sum(IF(Bank.processingStatus = 'Processed',1, 0)) 'Matched_Bank', sum(IF(Bank.processingStatus = 'Contra',1, 0)) 'Contra_Bank', sum(IF(Bank.processingStatus = 'Open' and groupid is not null,1, 0)) 'Grouped_Open_Bank', sum(IF(Bank.processingStatus = 'Processed' and groupid is not null,1, 0 )) 'Grouped_Matched_Bank', sum(IF(Bank.lastUpdatedBy = 'RE Approver 1' ,1, 0 )) 'Manual_Match_Bank' from reco.t_extrecords as Bank";
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
                str = " where " + str1 + " and " + str2;

            } else {
                str = " where " + str1 + str2;

            }
            query = bank + str + ";";

        }
        // // console.log("query 2", obj, query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify({
                "response": results[0]
            }));
        });
    },
    listBankName(req, res) {
        var query = "SELECT * FROM reco.m_relationships;";

        con.query(query, function(error, results, fields) {
            if (error)
                console.log("error#########", error)
                
            res.send(JSON.stringify(results));
        });
    },
    listOpenERPdata(req, res) {
        var ERP = "SELECT count(*) as loaded_ERP , sum(IF(ERP.processingStatus = 'Open' and debitAmount is not null ,1, 0)) 'Open_DEBIT', sum(IF(ERP.processingStatus = 'open' and creditAmount is not null,1, 0)) 'Open_CREDIT', sum(IF(ERP.processingStatus = 'open' and derivedCol_1 is not null and debitAmount is not null,1, 0)) 'CHEQUE_DEBIT', sum(IF(ERP.processingStatus = 'Open' and derivedCol_1 is not null and creditAmount is not null,1, 0)) 'CHEQUE_CREDIT' from reco.t_intrecords as ERP where processingstatus='open'";
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
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results[0]));
        });
    },
    listOpenBankdata(req, res) {
        var bank = "SELECT count(*) as loaded_BANK , sum(IF(BANK.processingStatus = 'Open' and debitAmount is not null ,1, 0)) 'Open_DEBIT', sum(IF(BANK.processingStatus = 'open' and creditAmount is not null,1, 0)) 'Open_CREDIT', sum(IF(BANK.processingStatus = 'open' and derivedCol_1 is not null and debitAmount is not null,1, 0)) 'CHEQUE_DEBIT', sum(IF(BANK.processingStatus = 'Open' and derivedCol_1 is not null and creditAmount is not null,1, 0)) 'CHEQUE_CREDIT' from reco.t_extrecords as BANK where processingstatus='open'";
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
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results[0]));
        });
    },
    listOpenAgingERPdata(req, res) {
        var ERP = "SELECT count(*) as total , sum(IF((datediff(NOW(),referenceDateTime_1)) >0 and(datediff(NOW(),referenceDateTime_1))<= 15 ,1, 0)) 'series1', sum(IF((datediff(NOW(),referenceDateTime_1)) >15 and (datediff(NOW(),referenceDateTime_1))<= 30 ,1, 0)) 'series2', sum(IF((datediff(NOW(),referenceDateTime_1)) >30 and (datediff(NOW(),referenceDateTime_1))<= 45 ,1, 0)) 'series3', sum(IF((datediff(NOW(),referenceDateTime_1)) >45 and (datediff(NOW(),referenceDateTime_1))<= 60 ,1, 0)) 'series4', sum(IF((datediff(NOW(),referenceDateTime_1)) >60 and (datediff(NOW(),referenceDateTime_1))<= 90 ,1, 0)) 'series5', sum(IF((datediff(NOW(),referenceDateTime_1))> 90 ,1, 0)) 'series6' FROM reco.t_intrecords where processingstatus='open'";
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
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results[0]));
        });

    },
    listOpenAgingBankdata(req, res) {
        var bank = "SELECT count(*) as total , sum(IF((datediff(NOW(),referenceDateTime_1)) >0 and(datediff(NOW(),referenceDateTime_1))<= 15 ,1, 0)) 'series1', sum(IF((datediff(NOW(),referenceDateTime_1)) >15 and (datediff(NOW(),referenceDateTime_1))<= 30 ,1, 0)) 'series2', sum(IF((datediff(NOW(),referenceDateTime_1)) >30 and (datediff(NOW(),referenceDateTime_1))<= 45 ,1, 0)) 'series3', sum(IF((datediff(NOW(),referenceDateTime_1)) >45 and (datediff(NOW(),referenceDateTime_1))<= 60 ,1, 0)) 'series4', sum(IF((datediff(NOW(),referenceDateTime_1)) >60 and (datediff(NOW(),referenceDateTime_1))<= 90 ,1, 0)) 'series5', sum(IF((datediff(NOW(),referenceDateTime_1))> 90 ,1, 0)) 'series6' FROM reco.t_extrecords where processingstatus='open'";
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
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results[0]));
        });
    },
    listIndividualOpenAgingERPdata(req, res) {
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var subQuery = input2 ? " AND ( Datediff(Now(), referencedatetime_1) ) <= " + input2 : "";
        var ERP = "SELECT referenceText_2 , referenceDateTime_1 , referenceText_11, debitAmount, creditAmount, referenceText_3, referenceText_4, referenceText_5, referenceText_6, referenceText_8, referenceText_9, amount_1, referenceText_10, referenceText_12, referenceDateTime_3 FROM reco.t_intrecords where( Datediff(Now(), referencedatetime_1)) > " + input1 + subQuery + " and processingstatus='open'";
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
        // console.log("query 3", query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results));
        });

    },
    listIndividualOpenAgingBankdata(req, res) {
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var subQuery = input2 ? " AND ( Datediff(Now(), referencedatetime_1) ) <= " + input2 : "";
        var bank = "select referenceDateTime_1 ,referenceText_1, debitAmount, creditAmount, referenceText_3, DATE_FORMAT(referenceDateTime_2, '%d-%b-%y'), amount_1, referenceText_4, referenceText_5, referenceText_6, amount_2, referenceText_8, referenceText_9 from reco.t_extrecords where( Datediff(Now(), referencedatetime_1)) > " + input1 + subQuery + " and processingstatus='open'";
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
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results));
        });
    },
    GettingJobExectionPercentagedata(req, res) {
        var subQuery1 = "SELECT recoPercentageERP,recoPercentageBank FROM reco.etl_jobexecutions";
        var subQuery2=" ORDER BY jobExecutionId DESC LIMIT 0, 1"
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();
        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.jobId) && (obj.jobId != 0)) {
            str1 = "jobId=" + obj.jobId
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
    
        var query = subQuery1 + subQuery2 + ";";
        if ((str1 != "") || (str2 != "") || (str3 != "")) {
            if ((str1 != "") && (str2 != "")) {
                str = " where " + str1 + " and " + str2;

            } else {
                str = " where " + str1 + str2;

            }
            query = subQuery1 + str + subQuery2 +";";

        }

        // console.log("GettingJobExectionPercentagedata 1", obj, query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(
             results
            ));
        });
    },
    listDifferOpeAgingnERPdata(req, res) {
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var subQuery = input2 ? " AND ( Datediff(Now(), referencedatetime_1) ) <= " + input2 : "";
        var ERP = " SELECT erp.* FROM( SELECT groupId FROM reco.t_recoresults X WHERE groupId is not null and relationshipId =1) AS result left join( select groupId,SUM(amount_1) as Erpamount, referenceText_2 as documnet_id ,referenceDateTime_1 as documnet_date,referenceText_11 as document_text, debitAmount as debit,creditAmount as Credit_,referenceText_8 as vendor_name from reco.t_intrecords where groupId is not null GROUP BY groupId ) as erp ON result.groupId= erp.groupId left join( select groupId,SUM(amount_1) as Bankamount,referenceDateTime_1 as document_date,debitAmount,creditAmount,referenceText_4 as bank_statement_id ,referenceText_1 as document_decription from reco.t_extrecords where groupId is not null GROUP BY groupId ) as bank ON result.groupId= bank.groupId where erp.Erpamount<>bank.Bankamount GROUP BY erp.groupId ";
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();

        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "and relationshipId=" + obj.relationId
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
        if ((obj.fromdate) && (obj.fromdate != 0)) {
            str2 = "referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
        }
        var  query = " SELECT erp.* FROM( SELECT groupId FROM reco.t_recoresults X WHERE groupId is not null "+ str1 +") AS result left join( select groupId,SUM(amount_1) as Erpamount, referenceText_2, referenceDateTime_1, referenceText_11, debitAmount, creditAmount, referenceText_3, referenceText_4, referenceText_5, referenceText_6, referenceText_8, referenceText_9, amount_1, referenceText_10, referenceText_12, referenceDateTime_3 from reco.t_intrecords where groupId is not null GROUP BY groupId ) as erp ON result.groupId= erp.groupId left join( select groupId,SUM(amount_1) as Bankamount,referenceDateTime_1 as document_date,debitAmount,creditAmount,referenceText_4 as bank_statement_id ,referenceText_1 as document_decription from reco.t_extrecords where groupId is not null GROUP BY groupId ) as bank ON result.groupId= bank.groupId where erp.Erpamount<>bank.Bankamount GROUP BY erp.groupId" + ";";

        if ((str1 != "") || (str2 != "") || (str3 != "")) {
            if ((str1 != "") && (str2 != "")) {
                str = " and " + str1 + " and " + str2;

            } else {
                str = " and " + str1 + str2;

            }

        }
        // console.log("query 3", query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results));
        });

    },
    listDifferOpeAgingnBANKdata(req, res) {
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var subQuery = input2 ? " AND ( Datediff(Now(), referencedatetime_1) ) <= " + input2 : "";
        var ERP = " SELECT erp.* FROM( SELECT groupId FROM reco.t_recoresults X WHERE groupId is not null and relationshipId =1) AS result left join( select groupId,SUM(amount_1) as Erpamount, referenceText_2 as documnet_id ,referenceDateTime_1 as documnet_date,referenceText_11 as document_text, debitAmount as debit,creditAmount as Credit_,referenceText_8 as vendor_name from reco.t_intrecords where groupId is not null GROUP BY groupId ) as erp ON result.groupId= erp.groupId left join( select groupId,SUM(amount_1) as Bankamount,referenceDateTime_1, referenceText_1, debitAmount, creditAmount, referenceText_3, DATE_FORMAT(referenceDateTime_2, '%d-%b-%y'), amount_1, referenceText_4, referenceText_5, referenceText_6, amount_2, referenceText_8, referenceText_9 from reco.t_extrecords where groupId is not null GROUP BY groupId ) as bank ON result.groupId= bank.groupId where erp.Erpamount<>bank.Bankamount GROUP BY erp.groupId ";
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();

        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "and relationshipId=" + obj.relationId
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
        if ((obj.fromdate) && (obj.fromdate != 0)) {
            str2 = "referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
        }
        var  query = " SELECT bank.* FROM( SELECT groupId FROM reco.t_recoresults X WHERE groupId is not null "+ str1+") AS result left join( select groupId,SUM(amount_1) as Erpamount from reco.t_intrecords where groupId is not null GROUP BY groupId ) as erp ON result.groupId= erp.groupId left join( select groupId,SUM(amount_1) as Bankamount,referenceDateTime_1, referenceText_1, debitAmount, creditAmount, referenceText_3, DATE_FORMAT(referenceDateTime_2, '%d-%b-%y'), amount_1, referenceText_4, referenceText_5, referenceText_6, amount_2, referenceText_8, referenceText_9 from reco.t_extrecords where groupId is not null GROUP BY groupId ) as bank ON result.groupId= bank.groupId where erp.Erpamount<>bank.Bankamount GROUP BY bank.groupId;";

        if ((str1 != "") || (str2 != "") || (str3 != "")) {
            if ((str1 != "") && (str2 != "")) {
                str = " and " + str1 + " and " + str2;

            } else {
                str = " and " + str1 + str2;

            }

        }
        // console.log("query 3", query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results));
        });

    },
    overviewDifferdata(req, res) {
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var subQuery = input2 ? " AND ( Datediff(Now(), DATE_FORMAT(referenceDateTime_2, '%d-%b-%y')) ) <= " + input2 : "";
        var ERP = " SELECT erp.* FROM( SELECT groupId FROM reco.t_recoresults X WHERE groupId is not null and relationshipId =1) AS result left join( select groupId,SUM(amount_1) as Erpamount, referenceText_2 as documnet_id ,DATE_FORMAT(referenceDateTime_1, '%d-%b-%y') as referenceDateTime_1 as documnet_date,referenceText_11 as document_text, debitAmount as debit,creditAmount as Credit_,referenceText_8 as vendor_name from reco.t_intrecords where groupId is not null GROUP BY groupId ) as erp ON result.groupId= erp.groupId left join( select groupId,SUM(amount_1) as Bankamount,DATE_FORMAT(referenceDateTime_1, '%d-%b-%y') as referenceDateTime_1 as document_date,debitAmount,creditAmount,referenceText_4 as bank_statement_id ,referenceText_1 as document_decription from reco.t_extrecords where groupId is not null GROUP BY groupId ) as bank ON result.groupId= bank.groupId where erp.Erpamount<>bank.Bankamount GROUP BY erp.groupId ";
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();

        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "and relationshipId=" + obj.relationId
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
        if ((obj.fromdate) && (obj.fromdate != 0)) {
            str2 = "referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
        }
        var  query = "select COALESCE(sum(debitAmount),0) as DebitExt,COALESCE(sum(creditAmount),0) as CreditExt , COALESCE(ERP.DebitInt,0) as DebitInt,COALESCE(ERP.CreditInt,0) CreditInt, SUM(debitAmount) - ERP.DebitInt AS debit_differ , SUM(creditAmount) - ERP.CreditInt AS credit_differ from t_extrecords ,(select sum(debitAmount) as DebitInt,sum(creditAmount) as CreditInt from t_intrecords where processingStatus = 'Processed' "+ str1 +" ) as ERP where  processingStatus = 'Processed'"+str1+";";

        if ((str1 != "") || (str2 != "") || (str3 != "")) {
            if ((str1 != "") && (str2 != "")) {
                str = " and " + str1 + " and " + str2;

            } else {
                str = " and " + str1 + str2;

            }

        }
        //  console.log("query 3", query)
        con.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(JSON.stringify(results[0]));
        });

    },
    RecoMatchedSideBySide(req, res) {
        var obj = req.body;
        var str1="";
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " where ERP_jobId=" + obj.relationId +" And Bank_jobId="+ obj.relationId
        }
        var query1 = " select date_format(ERP_referenceDateTime_1,'%d-%m-%Y') as 'ERP DOCUMENT DATE',date_format(Bank_referenceDateTime_1,'%d-%m-%Y') AS 'BANK DATE',ERP_referenceText_11 AS 'ERP TEXT',Bank_referenceText_1 AS 'BANK DESCRIPTION',cast(ERP_debitAmount as decimal(21,2))  AS 'ERP DEBIT AMOUNT',cast(Bank_debitAmount as decimal(21,2)) AS 'BANK DEBIT AMOUNT',cast(ERP_creditAmount as decimal(21,2)) AS 'ERP CREDIT AMOUNT',cast(Bank_creditAmount as decimal(21,2)) AS 'BANK CREDIT AMOUNT', ERP_referenceText_4 as 'ERP ASSIGNMENT',Bank_referenceText_2 as 'BANK CHQ/ REFERENCE NUMBER',ERP_referenceText_2 as 'ERP DOCUMENT NUMBER',ERP_referenceText_3  as 'ERP DOCUMENT HEADER TEXT' ,ERP_referenceText_10 as 'CLEARING DOCUMENT',ERP_referenceText_12 as 'USER NAME' from reco.vw_matchedrecordssidebyside"+str1 +" ";
        var union="union distinct"
        var query2 = " SELECT distinct classification_1 as data FROM reco.t_extrecords where  classification_1 is not null"+str1 +" ;";
        var query=query1+union+query2;
        // console.log("RecoMatchedSideBySide",query)
        con.query(query1, function (error, results, fields) {
            if (error)
                console.log("error#########", error)
            res.send(JSON.stringify(results));
        });
    },

    listIndividualOpenAgingtransaction(req,res)
    {
        var arrresult={};
        arrresult.erp=[];
        arrresult.bank=[];
        var obj = req.body;
        var input1 = req.body.input1;
        var input2 = req.body.input2;
        var str1="";
        var v1,v2;
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " and jobid=" + obj.relationId 
        }
        v1=obj.input1?obj.input1:0;
        v2=obj.input1?obj.input2:15;
        var query1="select count(*) as erp_count ,classification_1 from t_intrecords where processingstatus='open'"+str1+" and (datediff(NOW(),referenceDateTime_1)) >"+v1+" and (datediff(NOW(),referenceDateTime_1))<= "+v2+" group by classification_1;";
        var query2="select count(*) as bank_count ,classification_1 from t_extrecords where processingstatus='open'"+str1+" and (datediff(NOW(),referenceDateTime_1)) >"+v1+" and (datediff(NOW(),referenceDateTime_1))<= "+v2+" group by classification_1;";
console.log("query1",query1,obj);
    con.getConnection(function(err, mysqlConn) {
        async.parallel([
            function one(callback)
            {
                mysqlConn.query(query1, function (error, results, fields) {
                    if (error)
                        console.log("error#########", error)
                    // res.send(JSON.stringify(results));
                        arrresult.erp=results
                        callback(null, 'one');
                   
                })
            },
            function two(callback)
            {
                mysqlConn.query(query2, function (error, results, fields) {
                    if (error)
                        console.log("error#########", error)
                    // res.send(JSON.stringify(results));

                    arrresult.bank=results;
                    callback(null, 'one');
                    res.send(arrresult);
                });

            }
        ],
            function (error) {
                if (error) {
                    //handle readFile error or processFile error here
                }
            })
        });
    },
    listEXCELERPdata(req, res) {
       
       var ERP=" select referencetext_2,referenceDateTime_1, referenceText_11, debitAmount , creditAmount, referenceText_3, referenceText_4, referenceText_5, referenceText_6, referenceText_8, referenceText_9, amount_1, referenceText_10, referenceText_12,referenceDateTime_3 from reco.t_intrecords "
        // var ERP = "SELECT count(*) as loaded_ERP , sum(ERP.creditAmount) ' Credit_loaded_ERP', sum(ERP.debitAmount) ' Debit_loaded_ERP', sum(IF(ERP.processingStatus = 'Open',1, 0)) 'open_ERP', sum(IF(ERP.processingStatus = 'Open',ERP.creditAmount, 0)) ' Credit_open_ERP', sum(IF(ERP.processingStatus = 'Open',ERP.debitAmount, 0)) ' Debit_open_ERP', sum(IF(ERP.processingStatus = 'Processed',1, 0)) 'Matched_ERP', sum(IF(ERP.processingStatus = 'Processed',ERP.creditAmount, 0)) ' Credit_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed',ERP.debitAmount, 0)) ' Debit_Matched_ERP', sum(IF(ERP.processingStatus = 'Contra',1, 0)) 'Contra_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,1, 0)) 'Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,ERP.creditAmount, 0)) ' Credit_Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Open' and groupid is not null,ERP.debitAmount, 0)) ' Debit_Grouped_Open_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,1, 0)) 'Grouped_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,ERP.creditAmount, 0)) ' Credit_Grouped_Matched_ERP', sum(IF(ERP.processingStatus = 'Processed' and groupid is not null,ERP.debitAmount, 0)) ' Debit_Grouped_Matched_ERP', sum(IF(ERP.lastUpdatedBy = 'RE Approver 1' ,1, 0)) 'Manual_Match_ERP' , sum(IF(ERP.processingStatus = 'RE Approver 1',ERP.creditAmount, 0)) ' Credit_Manual_Match_ERP', sum(IF(ERP.processingStatus = 'RE Approver 1',ERP.debitAmount, 0)) ' Debit_Manual_Match_ERP' from reco.t_intrecords as ERP ";
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();
        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "relationshipId=" + obj.relationId+ " and "
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
        if ((obj.fromdate) && (obj.fromdate != 0)) {
            str2 = " and referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
        }
        var key=obj.key;
        var gettingquery="";
        switch (key) {
            case"Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +';'
                break;
            case "Grouped Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +' and groupid is not null;'
                break;
            case "Manually Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +' and  lastUpdatedBy="RE Approver 1";'
                break;
            case "Opened":
                gettingquery = 'where '+str1+'processingstatus="Open"'+str2 +';'
                break;
            case "Grouped Opened":
                gettingquery = 'where '+str1+'processingstatus="Open"'+str2 +' and groupid is not null;'
                break;
            case "Contra":
                gettingquery = 'where '+str1+'processingstatus="Contra"'+str2 +';'
                break;
            case "Loaded":
                gettingquery = 'where '+str1+'processingstatus is not null'+str2 +';'
                break;

            default:
                    gettingquery=";";
                break;
        }
        var query = ERP + gettingquery;
        // if ((str1 != "") || (str2 != "") || (str3 != "")) {
        //     if ((str1 != "") && (str2 != "")) {
        //         str = " where " + str1 + " and " + str2 +" and processingstatus='processed'";

        //     } else {
        //         str = " where " + str1 + str2 +" and processingstatus='processed'";

        //     }
        //     query = ERP + str + ";";

        // }

         console.log(" erp query 1", obj, query)
         con.getConnection(function(err, mysqlConn) {
            mysqlConn.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    })
    },
    listEXCELBankdata(req, res) {
        var bank="select referenceDateTime_1, referenceText_1, debitAmount, creditAmount, referenceText_3, referenceDateTime_2, amount_1, referenceText_4, referenceText_5, referenceText_6, amount_2, referenceText_8, referenceText_9 from reco.t_extrecords ";
        var str = "";
        var str1 = "";
        var str2 = "";
        var str3 = "";
        var obj = req.body;
        var dt = new Date().toISOString();
        // where referenceDateTime_1 between '2012-03-11 00:00:00' and '2012-05-11 23:59:00' 
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "relationshipId=" + obj.relationId+ " and "
        }
        if ((obj.todate) && (obj.todate != 0)) {
            dt = obj.todate;
        }
        if ((obj.fromdate) && (obj.fromdate != 0)) {
            str2 = " and referenceDateTime_1 between '" + obj.fromdate + "' and '" + dt + "'"
        } 
        var key=obj.key;
        var gettingquery="";
        switch (key) {
            case"Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +';'
                break;
            case "Grouped Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +' and groupid is not null;'
                break;
            case "Manually Matched":
                gettingquery = 'where '+str1+'processingstatus="Processed"'+str2 +' and  lastUpdatedBy="RE Approver 1";'
                break;
            case "Opened":
                gettingquery = 'where '+str1+'processingstatus="Open"'+str2 +';'
                break;
            case "Grouped Opened":
                gettingquery = 'where '+str1+'processingstatus="Open"'+str2 +' and groupid is not null;'
                break;
            case "Contra":
                gettingquery = 'where '+str1+'processingstatus="Contra"'+str2 +';'
                break;
            case "Loaded":
                gettingquery = 'where '+str1+'processingstatus is not null'+str2 +';'
                break;

            default:
                    gettingquery=";";
                break;
        }
        var query = bank + gettingquery;
        // var query = bank + ";";
        // if ((str1 != "") || (str2 != "") || (str3 != "")) {
        //     if ((str1 != "") && (str2 != "")) {
        //         str = " where " + str1 + " and " + str2+" and processingstatus='processed'";

        //     } else {
        //         str = " where " + str1 + str2+" and processingstatus='processed'";

        //     }
        //     query = bank + str + ";";

        // }
         console.log("banl query 2", obj, query)
         con.getConnection(function(err, mysqlConn) {

            mysqlConn.query(query, function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    })
    },
    BRSData(req, res) {
        var obj = req.body;
        var str1="";
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = "where relationshipId=" + obj.relationId ;
        }
        var query1 = "SELECT(select COUNT(*) from vw_chequesissued ,(select @row_number := 0) as t "+str1+") AS Cheques_Issued,(select 0)  as Cheques_Deposited, (select COUNT(*) from vw_glcredits,(select @row_number := 0) as t "+str1+") AS Credits_IN_GL, (select COUNT(*) from vw_gldebits,(select @row_number := 0) as t "+str1+") AS Debits_IN_GL ,(select COUNT(*) from vw_bankdebits,(select @row_number := 0) as t "+str1+") AS Bank_Debits, (select COUNT(*) from vw_bankcredits,(select @row_number := 0) as t "+str1+") AS Bank_Credits;"
        console.log("BRSData",query1)
        con.getConnection(function(err, mysqlConn) {
            mysqlConn.query(query1, function (error, results, fields) {
            if (error)
                console.log("error#########", error)
            var keys = Object.keys(results[0]);
          
            var data=[];
            data.push(results[0].Cheques_Issued);
            data.push(results[0].Cheques_Deposited);
            data.push(results[0].Credits_IN_GL);
            data.push(results[0].Debits_IN_GL);
            data.push(results[0].Bank_Debits);
            data.push(results[0].Bank_Credits);

            console.log("label",keys);
            console.log("data",data);
            var resultobj={}
            resultobj.label=keys;
            resultobj.data=data;
            
            res.send(JSON.stringify(resultobj));

        });
    })
    },
    ExcelBRSData(req,res)
    {
        var obj = req.body;
        var arrresult={};
        arrresult.CheckIssued=[];
        arrresult.BankDebits=[];
        arrresult.BankCredits=[];
        arrresult.GLCredits=[];
        arrresult.GLDebits=[];
 
        var str1="";
        if ((obj.relationId) && (obj.relationId != 0)) {
            str1 = " where relationshipId=" + obj.relationId ;
        }
        var query1= "select (@row_number := @row_number + 1 ) as `Sl. No` , referenceDatetime_1 as   `Cheque date`, referenceText_2 as `SAP doc #`, derivedCol_3 as  `PARTY NAME`,referenceDateTime_2 as `Date of cheque encashment`, debitAmount, derivedCol_1 as  `Cheque Number` from vw_chequesissued ,(select @row_number := 0) as t"+str1+";"  
        var query2="select (@row_number := @row_number + 1 ) as `Sl. No.`, referenceDateTime_1 as 'Date of Debit By Bank', referenceText_1 as 'Description', debitAmount from vw_bankdebits,(select @row_number := 0) as t"+str1+";"
        var query3="select (@row_number := @row_number + 1 ) as `Sl. No.`,referenceDateTime_1 as 'Date of credit by Bank', referenceText_1 as 'Description',creditAmount  from vw_bankcredits,(select @row_number := 0) as t"+str1+";"
        var query4="select (@row_number := @row_number + 1 ) as `Sl. No.`,referenceText_2 as 'SAP doc #',referenceText_11 as 'Description' ,debitAmount from vw_gldebits,(select @row_number := 0) as t"+str1+";"
        var query5="select (@row_number := @row_number + 1 ) as `Sl. No.`,referenceText_2 as 'SAP doc #', referenceText_11 as 'Description',creditAmount from vw_glcredits,(select @row_number := 0) as t"+str1+";"
        con.getConnection(function(err, mysqlConn) {
            async.parallel([
                function one(callback)
                {
                    mysqlConn.query(query1, function (error, results, fields) {
                        if (error)
                            console.log("error#########", error)
                        // res.send(JSON.stringify(results));
                        for(i = 0; i < results.length; i++){
                            results[i]["Cheque amount "] = parseFloat(results[i]["debitAmount"])?parseFloat(results[i]["debitAmount"]):parseFloat('0');
                            delete results[i]["debitAmount"];
                        }

                            arrresult.CheckIssued=results
                            callback(null, 'one');
                       
                    })
                },
                function two(callback)
                {
                    mysqlConn.query(query2, function (error, results, fields) {
                        if (error)
                            console.log("error#########", error)
                        // res.send(JSON.stringify(results));
                        for(i = 0; i < results.length; i++){
                            results[i]["Amount (Rs.)"] = parseFloat(results[i]["debitAmount"])?parseFloat(results[i]["debitAmount"]):parseFloat('0');
                            delete results[i]["debitAmount"];
                        }
                        arrresult.BankDebits=results;
                        callback(null, 'one');
                        // res.send(arrresult);
                    });
    
                },
                function three(callback)
                {
                    mysqlConn.query(query3, function (error, results, fields) {
                        if (error)
                            console.log("error#########", error)
                        // res.send(JSON.stringify(results));
                        for(i = 0; i < results.length; i++){
                            results[i]["Amount (Rs.)"] = parseFloat(results[i]["creditAmount"])?parseFloat(results[i]["creditAmount"]):parseFloat('0');
                            delete results[i]["creditAmount"];
                        }
                            arrresult.BankCredits=results
                            callback(null, 'one');
                       
                    })
                },
                function four(callback)
                {
                    mysqlConn.query(query4, function (error, results, fields) {
                        if (error)
                            console.log("error#########", error)
                        // res.send(JSON.stringify(results));
                        for(i = 0; i < results.length; i++){
                            results[i]["Amount (Rs.)"] = parseFloat(results[i]["debitAmount"])?parseFloat(results[i]["debitAmount"]):parseFloat('0');
                            delete results[i]["debitAmount"];
                        }
    
                        arrresult.GLCredits=results;
                        callback(null, 'one');
                        // res.send(arrresult);
                    });
    
                },
                function five(callback)
                {
                    mysqlConn.query(query5, function (error, results, fields) {
                        if (error)
                            console.log("error#########", error)
                        // res.send(JSON.stringify(results));
                        for(i = 0; i < results.length; i++){
                            results[i]["Amount (Rs.)"] = parseFloat(results[i]["creditAmount"])?parseFloat(results[i]["creditAmount"]):parseFloat('0');
                            delete results[i]["creditAmount"];
                        }
    
                        arrresult.GLDebits=results;
                        callback(null, 'one');
                        res.send(arrresult);
                    });
    
                }
            ],
                function (error) {
                    if (error) {
                        //handle readFile error or processFile error here
                    }
                })
        });
    }

    
}