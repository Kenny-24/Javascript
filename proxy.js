const obj = {
  name: "gc",
  age: 18,
};
const objProxy = new Proxy(obj, {
  // get操作符
  get: function (target, key) {
    console.log(`监听到访问${key}属性`, target);
    return target[key]; // 返回访问属性的值
  },
  // set操作符
  set: function (target, key, newValue) {
    console.log(`监听到给${key}属性设置值`, target);
    target[key] = newValue; // 将属性最新值，赋值给代理对象属性
  },
  // has操作符
  has: function (target, key) {
    console.log(`监听到使用in操作符${key}`, target);
    return key in target;
  },
  // delete操作符
  deleteProperty: function (target, key) {
    console.log(`监听到使用delete操作符${key}`, target);
    delete target[key];
  },
});
// get
console.log(obj.name);
console.log(objProxy.age);
// set
objProxy.name = "wx";
objProxy.age = 20;
// in操作符
console.log("name" in objProxy); // true
// delete操作符
console.log(objProxy.name, obj.name); // wx wx
delete obj.name;
console.log(objProxy.name, obj.name); // undefined undefined
