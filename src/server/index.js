'use strict'

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const directoryToServe = 'client';

app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpsOptions, app)
.listen(3333, ()=>{
    console.info('Server listening on port 3333');
});