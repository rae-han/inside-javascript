// 래퍼(wrapper)란 쉽게 말하면 특정 함수를 자신의 함수로 덮어쓰는 것을 말한다.
// 물론 여기서 사용자는 원래 함수 기능을 잃어버리지 않은 상태로 자신의 로직을 수행할 수 있어야 한다.
// 객체지향 프로그래밍에서 다형성의 특성을 살리려면 오버라이드를 지원하는데, 이와 상당히 유사하다고 보면 된다.

function wrap(object, method, wrapper){
	var fn = object[method];
	return object[method] = function(){
		//return wrapper.apply(this, [ fn.bind(this) ].concat(
		return wrapper.apply(this, [ fn ].concat(
		Array.prototype.slice.call(arguments)));
	};
}

Function.prototype.original = function(value) {
	this.value = value;
	console.log("value : " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function(orig_func, value) {
	this.value= 20;
	orig_func(value);
	console.log("wrapper value : " + this.value);
});

var obj = new mywrap("raehan");