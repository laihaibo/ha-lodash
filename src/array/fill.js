const fill = (arr, value, start = 0, end = arr.length) => {
  return arr.map((x, index) => index >= start && index < end ? value : x)
}

module.exports = fill;