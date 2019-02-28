// # 클로저의 프로퍼티 값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의
function outerFunc(argNum) {
  var num = argNum;
  return function(x) {
    num += x;
    console.log(`num: ${num}`);
  }
}

var exam1 = outerFunc(40);
console.log(exam1(5));
console.log(exam1(-10));

// # 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우
function func() {
  var x = 1;
  return {
    func1: function() { console.log(++x); },
    func2: function() { console.log(-x); }
  };
};

var exam2 = func();
exam2.func1();
exam2.func2();

// # 루프 안에서 클로저를 활용할 때는 주의
/*
function countSeconds(howMany) {
  for (var i=1; i<=howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i*1000)
  }
}
countSeconds(3);
//*/
// setTimeout 함수의 인자로 들어가는 함수는 자유 변수 i를 참조한다.
// 이 함수가 실행되는 시점은  countSeconds 함수의 실행이 종료된 이후이고 i값은 이미 4가 된 상태이다.

// 이것을 수정하기 위해서 루프 i값 복사본을 함수에 넘겨준다.
// 즉시 실행 함수를 사용한다.
//*
function countSeconds(howMany) {
  for(var i=1; i<=howMany; i++) {
    (function (currentI) {
      setTimeout(function() {
        console.log(currentI)
      }, currentI * 1000)
    })(i);
  }
}
countSeconds(3);
// */
// 즉시 실행 함수를 실행시켜 루프 i 값을currentI에 복사해서 setTimeout() 에 들어갈 함수에서 사용하면, 원하는 결과를 얻을 수 있다.

/*
function countSeconds(howMany) {
  let i=1;
  for(; i<=howMany; i++) {
    setTimeout(function() {
      console.log(i);
    }, i*1000);
  }
}
countSeconds(3);
// */
/*
function countSeconds(howMany) {
  for(let i=1; i<=howMany; i++) {
    setTimeout(function() {
      console.log(i);
    }, i*1000);
  }
}
countSeconds(3);
// */