const con = require('../config/connection').admin
const jwt = require('jsonwebtoken');

module.exports = {
    login(req,res)
    {
        var userName= req.body.UserId;
        var password = req.body.Password;
        con.getConnection(function(err, mysqlConn) {
          mysqlConn.query('SELECT * FROM admin.users WHERE loginName = ?',[userName], function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
          res.status(200);
          res.send({
            "code":400,
            "status":false,
            "failed":"error ocurred"
          })
        }else{
          // console.log('The solution is: ', results);
          if(results.length >0){
            //   console.log("adad",results)
            if(results[0].userPassword == password){
                var token = jwt.sign({ user: results[0].userId }, 'ADVENT KEY12345@', {
                    expiresIn: 86400 // expires in 24 hours
                  });
              res.send({
                "status":true,
                "code":200,
                "success":"login sucessfull",
                "data":results[0],
                "token":token
                  });
            }
            else{
              res.status(200);
              res.send({
                "code":204,
                "status":false,
                "success":"userName and password does not match"
                  });
            }
          }
          else{
            res.status(200);
            res.send({
              "code":204,
              "status":false,
              "success":"userName does not exits"
                });
          }
        }
        });
      })
    }
}
