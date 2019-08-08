// 커링은 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고,
// 나머지를 인자로 받는 새로운 함수를 만드는 것

function calculate(a, b, c) {
  return a+b+c;
}

function curry(func) {
  console.log(arguments);
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);

  return function() {
    console.log(`args.concat(Array.prototype.slice.call(arguments)) : ${args.concat(Array.prototype.slice.call(arguments))}`);
    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  }
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2,3)); 
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3)); 

console.log(`calculate.apply(null, [1, 2, 3, 4]) ${calculate.apply(null, [0, 9, 9, 7])}`);

// 

function calculate2(a, b, c) {
	return a*b+c;
}

function curry2(func) {
	var args = Array.prototype.slice.call(arguments, 1);

	return function() {
		var arg_idx = 0;
		for (var i = 0; i < args.length && arg_idx < arguments.length; i++)
			if (args[i] === undefined) {
				args[i] = arguments[arg_idx++];
      }
		return func.apply(null, args);
	}
}

var new_func3 = curry2(calculate2, 1, undefined, 4);
console.log(new_func3(3)); // 1*3+4

  