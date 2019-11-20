const express = require('express');
const app = express();
const app2 = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const con = require('./config/connection')
const router = require('./router/api');
const path = require('path');
var cors = require('cors')
const log =require('debug')('app:run')
var address = require('address');
var port= process.env.port || 1505;
const https=require('https');
const fs=require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({
    extended: true
}));
// const httpoptions={
//     cert:fs.readFileSync(path.join(__dirname,'ssl','certificate.pem')),
//     key:fs.readFileSync(path.join(__dirname,'ssl','privatekey.pem')),

    
// }


app.use(cors())
app.use('/api', router);
// default route dist\ledger\index.html
// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '/dist/ledger/index.html'));/
    res.sendFile(path.resolve('dist/index.html')); 
});

// app.get('/', function(req, res) {
//     return res.send({ error: true, message: 'hello' })
// });

app.get('/test', function(req, res, next) {
    return res.send({ flag: true, message: 'hello' })
});

// all other requests redirect to 404
app.all("*", function(req, res, next) {
    return res.send('page not found');
    next();
});

app2.use(cors())
app2.use('/api', router);
// default route dist\ledger\index.html
// Angular DIST output folder
app2.use(express.static(path.join(__dirname, 'dist3')));


// Send all other requests to the Angular app
app2.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '/dist/ledger/index.html'));/
    res.sendFile(path.resolve('dist3/index.html')); 
});

// app.get('/', function(req, res) {
//     return res.send({ error: true, message: 'hello' })
// });

app2.get('/test', function(req, res, next) {
    return res.send({ flag: true, message: 'hello' })
});

// all other requests redirect to 404
app2.all("*", function(req, res, next) {
    return res.send('page not found');
    next();
});

async function run()
{
    // connect to database
   await con.reco.getConnection(function(err) {
        if (err) {
            console.log("err", err)
        }
        console.log("RECO DATABASE IS CONNECTED");
    });
    await con.admin.getConnection(function(err) {
        if (err) {
            console.log("err", err)
        }
        console.log("ADMIN DATABASE IS CONNECTED");
    });
    // port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
    app
    .listen(port, function() {
        console.log(`Express Server Now Running http://${address.ip()}:${port}`)
    });
	app2
    .listen(3000, function() {
        console.log(`Express Server Now Running http://${address.ip()}:${3000}`)
    });
}
run();
