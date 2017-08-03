const repeat = (str, n = 0) => {
  return n === 0 ? ' ' : Array.from(Array(n)).map(x => str).join('');
}

module.exports = repeat;