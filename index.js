'use strict';

/**
 * Simple Server
 * @module index
 */

const express = require('express');

const validator = require('./lib/validator.js');

const app = express();

app.use('/docs', express.static('./docs'));

let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;

/**
 * / String Validator
 * @param string
 */
let stringCheck = validator.isString(str);
console.log(stringCheck);

/**
 * / Number Validator
 * @param number
 */
let numberCheck = validator.isNumber(num);
console.log(numberCheck);

/**
 * / Array Validator
 * @param array
 */
let arrayCheck = validator.isArray(arr);
console.log(arrayCheck);

/**
 * / Object Validator
 * @param object
 */
let objCheck = validator.isObject(obj);
console.log(objCheck);

/**
 * / Function Validator
 * @param function
 */
let funcCheck = validator.isFunction(func);
console.log(funcCheck);

/**
 * / Boolean Validator
 * @param boolean
 */
let boolCheck = validator.isBoolean(bool);
console.log(boolCheck);


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