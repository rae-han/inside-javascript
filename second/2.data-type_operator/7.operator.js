/**
 *  # 연산자
 *    * 자바스크립트 연산자의 대부분은 다른 언어와 유사하나 주의해야 할 연산자들이 있다.
 *    * + 연산자
 *      + 더하기 연산과 문자열 연결 연산을 수행한다.
 *    * typeof 연산자
 *      + 피연산자의 타입을 문자열 현태로 리턴한다.
 *      + null, 배열은 object 라는 점과 함수는 function 이라는 점에 유의해야 한다.
 */

console.log(typeof 10); // number
console.log(typeof 'String'); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof { 'this': 'is obejct' }); // obejct
console.log(typeof ['this', 'is', 'obejct']); // object
console.log(typeof function(){}); // function

/**
 *    * 동등 연산자(==)와 일치 연산자(===)
 *      + == 연산자는 비교하려는 피연산자의 타입이 다를 경우 타입 변환을 거친 다음 비교한다.
 *      + === 연산자는 타입을 변경하지 않고 비교한다.
 */

console.log(1 == '1')
console.log(1 === '1')

/**
 *    * !! 연산자
 *      + 피연산자를 불린 값으로 변경
 *      + 객체는 비어도 true 로 변환되는 것에 주의해야한다.
 */