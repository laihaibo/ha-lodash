const compact = require('./compact');
const difference = require('./difference');
const drop = require('./drop');
const dropRight = require('./dropRight');
const fill = require('./fill');
const chunk = require('./chunk');
const first = require('./first');
const {flatten, flattenDeep} = require('./flatten');
const initial = require('./initial');
const last = require('./last');
const rest = require('./rest');
const slice = require('./slice');
const take = require('./take');
const takeRight = require('./takeRight');
const {union} = require('./union');

module.exports = {
  compact,
  difference,
  drop,
  dropRight,
  fill,
  chunk,
  first,
  flatten,
  flattenDeep,
  initial,
  last,
  rest,
  slice,
  take,
  takeRight,
  union
};