const flat = arr => {
  return arr.reduce((prev, cur) => prev.concat(cur), []);
}

const flattenDeep = arr => {
  let flatten = flat(arr);

  if (!flatten.filter(x => Array.isArray(x)).length) {
    return flatten;
  }
  return flattenDeep(flatten);
}

const flatten = (arr, isDeep = false) => {
  if (isDeep) {
    return flattenDeep(arr);
  }
  return flat(arr);
}

module.exports = {
  flatten,
  flattenDeep
};