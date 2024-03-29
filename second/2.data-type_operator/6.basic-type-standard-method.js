/**
 *  # 기본 타입과 표준 메서드
 *    * 자바스크립트는 숫자, 문자열, 불린값에 대해 각 타입별로 호출 가능한 표준 메서드를 정의하고 있다.
 *    * 기본 타입이 객체가 아닌데 메서드를 호출할수 있는 이유는 기본값은 메서드 처리 순간 객체로 변환된 다음 각 타입별 표준 메서드를 호출하고 다시 기본값으로 복귀한다. 
 */

let num1 = 0.5;
console.log(num1.toExponential(1));

console.log("test".charAt(2))