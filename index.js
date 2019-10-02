'use strict';

/**
 * Simple Server
 * @module index
 */

const express = require('express');

const validator = require('./lib/validator.js');

const app = express();

app.use('/docs', express.static('./docs'));

/**
 * / Request Handler (All Routes)
 * @param req
 * @param res
 */

app.get('/', requestHandler);

function requestHandler(req,res) {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end();
}

app.listen(process.env.PORT, () => console.log(`server up on port ${process.env.PORT}`) );