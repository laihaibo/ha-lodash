const takeRight = (arr, n=1) => {
  return n === 0 ? [] : arr.slice(-n);
}

module.exports = takeRight;