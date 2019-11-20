const express = require('express');
const router = express.Router();
var controller = require('./../controller/controllers')
var transactioncontroller = require('./../controller/transacation.controller');
var balancesheet =require('./../controller/balancesheet.controller');
var user = require('../controller/user.controller')
const jwt = require('jsonwebtoken');

function ensuretoken(req,res,next)
{
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined')
  {
    const bearer= bearerHeader.split(" ");
    const bearerToken=bearer[1];
    req.token = bearerToken;
      // verifies secret and checks exp
      // console.log("req.token",req.token,bearerHeader)
    jwt.verify(req.token, 'ADVENT KEY12345@', function(err, decoded) {
    if (err) {
      console.log("err",err);
      return res.json({ success: false, message: 'Failed to authenticate token 1.' });       
    }
    else {
      // if everything is good, save to request for use in other routes
       // console.log("decode,",decoded.user,req.headers["id"])
        if(req.headers["id"] == decoded.user)
        {
          next();
        }
        else{
          // res.sendStatus(403);
          return res.json({ error_status:403,success: false, message: 'Forbidden2.' });
        }
      }
     });
    
    // next();
  }
  else
  {
    return res.json({ error_status:403,success: false, message: 'Forbidden3.' });
    
  }
}

router.post('/listBank',ensuretoken, controller.listBankdata);
router.post('/listERP',ensuretoken, controller.listERPdata);
router.post('/listOpenBank',ensuretoken, controller.listOpenBankdata);
router.post('/listOpenERP',ensuretoken, controller.listOpenERPdata);
router.post('/listOpenAgingERPdata',ensuretoken, controller.listOpenAgingERPdata);
router.post('/listOpenAgingBankdata', ensuretoken,controller.listOpenAgingBankdata);
router.post('/listIndividualOpenAgingERPdata',ensuretoken, controller.listIndividualOpenAgingERPdata);
router.post('/listIndividualOpenAgingBankdata',ensuretoken, controller.listIndividualOpenAgingBankdata);
router.post('/GettingJobExectionPercentagedata',ensuretoken, controller.GettingJobExectionPercentagedata);
router.post('/listDifferOpeAgingnERPdata',ensuretoken, controller.listDifferOpeAgingnERPdata);
router.post('/listDifferOpeAgingnBANKdata',ensuretoken, controller.listDifferOpeAgingnBANKdata);
router.post('/overviewDifferdata', ensuretoken,controller.overviewDifferdata);
router.post('/RecoMatchedSideBySide',ensuretoken, controller.RecoMatchedSideBySide);
router.post('/listtransaction',ensuretoken,transactioncontroller.gettingClassification1)
router.post('/listTransactionAgingBankdata',ensuretoken,transactioncontroller.listTransactionAgingBankdata);
router.post('/listTransactionAgingERPdata',ensuretoken,transactioncontroller.listTransactionAgingERPdata);
router.post('/listbalancesheet',ensuretoken,balancesheet.listBalancedata);
router.post('/listtransactioncount',ensuretoken,transactioncontroller.gettingCountOfClassification1)
router.get('/listbankName',ensuretoken, controller.listBankName)
router.post('/listIndividualOpenAgingtransaction',ensuretoken, controller.listIndividualOpenAgingtransaction);

router.post('/listEXCELERPdata',ensuretoken, controller.listEXCELERPdata);
router.post('/listEXCELBankdata',ensuretoken, controller.listEXCELBankdata);
router.post('/BRSData',ensuretoken, controller.BRSData);
router.post('/ExcelBRSData',ensuretoken, controller.ExcelBRSData);



router.post('/openBalance',ensuretoken, balancesheet.openBalance);
router.post('/closeBalance',ensuretoken, balancesheet.closeBalance);
router.post('/balancesummary',ensuretoken, balancesheet.balancesummary);




router.post('/login',user.login);





module.exports = router;
