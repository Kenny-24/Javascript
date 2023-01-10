//reduce
const newArr = function (arr) {
  return arr.reduce(
    (pre, cur, index, arr) =>
      pre.concat(Array.isArray(cur) ? newArr(cur) : cur),
    []
  );
};
//flat
let arr = [1, [3, 1, 2], [2, [234, [21]]]];
console.log(arr.flat(5));
