const chunk = (arr, size = 1) => {
  return arr.reduce((prev, cur, index) => {
    index % size === 0 ? prev.push([cur]) : prev[prev.length - 1].push(cur);
    return prev
  }, []);
}

module.exports = chunk;