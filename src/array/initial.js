const initial = arr => {
  return arr.filter((x, index) => index !== arr.length - 1);
}

module.exports = initial;