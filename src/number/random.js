const getRan = (min, max, floating) => {
  let num = Math.random() * (max - min) + min;
  return floating ? num : Math.round(num);
}

const random = (...args) => {
  switch (args.length) {
    case 1:
      if (args[0] === true) {
        return getRan(0, 1, true);
      } else if (args[0] === false) {
        return getRan(0, 1, false);
      } else if (Number.isInteger(args[0])) {
        return getRan(0, args[0], false)
      } else {
        return getRan(0, args[0], true)
      }
    case 2:
      if (args[1] === true) {
        if (Number.isInteger(args[0])) {
          return getRan(0, args[0], true);
        } else {
          return getRan(0, args[0], true);
        }
      } else if (args[1] === false) {
        if (Number.isInteger(args[0])) {
          return getRan(0, args[0], false);
        } else {
          return getRan(0, args[0], true);
        }
      } else {
        if (Number.isInteger(args[0]) && Number.isInteger(args[1])) {
          return getRan(args[0], args[1], false);
        } else {
          return getRan(args[0], args[1], true);
        }
      }
      return getRan(0, 1, false);
    case 3:
      return getRan(args[0], args[1], args[2]);
    default:
      return getRan(0, 1, false);
  }
}

module.exports = random;