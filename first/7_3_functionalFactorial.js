function fact1(num) {
  var val = 1;
  for (var i = 2; i <= num; i++) {
    val = val * i;
  }
  return val;
}

console.log(fact1(10));

function fact2(num) {
  if(num == 0) {
    return 1;
  } else {
    return num * fact1(num-1);
  }
}

console.log(fact2(10));

// 위 두 예제 모두 이상 없이 구현.
// 이런 종류의 함수 구현은 항상 성능을 고려하게 된다.
// 팩토리얼은 처음 작은수를 실행한 후 큰 수를 실행한다면 큰수를 실행할때는 작은 수를 중복하여 계산한다.
// 중복되는 값(앞서 연산한 결과)을 캐시에 저장하여 사용할 수 있는 함수를 작성한다면 성능 향상에 도움이 된다.

var fact = function() {
  var cache = { '0' : 1 };
  var func = function(n) {
    var result = 0;

    if (typeof(cache[n]) === 'number') {
      result = cache[n];
      console.log(`${n} memoization`);
    } else {
      result = cache[n] = n*func(n-1);
      console.log(`${n} not memoization`);
      console.log(cache[n]);
    }

    return result;
  }

  return func;
}();

console.log(fact(9));
console.log(fact(10));
console.log(fact(9));
console.log(fact(8));
// fact 는 cache에 접근할 수 있는 클로저를 반환받는다.
// 클로저로 숨겨지는 cache에는 팩토리얼을 연산한 값을 저장하고 있다.
// 연산을 수행하는 과정에서 캐시에 저장된 값이 있으면 곧바로 그 값을 반환하는 방식이다.
// 이렇게 하면 한 번 연산된 값을 캐시에 저장하고 있으므로, 중복된 연산을 피해 보다 나은 성능의 함수를 구현할 수 있다.


