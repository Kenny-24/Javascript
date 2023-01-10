//bind
Function.prototype.myBind = function (context) {
  context = typeof context === "object" ? context : window;
  return (...args) => {
    this.call(context, ...args);
  };
};
