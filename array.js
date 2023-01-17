// 改变原数组（A）：
// push() pop() shift() unshift() sort() reverse() splice()
// 原数组不变（B）：
// concat() join() slice() map() indexOf() lastIndexOf() filter()
// every() some() reduce() reduceRight()

// 1------reduce - B
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function (prev, cur, index, arr) {
  console.log(prev, cur, index);
  return prev + cur;
}, 0); // 注意这里设置了初始值
console.log(arr, sum);
// 0 1 0
// 1 2 1
// 3 3 2
// 6 4 3
// [1, 2, 3, 4] 10
var sum = arr.reduce(function (prev, cur, index, arr) {
  console.log(prev, cur, index);
  return prev + cur;
});
console.log(arr, sum);
// 1 2 1
// 3 3 2
// 6 4 3
// [1, 2, 3, 4] 10

// 2------some - B（区分includes，some找条件对应，includes找值对应）
let arr = [1, 2, 3, 4, 5];
let flagSome = arr.some((item) => {
  if (item == 1) {
    return item;
  }
}); // true，找到符合的即停止迭代
// 3------every - B
let arr = [1, 2, 3, 4, 5];
let flagEvery = arr.every((item) => item < 5);
console.log(flag); // false，都满足条件返回true，有不满足条件的返回false并停止迭代
