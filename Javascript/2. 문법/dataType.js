// 자료형
// 자바스크립트에는 8개의 기본 자료형이 있다
// 자바스크립트는 동적 언어이므로 변수에 저장되는 값의 타입을 언제든 바꿀수 있다.

let message = "hello";
message = 1;

// 숫자형 (정수, 소숫점)
let number = 123;
number = 1.23;

//Infinity (무한대)

let infinity = 1 / 0;
infinity = Infinity;

//NaN (Not a Number) - 잘못된 입력으로 계산을 할수 없음
let nan = "숫자" / 2; // NaN


//BigInt (2의 53승 - 1) 보다 큰 값 또는 -(2의 53승 -1) 보다 작은 정수를 나타낼때 사용
const bigint = 923451231413451341413413234234123423423423423423423n;

//문자형 "", '', `` 자바에 있는 char이 따로 없음 ''와 ""에 구분을 두지 않음
let str = "hello";
let str2 = 'hi';
let str3 = `hihi ${str}`;
let str4 = `hihi ${1+2}`;

//boolean true = 긍정, false = 부정
let name = true;
let name2 = false;
let greater = 4 > 1; //true

// null 값 (존재하지 않는값, 비어있는 값, 알수없는 값)
let age = null;

//undefined 값 (값이 할당되지 않은 상태)
let age;
console.log(age); // 'undefined'
age = 100;
age = undefined;

// 객체(object) - 데이터 컬렉션이나 복잡한 캐체를 표현할 수 있음

// 심볼(symbol) - 객체의 고유한 식별자를 만들 때 사용

//typeof - 인수의 자료형을 반환
//1. typeof x = typeof(x)
typeof 0 // number
typeof 10n // bigint
typeof(true) //true
typeof "foo" //string
typeof Symbol("id") //symbol
typeof Math // object
typeof null // object
typeof alert // function