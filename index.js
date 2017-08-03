const date = require('./src/date');
const array = require('./src/array');
const math = require('./src/math');
const number = require('./src/number');
const string = require('./src/string');

module.exports = Object.assign({}, date, array, math, number, string);