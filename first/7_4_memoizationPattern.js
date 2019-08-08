// memoize - 계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이 사용할 수 있게 한다는 컴퓨팅 용어
// 자바스크립트에선 계산된 결과를 함수 프로퍼티 값으로 담아 놓고 나중에 사용한다.

function Calculate(key, input, func) {
  Calculate.data = Calculate.data || {};

  if(!Calculate.data[key]) {
    var result;
    result = func(input);
    Calculate.data[key] = result; // 이거 없을때 에러가..
  }

  return Calculate.data[key];
}

var result = Calculate(1, 5, function(input) {
  return input*input;
});

console.log(result);

result = Calculate(2, 5, function(input) {
  return input*input / 4;
});

console.log(result)

console.log(Calculate(1));
console.log(Calculate(2));

// 예제에서는 Calculate 함수에 자신의 함수를 인자로 넘겨 실행되게 간단히 작성되었는데
// 보다 범용적으로 사용할수 있는 방법이 있다.
// Function.prototype 에 memoization 함수를 집어 넣는다.

console.log(`######## ######## ######## ########`);

Function.prototype.memoization = function(key) {
  var arg = Array.prototype.slice.call( arguments, 1);
  this.data = this.data || {};

  return this.data[key] !== undefined ?
    this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate1(input) {
  return input*input;
}

function myCalculate2(input) {
  return (input*input)/4;
}

myCalculate1.memoization(1, 5);
myCalculate1.memoization(2, 4);
myCalculate2.memoization(1, 6);
myCalculate2.memoization(2, 7);

console.log(myCalculate1.memoization(1));
console.log(myCalculate1.memoization(2));
console.log(myCalculate2.memoization(1));
console.log(myCalculate2.memoization(2));

// 이 처럼 Function.prototype 에 메서드를 정의해 놓으면 특정 값을 리턴하는 모든 함수에서 유용하게 사용할 수 있다.
// 주의할 점이 한 번 값이 들어간 경우 계속 유지되므로 이를 초기화하는 방법 역시 제공돼야 한다.

// 여기서 사용된 방법 역시 유용한 패턴에서 소개된 메모이제이션 기법이다.
// 유용한 패턴에서는 함수 객체의 한 프로퍼티를 캐시로 사용했다.
// 여기서는 클로저로 감춰지는 객체를 캐시로 사용했다.





