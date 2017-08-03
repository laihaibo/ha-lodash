const dropRight = (arr, n = 1) => {
  return n === 0 ? arr : arr.slice(0, -n);
}

module.exports = dropRight;