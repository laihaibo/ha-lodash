const difference = (arr, values) => {
  return arr.filter(x => values.indexOf(x) === -1);
}

module.exports = difference;