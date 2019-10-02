/**
 * # 자바스크립트의 기본 타입
 * 
 *  * 자바스크립트에서 기본 타입은 숫자, 문자열, 불린값을 비롯해 null과 undefined라는 타입이 있다.
 *  * 이들 타입의 특징은 그 자체가 하나의 값을 나타낸다는 것이다.
 * 
 *  * 자바스크립트는 느슨한 타입 체크 언어다.
 *  * 자바스크립트는 변수를 선언할 때 타입을 미리 정하지 않고 var, let, const를 이용하여 선언한다.   
 * */

let emptyValue;
let nullValue = null;

console.log(`typeof empty : ${typeof emptyValue}`);
console.log(`typeof null : ${typeof nullValue}`)

/**
 *  * 숫자
 *    + 자바스크립트는 하나의 숫자형(number type)만 존재한다.
 *    + 자바스크립트에서는 모든 숫자를 64비트 부동 소수점 형태로 저장한다. (c언어의 double 타입과 유사하다.)
 *  * 문자열
 *    + 자바스크립트에서는 c언어의 char 타입과 같은 문자 하나만을 별도로 나타내는 데이터 타입은 존재하지 않는다.
 *    + 한번 정의된 문자열은 변하지 않는다
 *    + 한 번 생성된 문자열은 읽기만 가능하고 수정은 불가능하다.
 * */

 let str = 'test';
 console.log(str, str[0])
 str[0] = 'T';
 console.log(str, str[0])

/**
 *  * null, undefined
 *    + 두 타입 모두 자바스크립트에서 값이 비어있음 을 나타낸다.
 *    + 자바스크립트 환경 내에서 기본적으로 값이 할당되지 않는 변수는 undefined 타입이며 undefined 타입의 변수는 변수 자체의 값 또한 undefined이다.
 *    + undefined는 타입이자, 값을 나타낸다.
 *    + null 타입 변수의 경우 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용한다.
 *    + null 의 타입은 object이다. (null 타입의 변수인지 확인할때 typeof 연산자 대신 일치 연산자(====)를 사용해야 한다.) 
 * */

