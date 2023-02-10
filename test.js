// // 1. 输入为两个一维数组，将这两个数组合并，去重，不要求排序，返回一维数组
// function newArr(arr1, arr2) {
//   return Array.from(new Set(arr1.concat(arr2)));
// }
// console.log(6, newArr([1, 2], [2, 3]));
// 2. 编写函数convert(money) ，传入金额，将金额转换为千分位表示法。例如：12345.6 => 12,345.6

function convert(money) {
  if (money != NaN && money != 0) {
    let [integer, decimal] = String(Math.abs(parseFloat(money))).split(".");
    let arr = integer.split("").reverse();
    for (i in arr) {
      if (i % 3 == 0 && i != 0) {
        arr[i] = arr[i] + ",";
      }
    }
    let newStr = arr.reverse().join("") + (decimal ? "." + decimal : "");
    if (money > 0) {
      return newStr;
    } else {
      return "-" + newStr;
    }
  } else {
    return money;
  }
}
let a = -1231233;
console.log(66, convert(a));

// //数组内三个一组 组合
// function createArray(arr) {
//   let newArr = [];
//   while (arr.length > 2) {
//     for (let i = 2; i < arr.length; ++i) {
//       let arrayThree = [];
//       arrayThree.push(arr[0]);
//       arrayThree.push(arr[1]);
//       arrayThree.push(arr[i]);
//       newArr.push(arrayThree);
//     }
//     arr.splice(0, 1);
//   }
//   return newArr;
// }
