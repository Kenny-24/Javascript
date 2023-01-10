const m = new Map();
const o = { p: "haha" };
m.set(o, "content");
m.get(o); // content
m.has(o); // true
m.delete(o); // true
m.has(o); // false
//WeakMap 的 key 只能是 Object 类型，弱引用键（一个对象的其他引用全部消失
//则weakmap的key会被垃圾回收，同时对应的value也会被清除），无法枚举
