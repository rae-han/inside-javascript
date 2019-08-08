/**
 * 특정 함수에 사용자가 정의한 객체의 메서드 연결하기 
 */

function HelloFunc(func) {
  this.greeting = 'hello';
};

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting)
};
// 함수 HelloFunc 는 greeting 변수가 있고, func 프로퍼티로 참조되는 함수를 call() 함수로 호출한다. 
// 사용자는 func 프로퍼티에 자신이 정의한 함수를 참조시켜 호출할 수 있다.
// 자신의 지역 변수인 greeting만을 인자로 사용자가 정의한 함수에 넘긴다.

// console.log(HelloFunc);

var userFunc = function(greeting) {
  console.log(greeting);
};

// HelloFunc.prototype.func = function(greeting) {
//   console.log(greeting);
// };
var objHello = new HelloFunc();
objHello.func = userFunc;
// userFunc() 를 정의하여 objHello.func() 에 참조시킨 뒤, HelloFunc()의 지역 변수인 greeting을 화면에 출력시킨다.
objHello.call();
objHello.call(function(str) {
  console.log(`user Function ${str}`);
});
// objHello.apply();
// objHello();

// HelloFunc() 는 greeting만을 인자로 넣어 사용자가 인자로 넘긴 함수를 실행시킨다.
// 그래서 사용자가 정의한 함수도 한 개의 인자를 받는 함수로 정의할 수밖에 없다.
// 자용자가 원하는 인자를 더 넣어서 HelloFunc()를 이용하여 호출하려면?

/**
 *  
 */

function saySomething(obj, methodName, name) {
  return (function(greeting) {
    return obj[methodName](greeting, name);
  });
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name);
  return obj;
}
// 새로운 함수 newObj를 선언
// HelloFunc()의 객체를 좀 더 자유롭게 활용하기 위해 정의한 함수
// 첫 번째 인자로 받는 obj는 HelloFunc()의 객체가 되고, 
// 두 번째 인자는 사용자가 출력을 원하는 사람 이름이 된다. 


newObj.prototype.who = function(greeting, name) {
  console.log(`${ greeting } ${ name || "everyone" }`)
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();
