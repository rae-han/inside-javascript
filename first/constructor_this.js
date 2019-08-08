var Person1 = function (name) {
  this.name = name;

  return this;
}

var Person2 = function (name) {
  this.name = name;
}

var foo1 = new Person1('foo');
var foo2 = new Person2('foo');
var foo3 = new Person2('bar');
console.log(foo1);
console.log(foo2);
console.log(foo1 === foo2);
console.log(foo2.prototype);
console.log(foo2.__proto__);
console.log(foo2.__proto__ === foo3.__proto__);
console.log(foo2.__proto__ === Person2.prototype);

var qux1 = Person2('qux');
console.log(qux1);
console.log(global.name);
var qux2 = Person1('quy');
// console.log(qux2);
console.log(qux2 === global);
console.log(global.name);
