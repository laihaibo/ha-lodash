function compare(value, other) {
  return Math.max(value, other);
}

const gte = (value, other) => {
  return compare(value, other) === value
}

const gt = (value, other) => {
  return value === other ? false : compare(value, other) === value;
}

const lte = (value, other) => {
  return compare(value, other) !== value
}

const lt = (value, other) => {
  return value === other ? false : compare(value, other) !== value;
}

module.exports = {
  gte,
  gt,
  lt,
  lte
};