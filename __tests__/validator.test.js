'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    expect(validator.isString('yes')).toBeTruthy();
    expect(validator.isString(1)).toBeFalsy();
    expect(validator.isString(['a'])).toBeFalsy();
    expect(validator.isString({x:'y'})).toBeFalsy();
    expect(validator.isString(() => {})).toBeFalsy();
    expect(validator.isString(false)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber('yes')).toBeFalsy();
    expect(validator.isNumber(1)).toBeTruthy();
    expect(validator.isNumber(['a'])).toBeFalsy();
    expect(validator.isNumber({x:'y'})).toBeFalsy();
    expect(validator.isNumber(() => {})).toBeFalsy();
    expect(validator.isNumber(false)).toBeFalsy();
    // expect(true).toBeFalsy();
  });

  it('arrays', () => {
    // expect(true).toBeFalsy();
    expect(validator.isArray('yes')).toBeFalsy();
    expect(validator.isArray(1)).toBeFalsy();
    expect(validator.isArray(['a'])).toBeTruthy();
    expect(validator.isArray({x:'y'})).toBeFalsy();
    expect(validator.isArray(() => {})).toBeFalsy();
    expect(validator.isArray(false)).toBeFalsy();
    // expect(true).toBeFalsy();
  });

  it('objects', () => {
    // expect(true).toBeFalsy();
    expect(validator.isObject('yes')).toBeFalsy();
    expect(validator.isObject(1)).toBeFalsy();
    expect(validator.isObject(['a'])).toBeFalsy();
    expect(validator.isObject({x:'y'})).toBeTruthy();
    expect(validator.isObject(() => {})).toBeFalsy();
    expect(validator.isObject(false)).toBeFalsy();
    // expect(true).toBeFalsy();
  });

  it('booleans', () => {
    // expect(true).toBeFalsy();
    expect(validator.isBoolean('yes')).toBeFalsy();
    expect(validator.isBoolean(1)).toBeFalsy();
    expect(validator.isBoolean(['a'])).toBeFalsy();
    expect(validator.isBoolean({x:'y'})).toBeFalsy();
    expect(validator.isBoolean(() => {})).toBeFalsy();
    expect(validator.isBoolean(false)).toBeTruthy();
    // expect(true).toBeFalsy();
  });

  it('functions', () => {
    // expect(true).toBeFalsy();
    expect(validator.isFunction('yes')).toBeFalsy();
    expect(validator.isFunction(1)).toBeFalsy();
    expect(validator.isFunction(['a'])).toBeFalsy();
    expect(validator.isFunction({x:'y'})).toBeFalsy();
    expect(validator.isFunction(() => {})).toBeTruthy();
    expect(validator.isFunction(false)).toBeFalsy();
    // expect(true).toBeFalsy();
  });

});

xdescribe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

