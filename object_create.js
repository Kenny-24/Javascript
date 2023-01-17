// Object.create()
let a = Object.create(
  {
    x: 123, // 定义在原型对象上
  },
  {
    like: {
      value: "fish", // 初始化赋值
      writable: true, // 是否是可改写的
      configurable: true, // 是否能够删除，是否能够被修改
      enumerable: true, // 是否可以用for in 进行枚举
    },
  }
);
console.log(a, a.__proto__); //{ like: 'fish' } { x: 123 }
