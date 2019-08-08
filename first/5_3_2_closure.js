function HelloFunc(func) {
  this.greeting = 'hello';
};

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting)
  console.dir(this.func);
};

var objHello = new HelloFunc();
/**
 *  
 */

function saySomething(obj, methodName, name) {
  return (function(greeting) {
    console.log(this);
    console.log(greeting);
    return obj[methodName](greeting, name); // 3. obj인자로 받은 newObj함수에서 methodName이라는 이름을 가진 메서드에 greeting과 name프로퍼티를 넘긴다. 이 메서드는 사용자가 newObj 에 정의한 메서드이고 greeting은 HelloFunc의 프로퍼티이고 HelloFunc가 원하는 function(greeting)의 형식이 된다.
  });
}

// function newObj(obj, name) {
function newObj(obj, method, name) { 
  obj.func = saySomething(this, method, name); // 2. objHello 객체에 func프로퍼티를 정의해주고 거기에 saySomething이라는 함수를 가리키게 한다. 그리고 현재 객체와 메소드 이름, 인자 이름을 넘겨준다.
  return obj;
}
// 새로운 함수 newObj를 선언
// HelloFunc()의 객체를 좀 더 자유롭게 활용하기 위해 정의한 함수
// 첫 번째 인자로 받는 obj는 HelloFunc()의 객체가 되고, 
// 두 번째 인자는 사용자가 출력을 원하는 사람 이름이 된다. 


newObj.prototype.who = function(greeting, name) {
  console.log(`${ greeting } ${ name || "everyone" }`)
}

// var obj1 = new newObj(objHello, "zzoon");
var obj1 = new newObj(objHello, 'who', "zzoon"); // 1. newObj 함수를 이용해 새로운 객체 obj1를 만들어준다. 여기에 objHello객체와 스트링 who, zzoon을 넣어준다.

obj1.call();