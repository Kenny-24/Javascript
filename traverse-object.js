// 基本属性：1 ；原型链：2 ；不可枚举：3 ；Symbol：4
// for in// ：1、2
// Object.keys()// ：1
// Object.getOwnPropertyNames()// ：1、3
// Object.getOwnPropertySymbols()// ：3、4
// Reflect.ownKeys()// ：1、3、4
// 后四个（返回的是一个 key 数组）配合forEach使用
