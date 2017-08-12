const isArray = require('./isArray');
const {gt, gte,lt,lte} = require('./gt');
const isObject = require('./isObject');
const {isNumber,isNaN} = require('./isNumber');
// const isString = require('./isString');

module.exports = {
  isArray,
  gt,
  gte,
  lt,
  lte,
  isObject,
  isNaN
  // isNumber,
  // isString
};