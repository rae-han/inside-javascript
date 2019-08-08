// 함수형 프로그래밍은 여러 가지 패러다임 중 하나.
// 함수의 조합으로 작업을 수행한다.
// 중요한 것은 작업이 이뤄 질 동안 작업에 필요한 데이터와 상태는 변하지 않는다.
// 변할수 있는 건 오직 함수 뿐.
// 이 함수가 연산의 대상이 된다.

// # pseudo code
// f1, f2, f3 = encrypt1,2,3;
// pure_value = 'raehan';
// encryted_value = get_encrtypted(x);
// pure_value 는 암호화할 문자열, encrypted_value는 암호화 된 문자열
// f123 은 암호화하는 함수
// get_encrypted 는 암호화 함수를 입력받고 그 함수로 pure_value를 암호화 한 후 반환.

// 즉 함수 인자로 함수를 받아서 내부적으로 받은 함수로 값을 암호화 시키는 함수를 만들어 결과를 낸다.

// pure_value 는 작업에 필요한 데이터고 작어빙 수행되는 동안 변하지 않는다. 
// get_encrypted 가 작업하는 동안 변할 수 있는 것은 오로지 입력으로 들어오는 함수 뿐.
// f123 은 외부(여기선 pure_value인 raehan이라는 변수)에 아무런 영향을 미치지 않는다.
// 이것을 순수 함수라고 한다.
// 외부에 영향을 미치지 않으므로 이미 작성된 순수 함수로 다른 작업에 활용해도 문제가 없다.

//get_encrypted 는 인자로 f123을 받아 여기선 결과 값이 encrypted_value 라는 값이지만
// 결과 값을 또 다른 형태의 함수로서 반활할 수도 있다.
// 이렇게 함수를 또 하나의 값으로 간주하여 함수의 인자 혹은 반환값으로 사용할 수 있는 함수를 고계함수 라고 한다.

/**
 * 함수형과 반대대는 개념을 명령형 프로그래밍(Imperative Programming)이라 한다.
 * C 등의 언어로 구현했다 방식이 대부분 명령형
 * 컴퓨터가 수행할 일의 명령을 순서대로 기술하는 프로그래밍 방식
 * 
 * 두 프로그래밍 패러다임의 차이를 함수라는 개념으로 생각하면
 * 명령형 프로그래밍 함수는 함수형 프로그래밍 언어 함수처럼 입력값을 받고 출력값을 계산하는
 * 순수한 의미의 함수도 있지만,
 * 특정 작업을 수행하는 여러가지 명령이 기술되어 있는 함수도 있다.
 * 이러한 종류의 함수를 프로시저라고 한다.
 * 프로시저는 함수형 프로그래밍의 순수 함수와는 목적 자체가 다르다.
 * 예를 들어 printf라는 함수를 생각해보면
 *  int ret = printf("print this to screen\n");
 * printf 함수 역시 입력값과 결과값(반환값)이 있다.
 * 하지만 중요한건 결과값이 아니라 함수가 실행되면서 입력밧을 화면에 출력하는 동작이 중요하다.
 * 결과값은 이 동작이 제대로 수행되었는지를 알려주는 보조적인 역할을 한다.
 * 실제로 printf 결과값을 받아서 처리하는 코드 자체가 없는 경우도 많다.
 * 명령형 프로그래밍 함수는 이처럼 특정 작업의 순차적인 명령을 기술하는 데 중점을 둔다.
 * 
 * 이러한 개념은 함수형 프로그래밍에서 말하는 순수 함수와는 거리가 멀다.
 * 
 * 함수형 프로그래밍 함수는 순수 함수로서 외부에 아무런 영향을 주지 않는 선에서 자신의 로직을 처리하여 결과를 반환하는 역할
 * 이 결과값을 얻는 것이 이 함수를 호출한 목적이고, 결과값으로 도 다른 작업을 처리하게 된다.
 */

 // 자바스크립트에서 함수형 프로그래밍이 가능한 이유는 다음을 지원하기 때문
 // - 일급 객체로서의 함수
 // - 클로저

 var f1 = function(input) {
   var result;
   // 암호화 작업 수행
   result = 1;
   return result;
 }
 var f2 = function(input) {
  var result;
  // 암호화 작업 수행
  result = 2;
  return result;
}
var f3 = function(input) {
  var result;
  // 암호화 작업 수행
  result = 3;
  return result;
}

var get_encrypted = function(func) {
  var str = 'raehan';

  return function() {
    return func.call(null, str)
  }
}

var str = 'raehan';
var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);
// 함수형 프로그래밍 pseudo 코드
// 이것이 가능한 이유가 함수가 일급 객체로 취급되기 때문.
// 함수의 인자로 함수를 넘기고 결과로 함수를 반환할 수도 있다.
// 변수 str 값은 영향을 받지 않게 클로저를 사용.
// get_encrypted 함수에서 반환하는 익명 함수가 클로저
// 이 클로저에서 접근하는 변수 str은 외부에서는 접근할 수 없다.

