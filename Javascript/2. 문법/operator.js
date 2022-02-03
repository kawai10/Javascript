//연산자

//단항 연산자

let x = 1;
x = -x;
console.log(x) // -1

//이항 연산자

let x = 1, y = 3;
console.log(y - x); // 2

// 나머지 연산자 a % b -> a를 b로 나눈 후 그 나머지를 정수로 반환

console.log(5 % 2); // 나머지 1 출력
console.log(6 % 4); // 나머지 2 출력

// 거듭제곱 연산자 a ** b -> a를 b번 곱한 값 반환

console.log(2 ** 2); // 4 (2 * 2)
console.log(2 ** 3); // 8 (2 * 2 * 2)

// 문자열 연결 '+'
console.log("I'm" + "Ironman") // I'mIronman

// 하나라도 문자열이면 다른 하나도 문자열로 변환됨
console.log("1" + 2); // "12"
console.log(2 + 2 + "1"); // "41" - 연산은 왼쪽에서 오른쪽으로 순차적으로 진행

// + 외 연산자는 오직 숫자형의 피연산자만 다루고 숫자형이 아니면 숫자형으로 변환됨
console.log(6 - "2"); // 4
console.log("6" / "2"); // 3

//숫자형으로 변환
console.log(+true); // 1
console.log(+"") //0

//활용
let apple = "2";
let water = "5";
console.log(+apple + +water); // 7

// 연산자 우선순위 - 하나의 표현식에 둘 이상의 연산자가 있는경우의 우선순위(검색하는게 가장 빠름 외우기 쉽지 않음)

//연산자 체이닝 - 가독성 떨어짐

let a, b, c
a = b = c = 4 + 4; // a = 8, b = 8, c = 8;

// 복합 할당 연산자 - +=, -=, *=, /=
let a = 2
a += 3 // 5 -> a = a+3

// 증가, 감소 연산자 - ++, -- 변수에만 사용 가능
let b = 2
b++; // b = b + 1

// 전위형(++a)과 후위형(a++)

// 전위형 : 증가/감소 후의 값을 반환
// 후위형 : 증가/감소 전의 값을 반환

//전위형
let a = 1;
let b = ++a;
console.log(b) // 2

//후위형

let count = 2;
let a = count++;
console.log(a) // 2

