const isNumber = value => {
  return Object.prototype.toString.call(value) === '[object Object]';
}

const isNaN = value => {
  return Number.isNaN(value);
}

module.exports = {isNumber,isNaN};