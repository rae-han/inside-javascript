var value1 = "value1";

function printFunc1() {
  var value1 = "value2";

  function printValue1() {
    return value1;
  }

  console.log(printValue1());
}

printFunc1(); // vlaue2

var value2 = "value1";

function printValue2() {
  return value2;
}

function printFunc2(func) {
  var value2 = "value2";
  console.log(func());
}

printFunc2(printValue2); // value1