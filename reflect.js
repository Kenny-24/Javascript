// Reflect.apply
const obj1 = {};
Reflect.apply(Math.floor, obj1, [1.88]); // 1;

// Reflect.construct
const obj2 = Reflect.construct(Date, [2021, 3, 1]);

// Reflect.get
const obj3 = { x: 1, y: 2 };
Reflect.get(obj3, "x"); // 1

// Reflect.set
const obj4 = {};
Reflect.set(obj4, "prop", "value"); // true

// Reflect.defineProperty(
const obj5 = {};
Reflect.defineProperty(obj5, "property", {
  value: 666,
  writable: false,
}); // true
