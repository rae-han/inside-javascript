/**
 * # 함수의 호출과 this
 *  * 함수의 기본적인 기능은 함수를 호출하여 코드를 실행하는 것
 * 
 *  * arguments 객체
 *    + 자바스크립트에서는 함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발행하지 않는다.
 */

let func1 = (arg1, arg2) => {
  console.log(arg1, arg2)
}

func1();
func1(1);
func1(1, 2);
func1(1, 2, 3);

/**
 *  * 함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined 값이 할당되며
 *  * 함수의 인자보다 많게 함수를 호출했을 경우, 에러가 발생하지 않고, 초과된 인수는 무시된다.
 *  * 
 */