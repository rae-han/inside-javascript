/**
 * # 함수 객체: 함수도 객체다.
 *  * 자바스크립트에서는 함수도 객체다.
 *    + 함수의 기본 기능인 코드 실행뿐 아니라, 함수 자체가 일반 객체처럼 프로퍼티들을 가질 수 있다.
 */

function add1(x, y) {
  return x+y;
}

add1.result = add1(1, 2);
console.log(add1.result)

/**
 *    + add1 함수를 생성할 때 함수 코드는 하뭇 객체의 [[Code]] 내부 프로퍼티에 자동으로 저장된다. (ecmascript 명세서 참고)
 *    + 자바스크립트에서 함수는 코드를 수행하는 역할뿐 아니라 일반 객체처럼 자신의 프로퍼티를 가질 수 있는 특별한 객체라 볼 수 있다.
 * 
 *  * 자바스크립트에서 함수는 값으로 취급된다.
 *    + 함수도 일반 객체처럼 취급될 수 있기 때문에 다음과 같은 동작이 가능하다.
 *      - 리터럴에 의해 생성
 *      - 변수나 배열의 요소 
 *      - 함수의 인자로 전달 가능
 *      - 함수의 리턴값으로 리턴 가능
 *      - 동적으로 프로퍼티를 생성 및 할당 가능
 *    + 위와 같은 특징으로 자바스크립트에서는 함수를 일급 객체라고 부른다. 
 *      - 함수가 값으로 취급 된다는 것을 이해해야 한다.
 */

//    + 변수나 프로퍼티의 값으로 할당
let foo1 = 100;
let bar1 = () => 100;
console.log(foo1, bar1())

let obj1 = {}
obj1.baz = () => 200;
console.log(obj1.baz())

//    + 함수 인자로 전달
let foo2 = (func) => {
  func()
}

foo2(() => {
  console.log('Function can be used as the argument.')
})

//    + 리턴값으로 활용
let foo3 = () => {
  let returnFunc = () => {
    console.log('This function is the return value.')
  }

  return returnFunc;
}

foo3()();

/**
 *  * 함수는 객체이기 때문에 일반적인 객체의 기능을 사용할수 있으며 추가로 함수 객체만의 표준 프로퍼티가 정의되어 있다.
 */

function func1 (x, y) {
  return x+y;
}

console.dir(func1)
console.log(func1.length, func1.prototype)

/**
 *    + ECMA5 명세서에는 모든 함수가 length와 prototype 프로퍼티를 가져야 한다고 기술하고 있다. 
 */

console.log(func1.name); // 함수의 이름, 익명함수는 빈 문자열
console.log(func1.caller); // 자신을 호출gks 함수, 호출하지 않아서 null 값이 나왔다.
console.log(func1.arguments); // 함수를 호출할 때 전달된 인자값, 호출하지 않아서 null 값이 들어가있다.
console.log(func1.__proto__)
/**
 *    + 자바스크립트 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 내부 프로퍼티를 가진다고 한다.
 *    + 크롬브라우저에서 [[Prototype]] 이라는 내부 프로퍼티가 __proto__ 프로퍼티로 구현되어 있다.
 *    + function.__proto__ 는 Function.prototype 객체를 가리키고 이것 역시 함수 객체이다.
 *    + func1의 부모는 Function.prototype 객체이고 모든 함수들의 부모 역할을 한다.
 *    + Function.prottotype의 부모는 Object.prototype이다.
 *    
 */
console.log(func1.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

/**
 *    + length 프로퍼티는 모든 함수가 가져야 하는 표준 프로퍼티이고 함수가 정상적으로 실행될 때 기대되는 인자의 개수를 나타낸다.
 */

function func2 () {

}
function func3 (x) {
  return x;
}
function func4 (x, y) {
  return x+y;
}
function func5 (x, y, z) {
  return x+y+z;
}

console.log(func2.length, func3.length, func4.length, func5.length);

/**
 *    + prototype 프로퍼티
 *      - 모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다.
 *      - prototype 프로퍼티와 모든 객체의 부모를 나타내는 내부 프로퍼티 __proto__ 는 다르다.
 *      - __proto__([[prototype]])은 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키고 prototype 프로퍼티는 이 함수가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
 *      - prototype 프로퍼티는 함수가 생성될 때 만들어지며 단지 construnctor 프로퍼티 하나만 있는 객체를 가리킨다.
 */

 console.log(func1 === func1.prototype.constructor)