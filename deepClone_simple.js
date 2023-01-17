// 深拷贝（简易版）
function deepClone(target) {
  if (typeof target === "object" && target != null) {
    // 判断是数组还是对象
    const targetclone = Array.isArray(target) ? [] : {};
    // 键值是否存在
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        //  hasOwnProperty() 方法不会检测对象的原型链，
        //  只会检测当前对象本身，只有当前对象本身存在该属性时才返回 true。
        targetclone[prop] =
          typeof target[prop] === "object"
            ? deepClone(target[prop])
            : target[prop];
      }
    }
    return targetclone;
  } else {
    return target;
  }
}

// JSON.parse(JSON.stringify());
// 忽略function，值为undefined；RegExp、Error对象，序列化的结果将只得到空对象
// 时间对象，会被转成字符串格式
// obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
// 无法满足循环引用

// 浅拷贝
let obj = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
let newObj = Object.assign(obj);
let newObj2 = { ...obj };
// a b d 可以被拷贝，即新申请地址保存数据，c 是两份指针指向同一地址
