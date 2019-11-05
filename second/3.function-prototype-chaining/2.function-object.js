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
