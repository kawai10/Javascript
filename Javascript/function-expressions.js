//함수 표현식
// 자바스크립트에서 함수는 특별한 종류의 값으로 취급합니다.
// 함수를 변수에 할당할 수 있음.
// 자바스크립트는 괄호가 있어야 함수가 실행됨

let sayHi = function () {
    console.log("hello");
}

console.log(sayHi);


// 함수를 복사해서 다른 변수에 할당 가능
function sayHello() {
    console.log("sayHello");
}

let func = sayHello;

func(); // sayHello
sayHello(); // sayHello

//콜백 함수 (showOk, showCancel)
// 함수를 함수의 인수로 전달하고 필요하면 인수로 전달한 그 함수를 나중에 호출하는것이 콜백 함수

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    console.log("동의");
}

function showCancel() {
    console.log("비동의");
}

ask("동의하십니까", showOk, showCancel)


// 함수 표현식과 함수 선언문의 차이 (자바스크립트 엔진이 언제 함수를 생성하는가의 차이)

// 함수 선언문: 주요 코드 흐름 중간에 독자적인 구문 형태로 존재

function sum(a, b) {
    return a+b
}

// 함수 표현식 : 표현식이나 구문 구성 내부에 생성

let sum = function (a, b) {
    return a + b
}

// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성
// 따라서 실행 흐름이 해당 함수에 도달했을 때부터 해당 함수를 사용할수 있음

// 함수 선언문은 함수 선언문이 정의되기 전에도 호출 가능 (호이스팅)

sayBye("John") // Bye, John

function sayBye(name) {
    console.log(`Bye, ${name}`);
}


sayHi("John"); // error

let sayHi = function (name) {
    console.log(`Bye, ${name}`);
}

// 또 다른 차이
// 코드 블록 내에서의 함수 선언문은 코드 블록 밖에서 호출 할 수 없음
// 그러나 코드 블록 내에서의 함수 표현식은 코드 불록 밖에서 호출이 가능