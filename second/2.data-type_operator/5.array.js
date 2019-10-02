/**
 *  # 배열
 *    * 배열 리터럴
 *      + []를 통해서 새로운 배열을 만든다.
 *    * 배열 요소 생성 (동적 생성)
 */

let emptyArr = [];
console.log(emptyArr);

emptyArr[0] = 100;
emptyArr[2] = 'two';
emptyArr[8] = true;
console.log(emptyArr);
console.log(emptyArr.length);


/**
 *    * 자바스크립트에서 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.
 *    * 모든 배열은 length 프로퍼티가 있다.
 * 
 *    * 배열의 length 프로퍼티는 명시적으로 값을 변경할 수도 있다.
 */

 let arr1 = [0, 1, 2];
 console.log(arr1.length);
 console.log(arr1[3]); // undefined

 arr1.length = 5;
 console.log(arr1) // [0, 1, 2, empty*2]
 console.log(arr1[3]) // undefined - 실제 메모리가 할당되진 않음

 arr1.length = 2;
 console.log(arr1[2]) // undefined

/**
 *    * 배열 메서드는 length 프로퍼티르르 기반으로 동작하고 있다.
 *      + push() 같은 경우엔 length 값의 위치에 새로운 원소값을 추가한다.
 */

let arr2 = ['zero', 'one', 'two'];
let arr3 = ['zero', 'one', 'two'];

arr2.push('three')
arr3[arr3.length] = 'three'
console.log(arr2, arr3)

arr2.length = 10
arr2.push('four')
console.log(arr2, arr3)

/**
 *    * 배열과 객체
 *      + JS 에서 배열 역시 객체이지만 일반 객체와는 약간 차이가 있다.
 */

let numberArray = [0, 1, 2, 3];
for (let i in numberArray) {
  console.log(numberArray[i])
}

let numberObject = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3
}
for (let i in numberObject) {
  console.log(numberObject[i])
}

console.log(typeof numberArray, typeof numberObject); // object object
console.log(numberArray.length, numberObject.length); // 4 undefined

numberArray.push(4);
// numberObject.push(4); // numberObject.push is not a function

/**
 *    * numberObject.__proto__ == Object.prototype
 *    * numberArray.__proto__ == Array.prototype -> Array.prototype.__proto__ == Object.prototype * 
 */

console.log(numberObject.__proto__)
console.log(numberArray.__proto__)

console.log(numberObject.__proto__ == Object.prototype)
console.log(numberArray.__proto__ == Array.prototype)

console.log(numberArray.__proto__.__proto__ == Object.prototype)

/**
 *    * 배열도 자바스크립트 객체이므로, 인덱스가 숫자인 배열 원소 이외에도 객체처럼 동적으로 프로퍼티를 추가 가능하다.
 */

let arr4 = [0, 1, 2];
console.log(arr4.length)

arr4.name = "Nubmer Array";
arr4.nickname = "I don't know"
console.log(arr4.length)

arr4[3] = 3;
console.log(arr4.length)

arr4[4] = 100;
console.log(arr4.length) // 배열의 length 프로퍼티는 배열의 원소의 가장 큰 인덱스가 변했을 경우에만 변경

console.dir(arr4)

// 배열의 프로퍼티 열거
for (let prop in arr4) {
  console.log(prop, arr4[prop]);
}

for (let i=0; i<arr4.length; i++) {
  console.log(i, arr4[i])
}




 
