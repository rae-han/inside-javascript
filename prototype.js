console.log(`#### #### #### #### 생성자 함수 #### #### #### ####`);

function Person(name) {
  this.name = name;
}

var person = new Person('han');

console.log(person.__proto__ == Person.prototype);
console.log(Person == Person.prototype.constructor);
console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Person.prototype.__proto__ == Function.prototype); // false
console.log(Person.__proto__ == Function.prototype);
console.log(Person.__proto__.__proto__ == Person.prototype.__proto__);
console.log(Person == person.__proto__.constructor);

console.log(`#### #### #### #### 객체 리터럴 #### #### #### ####`);

var myObject = {
  name: 'han',
  sayName: function() {
    console.log(`My name is ${this.name}`);
  }
};

console.log(myObject.__proto__ == Object.prototype);
console.log(myObject.__proto__ == Array.prototype.__proto__);
console.log(myObject.__proto__ == Function.prototype.__proto__);

console.log(`#### #### #### #### 디폴트 프로토타입은 다른 객체로 변경이 가능 #### #### #### ####`); 

function Person(name) {
  this.name = name;
}
console.log(Person.prototype.constructor);

var foo = new Person(foo);
console.log(foo.country);

console.log('constructor');
console.log(Person.prototype.constructor);

Person.prototype = {
  // constructor: Person.prototype.constructor,
  country: 'korea'
};
console.log(Person.prototype.constructor);

var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);

console.log(`#### #### #### ####  #### #### #### ####`);

function Person(name) {
  this.name = name;
}

Person.prototype.country = 'Korea';




console.log(`#### #### #### ####  #### #### #### ####`);
