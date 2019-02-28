function Person1(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

  return {name:'Ian', gender:'man', age: 20, id: 1};
}

function Person2(name, gender, age) {  
  this.name = name;
  this.gender = gender;
  this.age = age;

  return 100;
}

var pers1 = new Person1('jan', 'woman', 22);
var pers2 = new Person2('xan', 'woman', 24);

console.log(pers1);
console.log(pers2);
