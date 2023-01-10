//柯里化
function currying(fn, ...bindArgs) {
  return (...args) => {
    let allArgs = [...args, ...bindArgs];
    if (allArgs.length < fn.length) {
      return currying(fn, ...allArgs);
    } else {
      return fn(...allArgs);
    }
  };
}
