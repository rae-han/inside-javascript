/**
 * * 참조 타입은 객체의 모든 연산이 실제 값이 아닌 참조값으로 처리된다.
 */
let obj1 = {
  number: 10
}

let obj2 = obj1;

console.log(obj1.number, obj2.number)

obj2.number = 20;

console.log(obj1.number, obj2.number)

/**
 *  * 객체 비교
 *    + 동등 연산자(===)를 사용하여 두 객체를 비교할 때 객체의 프로퍼티 값이 아닌 참조 값을 비교한다는 것에 주의해야 한다.
 */

let number1 = 10;
let number2 = 10;

console.log(number1 === number2)

let obj3 = { number: 10 }
let obj4 = { number: 10 }
let obj5 = obj4

console.log(obj3 === obj4)
console.log(obj3.number === obj4.number)
console.log(obj4 === obj5)

/**
 *  * 참조에 의한 함수 호출 방식
 *    + 기본 타입과 참조 타입의 경우 함수 호출 방식도 다르다.
 *    + 기본 타입의 경우는 값에 의한 호출(call by value)로 동작한다.
 *      - 호출된 함수의 매개변수로 복사된 값이 전달
 *    + 참조 타입의 경우 함수를 호출할 때 참조에 의한 호출(call by reference)로 동작한다.
 *      - 함수를 호출할 때 인자로 참조 타입인 객체를 전달하면 객체의 프로퍼티 값이 함수의 매개변수가 되는게 아니라 참조 값이 그대로 함수 내부로 전달된다.
 *      - 함수 내부에서 참조값을 이용하여 인자로 넘긴 실제 객체의 값을 변경 가능하다.
 */

let num1 = 100;
let obj6 = { number: 100 }

let changeArgs = (num, obj) => {
  num = 200;
  obj.number = 200
}

console.log(1, num1, obj6.number)
changeArgs(num1, obj6);
console.log(2, num1, obj6.number)