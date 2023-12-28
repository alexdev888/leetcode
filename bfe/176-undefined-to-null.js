/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
  if (arg === undefined) {
    return null;
  } else if (Array.isArray(arg)) {
    return arg.map(undefinedToNull);
  } else if (Object.prototype.toString.call(arg) === "[object Object]") {
    return Object.keys(arg).reduce(
      (acc, currentKey) => ({
        ...acc,
        [currentKey]: undefinedToNull(arg[currentKey]),
      }),
      {}
    );
  }

  return arg;
}

// const result = undefinedToNull({
//   a: ["BFE.dev", undefined, "bigfrontend.dev"],
// });

const result = undefinedToNull([
  "BFE.dev",
  undefined,
  null,
  { a: ["BFE.dev", undefined] },
]);

console.log(result);
