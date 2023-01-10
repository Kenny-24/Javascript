//call
Function.prototype.myCall = function (context, ...args) {
  context = typeof context === "object" ? context : window;
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context(key);
  return result;
};
