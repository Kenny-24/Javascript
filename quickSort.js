function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const num = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= num) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat([num], quickSort(right));
}
console.log(
  999,
  quickSort([1, 5, 12, 2, 5, 6, 4, 32, 12, 12, 3, 35, 12, 2, 3])
);
