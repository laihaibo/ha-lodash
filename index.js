const date = require('./src/date');
const array = require('./src/array');
const math = require('./src/math');
const number = require('./src/number');
const string = require('./src/string');
const lang = require('./src/lang');

module.exports = Object.assign({}, date, array, math, number, string, lang);