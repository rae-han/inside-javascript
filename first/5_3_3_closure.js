// ## 함수의 캡슐화

var buffAr = [
  'I am ', 
  '', 
  '. I live in ',
  '',
  '. I\'am ',
  '',
  ' years old.'
];

function getCompletedStr(name, city, age) {
  buffAr[1] = name;
  buffAr[3] = city;
  buffAr[5] = age;

  return buffAr.join('');
}

var str = getCompletedStr('raehan', 'seoul', 28);
console.log(str);

var getCompletedStr = (function() {
  // 변수 getCompletedStr에 익명의 함수를 즉시 실행시켜 반환되ㅏ는 함수를 할당했다.
  // 이 반환되는 함수가 클로저가 되고, 이 클로저는 자유 변수 buffAr을 스코프 체인에서 참조할 수 있다.
  var buffAr = [
      'I am ',
      '',
      '. I live in ',
      '',
      '. I\'am ',
      '',
      ' years old.',
  ];

  return (function(name, city, age) {
      buffAr[1] = name;
      buffAr[3] = city;
      buffAr[5] = age;

      return buffAr.join('');
  });
})();
// 경성 양꼬치 명봉양꼬치
var str = getCompletedStr('raehan', 'seoul', 30);
console.log(str);

