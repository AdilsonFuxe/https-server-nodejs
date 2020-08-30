'use strict'

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');


const app = express();

const directoryToServe = 'client';

app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpsOptions, app)
.listen(8080, ()=>{
    console.info(`Server listening 8080`);
});