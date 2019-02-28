// 클로저란?
// 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수

function outerFunc1() {
  var x = 10;
  var innerFunc1 = function() {
    console.log(x);
  }
  return innerFunc1;
}

var inner = outerFunc1();
inner(); // 10
// innerFunc의 [[scope]]는 outerFunc 변수 객체와 전역 객체를 가진다.
// innerFunc() 는 outerFunc() 의 실행이 끝난 후 실행된다.
// outerFunc 실행 컨텍스트가 사라진 이후에 innerFunc 실행 컨텍스트가 생성되는데,
// innerFunc() 의 스코프 체인은 outerFunc 변수 객체를 참조하고 있다.

// 자바스크립트의 함수는 일급 객체로 취급된다.
// -> 함수를 다른 함수의 인자로 넘길 수도 있고, return으로 함수를 통째로 반환받을 수도 있음을 의미한다.
// 그래서 위 코드가 가능하다.
// 최종 반환되는 함수가 외부 함수의 지역변수에 접근하고 있다는 것이 중요하다.
// 지역변수에 접근하려면, 함수가 종료되어 외부 함수의 컨텍스트가 반환되더라도 
// 변수 객체는 반환되는 내부 함수의 스코프 체인이 그대로 남아있어야만 접근할수 있다.
// 이렇게 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.
// 앞 코드에서는 outerFunc에 선언된 x를 참조하는 innerFunc가 클로저가 된다.
// 클로저로 참조되는 외부 변수, outerFunc의 x는 자유 변수라 한다.

function outerFunc2(arg1, arg2) {
  var local = 8;
  function innerFunc2(innerArg) {
    console.log((arg1+arg2)/(innerArg + local));
  }
  return innerFunc2;
}

var exam1 = outerFunc2(2, 4);
exam1(2);

/**
 * 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
 */

function HelloFunc(func) {
  this.greeting = 'hello';
};

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting)
  console.dir(this.func);
};
// 함수 HelloFunc 는 greeting 변수가 있고, 
// func 프로퍼티로 참조되는 함수를 call() 함수로 호출한다. 
// 사용자는 func 프로퍼티에 자신이 정의한 함수를 참조시켜 호출할 수 있다.
// 자신의 지역 변수인 greeting만을 인자로 사용자가 정의한 함수에 넘긴다.

// console.log(HelloFunc);

var userFunc = function(greeting) { // 사용자가 정의한 함수
  console.log(greeting);
};

// HelloFunc.prototype.func = function(greeting) {
//   console.log(greeting);
// };
var objHello = new HelloFunc();
objHello.func = userFunc;
// userFunc() 를 정의하여 objHello.func() 에 참조시킨 뒤, HelloFunc()의 지역 변수인 greeting을 화면에 출력시킨다.
objHello.call();
// objHello.call(function(str) {
//   console.log(`user Function ${str}`);
// });

// HelloFunc() 는 greeting만을 인자로 넣어 사용자가 인자로 넘긴 함수를 실행시킨다.
// 그래서 사용자가 정의한 함수도 한 개의 인자를 받는 함수로 정의할 수밖에 없다.
// 자용자가 원하는 인자를 더 넣어서 HelloFunc()를 이용하여 호출하려면?



