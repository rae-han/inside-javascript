// Bind

Function.prototype.bind = function (thisArg) {
  var fn = this; // Function이 print_all 일 경우 print_all
  slice = Array.prototype.slice;
  args = slice.call(arguments, 1);
  return function () {
    return fn.apply(thisArg, args.concat(slice.call(arguments)));
  };
}
 
// bind 함수는 커링 기법을 활용한 함수
// 커링과 같이 사용자가 고정시키고자 하는 인자를 bind 함수를 호출할 때 인자로 넘겨주고
// 반환받은 함수를 호출하면서 남머지 가변 인자를 넣어줄 수 있다.
// 앞의 curry와 다른 점은 함수를 호출할 때 this에 바인딩 시킬 객체를 사용자가 넣어줄수 있다는 점.
// curry 함수가 자바스크립트 엔진에 내장되지 않은 것도 이 bind 함수로 충분히 커버가 가능하기 때문

var print_all = function(arg) {
  console.log(2);
	for (var i in this) console.log(i + " : " + this[i]);
	for (var i in arguments) console.log(i + " : " + arguments[i]);
}

var myobj = { name : "raehan", age: "28" };
    
// var myfunc = print_all.bind(myobj);
// myfunc(); // name : raehan

var myfunc1 = print_all.bind(myobj, "iamking", "others"); 
myfunc1("insidejs", "es");
 
// var myfunc2 = print_all.bind(myobj, "second", "couple");
// myfunc2();

// var myfunc3 = print_all.bind(myobj);
// myfunc3("triple", "triple");



