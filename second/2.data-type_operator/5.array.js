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

console.log(arr4.length)
for (let i=0; i<arr4.length; i++) {
  console.log(i, arr4[i])
  if (arr4[i] === undefined) {
    // console.log(i, 'not found')
  }
}

/**
 *    * 배열 요소 삭제
 *      + 배열도 객체이므로 배열 요소나 프로퍼티를 삭제하는 데 delete 연산자를 사용할수 있지만
 *      + delete 는 요소의 값을 undefined로 설정할 뿐 원소 자체를 삭제하지는 않는다.
 *      + 요소를 완전시 삭제할 경우 보통 splice() 배열 메소드를 이용한다.
 */

delete arr4[2];
console.log('delete', arr4)
arr4.splice(2, 1);
console.log('splice', arr4)

/**
 *    * Array() 생성자 함수
 *      + 배열 리터럴도 결국 자바스크립트 기본 제공 Array() 생성자 함수로 배열을 생성하는 과정을 단순화시킨 것
 *        - 인자가 1개이고 숫자일 경우 호출된 인자를 length로 갖는 빈 배열 생성
 *        - 그외엔 호출된 인자를 요소로 갖는 배열을 생성한다.
 * 
 *    * 유사 배열 객체
 *      + 배열의 length 프로퍼티는 배열의 동작에 있어서 중요한 프로퍼티이다.
 *      + 일반 객체가 length라는 프로퍼티를 가진 것을 유사 배열 객체 라고 부른다.
 *      + 유사 배열 객체는 객체임에도 표준 배열 메서드를 사용할수 있다.
 */

let arr5 = ['bar'];
let obj1 = {
  name: 'foo',
  length: 1
}

arr5.push('baz');
console.log(arr5)

// obj1.push('baz') // err

/**
 *    * 위 코드 arr5는 표준 배열 메서드를 활용해서 baz 원소를 추가했지만, 유사 배열 객체 obj는 에러가 발생했다.
 *    * apply 메서드를 사용하면 객체지만 표준 배열 메서드를 활용하는 것이 가능하다.
 */

 let obj2 = {
   name: 'foo',
   length: 1
 }

 Array.prototype.push.apply(obj2, ['baz']);
 console.log(obj2)
 
