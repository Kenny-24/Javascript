//Promise.all
function all(arr) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let length = arr.length;
    let results = [];
    if (length == 0) {
      resolve(arr);
    }
    for (let i = 0; i < length; i++) {
      arr[i]
        .then((res) => {
          //按顺序输出
          results[i] = res;
          count++;
          if (count == length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
