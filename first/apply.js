function myFunction() {
  console.log(arguments);
  console.dir(arguments);
  arguments[4] = 5;
  arguments[8] = 9;
  console.log(arguments);
  console.log(arguments.length);
  arguments.length = 10;
  console.log(arguments);

  console.log(`Array.prototype : ${Array.prototype}`);
  console.log(`Array.prototype.slice :`);
  console.log(Array.prototype.slice(arguments));  
  var args = Array.prototype.slice.apply(arguments);
  console.dir(args);
}

var arr = [1, 2, 3, 4];
// myFunction(arr);
  console.log(`Array.prototype : ${Array.prototype}`);
myFunction(1, 2, 3, 4);