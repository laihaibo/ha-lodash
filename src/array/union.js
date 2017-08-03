const {flatten} = require('./flatten');

const uniq = arr => {
  return Array.from(new Set(arr));
};

const union = (...args) => {
  return uniq(flatten(args));
};

module.exports = {
  union
};