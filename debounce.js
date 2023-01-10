//防抖
function debounce(fn, delay = 100) {
  timer = 0;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = 0;
    }, delay);
  };
}
