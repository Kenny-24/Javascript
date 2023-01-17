// apply
Function.prototype.myApply = function (context, args) {
  context = typeof context === "object" ? context : window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};
