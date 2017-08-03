const compare = (n, start, end) => {
  return n >= start && n < end;
}

const inRange = (...args) => {
  switch (args.length) {
    case 2:
      return compare(args[0], 0, args[1]);
    case 3:
      return compare(args[0], args[1], args[2]);
    default:
      return false;
  }
}

module.exports = inRange;