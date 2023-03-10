// Promise.race
function race(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length == 0) {
      resolve(arr);
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
