function sum(arr) {
  var len = arr.length;
  var i = 0, sum = 0;

  for (; i<len; i++) {
    sum += arr[i];
  }

  return sum;
}

var arr = [1, 2, 3, 4];
console.log(sum(arr)); // 10

function multiply(arr) {
	var len = arr.length;
	var i = 0, result = 1;

	for (; i < len; i++) {
		result *= arr[i];
	}

	return result;
}

var arr = [1, 2, 3, 4];

console.log(multiply(arr)); // 24


// 위에 두 코드는 자바스크립트로 명령형 프로그래밍 방식으로 작성된 코드.
// 문제 하나하나를 각각의 함수를 구현
// 벼열의 각 원소를 또 다른 방식으로 산술하여 결과값을 얻으려면 새로운 함수를 다시 구현해야 한다.

function reduce(func, arr, memo) {
  var len = arr.length,
    i = 0,
    accum = memo;

  for (; i<len; i++) {
    accum = func(accum, arr[i]);
  }

  return accum;
}

var arr = [1, 2, 3, 4];
var funcSum = function(x, y) {
  return x+y;
}
var funcMultiply = function(x, y) {
  return x*y;
}

console.log(reduce(funcSum, arr, 0));
console.log(reduce(funcMultiply, arr, 1));
// reduce 함수는 함수와 배열을 인자로 넘겨 받고 루프를 돌면서 함수를 실행시킨다.
// 함수 실행 후 얻은 결과값은 변수 accum에 계속해서 저장한다.
// 이 작업을 배열의 원소 개수만큼 루프를 돌면서 수행한다.
// 루프가 끝나고 최종적으로 accum 값을 반환한다.
// 사용자는 reduce 함수의 인자로 들어가는 함수를 직접 정의할 수 있다.

// 예제에서 보는 바와 같이 함수형 프로그래밍을 이용하여 코드를 간결히 작정할 수 있다.
// 다른 문제가 나오더라도 사용자가 해당 연산을 하는 함수를 작성하여 reduce 함수로 결과를 얻을수 있다.
// 이처럼 함수형은 한단계 높은 모듈화를 이룰 수 있다.