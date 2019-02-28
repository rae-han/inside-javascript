// # setTimeout()에 지정되는 함수의 사용자 정의
// 5_3_3 과 유사
// setTimeout 함수는 웹 브라우저에서 지원하는 함수로, 
// 첫 번째 인자로 넘겨지는 함수의 실행의 스케쥴링을 할 수 있고,
// 두 번째 인자인 밀리 초 단위 숫자만큼의 시간 간격으로 해당 함수를 호출한다.
// setTimeout() 으로 자신의 코드를 호출하고 싶다면 첫번째 인자로 해당 함수 객체의 참조를 넘겨주면 되지만,
// 이것으로는 실제 실행될 때 함수에 인자를 줄 수 없다.
// 클로저로 해결 가능!

function callLater(obj, a, b) {
  return (function() {
    obj["sum"] = a + b;
    console.log(obj["sum"])
  });
}

var sumObj = {
  sum: 0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
// setTimeout(function(sumObj, 1, 2){})

// var sum = 0;

// function sumLater(a, b) {
//   return (function() {
//     console.log('a+b');
//     console.log(a+b);
//     sum = a + b;
//     console.log('sum');
//     console.log(sum);
//     return a+b;
//   })
// }

// setTimeout(sumLater(1, 2), 1000);
// setTimeout(function() {
//   console.log(sum);
// },2000);