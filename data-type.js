//typeof
typeof ""; //string
//instanceof
[] instanceof Array; //true
//isPrototypeOf
function Foo() {}
Foo.prototype.isPrototypeOf(new Foo()); //true
//constructor
"".constructor === String; //true
//Object.prototype.toString.call
Object.prototype.toString.call(""); //[Object String]
